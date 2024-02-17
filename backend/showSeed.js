const mongoose = require('mongoose');
const Show = require('./models/Show');

mongoose.connect('mongodb://127.0.0.1:27017/Movie-Booking-Site')
  .then(() => { console.log('DB connected'); })
  .catch((err) => { console.log('Error in connecting to DB', err); });

let dummyData = [
  {
    timing: '11:00 AM',
    date: '17-02-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65c3ca582bc86a356c0905c6'
  },
  {
    timing: '03:00 PM',
    date: '17-02-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65c3ca582bc86a356c0905c6'
  },
  {
    timing: '02:00 PM',
    date: '18-02-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65c3ca582bc86a356c0905c6'
  },
  {
    timing: '04:00 PM',
    date: '18-02-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65c3ca582bc86a356c0905c8'
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
    timing: '06:00 PM',
    date: '19-02-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65c3ca582bc86a356c0905c8'
  }
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