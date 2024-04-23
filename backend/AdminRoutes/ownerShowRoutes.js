const express = require("express");
const router = express.Router();
const Show = require('../models/Show');
const CinemaOwner = require("../models/CinemaOwner");

router.post('/admin/movie/addshow', async (req, res) => {
    console.log('addshow');
    try {
        let { timing, date, movieName, price, seating, cinema } = req.body;
        date = date.split('-').reverse().join('-');
        const existingShow = await Show.findOne({ movieName, timing, date });
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
        res.status(400).json("Show not created");
    }
})

router.get('/admin/allShows/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await CinemaOwner.findById(id).populate('shows');
        if (!user) {
            return res.status(404).send("User Not Found");
        }
        const shows = user.shows;
        return res.status(200).json(shows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

router.patch('/admin/movie/editShow', async (req, res) => {
    try {
        let { movieName, timing, date, price, seating, id } = req.body;
        date = date.split('-').reverse().join('-');
        if (!movieName || !timing || !date || !price || !seating || !id) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const updatedShow = await Show.findByIdAndUpdate(id, {
            movieName: movieName,
            timing: timing,
            date: date,
            price: price,
            seating: seating
        }, { new: true });

        if (!updatedShow) {
            return res.status(404).json({ message: "Show not found" });
        }

        return res.status(200).json({ message: "Show edited successfully", updatedShow: updatedShow });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


router.delete('/admin/delete/:cinema/show/:showId', async (req, res) => {
    try {
        const { cinema, showId } = req.params;
        const response = await Show.findByIdAndDelete(showId);
        const cinemaOwner = await CinemaOwner.findById(cinema)
        cinemaOwner.shows.remove(showId);
        return res.status(200).json({ message: "User deleted successfully" });

    }
    catch (e) {
        console.log(e);
        res.status(500).json({ message: "Internal Server Error" });
    }
})


module.exports = router;