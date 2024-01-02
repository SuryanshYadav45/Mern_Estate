const UserModel = require("../models/UserModel");

const getUser=async(req,res)=>{
res.status(200).send("getuser api is working")
};
const updateUser=async(req,res)=>{

    const{username,email,photoUrl}=req.body;

    const user= await UserModel.findOne({_id:req.params.id})
    if(!user){
        res.status(404).send("user not found")
    }
    else{
        user.username=username?username:user.username;
        user.photoUrl=photoUrl?photoUrl:user.photoUrl;
        user.email=email?email:user.email;

        const updateduser= await user.save();
        res.status(200).json(updateduser);
    }


};

module.exports={
    getUser,
    updateUser
}