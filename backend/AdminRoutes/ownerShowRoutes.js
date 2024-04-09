const express = require("express");
const router = express.Router();
const Show = require('../models/Show');

router.post('/admin/movie/addshow', async (req, res) => {
    try {
        const { timing, date, movieName, price, seating, cinema } = req.body;
        const existingShow = await Show.findOne({ timing, date });
        if (existingShow) {
            return res.status(401).send("Show Already Exists");
        }
        const show = await Show.create({
            timing: timing,
            date: date,
            movieName: movieName,
            price: price,
            seating: seating,
            cinema: cinema
        });
        res.status(200).json(show);
    }
    catch (error) {
        console.log(error);
        res.status(400).json("Show not created");
    }
})


module.exports = router;