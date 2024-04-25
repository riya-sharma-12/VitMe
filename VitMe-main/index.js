const PORT= 3000;
const express= require('express');
var bodyParser = require('body-parser');
const path = require('path');
const cors=require('cors');
const app= express();
const jwt=require('jsonwebtoken');
const url = "mongodb://localhost:27017/";
var mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect(url);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

var nameSchema = new mongoose.Schema({
    username:String,
    password:String
});
var User = mongoose.model("Login", nameSchema);
//signup
app.get("/",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'page1.html'));
})
app.get("/page1.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'page1.html'));
})
app.get("/page2.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'page2.html'));
})
app.get("/login2.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'login2.html'));
})
app.get("/studenttimetable.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'studenttimetable.html'));
})
app.get("/employeeblockSelectionPage3.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'employeeblockSelectionPage3.html'));
})
app.get("/signup2.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'signup2.html'));
})
app.post('/login2.html', (req,res)=>{
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.sendFile(path.join(__dirname, 'login2.html'));
    })
    .catch(err => {
    res.status(400).send("Unable to save to database");
    });
});

//login
app.post('/studentblockSelectionPage3',async(req,res)=>{
    const {username,password}=req.body
    try{
        const users=await User.findOne({username:username});

        if(!users){
            return res.json({detail:'User does not exist!'})
        }
        if(password===users.password){
        const token=jwt.sign({username},'secret',{expiresIn:'1hr'})
            res.sendFile(path.join(__dirname, 'studentblockSelectionPage3.html'));
        } else{
            res.json({detail:"Login failed"})
        }
    }catch(err){
        console.error(err)
    }
})

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))






































/*import express from "express";
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
*/
