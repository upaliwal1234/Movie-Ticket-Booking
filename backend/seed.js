const Cinema = require('./models/Cinema');
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Movie-Booking-Site')
  .then(() => { console.log('DB connected'); })
  .catch((err) => { console.log('Error in connecting to DB', err); });

let cinemas = [
  {
    name: "CinemaX",
    address: "Near Shanti Nagar, Mathura",
    shows: ["65cf98a40ef015f7c6db3130", "65cf98a40ef015f7c6db3131", "65cf98a40ef015f7c6db3132", "65cf98a40ef015f7c6db3133", "65cf98a40ef015f7c6db3134", "65cf98a40ef015f7c6db3135"]
  },
  {
    name: "Star Movies",
    address: "123 Main Street, Springfield",
    shows: ["65c3c728b088365c4edcf473", "65ccef7e8424354cba17ab6c", "65ccef7e8424354cba17ab68", "65ccef7e8424354cba17ab6a"]
  },
  {
    name: "Silver Screens",
    address: "456 Oak Avenue, Rivertown",
    shows: ["65c3c728b088365c4edcf473", "65ccef7e8424354cba17ab6c", "65ccef7e8424354cba17ab6a"]
  },
  {
    name: "Golden Theater",
    address: "789 Elm Drive, Lakeside",
    shows: ["65c3c728b088365c4edcf473", "65ccef7e8424354cba17ab6c"]
  },
  {
    name: "Dreamland Cinemas",
    address: "101 Pine Road, Hillside",
    shows: ["65c3c728b088365c4edcf473", "65ccef7e8424354cba17ab6c"]
  },
  {
    name: "Cityplex",
    address: "78 Maple Lane, Downtown",
    shows: ["65c3c728b088365c4edcf473", "65ccef7e8424354cba17ab6c"]
  },
  {
    name: "Metro Movies",
    address: "555 Broadway Street, Metro City",
    shows: ["65c3c728b088365c4edcf473", "65ccef7e8424354cba17ab6c"]
  },
  {
    name: "Sunrise Cinemas",
    address: "909 Sunset Boulevard, Seaside",
    shows: ["65c3c728b088365c4edcf473", "65ccef7e8424354cba17ab6c"]
  },
  {
    name: "Skyview Cinema",
    address: "222 Cloud Avenue, Skyline",
    shows: ["65c3c728b088365c4edcf473", "65ccef7e8424354cba17ab6c"]
  },
  {
    name: "Plaza Picturehouse",
    address: "333 Plaza Drive, Midtown",
    sshows: ["65c3c728b088365c4edcf473", "65ccef7e8424354cba17ab6c"]
  },
  {
    name: "Regal Theatres",
    address: "444 Regal Road, Riverside",
    shows: ["65c3c728b088365c4edcf473", "65ccef7e8424354cba17ab6c"]
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
