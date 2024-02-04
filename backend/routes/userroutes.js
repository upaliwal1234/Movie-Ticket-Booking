const express=require('express');
const router=express.Router();
const User = require('../models/user');


router.post('/signup',async(req,res)=>{
    const {username,useremail,password}=req.body;
    if(username && useremail && password!=true){
        return res.status(400).json("missing credential");
    }
    const existingUser=await User.findOne(useremail);
    if(existingUser){
        return res.status(400).json("User already exist")
    }

})

router.post('/login',async(req,res)=>{
    
})

router.post('/logout',async(req,res)=>{
    
})