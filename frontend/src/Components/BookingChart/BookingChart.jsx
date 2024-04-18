/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import baseURL from '../../DB';


const ToggleButton = ({ children, rowIndex, colIndex, seating, setSeating, selectedSeats, setSelectedSeats }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        const seatKey = `${rowIndex}-${colIndex}`;
        if (selectedSeats.includes(seatKey)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatKey));
        } else {
            setSelectedSeats([...selectedSeats, seatKey]);
        }
        setIsClicked(!isClicked);
    };


    return (
        <button
            className={`m-[2px] py-[2px] px-[5px] w-[30px] h-[30px] text-[10px] rounded-sm
            ${!seating[rowIndex][colIndex].isSeat ? 'bg-transparent border-none text-transparent hover:bg-none' : ' border'}
             ${!seating[rowIndex][colIndex].isAvailable ? 'bg-gray-200 text-white' : 'hover:bg-green-400 hover:text-white border-green-400 '} 
             ${isClicked ? 'bg-green-400 text-white' : ''} `}
            onClick={handleClick}
            disabled={!seating[rowIndex][colIndex].isSeat || !seating[rowIndex][colIndex].isAvailable}
        >
            {children}
        </button>
    );
};


export default function BookingChart() {
    const { movieName, date, id } = useParams();
    const [seating, setSeating] = useState(null);
    const [show, setShow] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);

    console.log(selectedSeats);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${baseURL}/show/${id}`);
                if (data) {
                    setShow(data);
                    setSeating(data.seating);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {show ? (
                <div className='container mx-auto px-[9.5rem] mb-1 mt-4'>
                    <h1 className='text-3xl font-semibold'>{show.movieName}</h1>
                    <p>{show.date}, {show.timing}</p>
                </div>
            ) : (<></>)
            }
            < div className='flex flex-row bg-white justify-center gap-10 my-2 text-gray-700 text-sm'>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='w-[18px] h-[18px] border border-green-400 rounded-sm'></div>
                    <h1>Available</h1>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='w-[18px] h-[18px] border border-green-400 bg-green-400 rounded-sm'></div>
                    <h1>Selected</h1>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='w-[18px] h-[18px] bg-gray-300  rounded-sm'></div>
                    <h1>Sold</h1>
                </div>
            </ div>
            <div className='container mx-auto'>
                <div className='overflow-x-auto'>
                    <table className='border-separate border-spacing-[2px] table-auto mx-auto'>
                        <tbody>
                            {seating && seating.map((itm, index) => (
                                <tr key={index}>
                                    {itm && itm.map((item, idx) => (
                                        <td key={idx} className="text-sm text-center text-green-400">
                                            <ToggleButton key={`${idx}-${index}`} rowIndex={index} colIndex={idx} setSeating={setSeating} seating={seating} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}>
                                                {String.fromCharCode(65 + index) + (idx + 1)}
                                            </ToggleButton>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='container mx-auto w-[400px] bg-blue-gray-200 flex justify-center border mt-8'>
                <h1>Screen this Way</h1>
            </div>
        </>
    );
}
