const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
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

const Show = mongoose.model('Show', showSchema);
module.exports = Show;

