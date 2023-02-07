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
app.use("/user",require("./routes/userRoute"))
app.use("/events",require("./routes/eventRoute"))

app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})
