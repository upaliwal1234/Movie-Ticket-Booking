import React,{useState} from 'react'

export default function CinemaInfo() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (daysToAdd) => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + daysToAdd);
    setSelectedDate(newDate);
  };

  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const handlePriceChange = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };

  const priceRanges = [
    '0-100',
    '100-200',
    '200-300',
    '300-400',
    '400-500',
    '500-600',
    '600-700',
  ];
  return (
    <div className='container justify-center mx-auto mt-3'>
    <div className="bg-white p-6 rounded-md border-2">
      <h1 className="text-2xl font-bold mb-2 text-black">Cinepolis: Pacific NSP2, Delhi</h1>
      <p className="text-black">NSP Pacific Mall, NSP Metro Station, Pitampura, Delhi, NCR 110034, India</p>
    </div>
    <div className="bg-white p-6 rounded-md border-2 flex items-center justify-between">
      <div className="flex items-center">
        <button
          className="text-blue-500 p-4 border-gray-400 shadow-md border rounded-md hover:text-blue-700 focus:outline-none"
          onClick={() => handleDateChange(-1)}
        >
          &lt;
        </button>
        <div className="ml-4">
          <h1 className="text-lg font-bold mb-2 text-black">
            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </h1>
          <p className="text-black">
            {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </p>
        </div>
        <button
          className="ml-4 border-gray-400 border p-4 shadow-md rounded-md text-blue-500 hover:text-blue-700 focus:outline-none"
          onClick={() => handleDateChange(1)}
        >
          &gt;
        </button>
      </div>

      <div className="flex items-center">
      <select
        value={selectedPriceRange}
        onChange={(e) => handlePriceChange(e.target.value)}
        className="bg-gray-100 text-black p-2 rounded-md focus:outline-none"
      >
        <option value="">Select Price Range</option>
        {priceRanges.map((range) => (
          <option key={range} value={range}>
            {range}
          </option>
        ))}
      </select>
    </div>
    </div>
      <div>
        rtyjknm
      </div>
    </div>
  )
}
