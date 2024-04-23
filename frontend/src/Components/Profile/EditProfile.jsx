import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import Navbar from './Navbar';
import axios from 'axios';
import baseURL from '../../DB';
import { tokenCheck } from '../../../helperToken';

function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { id } = useParams(); // Get the id parameter from the URL

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/profile/${id}`); // Use the id parameter in the URL
      const userData = response.data;
      setName(userData.name);
      setEmail(userData.email);
      setPhoneNumber(userData.phoneNumber);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setErrorMessage('Failed to fetch user data');
    }
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${baseURL}/editProfile/${id}`, { // Use the id parameter in the URL for the PATCH request
        name: name,
        email: email,
        phoneNumber: phoneNumber,
      });
    
        navigate('/profile');
      
    } catch (error) {
      console.error('Error updating user details:', error);
      
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="bg-cover bg-center bg-[url('https://wallpaperaccess.com/full/1561985.jpg')] h-screen overflow-hidden">
      {/* <Navbar /> */}
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white mb-8">Edit User Details</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-white border bg-transparent text-white rounded-lg w-64 p-2 mr-16"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            className="border-white border bg-transparent text-white rounded-lg w-64 p-2 mr-16"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="text"
            className="border-white border bg-transparent text-white rounded-lg w-64 p-2 mr-16"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <button
            type="submit"
            className="bg-blue-500 opacity-80 hover:bg-blue-600 text-white rounded-md px-4 py-2 mt-4"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
