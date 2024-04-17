const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');
const CinemaOwner = require('../models/CinemaOwner.js');

router.get('/admin/movies/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await CinemaOwner.findById(id).populate('movies');
        // console.log(response);
        if (!response) {
            return res.status(404).json({ message: "Content Not Found" });
        }
        const movies = response.movies;
        return res.json(movies);
    }
    catch {
        return res.status(500).json({ message: "Internal Server Error1" });
    }
})

router.post('/admin/addMovie', async (req, res) => {
    try {
        const { userId, name, ratings, language, duration, genre, certificate, releaseDate, desc, cast, crew, bgimage, poster } = req.body;
        const existingMovie = await Movie.findOne({ name: name });
        if (existingMovie) {
            return res.status(401).send("Cinema Already Exists");
        }
        const user = await CinemaOwner.findById(userId);
        if (!user) {
            return res.status(404).send('Cinema Owner does not exist');
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
            poster: poster,
        });
        user.movies.push(movie);
        await user.save();
        res.status(200).json(movie);
    }
    catch (error) {
        console.log(error);
        res.status(400).json("Cinema not Created");
    }
})


module.exports = router;