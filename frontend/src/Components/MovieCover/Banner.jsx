/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import MovieCard from '../Movies/MovieCard'


function Banner({ name, bgImg, language, certificate, releaseDate, genre, duration, ratings, poster }) {

    const handleClick = () => {
        navigate('/MovieCinema');
    }

    const navigate = useNavigate()
    let date = new Date().toLocaleDateString();
    date = date.split('/').join('-');
    // console.log(date);
    const handleBookTicket = (e) => {
        e.preventDefault();
        navigate(`/buytickets/${name}/${date}`)
    }

    return (
        <div>
            {/* <div className={`bg-[url(${bgImg})]  h-[350px] md:h-[500px] bg-no-repeat bg-cover bg-center relative w-full`} > */}
            <div style={{ backgroundImage: `url(${bgImg})` }} className={`h-[350px] md:h-[500px] bg-no-repeat bg-cover bg-center relative w-full`} >
                <div className='flex px-20 py-5 h-full bg-black bg-opacity-70'>
                    <div className='w-[300px] flex justify-center items-center'>
                        <MovieCard
                            image={poster}
                        />
                    </div>
                    <div className='flex flex-col justify-center w-full py-12 px-8'>
                        <div>
                            <h1 className=' text-gray-200 text-4xl font-bold'>{name}</h1>
                        </div>
                        <div className='mt-8 flex gap-2'>
                            <div className='w-8 fill-yellow-700'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                            </div>
                            <div className='flex text-gray-200 gap-2'>
                                <h1 className='font-bold text-3xl'>{ratings}/10</h1>
                                <h2 className='text-md pt-2 font-light'>(IMDb)</h2>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className='flex gap-1'>
                                {language.map((data, index) => (
                                    <div className='bg-gray-300 text-gray-900 w-fit rounded-sm text-md font-light px-2 my-3' key={index}>{data}</div>
                                ))}
                            </div>
                            <div>
                                <h1 className='text-gray-200'> {duration} · {genre} · {certificate} · {releaseDate}</h1>
                            </div>
                        </div>
                        <div className='my-4'>
                            <button onClick={handleBookTicket} className='text-gray-200 text-md bg-orange-600 py-1 px-7 sm:py-2 sm:px-10 md:py-3 md:px-14 rounded'> Book tickets</button>
                        </div>

                    </div>
                </div>
            </div >
        </div>
    )
}

export default Banner