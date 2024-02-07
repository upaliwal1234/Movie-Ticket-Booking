const express = require('express');
const router = express.Router();
const Show = require('../models/Show');

router.get('/shows/:date', async (req, res) => {
    try {
        const { date } = req.params;
        let response = await Show.find({ 'date': date });
        if (!response) {
            return res.status(404).json({ message: "Show not found" });
        }
        return res.json(response);
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router;