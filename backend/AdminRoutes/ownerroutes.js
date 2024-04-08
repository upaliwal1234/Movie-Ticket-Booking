const express = require(express);
const router = express.Router();
const CinemaOwner = require('../models/CinemaOwner');
const jwt = require('jsonwebtoken')
const secret = process.env.Secret || "hi";
const bcrypt = require('bcrypt')

router.post('/signup', async (req, res) => {
    // console.log(req.body);
    const { cinemaName,email, password, confirmPassword ,address} = req.body;
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
                cinemaName:cinemaName,
                email: email,
                password: myEncPassword,
                address:address
            });
            res.status(200).json(cinemaowner);
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
        const cinemaowner = await CinemaOwner.findOne({ email: email })
        if (!user) {
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

router.post('/logout',async(req,res)=>{
    
})

module.exports = router;