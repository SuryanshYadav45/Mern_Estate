const express= require("express");
const {createListing,getListing}=require("../controller/listingController.js")
const router=express.Router();

router.post('/createlisting',createListing)
router.get('/getlisting',getListing)

module.exports=router;