/* eslint-disable react/prop-types */
import { useState } from 'react';

const ToggleButton = ({ children, rowIndex, colIndex, seating, setSeating }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        const updatedSeatingData = seating.map((row, i) => {
            if (i === rowIndex) {
                return row.map((seat, j) => {
                    if (j === colIndex) {
                        return {
                            ...seat,
                            isSeat: !seat.isSeat, // Toggle isSeat attribute
                            isAvailable: !seat.isAvailable
                        };
                    }
                    return seat;
                });
            }
            return row;
        });
        setSeating(updatedSeatingData);
        setIsClicked(!isClicked);
    };

    return (
        <button
            className={`m-[2px] py-[2px] px-[5px] ${isClicked ? 'bg-gray-400' : 'hover:bg-green-100'} border-2 rounded-md`}
            onClick={handleClick}
        // disabled={!seating[rowIndex][colIndex].isSeat}
        >
            {children}
        </button>
    );
};

export default function SeatingChart({ seating, setSeating }) {
    return (
        <>
            <div className='container mx-auto px-[9.5rem] mb-[3rem] mt-4'>
                <h1 className='text-3xl font-semibold'>Seating Chart</h1>
                <p>Please select seats which you do not want to show</p>
            </div>
            <div className='container mx-auto'>
                <div className='overflow-x-auto'>
                    <table className='border-separate border-spacing-[2px] table-auto mx-auto'>
                        <tbody>
                            {seating && seating.map((itm, index) => (
                                <tr key={index}>
                                    {itm && itm.map((item, idx) => (
                                        <td key={idx} className="text-sm text-center">
                                            <ToggleButton key={`${idx}-${index}`} rowIndex={index} colIndex={idx} setSeating={setSeating} seating={seating}>
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