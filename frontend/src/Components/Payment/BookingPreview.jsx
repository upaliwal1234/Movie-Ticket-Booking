import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
function BookingPreview() {
    const location = useLocation();
    // const { data } = location.state || {}
    const parameters = {
        showId: "66210cade2293382b3146455",
        seats: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10']
    }

    const fetchData = async () => {
        try {
            const { data } = await axios.get()
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="flex items-center justify-center bg-gray-200 backdrop-blur-sm">
            <div id='container' className="flex w-full flex-col items-center py-10 sm:justify-center">
                <div className="w-full max-w-md rounded-md  bg-white px-6 py-6 shadow-md sm:rounded-lg">
                    <div className='flex justify-between mb-5'>
                        <h1 className='text-orange-300 text-3xl font-semibold'>Booking Summary</h1>
                    </div>

                    <div className='flex justify-center'>
                        <h1></h1>
                        <h1></h1>
                        <h1></h1>
                        <h1></h1>
                    </div>

                    <div className="text-md mt-4 text-zinc-600 ">
                        Don&apos;t have an account?{' '}
                        <span>
                            <Link
                                to="/signup"
                                className="text-red-600 hover:text-red-800 hover:underline "
                            >
                                Register
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingPreview