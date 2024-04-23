const mongoose = require('mongoose');

let bookingSchema = new mongoose.Schema({
    timing: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    movieName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    cinemaName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    seats: [String]
})

let userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    profilePicture: {
        type: String,
    },
    bookedTickets: [bookingSchema]
})

let User = mongoose.model('User', userSchema);
module.exports = User;