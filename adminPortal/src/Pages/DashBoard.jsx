import React from 'react';
import { Link } from 'react-router-dom';
function DashBoard() {
  return (
    <div className="flex justify-center items-center h-screen w-full">

      <div className="justify-center">
        {/* First row */}
        <div className="flex">
          <Link to='/moviepage'>
          <div className="  rounded-lg text-white bg-opacity-20  text-lg w-60 mx-auto h-60 m-4 mr-14 flex justify-center items-center  transform transition duration-300 ease-in-out hover:scale-105 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWUlMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D')]">Movies</div>
          </Link>
          <Link to='/cinemaprofile'>
          <div className=" rounded-lg text-white bg-opacity-20  text-lg  w-60 mx-auto h-60 m-4 ml-14 flex justify-center items-center transform transition duration-300 ease-in-out hover:scale-105 bg-center bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzX4_f72FIAvgZkGwbpyeoW9BL8aIXWKiwHg&s')]">Profile</div>
          </Link>
        </div>
        {/* Second row */}
        <div className="flex">
          <Link to='/shows'>
          <div className=" rounded-lg text-white bg-opacity-20  text-lg w-60 mx-auto h-60 m-4 mr-14 flex justify-center items-center  transform transition duration-300 ease-in-out hover:scale-105 bg-cover bg-center bg-[url('https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.webp?b=1&s=170667a&w=0&k=20&c=RlxSdPNgiHRnGaGVlkdQyt74tK5gZ1_3Mlgq0ZDhkKI=')]">Shows</div>
          </Link>
          <Link to='/addmovie'>
            <div className=" rounded-lg text-white bg-opacity-20  text-lg  w-60 mx-auto h-60 m-4 ml-14 flex justify-center items-center transform transition duration-300 ease-in-out hover:scale-105 bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D')]">Add New Movie</div>
          </Link>☻
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
