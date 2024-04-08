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
        bgimage: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fighter-et00304730-1704191105.jpg",
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fighter-et00304730-1704191105.jpg",
        reviews: [],
        cinemas: ["65f080e466b37e863f147a27", "65f080e466b37e863f147a28"]
    },
    {
        name: 'Hanu-Man',
        ratings: 9.4,
        language: ['Hindi'],
        duration: '2h 38m',
        genre: 'Action, Adventure, Fantasy',
        certificate: 'UA',
        releaseDate: '12 Jan, 2024',
        desc: 'Hanumanthu gets the powers of Hanuman in a distant village and fights for Anjanadri',
        cast: [
            {
                name: 'Teja Sajja',
                role: 'Hanumanthu',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/teja-sajja-1269445-1704888435.jpg',
            },
            {
                name: 'Varalaxmi Sarathkumar',
                role: 'Anjamma',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/varalaxmi-sarathkumar-32998-16-10-2018-01-55-44.jpg',
            },
            {
                name: 'Amritha Aiyer',
                role: 'Meenakshi',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/amritha-aiyer-2007988-19-03-2020-12-58-29.jpg',
            },
            {
                name: 'Vinay Rai',
                role: 'Micheal',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/vinay-rai-13262-24-03-2017-13-59-03.jpg',
            },
            {
                name: 'Vennela Kishore',
                role: 'Actor',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/vennela-kishore-16481-1659598641.jpg',
            },
            {
                name: 'Getup Srinu',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/getup-srinu-1087874-1649141722.jpg',
            }

        ],
        crew: [
            {
                name: 'Prashanth Varma',
                role: 'Director',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/prasanth-varma-iein087045-13-02-2018-09-27-26.jpg',
            },
            {
                name: 'K Niranjan Reddy',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/k-niranjan-reddy-2013594-08-07-2021-09-47-54.jpg',
            },
            {
                name: 'Hari Gowra',
                role: 'Musician',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/hari-gowra-1095960-03-10-2018-03-42-42.jpg',
            },
            {
                name: 'Krishna Saurabh',
                role: 'Musician',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/krishna-saurabh-2030723-1694431019.jpg',
            },
            {
                name: 'Dasaradhi Sivendra',
                role: 'Cinematographer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/dasaradhi-sivendra-iein083005-28-12-2018-11-24-02.jpg',
            },
            {
                name: 'Sai Babu Talari',
                role: 'Editor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sai-babu-talari-2029494-1689586074.jpg',
            },
        ],
        bgimage: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/hanu-man-et00311673-1704954533.jpg",
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hanu-man-et00311673-1704954533.jpg",
        reviews: [],
        cinemas: []
    },
    {
        name: 'Teri Baaton Mein Aisa Uljha Jiya',
        ratings: 8.2,
        language: ['Hindi'],
        duration: '2h 23m',
        genre: 'Comedy, Romance, Sci-Fi',
        certificate: 'UA',
        releaseDate: '9 Feb, 2024',
        desc: 'An impossible love story. Experience love, family and robots. A fun filled entertainer. Book now!',
        cast: [
            {
                name: 'Shahid Kapoor',
                role: 'Aryan',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shahid-kapoor-2094-1680754317.jpg',
            },
            {
                name: 'Kriti Sanon',
                role: 'Sifra',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/kriti-sanon-37438-15-09-2017-03-51-03.jpg',
            },
            {
                name: 'Dharmendra',
                role: 'Aryan`s Grandfather',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/dharmendra-582-24-03-2017-12-29-21.jpg',
            },
            {
                name: 'Dimple Kapadia',
                role: 'Aryan`s Aunt',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/dimple-kapadia-595-19-09-2017-05-14-09.jpg',
            },
            {
                name: 'Rakesh Bedi',
                role: 'Aryan`s Father',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rakesh-bedi-5243-15-11-2017-12-22-36.jpg',
            },
            {
                name: 'Rajesh Kumar',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajesh-kumar-9604-13-04-2017-12-02-27.jpg',
            }

        ],
        crew: [
            {
                name: 'Amit Joshi',
                role: 'Director, Writer, Screenplay, Dialogue Writer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rakesh-bedi-5243-15-11-2017-12-22-36.jpg',
            },
            {
                name: 'Aradhana Sah',
                role: 'Director, Writer, Screenplay',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aradhana-sah-2034121-1707308166.jpg',
            },
            {
                name: 'Dinesh Vijan',
                role: 'Producer',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/dinesh-vijan-1070169-02-05-2017-10-33-25.jpg',
            },
            {
                name: 'Jyoti Deshpande',
                role: 'Producer',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/jyoti-deshpande-2029268-1688818317.jpg',
            },
            {
                name: 'Laxman Utekar',
                role: 'Producer, Cinematographer',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/laxman-utekar-1044555-24-03-2017-17-38-52.jpg',
            },
            {
                name: 'Tanishk Bagchi',
                role: 'Musician',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/tanishk-bagchi-1067219-24-03-2017-16-26-34.jpg',
            },
            {
                name: 'Sachin - Jigar',
                role: 'Musician, Background Score',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/sachin---jigar-30942-24-03-2017-16-02-19.jpg',
            },
            {
                name: 'Manish Pradhan',
                role: 'Editor',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/manish-pradhan-1264942-26-02-2019-12-18-51.jpg',
            },
            {
                name: 'Sanal George',
                role: 'Sound Designer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sanal-george-2028012-1684329482.jpg',
            },
        ],
        bgimage: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/teri-baaton-mein-aisa-uljha-jiya-et00383266-1707806462.jpg",
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/teri-baaton-mein-aisa-uljha-jiya-et00383266-1707806462.jpg",
        reviews: [],
        cinemas: []
    },
    {
        name: 'Dashmi',
        ratings: 9.7,
        language: ['Hindi'],
        duration: '2h 15m',
        genre: 'Drama,Suspense',
        certificate: 'UA',
        releaseDate: '16 Feb, 2024',
        desc: 'Dashmi sheds light on the sensitive issue of multiple rapes plaguing our society.',
        cast: [
            {
                name: 'Vardhan Puri',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/vardhan-puri-2004074-22-11-2019-12-52-28.jpg',
            },
            {
                name: 'Gaurav Sareen',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gaurav-sareen-2033250-1704274259.jpg',
            },
            {
                name: 'Aadil Khan',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aadil-khan-2006395-04-02-2020-10-29-38.jpg',
            },
            {
                name: 'Monica Chaudhary',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/monica-chaudhary-1085348-1704274411.jpg',
            },
            {
                name: 'Dalljiet Kaur',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/dalljiet-kaur-2033251-1704274582.jpg',
            },
            {
                name: 'Charrul Malik',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/charrul-malik-2033252-1704274704.jpg',
            },
            {
                name: 'Khushi Hajare',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/khushi-hajare-2020492-1657279612.jpg',
            },
            {
                name: 'Rajesh Jais',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajesh-jais-iein028462-10-04-2017-12-31-04.jpg',
            },
            {
                name: 'Aisshwarya Anishka',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/aisshwarya-anishka-2033253-1704274842.jpg',
            },
            {
                name: 'Sanjay Pandey',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sanjay-pandey-36168-1697112332.jpg',
            },
            {
                name: 'Manoj Tiger',
                role: 'Actor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/manoj-tiger-9570-24-03-2017-15-49-45.jpg',
            },
        ],
        crew: [
            {
                name: 'Shantanu Anant Tambe',
                role: 'Director, Writer, Screenplay,Dialogue Writer',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/shantanu-anant-tambe-37862-24-03-2017-15-14-22.jpg',
            },
            {
                name: 'Shabbir Ahmed',
                role: 'Musician',
                img: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/shabbir-ahmed-iein021457-24-03-2017-17-58-48.jpg',
            },
            {
                name: 'Ravichandran Murugesan Thevar',
                role: 'Cinematographer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ravichandran-murugesan-thevar-2033382-1704798573.jpg',
            },
        ],
        bgimage: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/dashmi-et00374030-1704279520.jpg",
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dashmi-et00374030-1704279520.jpg",
        reviews: [],
        cinemas: []
    },
    {
        name: 'Aakhir Palaayan Kab Tak',
        ratings: 8.5,
        language: ['Hindi'],
        duration: '1h 48m',
        genre: 'Drama, Thriller',
        certificate: 'UA',
        releaseDate: '16 Feb, 2024',
        desc: 'The film highlights the issue of Hindus and other communities facing pressure to leave Muslim-dominated areas based on real incidents.',
        cast: [
            {
                name: 'Rajesh Sharma',
                role: 'Sunil',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rajesh-sharma-7925-1662285318.jpg',
            },
            {
                name: 'Bhushan Pattiyal',
                role: 'Suraj',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/bhushan-pattiyal-2033855-1707979485.jpg',
            },
            {
                name: 'Gaurav M Sharma',
                role: 'Rohit',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gaurav-m-sharma-2033936-1706537725.jpg',
            },
            {
                name: 'Chittaranjan Giri',
                role: 'Mukesh',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/chittaranjan-giri-iein029576-24-03-2017-14-26-11.jpg',
            },
            {
                name: 'Dheerendra Dwivedi',
                role: 'Badruddin',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/dheerendra-dwivedi-1044560-03-07-2017-12-35-36.jpg',
            },
            {
                name: 'Sohani Kumari',
                role: 'Tanya',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sohani-kumari-2033856-1706104236.jpg',
            },
            {
                name: 'Saurabh Agnihotry',
                role: 'Akram',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/saurabh-agnihotry-2033857-1706104329.jpg',
            },
            {
                name: 'Brijesh Karanwal',
                role: 'Rajesh',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/brijesh-karanwal-1082749-1699264581.jpg',
            },
        ],
        crew: [
            {
                name: 'Mukul Vikram',
                role: 'Director, Writer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/mukul-vikram-2033594-1705397434.jpg',
            },
            {
                name: 'Sohani Kumari',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/sohani-kumari-2033856-1706104236.jpg',
            },
            {
                name: 'Alka Choudhary',
                role: 'Producer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/alka-choudhary-2033991-1706694687.jpg',
            },
            {
                name: 'Ravichandran Thevar',
                role: 'Cinematographer',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ravichandran-thevar-2033994-1706695015.jpg',
            },
            {
                name: 'Manjeett Singh',
                role: 'Associate Direcor',
                img: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/manjeett-singh-2033993-1706694835.jpg',
            },
        ],
        bgimage: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/aakhir-palaayan-kab-tak-et00383851-1706613099.jpg",
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/aakhir-palaayan-kab-tak-et00383851-1706613099.jpg",
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