const express= require("express");
const {createListing,getListing, userListing}=require("../controller/listingController.js")
const router=express.Router();

router.post('/createlisting',createListing)
router.get('/getlisting',getListing)
router.get('/userlisting/:id',userListing)

module.exports=router;