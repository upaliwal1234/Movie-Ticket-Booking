const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const secret = process.env.Secret || "hi";
const bcrypt = require('bcryptjs')
// const bodyParser = require('body-parser');

router.post('/signup', async (req, res) => {
    // console.log(req.body);
    const { name, email, password, confirmPassword } = req.body;
    if (!(name && email && password && confirmPassword)) {
        console.log("All Fields Are Necessary")
        return res.status(400).send("All Fields are necessary");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        console.log("Already exists")
        return res.status(401).send("User With This Name Already Exists");
    }
    else if (password == confirmPassword) {
        try {
            const myEncPassword = await bcrypt.hash(password, 10);//You are using the bcrypt.hash function to generate a hash of the password. The 10 you provided is the cost factor or the number of rounds for generating the salt. The bcrypt library internally generates a random salt and combines it with the password to produce a secure hash
            const user = await User.create({
                name: name,
                email: email,
                password: myEncPassword
            });
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.status(400).json("User not Created");
        }
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            console.log("All Fields Are Necessary")
            return res.status(400).send("All details are necessary")
        }
        const user = await User.findOne({ email: email })
        if (!user) {
            console.log("Not exists")
            return res.status(401).send("User does not exists")
        }
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                {
                    id: user._id, email//payload
                },
                secret,//process.env.jwtsecret (secretKey) 
                {
                    expiresIn: "2h" //extra optional 
                }
            );
            user.password = undefined;
            return res.status(200).json({
                success: true,
                token,
                user
            });
        }
        else {
            console.log("Password is incorrect");
            return res.status(400).send("Password is incorrect");
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).json("User not found");
    }
})

// router.post('/profile', async (req, res) => {
//     const { token } = req.body;
//     if (token) {
//         jwt.verify(token, secret, {}, (err, userinfo) => {
//             if (err) throw err;
//             res.status(200).json(userinfo);
//         });
//     }
//     else {
//         res.status(400).json("Unable to fetch userinfo");
//     }
// })

// router.post('/logout', async (req, res) => {
//     res.cookie('token', '').json("OK");
// })

module.exports = router;