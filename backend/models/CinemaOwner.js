const mongoose = require('mongoose')

let cinemaOwnerSchema = mongoose.Schema({
    cinemaName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    shows: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Show'
        }
    ],
    movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ]
})

let CinemaOwner = mongoose.model('CinemaOwner', cinemaSchema);
module.exports = CinemaOwner