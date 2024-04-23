const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Show = require('../models/Show');


router.post('/booking', async (req, res) => {
    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET
        });

        const options = req.body;
        const order = await razorpay.orders.create(options);

        if (!order) {
            return res.status(500).send('Error');
        }
        res.status(200).json(order);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }

})

router.post('/booking/validate', async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    // order_id + "|" + razorpay_payment_id
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest('hex');
    if (digest !== razorpay_signature) {
        return res.status(400).json({ msg: "Transaction is not legit!" });
    }

    res.json({
        msg: "success",
        orderID: razorpay_order_id,
        paymentId: razorpay_payment_id
    });
})

router.patch('/booking/success', async (req, res) => {
    try {
        const { showId, seating } = req.body;
        const show = await Show.findByIdAndUpdate(showId, {
            seating
        });
        if (!show) {
            return res.status(404).json({ message: "Show not found" });
        }
        return res.status(200).json({ message: "Booking Successfull" });
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
})

module.exports = router