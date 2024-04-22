import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../DB';
import { useState } from 'react';
function BookingPreview() {
    const location = useLocation();
    // const { data } = location.state || {}
    const parameters = {
        showId: "66210cade2293382b3146455",
        seats: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10']
    }
    const [showData, setShowData] = useState(null);
    const fetchData = async () => {
        try {
            if (!parameters.showId) {
                return;
            }
            const { data } = await axios.get(`${baseURL}/show/${parameters.showId}`);
            if (data) {
                setShowData(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    // console.log(showData);
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 backdrop-blur-sm">
            <div className="flex w-full flex-col items-center  sm:justify-center" >
                <div className="w-full max-w-md rounded-md  bg-white px-6 py-6 shadow-md sm:rounded-lg">
                    <div className='flex justify-between mb-5'>
                        <h1 className='text-orange-300 text-3xl font-semibold'>Booking Summary</h1>
                    </div>
                    {showData ? (

                        <div className='flex flex-col justify-start'>
                            <h1>{showData.movieName}</h1>
                            <h1>{showData.cinema.cinemaName}</h1>
                            <h1>{showData.cinema.address}</h1>
                            <h1>{showData.date}, Time: {showData.timing}</h1>
                        </div>
                    ) : (<></>)}

                    <Link to='/' className="text-md mt-4 text-zinc-600 flex bg-orange-400 hover:bg-orange-700 p-2 rounded flex-row justify-between">
                        <div>
                            <h1 className='font-semibold text-white'>
                                TOTAL:
                            </h1>
                        </div>
                        <div>
                            <h1
                                className="text-white font-bold hover:underline "
                            >
                                Proceed
                            </h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default BookingPreview