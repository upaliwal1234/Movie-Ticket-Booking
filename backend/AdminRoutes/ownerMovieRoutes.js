const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

router.post('/admin/addMovie', async (req, res) => {
    try {
        const { name, ratings, language, duration, genre, certificate, releaseDate, desc, cast, crew, bgimage, poster } = req.body;
        const existingMovie = Movie.findOne({ name });
        if (existingMovie) {
            return res.status(401).send("Cinema Already Exists");
        }
        const movie = await Movie.create({
            name: name,
            ratings: ratings,
            language: language,
            duration: duration,
            genre: genre,
            certificate: certificate,
            releaseDate: releaseDate,
            desc: desc,
            cast: cast,
            crew: crew,
            bgimage: bgimage,
            poster: poster
        });
        res.status(200).json(movie);
    }
    catch (error) {
        console.log(error);
        res.status(400).json("Cinema not Created");
    }
})


module.exports = router;