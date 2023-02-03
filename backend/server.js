const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config()
const port = process.env.PORT;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const {connectDb} = require("./db/db")
connectDb(process.env.MONGO_URI);
// login route
app.post("/login",(req,res)=>{
    res.json("success");
})

// register route
app.post("/register",(req,res)=>{
    const {username,password,email} = req.body;
    res.json({username,password,email})
})
app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})
