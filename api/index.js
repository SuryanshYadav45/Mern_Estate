const express = require('express')
const mongoose = require("mongoose");
require("dotenv").config({path:"../.env"})
const userRouter=require("./router/userRouter.js");
const authRouter=require("./router/authRouter.js");
const listingRouter=require("./router/listingRouter.js");
const paymentRouter=require("./router/paymentRouter.js");
const cors=require("cors")
const app = express();
const path =require("path")

app.use(cors());
app.use(express.json());



mongoose.connect(process.env.DATABASE_STRING).then(() => {
    console.log("database connected successfully")
}).catch((error) => {
    console.log("an error occured:",error)
})

app.listen(4000, (req,res) => {
    res.send("server started at the specified port")
})

app.use('/',(req,res)=>
{
    res.send("server runnning")
})
app.use('/user',userRouter);
app.use('/auth',authRouter);
app.use('/listing',listingRouter);
app.use('/payment',paymentRouter);



