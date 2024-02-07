const mongoose = require('mongoose');
const Movie = require('./models/Movie');

mongoose.connect('mongodb://127.0.0.1:27017/Movie-Booking-Site')
    .then(() => { console.log('DB connected'); })
    .catch((err) => { console.log('Error in connecting to DB', err); });

let dummyData = [
    {
        name: 'Fighter',
        ratings: 7.5,
        language: ['Hindi'],
        duration: '2h 47m',
        genre: 'Action, Thriller',
        certificate: 'UA',
        releaseDate: '25 Jan, 2024',
        desc: 'Top IAF aviators come together in the face of imminent danger, to form Air Dragons. Fighter unfolds their camaraderie, brotherhood and battles, internal and external.',
        cast: [
            {
                name: 'Hrithik Roshan',
                role: 'Patty',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/hrithik-roshan-833-1705302956.jpg',
            },
            {
                name: 'Deepika Padukone',
                role: 'Minni',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/deepika-padukone-2822-12-09-2017-06-31-43.jpg',
            },
            {
                name: 'Anil Kapoor',
                role: 'Rocky',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
            },
            {
                name: 'Karan Singh Grover',
                role: 'Taj',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/karan-singh-grover-1047518-24-03-2017-12-30-59.jpg',
            },
            {
                name: 'Akshay Oberoi',
                role: 'Bash',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-oberoi-20546-1705318429.jpg',
            }
        ],
        crew: [
            {
                name: 'Siddharth Anand',
                role: 'Director, Producer, Writer',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/siddharth-anand-2166-1705303130.jpg',
            },
            {
                name: 'Mamta Anand',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mamta-anand-2033962-1706629786.jpg',
            },
            {
                name: 'Ajit Andhare',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ajit-andhare-iein090440-24-01-2019-17-05-53.jpg',
            },
            {
                name: 'Anku Pande',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anku-pande-iein044116-06-10-2020-14-28-09.jpg',
            },
            {
                name: 'Viacom18 Motion Pictures',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/viacom18-motion-pictures-1076018-24-03-2017-13-42-24.jpg',
            },
            {
                name: 'Ramon Chibb',
                role: 'Producer, Writer, Screenplay',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ramon-chibb-2010226-1702019208.jpg',
            },
            {
                name: 'Kevin Vaz',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-vaz-2033807-1705993930.jpg',
            },
            {
                name: 'Vishal - Shekhar',
                role: 'Musician',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vishal---shekhar-18791-24-03-2017-15-56-02.jpg',
            },
            {
                name: 'Hussain Dalal',
                role: 'Dialogue Writer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hussain-dalal-11477-24-03-2017-18-02-27.jpg',
            },
            {
                name: 'Abbas Dalal',
                role: 'Dialogue Writer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/abbas-dalal-2032687-1702017919.jpg',
            },
            {
                name: 'Satchith Paulose',
                role: 'Cinematographer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/satchith-paulose-2025495-1675161321.jpg',
            },
        ],
        bgimage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg",
        poster: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg",
        reviews: [],
        cinemas: []
    },
    {
        name: 'Fighter',
        ratings: 7.5,
        language: ['Hindi'],
        duration: '2h 47m',
        genre: 'Action, Thriller',
        certificate: 'UA',
        releaseDate: '25 Jan, 2024',
        desc: 'Top IAF aviators come together in the face of imminent danger, to form Air Dragons. Fighter unfolds their camaraderie, brotherhood and battles, internal and external.',
        cast: [
            {
                name: 'Hrithik Roshan',
                role: 'Patty',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/hrithik-roshan-833-1705302956.jpg',
            },
            {
                name: 'Deepika Padukone',
                role: 'Minni',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/deepika-padukone-2822-12-09-2017-06-31-43.jpg',
            },
            {
                name: 'Anil Kapoor',
                role: 'Rocky',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
            },
            {
                name: 'Karan Singh Grover',
                role: 'Taj',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/karan-singh-grover-1047518-24-03-2017-12-30-59.jpg',
            },
            {
                name: 'Akshay Oberoi',
                role: 'Bash',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-oberoi-20546-1705318429.jpg',
            }
        ],
        crew: [
            {
                name: 'Siddharth Anand',
                role: 'Director, Producer, Writer',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/siddharth-anand-2166-1705303130.jpg',
            },
            {
                name: 'Mamta Anand',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mamta-anand-2033962-1706629786.jpg',
            },
            {
                name: 'Ajit Andhare',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ajit-andhare-iein090440-24-01-2019-17-05-53.jpg',
            },
            {
                name: 'Anku Pande',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anku-pande-iein044116-06-10-2020-14-28-09.jpg',
            },
            {
                name: 'Viacom18 Motion Pictures',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/viacom18-motion-pictures-1076018-24-03-2017-13-42-24.jpg',
            },
            {
                name: 'Ramon Chibb',
                role: 'Producer, Writer, Screenplay',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ramon-chibb-2010226-1702019208.jpg',
            },
            {
                name: 'Kevin Vaz',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-vaz-2033807-1705993930.jpg',
            },
            {
                name: 'Vishal - Shekhar',
                role: 'Musician',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vishal---shekhar-18791-24-03-2017-15-56-02.jpg',
            },
            {
                name: 'Hussain Dalal',
                role: 'Dialogue Writer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hussain-dalal-11477-24-03-2017-18-02-27.jpg',
            },
            {
                name: 'Abbas Dalal',
                role: 'Dialogue Writer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/abbas-dalal-2032687-1702017919.jpg',
            },
            {
                name: 'Satchith Paulose',
                role: 'Cinematographer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/satchith-paulose-2025495-1675161321.jpg',
            },
        ],
        bgimage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg",
        poster: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg",
        reviews: [],
        cinemas: []
    },
    {
        name: 'Fighter',
        ratings: 7.5,
        language: ['Hindi'],
        duration: '2h 47m',
        genre: 'Action, Thriller',
        certificate: 'UA',
        releaseDate: '25 Jan, 2024',
        desc: 'Top IAF aviators come together in the face of imminent danger, to form Air Dragons. Fighter unfolds their camaraderie, brotherhood and battles, internal and external.',
        cast: [
            {
                name: 'Hrithik Roshan',
                role: 'Patty',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/hrithik-roshan-833-1705302956.jpg',
            },
            {
                name: 'Deepika Padukone',
                role: 'Minni',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/deepika-padukone-2822-12-09-2017-06-31-43.jpg',
            },
            {
                name: 'Anil Kapoor',
                role: 'Rocky',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
            },
            {
                name: 'Karan Singh Grover',
                role: 'Taj',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/karan-singh-grover-1047518-24-03-2017-12-30-59.jpg',
            },
            {
                name: 'Akshay Oberoi',
                role: 'Bash',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/akshay-oberoi-20546-1705318429.jpg',
            }
        ],
        crew: [
            {
                name: 'Siddharth Anand',
                role: 'Director, Producer, Writer',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/siddharth-anand-2166-1705303130.jpg',
            },
            {
                name: 'Mamta Anand',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mamta-anand-2033962-1706629786.jpg',
            },
            {
                name: 'Ajit Andhare',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ajit-andhare-iein090440-24-01-2019-17-05-53.jpg',
            },
            {
                name: 'Anku Pande',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anku-pande-iein044116-06-10-2020-14-28-09.jpg',
            },
            {
                name: 'Viacom18 Motion Pictures',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/viacom18-motion-pictures-1076018-24-03-2017-13-42-24.jpg',
            },
            {
                name: 'Ramon Chibb',
                role: 'Producer, Writer, Screenplay',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ramon-chibb-2010226-1702019208.jpg',
            },
            {
                name: 'Kevin Vaz',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-vaz-2033807-1705993930.jpg',
            },
            {
                name: 'Vishal - Shekhar',
                role: 'Musician',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vishal---shekhar-18791-24-03-2017-15-56-02.jpg',
            },
            {
                name: 'Hussain Dalal',
                role: 'Dialogue Writer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hussain-dalal-11477-24-03-2017-18-02-27.jpg',
            },
            {
                name: 'Abbas Dalal',
                role: 'Dialogue Writer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/abbas-dalal-2032687-1702017919.jpg',
            },
            {
                name: 'Satchith Paulose',
                role: 'Cinematographer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/satchith-paulose-2025495-1675161321.jpg',
            },
        ],
        bgimage: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg",
        poster: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICA5My4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00304730-sqjdzkhcrh-portrait.jpg",
        reviews: [],
        cinemas: []
    },
];

async function seed() {
    try {
        await Movie.insertMany(dummyData);
        console.log('data seeded successfully');
    } catch (err) {
        console.error('Error sending data', err);
    }
}


seed();