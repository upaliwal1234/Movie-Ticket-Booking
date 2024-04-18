import React, { useState } from 'react';

function generateRows(row, col) {
    return Array.from({ length: col }, (_, rowIndex) => {
        return (
            <tr key={rowIndex}>
                {Array.from({ length: row }, (_, colIndex) => {
                    const seat = {
                        isseat: true, // Defaulting to true for demonstration
                        isavailable: true,
                        isbooked: false
                    };
                    // Calculate seat number based on rowIndex and colIndex
                    const seatNumber = String.fromCharCode(65 + rowIndex) + (colIndex + 1);
                    // Render seat only if isseat is true
                    return seat.isseat ? (
                        <td key={colIndex} className="text-sm text-center">
                            <ToggleButton key={`${rowIndex}-${colIndex}`} seat={seat}>
                                {seatNumber}
                            </ToggleButton>
                        </td>
                    ) : null;
                })}
            </tr>
        );
    });
}


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
                                {/* {generateRows(24, 12)} */}
                                hello
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
