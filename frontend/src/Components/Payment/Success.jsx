import React from 'react';
import success from '../../icons/success.svg';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <img src={success} className="h-32 mb-6" alt="Success" />
      <h2 className="text-2xl font-bold mb-4">Booking Successful!</h2>
      <p className="text-lg mb-4">Your booking has been successfully completed.</p>
      <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
    </div>
  );
}

export default Success;
