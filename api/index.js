const path =require("path")
const mongoose = require("mongoose");
require("dotenv").config({path:"../.env"})
const userRouter=require("./router/userRouter.js");
const authRouter=require("./router/authRouter.js");
const listingRouter=require("./router/listingRouter.js");
const paymentRouter=require("./router/paymentRouter.js");
const cors=require("cors")
const express = require('express')
const app = express();


app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_STRING).then(() => {
    console.log("database connected successfully")
}).catch((error) => {
    console.log("an error occured:",error)
})

app.listen(4000, (req,res) => {
    console.log("server started at the specified port")
})

app.use('/hello',(req,res)=>
{
    res.send({
        name:"suryansh",
        message:"hello from the server"
    })
})

// app.use('/',(req,res)=>
// {
//     res.send("server runnning")
// })
app.use('/user',userRouter);
app.use('/auth',authRouter);
app.use('/listing',listingRouter);
app.use('/payment',paymentRouter);



