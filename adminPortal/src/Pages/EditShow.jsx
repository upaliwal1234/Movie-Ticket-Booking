import { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../DB';
import { CinemaState } from '../Context/CinemaProvider';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SeatingChart from '../Components/SeatingChart';

export default function EditShow() {
    // State variables for each input field

    const location = useLocation();
    const { data } = location.state || {};
    const [movieName, setMovieName] = useState(data.movieName);
    const [startTime, setStartTime] = useState(data.timing);
    const [endTime, setEndTime] = useState('');
    let [date, setDate] = useState(data.date);
    const [price, setPrice] = useState(data.price);

    console.log("Initial",date);
    useEffect(()=>{
        let reverseDate =  data.date.split('-').reverse().join('-');
        console.log("After reversing",reverseDate)
        setDate(reverseDate);
    },[]);
    const arr = [];
    for (let i = 0; i < 12; i++) {
        arr[i] = new Array();
        for (let j = 0; j < 22; j++) {
            arr[i].push({
                isSeat: true,
                isAvailable: true,
                isBooked: false,
            });
        }
    }

    const [seating, setSeating] = useState(data.seating);

    const { user } = CinemaState();

    const navigate = useNavigate();



    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    };

    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    };

    const handleDateChange = (event) => {
        console.log(event.target.value);
        setDate(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.patch(`${baseURL}/admin/movie/editShow/`, {
                timing: startTime,
                date,
                movieName,
                seating: seating,
                price,
                cinema: user.id,
                id: data._id

            })
            if (response) {
                console.log(response.data);
                navigate('/shows');
            }
        } catch (error) {
            console.log(error);
        }
        // console.log('Movie Name:', movieName);
        // console.log('Start Time:', startTime);
        // console.log('End Time:', endTime);
        // console.log('Date:', date);
        // console.log('Price:', price);
    };
    return (
        <div className="flex justify-center my-10">
            <form onSubmit={handleClick} className="w-3/4 p-8 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl mb-4 text-center text-red-500">Edit Show</h2>
                <div className="w-full mb-4">
                    <label htmlFor="movieName" className="block mb-1"></label>
                    <input className='w-full p-3' value={movieName} disabled />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-4 relative z-0 group">
                        <label htmlFor="timing" className="block mb-1">
                            Start Time:
                        </label>
                        <input
                            type="time"
                            id="timing"
                            name="timing"
                            value={startTime}
                            onChange={handleStartTimeChange}
                            className="border w-full p-2"
                            placeholder="Enter start time..."
                            required
                        />

                    </div>
                    <div className="mb-4 relative z-0 group">
                        <label htmlFor="endTime" className="block mb-1">
                            End Time:
                        </label>
                        <input
                            type="time"
                            id="endTime"
                            name="endTime"
                            value={endTime}
                            onChange={handleEndTimeChange}
                            className="border w-full p-2"
                            placeholder="Enter end time..."
                            required
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="mb-4 relative z-0 group">
                        <label htmlFor="date" className="block mb-1">
                            Date (YYYY-MM-DD):
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={date}
                            onChange={handleDateChange}
                            className="border w-full p-2"
                            placeholder="Enter date..."
                            required
                        />
                    </div>
                    <div className="mb-4 relative z-0 group">
                        <label htmlFor="price" className="block mb-1">
                            Price:
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={price}
                            onChange={handlePriceChange}
                            className="border w-full p-2"
                            placeholder="Enter price..."
                            required
                        />
                    </div>
                </div>
                <SeatingChart seating={seating} setSeating={setSeating} />
                <button

                    type="submit"
                    className="h-12 w-42 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mb-4"
                >
                    Save
                </button>
            </form>
        </div>
    );
}
