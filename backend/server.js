const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config()
const port = process.env.PORT;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const {connectDb} = require("./db/db")
connectDb(process.env.MONGO_URI);
const UserDB = require ('./schemas/userSchema');

// login route
app.post("/login",(req,res)=>{
    res.json("success");
})

// register route
app.post("/register",async (req,res)=>{
    const {username,password,email} = req.body;

    let document = await UserDB.findOne({email});

    if(document){
        res.json({status: false,message:'Email already exists'});
    }

    const user = await UserDB.create({
        username,
        email,
        password
    });

    res.json({status:true, message:user});  
})
app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})
