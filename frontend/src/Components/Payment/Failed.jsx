import React from 'react';
import failed from '../../../public/failed.svg';
import { Link } from 'react-router-dom';

function Failed() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <img src={failed} className="h-32 mb-6" alt="Failed" />
      <h2 className="text-2xl font-bold mb-4">Booking Failed!</h2>
      <p className="text-lg mb-4">We're sorry, but your booking could not be completed.</p>
      <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
    </div>
  );
}

export default Failed;
