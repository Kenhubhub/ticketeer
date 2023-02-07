const mongoose = require("mongoose");
const eventSchema = mongoose.Schema({
   name: {
    type: String,
    require: true
   },
   ta: {
    type: Number,
    require : true
   },
   maxper: {
    type: Number,
    require: true
    },
   ts: Number,
   price: {
    type: Number,
    require : true
   },
   location: {
    type: String,
    require: true
   },
   genre: String,
   description:{
    type: String,
    require: true
   },
   date: String,
   userDetails: [{
        name: String,
        dop: String
   }],
   sellerDetails: {id: String}
    
},{
    timestamps: true
})

const eventModel = mongoose.model("event",eventSchema);
module.exports ={
    eventSchema,
    eventModel
}