const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/Users");

//register
const registerUser =async (req, res)=>{

    const {userName, email,password} =req.body;


    try{
        const hashPassword = await bcrypt.hash(password,12);
        const newUser = new User({
            userName,
            email,
            password:hashPassword,
        })

        await newUser.save();
        res.status(200).json({
            success: true,
            message:"Registration successful",
        })
    
    }catch(e){
        Cconsole.log(e);
        res.status(500).json({
            success:false,
            message:"Some error Occured",
        })
    }
};




//login

const loginUser =async (req, res)=>{

    const {userName, email,password} =req.body;


    try{
    
    }catch(e){
        Cconsole.log(e);
        res.status(500).json({
            success:false,
            message:"Some error Occured",
        })
    }
};



//logout


//authMiddleware



module.exports ={registerUser};