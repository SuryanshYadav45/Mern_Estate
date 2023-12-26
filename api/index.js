const express= require('express')
const app=express();

app.get("/",(req,res)=>
{
res.send("this is from the server")
})
app.post("/signin",async(req,res)=>
{
    res.status(200).json("this is signin api")
})

app.listen(4000,()=>
{
    console.log("server started at the specified port")
})