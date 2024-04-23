const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const secret = process.env.Secret || "hi";
const bcrypt = require('bcrypt')

router.post('/signup', async (req, res) => {
    // console.log(req.body);
    const { name, email, password, confirmPassword } = req.body;
    if (!(name && email && password && confirmPassword)) {
        // console.log("All Fields Are Necessary")
        return res.status(400).send("All Fields are necessary");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        // console.log("Already exists")
        return res.status(401).send("User With This Name Already Exists");
    }
    else if (password == confirmPassword) {
        try {
            const salt = bcrypt.genSaltSync(10);
            const myEncPassword = bcrypt.hashSync(password, salt);
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
            // console.log("All Fields Are Necessary")
            return res.status(400).send("All details are necessary")
        }
        const user = await User.findOne({ email: email })
        if (!user) {
            // console.log("Not exists")
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

router.get('/profile/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await User.findById(id);
        console.log(response);
        if (!response) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(response);
    }
    catch {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

router.patch('/editProfile/:id', async (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
    res.status(200).json(updatedUser);
});

router.get('/profile/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
}); 


module.exports = router;