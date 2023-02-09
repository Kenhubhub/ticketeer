const router = require("express").Router();
const {eventModel} = require ('../schemas/eventSchema');
//Create 
router.post("/create", async (req,res)=>{
    const {name,ta,price,location,description,date,genre,sellerDetails,maxper} = req.body
    const event = await eventModel.create({
        name,
        ta,
        price,
        location,
        description,
        date,
        genre,
        sellerDetails,
        maxper
    })
    res.json({created: true, event})
})
//Read
router.get("/",async (req,res)=>{
    const events = await eventModel.find();
    res.json(events)
})
//update   --ta --add users to userDetails
// --ta
router.post("/ticketchange", async (req,res)=>{
    const {id,ta} = req.body;
    const returnValue = await eventModel.findByIdAndUpdate(id,{ta})
    console.log(returnValue)
    res.json(returnValue)
})
router.post("/usertoevent",async (req,res)=>{
    const {id,name,dop} = req.body;
    const returnValue = await eventModel.findByIdAndUpdate(id,{$push: {userDetails:{name,dop}}})
    console.log(returnValue)
    res.json(returnValue)
})
// delete

router.delete("/:id",async(req,res)=>{
    
    const deletedEvent = await eventModel.findByIdAndDelete({_id: req.params.id});
    res.json(deletedEvent)
})

module.exports = router