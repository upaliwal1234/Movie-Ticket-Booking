const express = require('express');
const router = express.Router();
const CinemaOwner = require('../models/CinemaOwner');

router.get('/cinemas', async (req, res) => {
    try {
        let allCinemas = await CinemaOwner.find();
        // console.log(allCinemas);
        return res.json(allCinemas);
    }
    catch {
        return res.status(500).json({ message: "Internal Server Error" });
    }

})
router.get('/cinema/:id/', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await CinemaOwner.findById(id).populate('shows');
        // console.log("Response:", response);

        if (!response || response.length === 0) {
            return res.status(404).json({ message: "Cinema not found" });
        }
        return res.json(response);
    }
    catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})


module.exports = router;