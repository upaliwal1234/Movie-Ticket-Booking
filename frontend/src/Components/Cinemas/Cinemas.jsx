import React from 'react'
import CinemaCard from './CinemaCard'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { tokenCheck } from '../../../helperToken';

export default function Cinemas() {
  const navigate = useNavigate();
  useEffect(() => {
    let response = tokenCheck();
    if (!response) {
      navigate('/login');
    }
    else {
      navigate('/cinema');
    }
  }, [])
  return (
    <div className="flex flex-row flex-wrap gap-8 justify-center mt-10 my-6 sm:mx-10 md:mx-20">
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
      <CinemaCard cinemaname="MLX" movie="hello brother" />
    </div>
  )
}
