const router = require("express").Router();
const UserDB = require ('../schemas/userSchema');

router.post("/login", async (req,res)=>{
    const {username, email, password} = req.body;

    let document = await UserDB.findOne({email});

    if (!document) {
        res.json({status: false, message: 'Account does not exist'});
    }

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
module.exports = router