const Cinema = require('./models/Cinema');
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Movie-Booking-Site')
    .then(() => { console.log('DB connected'); })
    .catch((err) => { console.log('Error in connecting to DB', err); });

let cinemas = [
    {
        name: "CinemaX",
        address: "Near Shanti Nagar, Mathura",
        shows: []
      },
      {
        name: "Star Movies",
        address: "123 Main Street, Springfield",
        shows: []
      },
      {
        name: "Silver Screens",
        address: "456 Oak Avenue, Rivertown",
        shows: []
      },
      {
        name: "Golden Theater",
        address: "789 Elm Drive, Lakeside",
        shows: []
      },
      {
        name: "Dreamland Cinemas",
        address: "101 Pine Road, Hillside",
        shows: []
      },
      {
        name: "Cityplex",
        address: "78 Maple Lane, Downtown",
        shows: []
      },
      {
        name: "Metro Movies",
        address: "555 Broadway Street, Metro City",
        shows: []
      },
      {
        name: "Sunrise Cinemas",
        address: "909 Sunset Boulevard, Seaside",
        shows: []
      },
      {
        name: "Skyview Cinema",
        address: "222 Cloud Avenue, Skyline",
        shows: []
      },
      {
        name: "Plaza Picturehouse",
        address: "333 Plaza Drive, Midtown",
        shows: []
      },
      {
        name: "Regal Theatres",
        address: "444 Regal Road, Riverside",
        shows: []
      }
]

async function seedDb() {
    try{
        await Cinema.insertMany(cinemas);
        console.log("Data seeded");
    }catch(err){
        console.log("Error",err);
    }
    
}
// module.exports = seedDb;

// seedDb();
