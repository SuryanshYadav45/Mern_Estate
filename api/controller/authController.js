const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');

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

module.exports={
    signup
}