import { useParams } from "react-router-dom"
import Banner from "./Banner"
import { useEffect, useState } from "react";
import axios from 'axios'
import baseURL from "../../DB";

function MovieCoverPage() {
    let { movieName, id } = useParams();

    let [movieData, setMovieData] = useState({});
    let [cast, setCast] = useState([]);
    let [crew, setCrew] = useState([]);
    let [language, setLanguage] = useState([]);

    // Carousel
    // const [scrollX, setScrollX] = useState(0);

    // const handleScroll = (direction) => {
    //     const scrollAmount = 200; // Adjust as needed
    //     if (direction === 'left') {
    //         setScrollX((prev) => prev - scrollAmount);
    //     } else if (direction === 'right') {
    //         setScrollX((prev) => prev + scrollAmount);
    //     }
    // };

    useEffect(() => {
        fetchMovieData();
    }, [movieName, id])

    const fetchMovieData = async () => {
        try {
            const response = await axios.get(`${baseURL}/movie/${id}`);
            // console.log(response.data);
            setMovieData(response.data);
            setCast(response.data.cast);
            setCrew(response.data.crew);
            setLanguage(response.data.language);
        } catch (err) {
            console.error("Error in fetching data", err);
        }
    }
    return (
        <div>
            <Banner
                name={movieName}
                bgImg={movieData.bgimage}
                language={language}
                certificate={movieData.certificate}
                releaseDate={movieData.releaseDate}
                genre={movieData.genre}
                duration={movieData.duration}
                ratings={movieData.ratings}
                poster={movieData.poster}
            />
            <div className='my-10 mx-24 pb-8 border-b'>
                <h1 className='my-3 text-2xl font-bold text-gray-900'>About the movie</h1>
                <p className='text-md font-light text-gray-700'>{movieData.desc}</p>
            </div>
            <div className='my-10 mx-24 pb-8 border-b'>
                <h1 className='my-3 text-2xl font-bold text-gray-900'>Cast</h1>
                <div className='flex gap-10'>
                    {cast.map((data, index) => (
                        <div className='w-32 mt-3' key={index}>
                            <img className='rounded-full' src={data.img} alt="" />
                            <div className='mt-3 flex flex-col text-center w-full'>
                                <h1 className='text-gray-900'>{data.name}</h1>
                                <h3 className='text-gray-700 font-light text-sm'>as {data.role}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className='my-10 mx-24 pb-8 border-b'>
                <h1 className='my-3 text-2xl font-bold text-gray-900'>Crew</h1>
                <div className='flex gap-10'>
                    {crew.map((data, index) => (
                        <div className='w-32 mt-3' key={index}>
                            <img className='rounded-full' src={data.img} alt="" />
                            <div className='mt-3 flex flex-col text-center w-full'>
                                <h1 className='text-gray-900'>{data.name}</h1>
                                <h3 className='text-gray-700 font-light text-sm'>as {data.role}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieCoverPage