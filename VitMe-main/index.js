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
        {day:"Monday",floor:"0",timing:"8am",emptyclasses:"G01"},
        {day:"Monday",floor:"1",timing:"8am",emptyclasses:"101"},
        {day:"Monday",floor:"1",timing:"8am",emptyclasses:"102"},
        {day:"Monday",floor:"2",timing:"8am",emptyclasses:"201"},
        {day:"Monday",floor:"2",timing:"8am",emptyclasses:"202"},
        {day:"Monday",floor:"3",timing:"8am",emptyclasses:"301"},
        {day:"Monday",floor:"3",timing:"8am",emptyclasses:"302"},
        {day:"Monday",floor:"4",timing:"8am",emptyclasses:"401"},
        {day:"Monday",floor:"5",timing:"8am",emptyclasses:"501"},
        {day:"Monday",floor:"6",timing:"8am",emptyclasses:""},
        {day:"Monday",floor:"0",timing:"9am",emptyclasses:""},
        {day:"Monday",floor:"1",timing:"9am",emptyclasses:""},
        {day:"Monday",floor:"2",timing:"9am",emptyclasses:""},
        {day:"Monday",floor:"3",timing:"9am",emptyclasses:"301"},
        {day:"Monday",floor:"4",timing:"9am",emptyclasses:""},
        {day:"Monday",floor:"5",timing:"9am",emptyclasses:""},
        {day:"Monday",floor:"6",timing:"9am",emptyclasses:""},
        {day:"Monday",floor:"0",timing:"10am",emptyclasses:""},
        {day:"Monday",floor:"1",timing:"10am",emptyclasses:"101"},
        {day:"Monday",floor:"1",timing:"10am",emptyclasses:"102"},
        {day:"Monday",floor:"2",timing:"10am",emptyclasses:""},
        {day:"Monday",floor:"2",timing:"10am",emptyclasses:""},
        {day:"Monday",floor:"3",timing:"10am",emptyclasses:""},
        {day:"Monday",floor:"3",timing:"10am",emptyclasses:""},
        {day:"Monday",floor:"4",timing:"10am",emptyclasses:""},
        {day:"Monday",floor:"5",timing:"10am",emptyclasses:""},
        {day:"Monday",floor:"6",timing:"10am",emptyclasses:""},
        {day:"Monday",floor:"0",timing:"11am",emptyclasses:""},
        {day:"Monday",floor:"1",timing:"11am",emptyclasses:""},
        {day:"Monday",floor:"2",timing:"11am",emptyclasses:""},
        {day:"Monday",floor:"3",timing:"11am",emptyclasses:"324"},
        {day:"Monday",floor:"4",timing:"11am",emptyclasses:"401"},
        {day:"Monday",floor:"4",timing:"11am",emptyclasses:"402"},
        {day:"Monday",floor:"5",timing:"11am",emptyclasses:"501"},
        {day:"Monday",floor:"6",timing:"11am",emptyclasses:"601"},
        {day:"Monday",floor:"0",timing:"12pm",emptyclasses:"G01"},
        {day:"Monday",floor:"0",timing:"12pm",emptyclasses:"G02"},
        {day:"Monday",floor:"1",timing:"12pm",emptyclasses:"101"},
        {day:"Monday",floor:"2",timing:"12pm",emptyclasses:"201"},
        {day:"Monday",floor:"3",timing:"12pm",emptyclasses:""},
        {day:"Monday",floor:"4",timing:"12pm",emptyclasses:""},
        {day:"Monday",floor:"5",timing:"12pm",emptyclasses:""},
        {day:"Monday",floor:"6",timing:"12pm",emptyclasses:""},
        {day:"Monday",floor:"0",timing:"2pm",emptyclasses:"G01"},
        {day:"Monday",floor:"1",timing:"2pm",emptyclasses:"101"},
        {day:"Monday",floor:"2",timing:"2pm",emptyclasses:"201"},
        {day:"Monday",floor:"2",timing:"2pm",emptyclasses:"201"},
        {day:"Monday",floor:"3",timing:"2pm",emptyclasses:"301"},
        {day:"Monday",floor:"4",timing:"2pm",emptyclasses:"401"},
        {day:"Monday",floor:"5",timing:"2pm",emptyclasses:"501"},
        {day:"Monday",floor:"6",timing:"2pm",emptyclasses:""},
        {day:"Monday",floor:"0",timing:"3pm",emptyclasses:""},
        {day:"Monday",floor:"1",timing:"3pm",emptyclasses:""},
        {day:"Monday",floor:"2",timing:"3pm",emptyclasses:""},
        {day:"Monday",floor:"3",timing:"3pm",emptyclasses:""},
        {day:"Monday",floor:"4",timing:"3pm",emptyclasses:""},
        {day:"Monday",floor:"5",timing:"3pm",emptyclasses:""},
        {day:"Monday",floor:"6",timing:"3pm",emptyclasses:""},
        {day:"Monday",floor:"0",timing:"4pm",emptyclasses:"G01"},
        {day:"Monday",floor:"1",timing:"4pm",emptyclasses:""},
        {day:"Monday",floor:"2",timing:"4pm",emptyclasses:""},
        {day:"Monday",floor:"3",timing:"4pm",emptyclasses:"301"},
        {day:"Monday",floor:"3",timing:"4pm",emptyclasses:"302"},
        {day:"Monday",floor:"4",timing:"4pm",emptyclasses:""},
        {day:"Monday",floor:"5",timing:"4pm",emptyclasses:"501"},
        {day:"Monday",floor:"6",timing:"4pm",emptyclasses:"601"},
        {day:"Monday",floor:"0",timing:"5pm",emptyclasses:""},
        {day:"Monday",floor:"1",timing:"5pm",emptyclasses:""},
        {day:"Monday",floor:"2",timing:"5pm",emptyclasses:"201"},
        {day:"Monday",floor:"3",timing:"5pm",emptyclasses:""},
        {day:"Monday",floor:"4",timing:"5pm",emptyclasses:""},
        {day:"Monday",floor:"5",timing:"5pm",emptyclasses:""},
        {day:"Monday",floor:"6",timing:"5pm",emptyclasses:""},
        {day:"Monday",floor:"0",timing:"6pm",emptyclasses:"G01"},
        {day:"Monday",floor:"1",timing:"6pm",emptyclasses:"101"},
        {day:"Monday",floor:"2",timing:"6pm",emptyclasses:"201"},
        {day:"Monday",floor:"3",timing:"6pm",emptyclasses:""},
        {day:"Monday",floor:"4",timing:"6pm",emptyclasses:"401"},
        {day:"Monday",floor:"4",timing:"6pm",emptyclasses:"402"},
        {day:"Monday",floor:"5",timing:"6pm",emptyclasses:"501"},
        {day:"Monday",floor:"6",timing:"6pm",emptyclasses:"601"},

        {day:"Tuesday",floor:"0",timing:"8am",emptyclasses:"G01"},
        {day:"Tuesday",floor:"1",timing:"8am",emptyclasses:"101"},
        {day:"Tuesday",floor:"2",timing:"8am",emptyclasses:"201"},
        {day:"Tuesday",floor:"3",timing:"8am",emptyclasses:"301"},
        {day:"Tuesday",floor:"4",timing:"8am",emptyclasses:"401"},
        {day:"Tuesday",floor:"5",timing:"8am",emptyclasses:""},
        {day:"Tuesday",floor:"6",timing:"8am",emptyclasses:"601"},
        {day:"Tuesday",floor:"0",timing:"9am",emptyclasses:""},
        {day:"Tuesday",floor:"1",timing:"9am",emptyclasses:""},
        {day:"Tuesday",floor:"2",timing:"9am",emptyclasses:""},
        {day:"Tuesday",floor:"3",timing:"9am",emptyclasses:"301"},
        {day:"Tuesday",floor:"4",timing:"9am",emptyclasses:""},
        {day:"Tuesday",floor:"5",timing:"9am",emptyclasses:""},
        {day:"Tuesday",floor:"6",timing:"9am",emptyclasses:""},
        {day:"Tuesday",floor:"0",timing:"10am",emptyclasses:""},
        {day:"Tuesday",floor:"1",timing:"10am",emptyclasses:"101"},
        {day:"Tuesday",floor:"1",timing:"10am",emptyclasses:"102"},
        {day:"Tuesday",floor:"2",timing:"10am",emptyclasses:""},
        {day:"Tuesday",floor:"2",timing:"10am",emptyclasses:""},
        {day:"Tuesday",floor:"3",timing:"10am",emptyclasses:""},
        {day:"Tuesday",floor:"3",timing:"10am",emptyclasses:""},
        {day:"Tuesday",floor:"4",timing:"10am",emptyclasses:""},
        {day:"Tuesday",floor:"5",timing:"10am",emptyclasses:""},
        {day:"Tuesday",floor:"6",timing:"10am",emptyclasses:""},
        {day:"Tuesday",floor:"0",timing:"11am",emptyclasses:""},
        {day:"Tuesday",floor:"1",timing:"11am",emptyclasses:""},
        {day:"Tuesday",floor:"2",timing:"11am",emptyclasses:""},
        {day:"Tuesday",floor:"3",timing:"11am",emptyclasses:"324"},
        {day:"Tuesday",floor:"4",timing:"11am",emptyclasses:"401"},
        {day:"Tuesday",floor:"4",timing:"11am",emptyclasses:"402"},
        {day:"Tuesday",floor:"5",timing:"11am",emptyclasses:"501"},
        {day:"Tuesday",floor:"6",timing:"11am",emptyclasses:""},
        {day:"Tuesday",floor:"0",timing:"12pm",emptyclasses:"G01"},
        {day:"Tuesday",floor:"1",timing:"12pm",emptyclasses:""},
        {day:"Tuesday",floor:"2",timing:"12pm",emptyclasses:""},
        {day:"Tuesday",floor:"3",timing:"12pm",emptyclasses:""},
        {day:"Tuesday",floor:"4",timing:"12pm",emptyclasses:""},
        {day:"Tuesday",floor:"5",timing:"12pm",emptyclasses:""},
        {day:"Tuesday",floor:"6",timing:"12pm",emptyclasses:""},
        {day:"Tuesday",floor:"0",timing:"2pm",emptyclasses:"G01"},
        {day:"Tuesday",floor:"1",timing:"2pm",emptyclasses:""},
        {day:"Tuesday",floor:"2",timing:"2pm",emptyclasses:""},
        {day:"Tuesday",floor:"3",timing:"2pm",emptyclasses:""},
        {day:"Tuesday",floor:"4",timing:"2pm",emptyclasses:"401"},
        {day:"Tuesday",floor:"5",timing:"2pm",emptyclasses:"501"},
        {day:"Tuesday",floor:"6",timing:"2pm",emptyclasses:"601"},
        {day:"Tuesday",floor:"0",timing:"3pm",emptyclasses:""},
        {day:"Tuesday",floor:"1",timing:"3pm",emptyclasses:""},
        {day:"Tuesday",floor:"2",timing:"3pm",emptyclasses:""},
        {day:"Tuesday",floor:"3",timing:"3pm",emptyclasses:""},
        {day:"Tuesday",floor:"4",timing:"3pm",emptyclasses:""},
        {day:"Tuesday",floor:"5",timing:"3pm",emptyclasses:""},
        {day:"Tuesday",floor:"6",timing:"3pm",emptyclasses:""},
        {day:"Tuesday",floor:"0",timing:"4pm",emptyclasses:"G01"},
        {day:"Tuesday",floor:"1",timing:"4pm",emptyclasses:"101"},
        {day:"Tuesday",floor:"2",timing:"4pm",emptyclasses:""},
        {day:"Tuesday",floor:"3",timing:"4pm",emptyclasses:"301"},
        {day:"Tuesday",floor:"4",timing:"4pm",emptyclasses:"401"},
        {day:"Tuesday",floor:"5",timing:"4pm",emptyclasses:"501"},
        {day:"Tuesday",floor:"6",timing:"4pm",emptyclasses:"601"},
        {day:"Tuesday",floor:"0",timing:"5pm",emptyclasses:""},
        {day:"Tuesday",floor:"1",timing:"5pm",emptyclasses:""},
        {day:"Tuesday",floor:"2",timing:"5pm",emptyclasses:"201"},
        {day:"Tuesday",floor:"3",timing:"5pm",emptyclasses:""},
        {day:"Tuesday",floor:"4",timing:"5pm",emptyclasses:""},
        {day:"Tuesday",floor:"5",timing:"5pm",emptyclasses:""},
        {day:"Tuesday",floor:"6",timing:"5pm",emptyclasses:""},
        {day:"Tuesday",floor:"0",timing:"6pm",emptyclasses:"G01"},
        {day:"Tuesday",floor:"1",timing:"6pm",emptyclasses:"101"},
        {day:"Tuesday",floor:"2",timing:"6pm",emptyclasses:""},
        {day:"Tuesday",floor:"3",timing:"6pm",emptyclasses:"301"},
        {day:"Tuesday",floor:"4",timing:"6pm",emptyclasses:"401"},
        {day:"Tuesday",floor:"5",timing:"6pm",emptyclasses:""},
        {day:"Tuesday",floor:"6",timing:"6pm",emptyclasses:"601"},

        {day:"Wednesday",floor:"0",timing:"8am",emptyclasses:"G01"},
        {day:"Wednesday",floor:"1",timing:"8am",emptyclasses:""},
        {day:"Wednesday",floor:"2",timing:"8am",emptyclasses:"201"},
        {day:"Wednesday",floor:"3",timing:"8am",emptyclasses:"301"},
        {day:"Wednesday",floor:"4",timing:"8am",emptyclasses:"401"},
        {day:"Wednesday",floor:"5",timing:"8am",emptyclasses:"501"},
        {day:"Wednesday",floor:"6",timing:"8am",emptyclasses:"601"},
        {day:"Wednesday",floor:"0",timing:"9am",emptyclasses:""},
        {day:"Wednesday",floor:"1",timing:"9am",emptyclasses:""},
        {day:"Wednesday",floor:"2",timing:"9am",emptyclasses:""},
        {day:"Wednesday",floor:"3",timing:"9am",emptyclasses:""},
        {day:"Wednesday",floor:"4",timing:"9am",emptyclasses:""},
        {day:"Wednesday",floor:"5",timing:"9am",emptyclasses:""},
        {day:"Wednesday",floor:"6",timing:"9am",emptyclasses:""},
        {day:"Wednesday",floor:"0",timing:"10am",emptyclasses:"G01"},
        {day:"Wednesday",floor:"1",timing:"10am",emptyclasses:""},
        {day:"Wednesday",floor:"2",timing:"10am",emptyclasses:"201"},
        {day:"Wednesday",floor:"3",timing:"10am",emptyclasses:""},
        {day:"Wednesday",floor:"4",timing:"10am",emptyclasses:""},
        {day:"Wednesday",floor:"5",timing:"10am",emptyclasses:""},
        {day:"Wednesday",floor:"6",timing:"10am",emptyclasses:""},
        {day:"Wednesday",floor:"0",timing:"11am",emptyclasses:""},
        {day:"Wednesday",floor:"1",timing:"11am",emptyclasses:""},
        {day:"Wednesday",floor:"2",timing:"11am",emptyclasses:""},
        {day:"Wednesday",floor:"3",timing:"11am",emptyclasses:"324"},
        {day:"Wednesday",floor:"4",timing:"11am",emptyclasses:"401"},
        {day:"Wednesday",floor:"5",timing:"11am",emptyclasses:"501"},
        {day:"Wednesday",floor:"6",timing:"11am",emptyclasses:"601"},
        {day:"Wednesday",floor:"0",timing:"12pm",emptyclasses:"G01"},
        {day:"Wednesday",floor:"1",timing:"12pm",emptyclasses:"101"},
        {day:"Wednesday",floor:"2",timing:"12pm",emptyclasses:"201"},
        {day:"Wednesday",floor:"3",timing:"12pm",emptyclasses:""},
        {day:"Wednesday",floor:"4",timing:"12pm",emptyclasses:""},
        {day:"Wednesday",floor:"5",timing:"12pm",emptyclasses:""},
        {day:"Wednesday",floor:"6",timing:"12pm",emptyclasses:""},
        {day:"Wednesday",floor:"0",timing:"2pm",emptyclasses:"G01"},
        {day:"Wednesday",floor:"1",timing:"2pm",emptyclasses:"101"},
        {day:"Wednesday",floor:"2",timing:"2pm",emptyclasses:"201"},
        {day:"Wednesday",floor:"3",timing:"2pm",emptyclasses:"301"},
        {day:"Wednesday",floor:"4",timing:"2pm",emptyclasses:"401"},
        {day:"Wednesday",floor:"5",timing:"2pm",emptyclasses:""},
        {day:"Wednesday",floor:"6",timing:"2pm",emptyclasses:"601"},
        {day:"Wednesday",floor:"0",timing:"3pm",emptyclasses:""},
        {day:"Wednesday",floor:"1",timing:"3pm",emptyclasses:""},
        {day:"Wednesday",floor:"2",timing:"3pm",emptyclasses:""},
        {day:"Wednesday",floor:"3",timing:"3pm",emptyclasses:""},
        {day:"Wednesday",floor:"4",timing:"3pm",emptyclasses:""},
        {day:"Wednesday",floor:"5",timing:"3pm",emptyclasses:""},
        {day:"Wednesday",floor:"6",timing:"3pm",emptyclasses:""},
        {day:"Wednesday",floor:"0",timing:"4pm",emptyclasses:""},
        {day:"Wednesday",floor:"1",timing:"4pm",emptyclasses:"101"},
        {day:"Wednesday",floor:"2",timing:"4pm",emptyclasses:""},
        {day:"Wednesday",floor:"3",timing:"4pm",emptyclasses:"301"},
        {day:"Wednesday",floor:"4",timing:"4pm",emptyclasses:"401"},
        {day:"Wednesday",floor:"5",timing:"4pm",emptyclasses:"501"},
        {day:"Wednesday",floor:"6",timing:"4pm",emptyclasses:"601"},
        {day:"Wednesday",floor:"0",timing:"5pm",emptyclasses:""},
        {day:"Wednesday",floor:"1",timing:"5pm",emptyclasses:""},
        {day:"Wednesday",floor:"2",timing:"5pm",emptyclasses:"201"},
        {day:"Wednesday",floor:"3",timing:"5pm",emptyclasses:""},
        {day:"Wednesday",floor:"4",timing:"5pm",emptyclasses:""},
        {day:"Wednesday",floor:"5",timing:"5pm",emptyclasses:""},
        {day:"Wednesday",floor:"6",timing:"5pm",emptyclasses:""},
        {day:"Wednesday",floor:"0",timing:"6pm",emptyclasses:"G01"},
        {day:"Wednesday",floor:"1",timing:"6pm",emptyclasses:"101"},
        {day:"Wednesday",floor:"2",timing:"6pm",emptyclasses:""},
        {day:"Wednesday",floor:"3",timing:"6pm",emptyclasses:"301"},
        {day:"Wednesday",floor:"4",timing:"6pm",emptyclasses:""},
        {day:"Wednesday",floor:"5",timing:"6pm",emptyclasses:""},
        {day:"Wednesday",floor:"6",timing:"6pm",emptyclasses:"601"},

        {day:"Thursday",floor:"0",timing:"8am",emptyclasses:"G01"},
        {day:"Thursday",floor:"1",timing:"8am",emptyclasses:""},
        {day:"Thursday",floor:"2",timing:"8am",emptyclasses:"201"},
        {day:"Thursday",floor:"3",timing:"8am",emptyclasses:"301"},
        {day:"Thursday",floor:"4",timing:"8am",emptyclasses:""},
        {day:"Thursday",floor:"5",timing:"8am",emptyclasses:"501"},
        {day:"Thursday",floor:"6",timing:"8am",emptyclasses:"601"},
        {day:"Thursday",floor:"0",timing:"9am",emptyclasses:""},
        {day:"Thursday",floor:"1",timing:"9am",emptyclasses:""},
        {day:"Thursday",floor:"2",timing:"9am",emptyclasses:""},
        {day:"Thursday",floor:"3",timing:"9am",emptyclasses:"301"},
        {day:"Thursday",floor:"4",timing:"9am",emptyclasses:""},
        {day:"Thursday",floor:"5",timing:"9am",emptyclasses:""},
        {day:"Thursday",floor:"6",timing:"9am",emptyclasses:""},
        {day:"Thursday",floor:"0",timing:"10am",emptyclasses:"G01"},
        {day:"Thursday",floor:"1",timing:"10am",emptyclasses:"101"},
        {day:"Thursday",floor:"2",timing:"10am",emptyclasses:"201"},
        {day:"Thursday",floor:"3",timing:"10am",emptyclasses:""},
        {day:"Thursday",floor:"4",timing:"10am",emptyclasses:""},
        {day:"Thursday",floor:"5",timing:"10am",emptyclasses:""},
        {day:"Thursday",floor:"6",timing:"10am",emptyclasses:""},
        {day:"Thursday",floor:"0",timing:"11am",emptyclasses:""},
        {day:"Thursday",floor:"1",timing:"11am",emptyclasses:""},
        {day:"Thursday",floor:"2",timing:"11am",emptyclasses:""},
        {day:"Thursday",floor:"3",timing:"11am",emptyclasses:"324"},
        {day:"Thursday",floor:"4",timing:"11am",emptyclasses:"401"},
        {day:"Thursday",floor:"5",timing:"11am",emptyclasses:"501"},
        {day:"Thursday",floor:"6",timing:"11am",emptyclasses:"601"},
        {day:"Thursday",floor:"0",timing:"12pm",emptyclasses:"G01"},
        {day:"Thursday",floor:"1",timing:"12pm",emptyclasses:"101"},
        {day:"Thursday",floor:"2",timing:"12pm",emptyclasses:"201"},
        {day:"Thursday",floor:"3",timing:"12pm",emptyclasses:""},
        {day:"Thursday",floor:"4",timing:"12pm",emptyclasses:""},
        {day:"Thursday",floor:"5",timing:"12pm",emptyclasses:""},
        {day:"Thursday",floor:"6",timing:"12pm",emptyclasses:""},
        {day:"Thursday",floor:"0",timing:"2pm",emptyclasses:"G01"},
        {day:"Thursday",floor:"1",timing:"2pm",emptyclasses:"101"},
        {day:"Thursday",floor:"2",timing:"2pm",emptyclasses:"201"},
        {day:"Thursday",floor:"3",timing:"2pm",emptyclasses:"301"},
        {day:"Thursday",floor:"4",timing:"2pm",emptyclasses:"401"},
        {day:"Thursday",floor:"5",timing:"2pm",emptyclasses:"501"},
        {day:"Thursday",floor:"6",timing:"2pm",emptyclasses:"601"},
        {day:"Thursday",floor:"0",timing:"3pm",emptyclasses:""},
        {day:"Thursday",floor:"1",timing:"3pm",emptyclasses:""},
        {day:"Thursday",floor:"2",timing:"3pm",emptyclasses:""},
        {day:"Thursday",floor:"3",timing:"3pm",emptyclasses:""},
        {day:"Thursday",floor:"4",timing:"3pm",emptyclasses:""},
        {day:"Thursday",floor:"5",timing:"3pm",emptyclasses:""},
        {day:"Thursday",floor:"6",timing:"3pm",emptyclasses:""},
        {day:"Thursday",floor:"0",timing:"4pm",emptyclasses:"G01"},
        {day:"Thursday",floor:"1",timing:"4pm",emptyclasses:""},
        {day:"Thursday",floor:"2",timing:"4pm",emptyclasses:""},
        {day:"Thursday",floor:"3",timing:"4pm",emptyclasses:""},
        {day:"Thursday",floor:"4",timing:"4pm",emptyclasses:"401"},
        {day:"Thursday",floor:"5",timing:"4pm",emptyclasses:"501"},
        {day:"Thursday",floor:"6",timing:"4pm",emptyclasses:"601"},
        {day:"Thursday",floor:"0",timing:"5pm",emptyclasses:""},
        {day:"Thursday",floor:"1",timing:"5pm",emptyclasses:""},
        {day:"Thursday",floor:"2",timing:"5pm",emptyclasses:"201"},
        {day:"Thursday",floor:"3",timing:"5pm",emptyclasses:""},
        {day:"Thursday",floor:"4",timing:"5pm",emptyclasses:""},
        {day:"Thursday",floor:"5",timing:"5pm",emptyclasses:""},
        {day:"Thursday",floor:"6",timing:"5pm",emptyclasses:""},
        {day:"Thursday",floor:"0",timing:"6pm",emptyclasses:"G01"},
        {day:"Thursday",floor:"1",timing:"6pm",emptyclasses:"101"},
        {day:"Thursday",floor:"2",timing:"6pm",emptyclasses:""},
        {day:"Thursday",floor:"3",timing:"6pm",emptyclasses:"301"},
        {day:"Thursday",floor:"4",timing:"6pm",emptyclasses:"401"},
        {day:"Thursday",floor:"5",timing:"6pm",emptyclasses:"501"},
        {day:"Thursday",floor:"6",timing:"6pm",emptyclasses:"601"},

        {day:"Friday",floor:"0",timing:"8am",emptyclasses:"G01"},
        {day:"Friday",floor:"1",timing:"8am",emptyclasses:"101"},
        {day:"Friday",floor:"2",timing:"8am",emptyclasses:"201"},
        {day:"Friday",floor:"3",timing:"8am",emptyclasses:""},
        {day:"Friday",floor:"4",timing:"8am",emptyclasses:"401"},
        {day:"Friday",floor:"5",timing:"8am",emptyclasses:"501"},
        {day:"Friday",floor:"6",timing:"8am",emptyclasses:"601"},
        {day:"Friday",floor:"0",timing:"9am",emptyclasses:""},
        {day:"Friday",floor:"1",timing:"9am",emptyclasses:""},
        {day:"Friday",floor:"2",timing:"9am",emptyclasses:""},
        {day:"Friday",floor:"3",timing:"9am",emptyclasses:""},
        {day:"Friday",floor:"4",timing:"9am",emptyclasses:""},
        {day:"Friday",floor:"5",timing:"9am",emptyclasses:""},
        {day:"Friday",floor:"6",timing:"9am",emptyclasses:""},
        {day:"Friday",floor:"0",timing:"10am",emptyclasses:"G01"},
        {day:"Friday",floor:"1",timing:"10am",emptyclasses:"101"},
        {day:"Friday",floor:"2",timing:"10am",emptyclasses:"201"},
        {day:"Friday",floor:"3",timing:"10am",emptyclasses:""},
        {day:"Friday",floor:"4",timing:"10am",emptyclasses:""},
        {day:"Friday",floor:"5",timing:"10am",emptyclasses:""},
        {day:"Friday",floor:"6",timing:"10am",emptyclasses:""},
        {day:"Friday",floor:"0",timing:"11am",emptyclasses:""},
        {day:"Friday",floor:"1",timing:"11am",emptyclasses:""},
        {day:"Friday",floor:"2",timing:"11am",emptyclasses:""},
        {day:"Friday",floor:"3",timing:"11am",emptyclasses:"324"},
        {day:"Friday",floor:"4",timing:"11am",emptyclasses:"401"},
        {day:"Friday",floor:"5",timing:"11am",emptyclasses:"501"},
        {day:"Friday",floor:"6",timing:"11am",emptyclasses:"601"},
        {day:"Friday",floor:"0",timing:"12pm",emptyclasses:"G01"},
        {day:"Friday",floor:"1",timing:"12pm",emptyclasses:"101"},
        {day:"Friday",floor:"2",timing:"12pm",emptyclasses:"201"},
        {day:"Friday",floor:"3",timing:"12pm",emptyclasses:""},
        {day:"Friday",floor:"4",timing:"12pm",emptyclasses:""},
        {day:"Friday",floor:"5",timing:"12pm",emptyclasses:""},
        {day:"Friday",floor:"6",timing:"12pm",emptyclasses:""},
        {day:"Friday",floor:"0",timing:"2pm",emptyclasses:"G01"},
        {day:"Friday",floor:"1",timing:"2pm",emptyclasses:"101"},
        {day:"Friday",floor:"2",timing:"2pm",emptyclasses:"201"},
        {day:"Friday",floor:"3",timing:"2pm",emptyclasses:"301"},
        {day:"Friday",floor:"4",timing:"2pm",emptyclasses:"401"},
        {day:"Friday",floor:"5",timing:"2pm",emptyclasses:"501"},
        {day:"Friday",floor:"6",timing:"2pm",emptyclasses:"601"},
        {day:"Friday",floor:"0",timing:"3pm",emptyclasses:""},
        {day:"Friday",floor:"1",timing:"3pm",emptyclasses:""},
        {day:"Friday",floor:"2",timing:"3pm",emptyclasses:""},
        {day:"Friday",floor:"3",timing:"3pm",emptyclasses:""},
        {day:"Friday",floor:"4",timing:"3pm",emptyclasses:""},
        {day:"Friday",floor:"5",timing:"3pm",emptyclasses:""},
        {day:"Friday",floor:"6",timing:"3pm",emptyclasses:""},
        {day:"Friday",floor:"0",timing:"4pm",emptyclasses:"G01"},
        {day:"Friday",floor:"1",timing:"4pm",emptyclasses:"101"},
        {day:"Friday",floor:"2",timing:"4pm",emptyclasses:""},
        {day:"Friday",floor:"3",timing:"4pm",emptyclasses:"301"},
        {day:"Friday",floor:"4",timing:"4pm",emptyclasses:"401"},
        {day:"Friday",floor:"5",timing:"4pm",emptyclasses:"501"},
        {day:"Friday",floor:"6",timing:"4pm",emptyclasses:"601"},
        {day:"Friday",floor:"0",timing:"5pm",emptyclasses:""},
        {day:"Friday",floor:"1",timing:"5pm",emptyclasses:""},
        {day:"Friday",floor:"2",timing:"5pm",emptyclasses:"201"},
        {day:"Friday",floor:"3",timing:"5pm",emptyclasses:""},
        {day:"Friday",floor:"4",timing:"5pm",emptyclasses:""},
        {day:"Friday",floor:"5",timing:"5pm",emptyclasses:""},
        {day:"Friday",floor:"6",timing:"5pm",emptyclasses:""},
        {day:"Friday",floor:"0",timing:"6pm",emptyclasses:"G01"},
        {day:"Friday",floor:"1",timing:"6pm",emptyclasses:"101"},
        {day:"Friday",floor:"2",timing:"6pm",emptyclasses:""},
        {day:"Friday",floor:"3",timing:"6pm",emptyclasses:"301"},
        {day:"Friday",floor:"4",timing:"6pm",emptyclasses:"401"},
        {day:"Friday",floor:"5",timing:"6pm",emptyclasses:"501"},
        {day:"Friday",floor:"6",timing:"6pm",emptyclasses:"601"},
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

