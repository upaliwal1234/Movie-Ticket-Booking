const Cinema = require('./models/Cinema');

let cinemas = [
    {
        name: "Cinema1",
        Address: "Address1",
        shows: []
    },
    {
        name: "Cinema2",
        Address: "Address2",
        shows: []
    },
    {
        name: "Cinema3",
        Address: "Address3",
        shows: []
    },
    {
        name: "Cinema4",
        Address: "Address4",
        shows: []
    }
]

async function seedDb() {
    await Cinema.insertMany(cinemas);
    console.log("Data seeded");
}
module.exports = seedDb;


