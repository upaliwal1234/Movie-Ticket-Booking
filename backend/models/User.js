const mongoose = require('mongoose');

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
    bookedTickets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Show'
        },
        {
            seatNo: {
                type: String,
            }
        }
    ]
})

let User = mongoose.model('User', userSchema);
module.exports = User;