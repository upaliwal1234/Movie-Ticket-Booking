import React from 'react'
import CinemaCard from './CinemaCard.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import baseURL from '../../DB.js'
function MovieCinema() {
    const [cinemaData,setCinemaData]=useState({});
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(`/${baseURL}/bookTickets/movie/:id`);
            if (response) {
                const { name, address } = response.cinemas;
                setCinemaData({ name, address });
            }
            else {
                console.error('No data received from the server');
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <div className="flex flex-row flex-wrap gap-8 justify-center mt-10 my-6 sm:mx-10 md:mx-20">
            <CinemaCard cinemaname={cinemaData.name} movie={cinemaData.address} />
        </div>
    )
}

export default MovieCinema