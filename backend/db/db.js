const mongoose = require("mongoose")
const connectDb = (  url ) =>{
    try{
        mongoose.set('strictQuery', false);
        mongoose.connect(url)
        console.log("connected to database!")
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    connectDb
}