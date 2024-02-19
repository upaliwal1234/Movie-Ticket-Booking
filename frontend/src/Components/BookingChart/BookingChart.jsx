import React, { useState } from 'react'


function generateRows(row, col) {
    return Array.from({ length: col }, (_, rowIndex) => {
        return (
            <tr key={rowIndex}>
                {Array.from({ length: row }, (_, colIndex) => (
                    <td key={colIndex} className="text-sm text-center">
                        <ToggleButton key={`${rowIndex}-${colIndex}`}>{`${rowIndex + 1},${colIndex + 1}`}</ToggleButton>
                    </td>
                ))}
            </tr>
        );
    });
}

const ToggleButton = ({ children }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <button
            className={`m-[2px] py-[2px] px-[5px] ${isClicked ? ' ' : 'hover:bg-green-100'} border-2 rounded-md ${isClicked ? 'bg-gray-400' : ''}`}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default function BookingChart() {


    return (
        <>
            <div className='container mx-auto px-[9.5rem] mb-[3rem] mt-4' >
                <h1 className='text-3xl font-semibold'>Fighter</h1>
                <p>Date:14 oct 2020</p>
            </div>
            <div className='container mx-auto '>
                <div className='grid grid-cols-3 grid-rows-2 gap-2  mx-[5rem]' >
                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="border-separate border-spacing-[2px] table-auto mx-auto" >
                                <tbody>
                                    {generateRows(6, 6)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto ">
                        <div className="overflow-x-auto">
                            <table className="border-separate border-spacing-[3px] table-auto mx-auto" >
                                <tbody>
                                    {generateRows(9, 6)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="border-separate border-spacing-[3px] table-auto mx-auto" >
                                <tbody>
                                    {generateRows(6, 6)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="border-separate border-spacing-[3px] table-auto mx-auto" >
                                <tbody>
                                    {generateRows(6, 6)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="border-separate border-spacing-[3px] table-auto mx-auto" >
                                <tbody>
                                    {generateRows(9, 6)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="border-separate border-spacing-[3px] table-auto mx-auto" >
                                <tbody>
                                    {generateRows(6, 6)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto w-[400px] bg-blue-gray-200 flex justify-center border mt-8'>
                <h1>Screen this Way</h1>
            </div>


        </>
    )
}
