const mongoose = require('mongoose');
const Show = require('./models/Show');

mongoose.connect('mongodb://127.0.0.1:27017/Movie-Booking-Site')
    .then(() => { console.log('DB connected'); })
    .catch((err) => { console.log('Error in connecting to DB', err); });

let dummyData = [
    {
        timing: '11:00 AM',
        date: new Date('2024-02-07'),
        movieName: 'Fighter',
        price: 220,
        seating: [false, false, false]
      },
      {
        timing: '02:00 PM',
        date: new Date('2024-02-07'),
        movieName: 'Avengers: Endgame',
        price: 220,
        seating: [false, false, false]
      },
      {
        timing: '04:00 PM',
        date: new Date('2024-02-07'),
        movieName: 'Spider-Man: No Way Home',
        price: 220,
        seating: [false, false, false]
      },
      {
        timing: '11:30 AM',
        date: new Date('2024-02-08'),
        movieName: 'The Dark Knight',
        price: 220,
        seating: [false, false, false]
      },
      {
        timing: '01:30 PM',
        date: new Date('2024-02-08'),
        movieName: 'Inception',
        price: 220,
        seating: [false, false, false]
      },
      {
        timing: '03:30 PM',
        date: new Date('2024-02-08'),
        movieName: 'Interstellar',
        price: 220,
        seating: [false, false, false]
      },
      {
        timing: '12:00 PM',
        date: new Date('2024-02-09'),
        movieName: 'Jurassic Park',
        price: 220,
        seating: [false, false, false]
      },
      {
        timing: '02:30 PM',
        date: new Date('2024-02-09'),
        movieName: 'Jaws',
        price: 220,
        seating: [false, false, false]
      },
      {
        timing: '05:00 PM',
        date: new Date('2024-02-09'),
        movieName: 'Titanic',
        price: 220,
        seating: [false, false, false]
      },
      {
        timing: '10:00 AM',
        date: new Date('2024-02-10'),
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