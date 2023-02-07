const mongoose = require("mongoose");
const {eventSchema} = require("./eventSchema")
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isSeller:{
        type:Boolean,
        require: true,
    },
    events: [{
        eventSchema
    }] 
    
},{
    timestamps: true
})

module.exports = mongoose.model("user",userSchema);