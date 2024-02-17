const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');
const Show = require('../models/Show.js');


router.get('/Home/movies', async (req, res) => {
    try {
        const response = await Movie.find();
        if (!response) {
            return res.status(404).json({ message: "Content Not Found" });
        }
        return res.json(response);
    }
    catch {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})
router.get('/movies', async (req, res) => {
    try {
        const response = await Movie.find();
        if (!response) {
            return res.status(404).json({ message: "Content Not Found" });
        }
        return res.json(response);
    }
    catch {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

router.get('/movie/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Movie.findById(id);
        if (!response) {
            return res.status(404).json({ message: "Movie not found" });
        }
        return res.json(response);
    }
    catch {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

router.get('/movie/banner/:movieName/:date', async (req, res) => {
    try {
        let { movieName, date } = req.params;
        const response = await Show.find({ movieName, date }).populate('cinema');
        if (!response) {
            return res.status(404).json({ message: "Shows not found" });
        }
        return res.json(response);
    } catch {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

module.exports = router;