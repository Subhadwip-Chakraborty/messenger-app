const express=require('express');
const app=new express();

app.get("/register",(req,res)=>{
    res.json({message:"This is a registration"})
})

app.listen(3000,()=>{
    console.log(`Running at port number 3000`)
})