import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import baseURL from '../../DB';

// const ToggleButton = ({ children, rowIndex, colIndex, seating, setSeating }) => {
// const [isClicked, setIsClicked] = useState(false);


    // function generateRows(row, col) {
    //     return Array.from({ length: col }, (_, rowIndex) => {
    //         return (
    //             <tr key={rowIndex}>
    //                 {Array.from({ length: row }, (_, colIndex) => {
    //                     const seat = {
    //                         isseat: true, // Defaulting to true for demonstration
    //                         isavailable: true,
    //                         isbooked: false
    //                     };
    //                     // Calculate seat number based on rowIndex and colIndex
    //                     const seatNumber = String.fromCharCode(65 + rowIndex) + (colIndex + 1);
    //                     // Render seat only if isseat is true
    //                     return seat.isseat ? (
    //                         <td key={colIndex} className="text-sm text-center">
    //                             <ToggleButton key={`${rowIndex}-${colIndex}`} seat={seat}>
    //                                 {seatNumber}
    //                             </ToggleButton>
    //                         </td>
    //                     ) : null;
    //                 })}
    //             </tr>
    //         );
    //     });
    // }
    

    // const ToggleButton = ({ children, seat }) => {
    //     const [isClicked, setIsClicked] = useState(false);

    //     const handleClick = () => {
    //         if (seat.isavailable) {
    //             setIsClicked(!isClicked);
    //         }
    //     };

    //     return (
    //         <button
    //             className={`m-[2px] py-[2px] px-[5px] ${isClicked ? 'bg-gray-400' : 'hover:bg-green-100'} border-2 rounded-md`}
    //             onClick={handleClick}
    //             disabled={!seat.isseat || !seat.isavailable}
    //         >
    //             {children}
    //         </button>
    //     );
    // };

    export default function BookingChart() {
        const { movieName, date, id  } = useParams();
        const [seatingData, setSeatingData] = useState(null);
        const [isClicked, setIsClicked] = useState(false);


        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`${baseURL}/show/${id}`);
                    const seating = response.data[0].seating;
                    setSeatingData(seating);
                    console.log(seating);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
        }, [id]);

        return (
            <>
                <div className='container mx-auto px-[9.5rem] mb-[3rem] mt-4'>
                    <h1 className='text-3xl font-semibold'>Fighter</h1>
                    <p>Date:14 oct 2020</p>
                </div>
                <div className='container mx-auto'>
                    <div className='overflow-x-auto'>
                        <table className='border-separate border-spacing-[2px] table-auto mx-auto'>
                            <tbody>
                            {seatingData && seatingData.map((row, index) => (
                                <tr key={index}>
                                    {row && row.map((seat, idx) => (
                                        <td key={`${index}-${idx}`} className="text-sm text-center">
                                        {
                                            !seat.isSeat ? (<button>&nbsp;&nbsp;</button>) : (
                                                <button className={`m-[2px] py-[2px] px-[5px]  ${isClicked ? 'bg-gray-400' : 'hover:bg-green-100'} border-2 rounded-md`}>
                                                {String.fromCharCode(65 + index) + (idx + 1)}
                                                </button>
                                            )
                                        }
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
