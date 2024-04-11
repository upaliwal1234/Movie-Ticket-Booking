const express = require("express");
const router = express.Router();
const Show = require('../models/Show');
const CinemaOwner = require("../models/CinemaOwner");

router.post('/admin/movie/addshow', async (req, res) => {
    console.log('addshow');
    try {
        const { timing, date, movieName, price, seating, cinema } = req.body;
        console.log(movieName);
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
        const cinemaOwner = await CinemaOwner.findById(cinema);
        cinemaOwner.shows.push(show);
        await cinemaOwner.save();
        res.status(200).json(show);
    }
    catch (error) {
        console.log(error);
        res.status(400).json("Cinema not Created");
    }
})


module.exports = router;