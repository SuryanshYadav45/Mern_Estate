const PropertyModel=require("../models/PropertyModel")

const createListing=async(req,res)=>{
    const {propname,desc,imageurls,userid,furnished,parking,beds,price,address,bathrooms,type}=req.body;
    
    const user= await PropertyModel.create({
        propname,desc,imageurls,userid,furnished,parking,beds,price,address,bathrooms,type
    })
    res.status(201).json({user});
}



module.exports={
    createListing
}