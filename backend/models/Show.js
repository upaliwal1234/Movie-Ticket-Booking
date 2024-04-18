const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  isSeat: {
    type: Boolean,
    required: true,
    default: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true,
  },
  isBooked: {
    type: Boolean,
    required: true,
    default: false,
  }
})

const showSchema = new mongoose.Schema({
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
  seating: {
    type: [[seatSchema]]
  },
  cinema: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CinemaOwner'
  }
});

const Show = mongoose.model('Show', showSchema);
module.exports = Show;