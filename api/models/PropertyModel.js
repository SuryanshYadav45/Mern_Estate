const mongoose = require("mongoose");

const propertySchema= mongoose.Schema({
    name:{
        type:String
    },
})

const PropertyModel= mongoose.model('properties',propertySchema);

module.exports=PropertyModel;