import React from 'react';
import { Link } from 'react-router-dom';

export default function Shows() {
  return (
    <div className="flex flex-col items-center mt-[2rem]">
      {/* Search */}
      <form className="max-w-[70%] flex items-center">
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
            </svg>
          </div>
          <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem] pl-10 py-2.5 pr-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Shows..." required />
        </div>
        <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg className="w-4 h-4 me-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>Search
        </button>
      </form>

      {/* Add New Show Button */}
      <Link to="/addshow">
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-5">Add New Show</button>
      </Link>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 max-w-[60%]">
        {/* Card Example */}
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Movie Name</h5>
          <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">Start Time: 10:00 AM</p>
          <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">End Time: 12:00 PM</p>
          <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">Date: 2024-04-10</p>
          <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">Price: $10</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit
          </a>
        </div>
        {/* End of Card Example */}
        
        {/* Additional Movie Cards */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Movie Name {index + 2}</h5>
            <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">Start Time: 11:00 AM</p>
            <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">End Time: 1:00 PM</p>
            <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-400">Date: 2024-04-1{index + 2}</p>
            <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">Price: ${(index + 2) * 5}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Edit
            </a>
          </div>
        ))}
        {/* End of Additional Movie Cards */}
      </div>
    </div>
  );
}
