const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config()
const port = process.env.PORT;
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// login route
app.post("/login",(req,res)=>{
    res.json("success");
})

// register route
app.post("/register",(req,res)=>{
    res.json("success");

})
app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})
