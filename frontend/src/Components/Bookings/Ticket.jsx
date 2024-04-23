import React from 'react';

function Ticket() {
  return (
    <div className="border border-gray-300 p-4 max-w-md mx-auto my-8 rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Movie Ticket</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 ml-5">
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 mb-2">Movie Name:</h2>
            <p className="text-lg text-gray-800">movieName</p>
          </div>
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 mb-2">Theater:</h2>
            <p className="text-lg text-gray-800">cinemaName</p>
          </div>
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 mb-2">Date:</h2>
            <p className="text-lg text-gray-800">date</p>
          </div>
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 mb-2">Seat:</h2>
            <p className="text-lg text-gray-800">seats</p>
          </div>
        </div>
        <div className="col-span-1 ml-4">
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 mb-2">Ticket Number:</h2>
            <p className="text-lg text-gray-800">ticketNumber</p>
          </div>
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 mb-2">Address:</h2>
            <p className="text-lg text-gray-800">address</p>
          </div>
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 mb-2">Price:</h2>
            <p className="text-lg text-gray-800">price</p>
          </div>
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 mb-2">Timing:</h2>
            <p className="text-lg text-gray-800">timing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
