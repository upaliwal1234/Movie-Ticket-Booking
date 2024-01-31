const mongoose = require('mongoose');

const movieShowSchema = new mongoose.Schema({
  timing: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
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
  seating: {
    type: [Boolean],
    required: true,
  },
});

const MovieShow = mongoose.model('MovieShow', movieShowSchema);
module.exports = MovieShow;
