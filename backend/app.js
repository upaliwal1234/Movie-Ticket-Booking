const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cinemaroutes = require('./routes/cinemaroutes');
const movieroutes = require('./routes/movieroutes');
const userroutes = require('./routes/userroutes.js')
const showroutes = require('./routes/showroutes.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const searchroutes = require('./routes/searchroutes.js');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 8888;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("Error in DB", err);
    })


app.listen(PORT, (err) => {
    console.log(`server is running at http://localhost:${PORT}`);
})
app.get('/', (req, res) => {
    res.send('you are at root route')
})


app.use(bodyParser.json());
app.use(cors());
app.use(userroutes);
app.use(cinemaroutes);
app.use(movieroutes);
app.use(showroutes);
app.use(searchroutes);