const express= require("express");
const userController=require("../controller/userController.js")
const router=express.Router();

router.get('/getuser', userController.getUser);

module.exports=router;