const express= require('express')
const app=express();

app.get("/",(req,res)=>
{
res.send("this is from the server")
})

app.listen(4000,()=>
{
    console.log("server started at the specified port")
})