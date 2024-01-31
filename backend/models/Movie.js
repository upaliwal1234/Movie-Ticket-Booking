const mongoose = require('mongoose')

let movieSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    cinemas: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cinema'
        }
    ]
})

let Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;