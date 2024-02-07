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
        movieName: 'Fighter',
        price: 220,
        seating: [false, false, false]
    },
    {
        timing: '04:00 PM',
        date: new Date('2024-02-07'),
        movieName: 'Fighter',
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