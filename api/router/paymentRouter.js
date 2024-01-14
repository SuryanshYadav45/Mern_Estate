const express= require("express");
const paymentController=require("../controller/paymentController.js")
const router= express.Router();

router.post("/create-checkout-session",paymentController.payment)


module.exports=router;