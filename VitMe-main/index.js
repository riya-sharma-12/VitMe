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
var nameSchema1 = new mongoose.Schema({
    username:String,
    password:String
});
var User1 = mongoose.model("Teacherlogin", nameSchema1);
var timetableschema = new mongoose.Schema({
    day:String,
    timing:String,
    floor:String,
    emptyclasses:String
});
var User2 = mongoose.model("Timetabledata", timetableschema);
async function insertAllData(){
    await User2.create([
        {day:"Monday",floor:"0",timing:"10am",emptyclasses:"G01"},
        {day:"Monday",floor:"1",timing:"10am",emptyclasses:"G02"},
        {day:"Monday",floor:"2",timing:"10am",emptyclasses:""},
        {day:"Monday",floor:"3",timing:"10am",emptyclasses:"G04"},
        {day:"Monday",floor:"4",timing:"10am",emptyclasses:"G05"},
        {day:"Monday",floor:"5",timing:"10am",emptyclasses:""},
        {day:"Monday",floor:"6",timing:"10am",emptyclasses:"G02"},
        {day:"Monday",floor:"0",timing:"11am",emptyclasses:""},
        {day:"Monday",floor:"1",timing:"11am",emptyclasses:""},
        {day:"Monday",floor:"2",timing:"11am",emptyclasses:""},
        {day:"Monday",floor:"3",timing:"11am",emptyclasses:""},
        {day:"Monday",floor:"4",timing:"11am",emptyclasses:""},
        {day:"Monday",floor:"5",timing:"11am",emptyclasses:""},
        {day:"Monday",floor:"6",timing:"11am",emptyclasses:""},
        {day:"Monday",floor:"0",timing:"12pm",emptyclasses:"G06"},
        {day:"Monday",floor:"1",timing:"12pm",emptyclasses:"G01"},
        {day:"Monday",floor:"2",timing:"12pm",emptyclasses:""},
        {day:"Monday",floor:"3",timing:"12pm",emptyclasses:""},
        {day:"Monday",floor:"4",timing:"12pm",emptyclasses:"G05"},
        {day:"Monday",floor:"5",timing:"12pm",emptyclasses:""},
        {day:"Monday",floor:"6",timing:"12pm",emptyclasses:""},
        {day:"Monday",floor:"0",timing:"2pm",emptyclasses:""},
        {day:"Monday",floor:"1",timing:"2pm",emptyclasses:""},
        {day:"Monday",floor:"2",timing:"2pm",emptyclasses:""},
        {day:"Monday",floor:"3",timing:"2pm",emptyclasses:""},
        {day:"Monday",floor:"4",timing:"2pm",emptyclasses:""},
        {day:"Monday",floor:"5",timing:"2pm",emptyclasses:""},
        {day:"Monday",floor:"6",timing:"2pm",emptyclasses:""},
        {day:"Monday",floor:"0",timing:"3pm",emptyclasses:"G07"},
        {day:"Monday",floor:"1",timing:"3pm",emptyclasses:"G08"},
        {day:"Monday",floor:"2",timing:"3pm",emptyclasses:"G09"},
        {day:"Monday",floor:"3",timing:"3pm",emptyclasses:"G10"},
        {day:"Monday",floor:"4",timing:"3pm",emptyclasses:""},
        {day:"Monday",floor:"5",timing:"3pm",emptyclasses:""},
        {day:"Monday",floor:"6",timing:"3pm",emptyclasses:""},
        {day:"Monday",floor:"0",timing:"4pm",emptyclasses:"G11"},
        {day:"Monday",floor:"1",timing:"4pm",emptyclasses:""},
        {day:"Monday",floor:"2",timing:"4pm",emptyclasses:""},
        {day:"Monday",floor:"3",timing:"4pm",emptyclasses:""},
        {day:"Monday",floor:"4",timing:"4pm",emptyclasses:""},
        {day:"Monday",floor:"5",timing:"4pm",emptyclasses:""},
        {day:"Monday",floor:"6",timing:"4pm",emptyclasses:""},
        {day:"Monday",floor:"0",timing:"5pm",emptyclasses:"G12"},
        {day:"Monday",floor:"1",timing:"5pm",emptyclasses:""},
        {day:"Monday",floor:"2",timing:"5pm",emptyclasses:""},
        {day:"Monday",floor:"3",timing:"5pm",emptyclasses:""},
        {day:"Monday",floor:"4",timing:"5pm",emptyclasses:""},
        {day:"Monday",floor:"5",timing:"5pm",emptyclasses:""},
        {day:"Monday",floor:"6",timing:"5pm",emptyclasses:""},
    ]);
}
//insertAllData();
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
app.get("/login.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'login.html'));
})
app.get("/studenttimetable.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'studenttimetable.html'));
})
app.get("/employeetimetable.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'employeetimetable.html'));
})
app.get("/employeeblockSelectionPage3.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'employeeblockSelectionPage3.html'));
})
app.get("/studentblockSelectionPage3.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'studentblockSelectionPage3.html'));
})
app.get("/signup2.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'signup2.html'));
})
app.get("/signup.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'signup.html'));
})
app.get("/book.html",async(req,res)=>{
    res.sendFile(path.join(__dirname, 'book.html'));
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
app.post('/login.html', (req,res)=>{
    var myData = new User1(req.body);
    myData.save()
    .then(item => {
    res.sendFile(path.join(__dirname, 'login.html'));
    })
    .catch(err => {
    res.status(400).send("Unable to save to database");
    });
});

app.post('/studentblockSelectionPage3',async(req,res)=>{
    const {username,password}=req.body
    try{
        const users=await User.findOne({username:username});

        if(!users){
            res.sendFile(path.join(__dirname, 'login2.html'));
        }
        if(password===users.password){
        const token=jwt.sign({username},'secret',{expiresIn:'1hr'})
            res.sendFile(path.join(__dirname, 'studentblockSelectionPage3.html'));
        } else{
            res.sendFile(path.join(__dirname, 'login2.html'));
        }
    }catch(err){
        console.error(err)
    }
})
app.post('/employeeblockSelectionPage3',async(req,res)=>{
    const {username,password}=req.body
    try{
        const users=await User1.findOne({username:username});

        if(!users){
            res.sendFile(path.join(__dirname, 'login.html'));
        }
        if(password===users.password){
        const token=jwt.sign({username},'secret',{expiresIn:'1hr'})
            res.sendFile(path.join(__dirname, 'employeeblockSelectionPage3.html'));
        } else{
            res.sendFile(path.join(__dirname, 'login.html'));
        }
    }catch(err){
        console.error(err)
    }
})

app.post('/book',async(req,res)=>{
    const {day,classroom,floor,startTime}=req.body
    try{
        const users=await User2.findOne({day:day,timing:startTime,floor:floor,emptyclasses:classroom});

        if(!users){
            res.sendFile(path.join(__dirname, 'error.html'));
        }
        else{
        await User2.deleteOne({day:day,timing:startTime,floor:floor,emptyclasses:classroom});
        res.sendFile(path.join(__dirname, 'confirmation.html'));
        }
    }catch(err){
        console.error(err)
    }
})
app.post('/cancel',async(req,res)=>{

    const {day,classroom,floor,startTime}=req.body
    try{
        await User2.create({day:day,timing:startTime,floor:floor,emptyclasses:classroom});
        res.sendFile(path.join(__dirname, 'canceledbooking.html'));
    }catch(err){
        console.error(err)
    }
})
app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))

