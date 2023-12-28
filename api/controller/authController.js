const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup=async(req,res)=>{
    const{username,password,email}=req.body;
    try {
        const hashpassword= await bcrypt.hash(password,12);
        const response= await UserModel.create({
            username,
            email,
            password:hashpassword
        })
        res.status(201).send("User created successfully ");
    
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const signin=async(req,res)=>{
    const{email,password}=req.body;

    try {
       const user= await UserModel.findOne({email})
       !user?res.status(404).send("User not found"):null;
       const ValidUser= await bcrypt.compare(password,user.password)
       if(ValidUser){
        const token=jwt.sign({id:user._id,username:user.username},process.env.TOKEN_SECRET,{expiresIn:'1h'});
        res.status(200).json({token});
       }
        
    } catch (error) {
        console.log(error)
        res.status(404).send("user not found")   
    }
}

module.exports={
    signup,
    signin
}