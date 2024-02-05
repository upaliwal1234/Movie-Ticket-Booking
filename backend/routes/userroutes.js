const express=require('express');
const router=express.Router();
const User = require('../models/user');
const secret=process.env.Secret || "hi";

const salt=bcryt.gensaltSync(10);

router.post('/signup',async(req,res)=>{
    const {username,useremail,password,confirmpassword}=req.body;
    if(username && useremail && password && confirmpassword!=true){
        return res.status(400).json("missing credential");
    }
    const existingUser=await User.findOne(useremail);
    if(existingUser){
        return res.status(400).json("User already exist")
    }
    else if(password==confirmpassword){
        try{
            const UserDoc=await User.create({
                username,
                useremail,
                password: await bcryt.hash(password,salt)
            });
            res.status(200).json("User Created")
        }
        catch{
            console.log(error);
            res.status(400).json("User not Created")
        }
    }
})

router.post('/login',async(req,res)=>{
    const {useremail,password}=req.body;
    const UserDoc=await User.findOne({useremail});
    if(!UserDoc){
        res.status(400).json("User not found");
    }
    const pass=await bcrypt.compare(password,UserDoc.password);
    const username=UserDoc.username;
    if(pass){
        jwt.sign({useremail,username,id:UserDoc._id},secret,{expiresIn:'1d'},(err,token)=>{
            if(err) throw err;
            res.cookie('token',token).json(`${userneme} is logged in`);
        });
    }
    else{
        res.status(400).json("Unable to login")
    }
})

router.post('/profile',async(req,res)=>{
    const {token}=req.body;
    if(token){
        jwt.verify(token,secret,{},(err,userinfo)=>{
            if(err) throw err;
            res.status(200).json(userinfo);
        });
    }
    else{
        res.status(400).json("Unable to fetch userinfo");
    }
})

router.post('/logout',async(req,res)=>{
    res.cookie('token','').json("OK");
})