const express = require('express');
const router = express.Router();
const Cinema = require('../models/Cinema');


router.get('/cinemas', async (req, res) => {
    try {
        let allCinemas = await Cinema.find();
        console.log(allCinemas);
        return res.json(allCinemas);
    }
    catch {
        return res.status(500).json({ message: "Internal Server Error" });
    }

})

router.get('/cinemas/:id', async (req, res) => {
    try {

        const { id } = req.params;
        const response = await Cinema.findById(id);
        if (!response) {
            return res.status(404).json({ message: "Cinema not found" });
        }
        return res.json(response);
    }
    catch {
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

module.exports = router;