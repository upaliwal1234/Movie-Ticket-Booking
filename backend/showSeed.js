const mongoose = require('mongoose');
const Show = require('./models/Show');

mongoose.connect('mongodb://127.0.0.1:27017/Movie-Booking-Site')
  .then(() => { console.log('DB connected'); })
  .catch((err) => { console.log('Error in connecting to DB', err); });

let dummyData = [
  {
    timing: '11:00 AM',
    date: '13-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '03:00 PM',
    date: '13-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '02:00 PM',
    date: '13-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '04:00 PM',
    date: '13-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '11:30 AM',
    date: '13-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '11:30 AM',
    date: '13-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '11:30 AM',
    date: '13-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '06:00 PM',
    date: '13-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '11:00 AM',
    date: '14-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '03:00 PM',
    date: '14-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '02:00 PM',
    date: '14-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '04:00 PM',
    date: '14-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '11:30 AM',
    date: '14-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '04:00 AM',
    date: '14-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '11:30 AM',
    date: '14-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '11:30 AM',
    date: '14-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '06:00 PM',
    date: '14-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '11:00 AM',
    date: '15-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '03:00 PM',
    date: '15-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '02:00 PM',
    date: '15-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '04:00 PM',
    date: '15-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '11:30 AM',
    date: '15-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '04:00 AM',
    date: '15-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '11:30 AM',
    date: '15-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '11:30 AM',
    date: '15-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '06:00 PM',
    date: '15-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '11:00 AM',
    date: '16-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '03:00 PM',
    date: '16-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '02:00 PM',
    date: '16-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '04:00 PM',
    date: '16-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '11:30 AM',
    date: '16-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '04:00 AM',
    date: '16-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a27'
  },
  {
    timing: '11:30 AM',
    date: '16-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '11:30 AM',
    date: '16-03-2024',
    movieName: 'Hanu-Man',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
  },
  {
    timing: '06:00 PM',
    date: '16-03-2024',
    movieName: 'Fighter',
    price: 220,
    seating: [false, false, false],
    cinema: '65f080e466b37e863f147a28'
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