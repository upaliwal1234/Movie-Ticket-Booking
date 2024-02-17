const mongoose = require('mongoose');
const Show = require('./models/Show');

mongoose.connect('mongodb://127.0.0.1:27017/Movie-Booking-Site')
  .then(() => { console.log('DB connected'); })
  .catch((err) => { console.log('Error in connecting to DB', err); });

let dummyData = [
  {
    timing: '11:00 AM',
    date: '18-02-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65c3ca582bc86a356c0905c6'
  },
  {
    timing: '02:00 PM',
    date: '17-02-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65c3ca582bc86a356c0905c6'
  },
  {
    timing: '04:00 PM',
    date: '19-02-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65c3ca582bc86a356c0905c8'
  },
  {
    timing: '09:00 AM',
    date: '18-02-2024',
    movieName: 'The Dark Knight',
    price: 220,
    seating: [false, false, false]
  },
  {
    timing: '12:00 AM',
    date: '17-02-2024',
    movieName: 'The Dark Knight',
    price: 220,
    seating: [false, false, false]
  },
  {
    timing: '03:00 AM',
    date: '19-02-2024',
    movieName: 'The Dark Knight',
    price: 220,
    seating: [false, false, false]
  },
  {
    timing: '01:30 PM',
    date: '14-02-2024',
    movieName: 'Inception',
    price: 220,
    seating: [false, false, false]
  },
  {
    timing: '03:30 PM',
    date: '14-02-2024',
    movieName: 'Interstellar',
    price: 220,
    seating: [false, false, false]
  },
  {
    timing: '12:00 PM',
    date: '14-02-2024',
    movieName: 'Jurassic Park',
    price: 220,
    seating: [false, false, false]
  },
  {
    timing: '02:30 PM',
    date: '14-02-2024',
    movieName: 'Jaws',
    price: 220,
    seating: [false, false, false]
  },
  {
    timing: '05:00 PM',
    date: '14-02-2024',
    movieName: 'Titanic',
    price: 220,
    seating: [false, false, false]
  },
  {
    timing: '10:00 AM',
    date: '14-02-2024',
    movieName: 'The Shawshank Redemption',
    price: 220,
    seating: [false, false, false]
  },
];

async function seed() {
  try {
    await Show.insertMany(dummyData);
    console.log('data seeded successfully');
  } catch (err) {
    console.error('Error sending data', err);
  }
}


seed();