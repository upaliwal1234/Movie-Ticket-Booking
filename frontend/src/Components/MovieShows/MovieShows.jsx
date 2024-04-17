import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import baseURL from "../../DB";

function MovieShows() {

    const { movieName, date } = useParams();

    const [data, setData] = useState(null);

    const [map2, setMap2] = useState([]);
    const [map1, setMap1] = useState([]);

    const fetchDate = async () => {
        try {
            let response = await axios.get(`${baseURL}/movie/banner/${movieName}/${date}`);
            console.log(response.data);
            let map = new Map();
            let map1 = new Map();
            for (let x of response.data) {
                if (!map.has(x.cinema._id)) {
                    map.set(x.cinema._id, []);
                    map1.set(x.cinema._id, {});
                }
                map.get(x.cinema._id).push(x);
                map1.set(x.cinema._id, x.cinema)

            }
            setData(response.data);
            setMap2([...map.values()]);
            setMap1([...map1.values()]);
        } catch (err) {
            console.error(err);
        }
    }

    let arr = date.split('-');
    arr.reverse().join('-');
    let dt = new Date(arr);
    const [selectedDate, setSelectedDate] = useState(dt);
    const navigate = useNavigate();
    const handleDateChange = (daysToAdd) => {
        const newDate = new Date();
        newDate.setHours(0, 0, 0, 0);
        newDate.setDate(selectedDate.getDate() + daysToAdd);
        setSelectedDate(newDate);
        let nD = newDate.toLocaleDateString().split('/').join('-');
        navigate(`/buytickets/${movieName}/${nD}`)
    };

    const handleClick = (show) => {
        // event.preventDefault();
        // navigate(`/buytickets/${show.movieName}/${show.date}/show/${show.id}`);
    }
    console.log(map1);
    useEffect(() => {
        fetchDate();
    }, [movieName, date])
    return (
        <div>
            <div className="py-8 px-28 border ">
                <h1 className="text-4xl">{movieName}</h1>
            </div>
            <div className="border-bottom py-4 px-28">
                <div className="flex items-center">

                    <button
                        className={`text-blue-500 p-4 border-gray-400 shadow-md border rounded-md hover:text-blue-700 focus:outline-none ${selectedDate.getDate() == (new Date()).getDate() ? 'bg-blue-gray-300 hover:none' : ''}`}
                        onClick={() => handleDateChange(-1)} disabled={selectedDate.getDate() == (new Date()).getDate() ? true : false}
                    >
                        &lt;
                    </button>
                    <div className="ml-4 w-72">
                        <h1 className="text-lg font-bold mb-2 text-black">
                            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </h1>
                        <p className="text-black">
                            {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                        </p>
                    </div>
                    <button
                        className={`ml-4 border-gray-400 border p-4 shadow-md rounded-md text-blue-500 hover:text-blue-700 focus:outline-none ${selectedDate.getDate() > (new Date()).getDate() + 6 ? 'bg-blue-gray-300 hover:none' : ''}`}
                        onClick={() => handleDateChange(1)} disabled={selectedDate.getDate() > (new Date()).getDate() + 6 ? true : false}
                    >
                        &gt;
                    </button>
                </div>
            </div>
            <div className=" py-2 px-20 bg-gray-200 h-[400px]">
                <div className="bg-white">
                    <div className="flex text-xs justify-end px-4 py-2 items-center gap-4 font-extralight border-b">
                        <div className="flex items-center gap-2">
                            <div className=" w-2.5 h-2.5 bg-light-green-400 rounded-full" />
                            <h1>Available</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className=" w-2.5 h-2.5 bg-red-400 rounded-full" />
                            <h1>Fast Filling</h1>
                        </div>
                    </div>

                    <div>
                        {map1.map((item, index) => {
                            let shows = map2[index]
                            return (
                                <div key={index} className="border-b min-h-24 py-5 px-12 flex gap-20">
                                    <div>
                                        <h1 className="text-sm font-bold">{item.cinemaName}</h1>
                                        <h2 className="text-sm">{item.address}</h2>
                                    </div>
                                    <div className="flex gap-4">
                                        {shows.map((itm, idx) => {
                                            // console.log(itm);
                                            return (
                                                <button key={idx} onClick={handleClick(itm)} className="border border-gray-500 rounded my-1 px-10 py-1 flex justify-center items-center text-sm font-light text-green-500">
                                                    {itm.timing}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MovieShows