const express = require("express");
const { default: mongoose } = require("mongoose");
const cors =require("cors")
const app = express();
require("dotenv").config()
const port = process.env.PORT;
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const {connectDb} = require("./db/db")
connectDb(process.env.MONGO_URI);
const UserDB = require ('./schemas/userSchema');

// login route
app.post("/login", async (req,res)=>{
    const {username, email, password} = req.body;

    let document = await UserDB.findOne({email});

    if (!document) {
        res.json({status: false, message: 'Account does not exist'});
    }

    if (password == document.password && username == document.username) {
        res.json({status: true, message: 'Success'})
    }

});

// register route
app.post("/register",async (req,res)=>{
    const {username,password,email,isSeller} = req.body;

    let document = await UserDB.findOne({email});

    if(document){
        res.json({status: false,message:'Email already exists'});
    }

    const user = await UserDB.create({
        username,
        email,
        password,
        isSeller
    });

    res.json({status:true, message:user});  
})
app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})
