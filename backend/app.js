const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDb = require('./seed.js');
const cinemaroutes=require('./routes/cinemaroutes');

// const PORT = process.env.PORT || 8080;
const PORT = 8888
mongoose.connect('mongodb://127.0.0.1:27017/Movie-Booking-Site')
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("Error in DB", err);
    })


app.listen(PORT,(err) => {
    console.log(`server is running at http://localhost:${PORT}`);
})
app.get('/', (req, res) => {
    res.send('you are at root route')
})


app.use(cinemaroutes);
// seedDb();