import React from 'react';

function CinemaProfilePage() {
  return (
    <div className="text-red-500 container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Cinema Profile Page</h1>
      <div className="flex flex-col mb-4">
        <label htmlFor="cinemaName" className="mb-2">Cinema Name</label>
        <input type="text" id="cinemaName" placeholder='Enter your Cinema name' className="border rounded-md px-4 py-2" />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="cinemaAddress" className="mb-2">Cinema Address</label>
        <textarea id="cinemaAddress"placeholder='Enter your Cinema Address'  className="border rounded-md px-4 py-2 h-32"></textarea>
      </div>
      <div className="flex justify-between">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">Save</button>
        <button className="bg-gray-400 text-white px-4 py-2 rounded-md">Cancel</button>
      </div>
    </div>
  );
}

export default CinemaProfilePage;
