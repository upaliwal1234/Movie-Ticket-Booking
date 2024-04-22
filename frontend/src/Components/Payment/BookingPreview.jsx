import { useEffect } from 'react';
import { json, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../../DB';
import { useState } from 'react';
function BookingPreview() {
    const location = useLocation();
    const { showId, seats } = location.state || {}
    // const parameters = {
    //     showId: "66210cade2293382b3146455",
    //     seats: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10']
    // }
    const navigate = useNavigate();

    let [showData, setShowData] = useState(null);
    const fetchData = async () => {
        try {
            if (!showId) {
                return;
            }
            const { data } = await axios.get(`${baseURL}/show/${showId}`);
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

    const handleSuccess = async () => {
        try {
            let seating = showData.seating;
            seats.map((seat, index) => {
                let arr = seat.split('-');
                // console.log(arr);
                let row = Number(arr[0]);
                let col = Number(arr[1]);
                seating[row][col].isAvailable = false;
                seating[row][col].isBooked = true;
            })
            let { data } = await axios.patch(`${baseURL}/booking/success`, {
                showId, seating
            })
            if (data) {
                navigate('/success');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const receiptID = "movieProject";
    // const amount = seats.length * showData.price;
    const currency = "INR";

    const paymentHandler = async (e, amount) => {
        console.log(amount);
        const response = await fetch(`${baseURL}/booking`, {
            method: "POST",
            body: JSON.stringify({
                amount,
                currency,
                receipt: receiptID
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const order = await response.json();
        console.log(order);

        var options = {
            "key": "rzp_test_5gyxFQ3rVGnviW", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            "name": "MOVIEMANIA", //your business name
            "description": "Test Transaction",
            "image": "https://i.ibb.co/nmP4kJm/Logo-removebg-preview.png",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response) {
                const body = {
                    ...response,
                };

                const validateRes = await fetch(`${baseURL}/booking/validate`, {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const jsonRes = await validateRes.json();
                console.log(jsonRes);
                if (jsonRes.msg === "success") {

                    handleSuccess();
                }
            },
            // "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
            //     "name": "Utkarsh Paliwal", //your customer's name
            //     "email": "utkarsh.paliwal@example.com",
            //     "contact": "9000000000"  //Provide the customer's phone number for better conversion rates 
            // },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#FFA726"
            },
            "options": {
                "checkout": {
                    "method": {
                        "netbanking": "1",
                        "card": "1",
                        "upi": "1",
                        "wallet": "1"
                    }
                }
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            // alert(response.error.code);
            // alert(response.error.description);
            // alert(response.error.source);
            // alert(response.error.step);
            // alert(response.error.reason);
            // alert(response.error.metadata.order_id);
            // alert(response.error.metadata.payment_id);
            navigate('/failed')
        });
        rzp1.open();
        e.preventDefault();
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 backdrop-blur-sm">
            <div className="flex w-full flex-col items-center  sm:justify-center" >
                <div className="w-full max-w-md rounded-md  bg-white px-6 py-6 shadow-md sm:rounded-lg">
                    <div className='flex justify-between mb-5'>
                        <h1 className='text-orange-300 text-3xl font-semibold'>Booking Summary</h1>
                    </div>
                    {showData ? (
                        <div>
                            <div className='flex flex-col justify-start'>
                                <h1 className='font-bold text-xl'>{showData.movieName}</h1>
                                <h1 className='mt-2'>{showData.cinema.cinemaName}</h1>
                                <h1 >{showData.cinema.address}</h1>
                                <h1 className='mt-2 font-semibold'> {showData.date}, Time: {showData.timing}</h1>
                            </div>
                            <div className='mt-3'><h1 className='font-bold'>Seats-</h1></div>
                            <div className='flex flex-row flex-wrap gap-2'>
                                {seats && seats.map((data, index) => {
                                    let arr = data.split('-');
                                    console.log(arr);
                                    let row = Number(arr[0]);
                                    let col = Number(arr[1]);
                                    return (
                                        <h1 key={index}>
                                            {String.fromCharCode(65 + row) + (col + 1)}
                                        </h1>
                                    )
                                })}
                            </div>
                            <button onClick={(e) => paymentHandler(e, seats.length * showData.price * 100)} className="text-md mt-4 w-full text-zinc-600 flex bg-orange-400 hover:bg-orange-700 p-2 rounded flex-row justify-between">
                                <div>
                                    <h1 className='font-semibold text-white'>
                                        TOTAL: {seats.length * showData.price}
                                    </h1>
                                </div>
                                <div>
                                    <h1
                                        className="text-white font-bold hover:underline mr-3 "
                                    >
                                        Proceed
                                    </h1>
                                </div>
                            </button>
                        </div>
                    ) : (<></>)}
                </div>
            </div>
        </div >
    )
}

export default BookingPreview