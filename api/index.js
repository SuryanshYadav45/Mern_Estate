const express = require('express')
const mongoose = require("mongoose");
require("dotenv").config({path:"../.env"})
const userRouter=require("./router/userRouter.js");



const app = express();

mongoose.connect(process.env.DATABASE_STRING).then(() => {
    console.log("database connected successfully")
}).catch((error) => {
    console.log(error)
})

app.listen(4000, () => {
    console.log("server started at the specified port")
})

app.use('/user',userRouter);