const mongoose = require('mongoose')

let cinemaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
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
    ]
})

let Cinema = mongoose.model('Cinema', cinemaSchema);
module.exports = Cinema