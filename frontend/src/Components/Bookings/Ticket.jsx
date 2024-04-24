/* eslint-disable react/prop-types */
function Ticket({ visible, onClose, ticketData }) {
  const handleOnClose = (e) => {
    console.log(e.target.id);
    if (e.target.id == 'container') {
      onClose();
    }
  }

  if (!visible) {
    return null;
  }
  return (
    <div className="flex z-[100] items-center justify-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div onClick={handleOnClose} id='container' className="flex w-full flex-col items-center py-10 sm:justify-center">
        <div className="border border-gray-300 p-4 w-[450px] mx-auto my-8 rounded-lg shadow-lg bg-white">
          <div className="flex justify-between mb-5">
            <h1 className="text-3xl font-bold ml-28 text-center text-gray-800">Movie Ticket</h1>
            <button onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-5 mr-3 fill-gray-900'><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 ml-5">
              <div className="mb-6">
                <h2 className="font-bold text-gray-600 mb-2">Movie Name:</h2>
                <p className="text-lg text-gray-800">{ticketData.movieName}</p>
              </div>
              <div className="mb-6">
                <h2 className="font-bold text-gray-600 mb-2">Cinema:</h2>
                <p className="text-lg text-gray-800">{ticketData.cinemaName}</p>
              </div>
              <div className="mb-6">
                <h2 className="font-bold text-gray-600 mb-2">Date:</h2>
                <p className="text-lg text-gray-800">{ticketData.date}</p>
              </div>
              <div className="mb-6">
                <h2 className="font-bold text-gray-600 mb-2">Seat:</h2>
                <div className="flex flex-row flex-wrap">
                  {ticketData.seats.map((data, index) => (
                    <p key={index} className="text-lg text-gray-800">{data}&nbsp;</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1 ml-4">
              <div className="mb-6">
                <h2 className="font-bold text-gray-600 mb-2">Ticket ID:</h2>
                <p className="text-lg text-gray-800">{(ticketData.movieName).substring(0, 3) + (ticketData.seats.toString()).substring(0, 2) + (ticketData.date).substring(0, 2)}</p>
              </div>
              <div className="mb-6">
                <h2 className="font-bold text-gray-600 mb-2">Cinema Address:</h2>
                <p className="text-lg text-gray-800">{ticketData.address}</p>
              </div>
              <div className="mb-6">
                <h2 className="font-bold text-gray-600 mb-2">Price:</h2>
                <p className="text-lg text-gray-800">{ticketData.price}</p>
              </div>
              <div className="mb-6">
                <h2 className="font-bold text-gray-600 mb-2">Timing:</h2>
                <p className="text-lg text-gray-800">{ticketData.timing}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
