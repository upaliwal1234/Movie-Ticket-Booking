const express = require("express")
const router = express.Router();
const Movie = require('../models/Movie');

router.get('admin/search/movie/:movieName', async (req, res) => {
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

router.get('admin/search/movie/autoComplete/:movieName', async (req, res) => {
    try {
        const { movieName } = req.params;
        console.log("Hello" + movieName);
        const response = await Movie.find({ name: { $regex: movieName, $options: 'i' } }).sort({ name: 1 }).limit(5);
        if (!response) {
            return res.status(404).json({ message: "Movie Not Found" });
        }

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})
module.exports = router