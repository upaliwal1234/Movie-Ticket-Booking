import React from 'react'
import CinemaCard from './CinemaCard'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { tokenCheck } from '../../../helperToken';
import axios from 'axios';
import baseURL from '../../DB';

export default function Cinemas() {
  const navigate = useNavigate();
  const [cinemasData, setCinemasData] = useState([]);
  useEffect(() => {
    let response = tokenCheck();
    if (!response) {
      navigate('/login');
    }
    else {
      navigate('/cinema');
    }
  }, [])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/cinemas`);
      if (response.status == 200) {
        setCinemasData(response.data);
      }
    }
    catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex flex-row flex-wrap gap-8 justify-center mt-10 my-6 sm:mx-10 md:mx-20">
      {cinemasData.map((cinema, index) => (
        <CinemaCard key={index} cinemaid={cinema._id} cinemaname={cinema.cinemaName} movie={cinema.movie} />
      ))}
    </div>
  )
}
