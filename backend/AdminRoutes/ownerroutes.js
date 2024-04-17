const express = require('express');
const router = express.Router();
const CinemaOwner = require('../models/CinemaOwner');
const jwt = require('jsonwebtoken')
const secret = process.env.Secret || "hi";
const bcrypt = require('bcrypt')

router.post('/admin/signup', async (req, res) => {
    // console.log(req.body);
    const { cinemaName, email, password, confirmPassword, address } = req.body;
    // const { cinemaName, email, password, confirmPassword, address } = req.body;
    if (!(cinemaName && email && password && confirmPassword && address)) {
        // console.log("All Fields Are Necessary")
        return res.status(400).send("All Fields are necessary");
    }
    const existingUser = await CinemaOwner.findOne({ email });
    if (existingUser) {
        // console.log("Already exists")
        return res.status(401).send("User With This Name Already Exists");
    }
    else if (password == confirmPassword) {
        try {
            const salt = bcrypt.genSaltSync(10);
            const myEncPassword = bcrypt.hashSync(password, salt);
            const cinemaowner = await CinemaOwner.create({
                cinemaName: cinemaName,
                email: email,
                password: myEncPassword,
                address: address
            });
            res.status(200).json(cinemaowner);
        } catch (error) {
            console.log(error);
            res.status(400).json("User not Created");
        }
    }
})

router.post('/admin/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            // console.log("All Fields Are Necessary")
            return res.status(400).send("All details are necessary")
        }
        const cinemaowner = await CinemaOwner.findOne({ email: email })
        if (!cinemaowner) {
            // console.log("Not exists")
            return res.status(401).send("User does not exists")
        }
        if (cinemaowner && await bcrypt.compare(password, cinemaowner.password)) {
            const token = jwt.sign(
                {
                    id: cinemaowner._id, email//payload
                },
                secret,//process.env.jwtsecret (secretKey) 
                {
                    expiresIn: "2h" //extra optional 
                }
            );
            cinemaowner.password = undefined;
            return res.status(200).json({
                success: true,
                token,
                cinemaowner
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

router.get('/admin/profile/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        const user = await CinemaOwner.findById(id);
        if (!user) {
            return res.status(401).send("User does not exist");
        }

        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json("Error");
    }
})

router.patch('/admin/profile/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const { cinemaName, address } = req.body;
        const user = await CinemaOwner.findById(userId);
        user.cinemaName = cinemaName;
        user.address = address;
        await user.save();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
})

module.exports = router;