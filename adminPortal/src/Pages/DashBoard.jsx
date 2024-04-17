import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CinemaState } from '../Context/CinemaProvider';
import { tokenCheck } from '../helperToken';

function DashBoard() {
  const { user } = CinemaState();
  const navigate = useNavigate();
  useEffect(() => {
    const token = tokenCheck();
    if (!token) {
      navigate('/login')
    }
  }, [])
  return (
    <div className="flex justify-center items-center h-screen w-full">

      <div className="justify-center">
        {/* First row */}
        <div className="flex">
          <Link to='/moviepage' className="link-item">
            <div className="relative rounded-lg text-white text-lg w-60 mx-auto h-60 m-4 mr-14 flex justify-center items-center transform transition duration-300 ease-in-out hover:scale-105 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWUlMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D)' }}>
              <span className="absolute inset-0 bg-black opacity-0 hover:opacity-80 hover:rounded-lg transition-opacity duration-300"></span>
              <span className="relative z-10">Movies</span>
            </div>
          </Link>

          <Link to='/cinemaprofile' className="link-item">
            <div className="rounded-lg text-white bg-opacity-20  text-lg  w-60 mx-auto h-60 m-4 ml-14 flex justify-center items-center hover:rounded-lg transform transition duration-300 ease-in-out hover:scale-105 bg-center bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzX4_f72FIAvgZkGwbpyeoW9BL8aIXWKiwHg&s')]"><span className="absolute inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300"></span>
              <span className="relative z-10">Profile</span></div>

          </Link>
        </div>
        {/* Second row */}
        <div className="flex">
          <Link to='/shows'>
            <div className=" rounded-lg text-white bg-opacity-20  text-lg w-60 mx-auto h-60 m-4 mr-14 flex justify-center items-center  transform transition duration-300 ease-in-out hover:scale-105 bg-cover bg-center bg-[url('https://media.istockphoto.com/id/1271522601/photo/pop-corn-and-on-red-armchair-cinema.webp?b=1&s=170667a&w=0&k=20&c=RlxSdPNgiHRnGaGVlkdQyt74tK5gZ1_3Mlgq0ZDhkKI=')]">
              Shows
            </div>
          </Link>
          <Link to='/addmovie' className="link-item">
            <div className="rounded-lg text-white bg-opacity-20  text-lg  w-60 mx-auto h-60 m-4 ml-14 flex justify-center items-center transform transition duration-300 ease-in-out hover:scale-105 bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWV8ZW58MHx8MHx8fDA%3D')]"><span className="absolute inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300"></span>
              <span className="relative z-10">Add New Movie</span></div>
          </Link>
        </div>
      </div >
    </div >
  );
}

export default DashBoard;
