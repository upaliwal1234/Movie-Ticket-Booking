const Cinema = require('./models/Cinema');
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Movie-Booking-Site')
  .then(() => { console.log('DB connected'); })
  .catch((err) => { console.log('Error in connecting to DB', err); });

let cinemas = [
  {
    name: "CinemaX",
    address: "Near Shanti Nagar, Mathura",
    shows: ["65d074f662fcdc591a77c9c7", "65d074f662fcdc591a77c9c8", "65d074f662fcdc591a77c9c9", "65d074f662fcdc591a77c9ca", "65d074f662fcdc591a77c9cb", "65d074f662fcdc591a77c9cc"]
  },
  {
    name: "Star Movies",
    address: "123 Main Street, Springfield",
    shows: ["65d074f662fcdc591a77c9c7", "65d074f662fcdc591a77c9c8", "65d074f662fcdc591a77c9c9", "65d074f662fcdc591a77c9ca", "65d074f662fcdc591a77c9cb", "65d074f662fcdc591a77c9cc"]
  },
  {
    name: "Silver Screens",
    address: "456 Oak Avenue, Rivertown",
    shows: ["65d074f662fcdc591a77c9c7", "65d074f662fcdc591a77c9c8", "65d074f662fcdc591a77c9c9", "65d074f662fcdc591a77c9ca", "65d074f662fcdc591a77c9cb", "65d074f662fcdc591a77c9cc"]
  },
  {
    name: "Golden Theater",
    address: "789 Elm Drive, Lakeside",
    shows: ["65d074f662fcdc591a77c9c7", "65d074f662fcdc591a77c9c8", "65d074f662fcdc591a77c9c9", "65d074f662fcdc591a77c9ca", "65d074f662fcdc591a77c9cb", "65d074f662fcdc591a77c9cc"]
  },
  {
    name: "Dreamland Cinemas",
    address: "101 Pine Road, Hillside",
    shows: ["65d074f662fcdc591a77c9c7", "65d074f662fcdc591a77c9c8", "65d074f662fcdc591a77c9c9", "65d074f662fcdc591a77c9ca", "65d074f662fcdc591a77c9cb", "65d074f662fcdc591a77c9cc"]
  },
  {
    name: "Cityplex",
    address: "78 Maple Lane, Downtown",
    shows: ["65d074f662fcdc591a77c9c7", "65d074f662fcdc591a77c9c8", "65d074f662fcdc591a77c9c9", "65d074f662fcdc591a77c9ca", "65d074f662fcdc591a77c9cb", "65d074f662fcdc591a77c9cc"]
  },
  {
    name: "Metro Movies",
    address: "555 Broadway Street, Metro City",
    shows: ["65d074f662fcdc591a77c9c7", "65d074f662fcdc591a77c9c8", "65d074f662fcdc591a77c9c9", "65d074f662fcdc591a77c9ca", "65d074f662fcdc591a77c9cb", "65d074f662fcdc591a77c9cc"]
  },
  {
    name: "Sunrise Cinemas",
    address: "909 Sunset Boulevard, Seaside",
    shows: ["65d074f662fcdc591a77c9c7", "65d074f662fcdc591a77c9c8", "65d074f662fcdc591a77c9c9", "65d074f662fcdc591a77c9ca", "65d074f662fcdc591a77c9cb", "65d074f662fcdc591a77c9cc"]
  },
  {
    name: "Skyview Cinema",
    address: "222 Cloud Avenue, Skyline",
    shows: ["65d074f662fcdc591a77c9c7", "65d074f662fcdc591a77c9c8", "65d074f662fcdc591a77c9c9", "65d074f662fcdc591a77c9ca", "65d074f662fcdc591a77c9cb", "65d074f662fcdc591a77c9cc"]
  },
  {
    name: "Plaza Picturehouse",
    address: "333 Plaza Drive, Midtown",
    shows: ["65d074f662fcdc591a77c9c7", "65d074f662fcdc591a77c9c8", "65d074f662fcdc591a77c9c9", "65d074f662fcdc591a77c9ca", "65d074f662fcdc591a77c9cb", "65d074f662fcdc591a77c9cc"]
  },
  {
    name: "Regal Theatres",
    address: "444 Regal Road, Riverside",
    shows: ["65d074f662fcdc591a77c9c7", "65d074f662fcdc591a77c9c8", "65d074f662fcdc591a77c9c9", "65d074f662fcdc591a77c9ca", "65d074f662fcdc591a77c9cb", "65d074f662fcdc591a77c9cc"]
  }
]

async function seedDb() {
  try {
    await Cinema.insertMany(cinemas);
    console.log("Data seeded");
  } catch (err) {
    console.log("Error", err);
  }

}
// module.exports = seedDb;

seedDb();
