const router = require("express").Router();
const UserDB = require ('../schemas/userSchema');

router.post("/login", async (req,res)=>{
    const {username, email, password} = req.body;

    let document = await UserDB.findOne({email});

    if (!document) {
        res.json({status: false, message: 'Account does not exist'});
    }
    console.log(document)
    if (password == document.password && username == document.username) {
        res.json({status: true, message: document})
    }

});

// register route
router.post("/register",async (req,res)=>{
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
// Update add event to user
router.post("/eventtouser",async (req,res)=>{
    const {name,location,price,date,id} = req.body;
    const returnValue = await UserDB.findByIdAndUpdate(id,{$push: {events:{name,location,price,date}}})
    console.log(returnValue)
    res.json(returnValue)
})
// post to get user purchased events
router.post("/getPurchases" , async (req,res)=>{
    console.log(req.body)
    if(req.body.id === "undefined"){
        res.json([])
    }else{


        const user = await UserDB.findById(req.body.id);
        if(user){
            res.json(user.events)
        }
        
    }
})
module.exports = router