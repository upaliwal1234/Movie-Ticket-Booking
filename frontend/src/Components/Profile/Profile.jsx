import React from 'react'
import { useState,useEffect } from 'react';

export default function Profile() {
    const [isPhotoExpanded, setPhotoExpanded] = useState(false);

    const handlePhotoClick = () => {
        setPhotoExpanded(!isPhotoExpanded);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
          const expandedImage = document.getElementById('expanded-image');
          if (expandedImage && !expandedImage.contains(event.target)) {
            setPhotoExpanded(false);
          }
        };
    
        if (isPhotoExpanded) {
          document.addEventListener('click', handleOutsideClick);
        }
    
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [isPhotoExpanded]);
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <img
                id="expanded-image"
                src="https://images.unsplash.com/photo-1707063497724-388fcaf5d2d1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
                className={"mx-auto h-24 w-24 rounded-full cursor-pointer"}
                onClick={handlePhotoClick}
              />
              {isPhotoExpanded && (
                <div className="expanded-photo fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
                  <img
                    src="https://images.unsplash.com/photo-1707063497724-388fcaf5d2d1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Expanded Profile"
                    className="max-w-full max-h-full"
                  />
                </div>
              )}
            </div>
            <div className="text-center mt-5">
              <h1 className="text-3xl font-extrabold text-gray-900">John Doe</h1>
              <p className="text-sm text-gray-600">Movie Enthusiast</p>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-center">
              <p className="text-sm text-gray-600">Welcome to my Movie Booking Profile! Explore the latest movies and book your tickets with ease.</p>
            </div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="bg-gray-200 p-4 rounded-md">
                <h2 className="text-lg font-semibold text-gray-700">Contact Information</h2>
                <p className="mt-2 text-sm text-gray-600">Email: john.doe@example.com</p>
                <p className="text-sm text-gray-600">Phone: +1 (123) 456-7890</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-md">
                <h2 className="text-lg font-semibold text-gray-700">Favorite Genres</h2>
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li>Action</li>
                  <li>Comedy</li>
                  <li>Drama</li>
                  <li>Sci-Fi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
