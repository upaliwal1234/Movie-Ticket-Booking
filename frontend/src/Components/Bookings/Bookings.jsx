import { useEffect, useState } from "react";
import baseURL from "../../DB";
import { tokenCheck } from "../../../helperToken";
import axios from "axios";
function Bookings() {

    const [bookingHistory, setBookingHistory] = useState([]);
    const user = tokenCheck();
    console.log(user);
    const fetchBookingHistory = async () => {
        try {
            const { data } = await axios.get(`${baseURL}/bookings/${user.id}`);
            console.log(data);
            if (!data) {
                throw new Error('Failed to fetch booking history');
            }
            setBookingHistory(data);
        } catch (error) {
            console.error('Error fetching booking history:', error);
        }
    };
    useEffect(() => {
        fetchBookingHistory();
    }, []);

    return (
        <div className="min-h-screen bg-gray-300 ">
            <div className=" py-10 flex flex-row justify-center">
                <div className="bg-white w-8/12 rounded-lg shadow-lg relative overflow-x-auto py-5">
                    <h2 className="text-center font-semibold text-3xl my-3">Booking History</h2>
                    {bookingHistory.length > 0 ? (
                        // <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Movie name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Show Time
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        View Ticket
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookingHistory.map((booking, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {booking.movieName}
                                        </th>
                                        <td className="px-6 py-4">
                                            {booking.date}
                                        </td>
                                        <td className="px-6 py-4">
                                            {booking.timing}
                                        </td>
                                        <td className="px-6 py-4">
                                            {booking.price}
                                        </td>
                                        <td className="px-6 py-4 text-blue-800 hover:underline">
                                            Ticket
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No booking history available.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Bookings