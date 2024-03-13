const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

router.get('/search/movie/:movieName', async (req, res) => {
    try {
        const { movieName } = req.params;
        // console.log("Hello", movieName);
        const response = await Movie.findOne({ name: movieName });
        // console.log(response);
        if (!response) {
            return res.status(404).json({ message: "Movie not found" });
        }
        return res.json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }

})

module.exports = router;