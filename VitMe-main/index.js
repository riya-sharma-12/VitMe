import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import fs from "fs";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "hello",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Function to fetch timetable data from PostgreSQL
async function fetchTimetableData() {
    try {
        const result = await db.query("SELECT * FROM timetable");
        return result.rows;
    } catch (err) {
        console.error("Error fetching timetable data:", err);
        return [];
    }
}

// Route to serve the HTML page with timetable data injected
app.get("/", async (req, res) => {
    try {
        const timetableData = await fetchTimetableData();
        fs.readFile("index.html", "utf8", (err, data) => {
            if (err) {
                console.error("Error reading HTML file:", err);
                res.status(500).send("Internal Server Error");
            } else {
                const modifiedHtml = injectTimetableData(data, timetableData);
                res.send(modifiedHtml);
            }
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Function to inject timetable data into HTML
function injectTimetableData(html, timetableData) {
    let injectedHtml = html;

    timetableData.forEach(row => {
        const day = row.day;
        const timeSlot1 = JSON.parse(row.timeslot_1);
        const timeSlot2 = JSON.parse(row.timeslot_2);

        // Inject time slot 1 data
        injectedHtml = injectedHtml.replace(
            `"${day}"`,
            `"${day}": ${JSON.stringify(timeSlot1)}`
        );

        // Inject time slot 2 data
        injectedHtml = injectedHtml.replace(
            `"${day}"`,
            `"${day}": ${JSON.stringify(timeSlot2)}`
        );
    });

    return injectedHtml;
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
