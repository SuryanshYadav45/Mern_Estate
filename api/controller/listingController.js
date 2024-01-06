const PropertyModel=require("../models/PropertyModel")

const createListing=async(req,res)=>{
    const {propname,desc,imageurl,userid,furnished,parking,beds,price,address}=req.body;
    const user= await PropertyModel.create({
        propname,desc,imageurl,userid,furnished,parking,beds,price,address
    })
    res.status(201).json({user});
}



module.exports={
    createListing
}