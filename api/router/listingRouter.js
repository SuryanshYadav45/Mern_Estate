const express= require("express");
const {createListing}=require("../controller/listingController.js")
const router=express.Router();

router.post('/createlisting',createListing)

module.exports=router;