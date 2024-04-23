import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { CinemaState } from "../Context/CinemaProvider";


function AddNewMovie() {
  const [name, setName] = useState("");
  const [ratings, setRatings] = useState("");
  const [language, setLanguage] = useState([]);
  const [duration, setDuration] = useState("");
  const [genre, setGenre] = useState("");
  const [certificate, setCertificate] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [desc, setDesc] = useState("");
  const [cast, setCast] = useState([{ name: "", role: "", img: "" }]);
  const [crew, setCrew] = useState([{ name: "", role: "", img: "" }]);
  const [bgimage, setBgImage] = useState("");
  const [poster, setPoster] = useState("");
  const { user } = CinemaState();
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "ratings":
        setRatings(value);
        break;
      case "duration":
        setDuration(value);
        break;
      case "genre":
        setGenre(value);
        break;
      case "certificate":
        setCertificate(value);
        break;
      case "releaseDate":
        setReleaseDate(value);
        break;
      case "desc":
        setDesc(value);
        break;
      case "bgimage":
        setBgImage(value);
        break;
      case "poster":
        setPoster(value);
        break;
      default:
        break;
    }
  };

  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    let updatedLanguages;
    if (checked) {
      updatedLanguages = [...language, value];
    } else {
      updatedLanguages = language.filter((lang) => lang !== value);
    }
    setLanguage(updatedLanguages);
  };

  const handleCastChange = (index, field, value) => {
    const updatedCast = [...cast];
    updatedCast[index][field] = value;
    // console.log(value);
    // console.log(field);
    // console.log(index);
    // console.log(updatedCast);
    setCast(updatedCast);
  };


  const handleCrewChange = (index, field, value) => {
    const updatedCrew = [...crew];
    updatedCrew[index][field] = value;
    setCrew(updatedCrew);
  };


  const handleAddCast = () => {
    setCast([...cast, { name: "", role: "", img: "" }]);
  };

  const handleAddCrew = () => {
    setCrew([...crew, { name: "", role: "", img: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8888/admin/addMovie', {
        userId: user.id,
        name,
        ratings,
        language,
        duration,
        genre,
        certificate,
        releaseDate,
        desc,
        cast,
        crew,
        bgimage,
        poster
      });
      if (response) {
        console.log("Hello", response);
        navigate('/moviepage');
      }
    } catch (error) {
      toast.error('Error in adding movie');
      console.error('Error during adding movie:', error);
    }
  };
  return (
    <div className="text-red-500 flex justify-center" style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
      <form className="w-3/4 p-8 bg-gray-100 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4 text-center">Add New Movie</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border w-full p-2"
            placeholder="Enter name..."
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ratings" className="block mb-1">
            Ratings:
          </label>
          <input
            type="number"
            id="ratings"
            name="ratings"
            className="border w-full p-2"
            placeholder="Enter ratings..."
            value={ratings}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Language:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="language"
                value="English"
                checked={language.includes("English")}
                onChange={handleLanguageChange}
              />
              English
            </label>
            <label>
              <input
                type="checkbox"
                name="language"
                value="Spanish"
                checked={language.includes("Spanish")}
                onChange={handleLanguageChange}
              />
              Spanish
            </label>
            {/* Add more checkboxes for other languages */}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="duration" className="block mb-1">
            Duration:
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            className="border w-full p-2"
            placeholder="Enter duration..."
            value={duration}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block mb-1">
            Genre:
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            className="border w-full p-2"
            placeholder="Enter genre..."
            value={genre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="certificate" className="block mb-1">
            Certificate:
          </label>
          <input
            type="text"
            id="certificate"
            name="certificate"
            className="border w-full p-2"
            placeholder="Enter certificate..."
            value={certificate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="releaseDate" className="block mb-1">
            Release Date:
          </label>
          <input
            type="text"
            id="releaseDate"
            name="releaseDate"
            className="border w-full p-2"
            placeholder="Enter release date..."
            value={releaseDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="desc" className="block mb-1">
            Description:
          </label>
          <textarea
            id="desc"
            name="desc"
            className="border w-full p-2"
            placeholder="Enter description..."
            value={desc}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Cast:</label>
          {cast.map((actor, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Name"
                value={actor.name}
                onChange={(e) => handleCastChange(index, 'name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Role"
                value={actor.role}
                onChange={(e) => handleCastChange(index, 'role', e.target.value)}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={actor.img}
                onChange={(e) => handleCastChange(index, 'img', e.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddCast}>Add Cast Member</button>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Crew:</label>
          {crew.map((crewMember, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Name"
                value={crewMember.name}
                onChange={(e) => handleCrewChange(index, 'name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Role"
                value={crewMember.role}
                onChange={(e) => handleCrewChange(index, 'role', e.target.value)}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={crewMember.img}
                onChange={(e) => handleCrewChange(index, 'img', e.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddCrew}>Add Crew Member</button>
        </div>
        <div className="mb-4">
          <label htmlFor="bgimage" className="block mb-1">
            Background Image URL:
          </label>
          <input
            type="text"
            id="bgimage"
            name="bgimage"
            className="border w-full p-2"
            placeholder="Enter background image URL..."
            value={bgimage}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="poster" className="block mb-1">
            Poster Image URL:
          </label>
          <input
            type="text"
            id="poster"
            name="poster"
            className="border w-full p-2"
            placeholder="Enter poster image URL..."
            value={poster}
            onChange={handleChange}
          />
        </div>
        {/* Add reviews and cinemas similarly */}
        <button type="submit" onClick={handleSubmit} className="h-12 w-42 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mb-4">
          Add New Movie
        </button>
      </form>
    </div>
  );
}

export default AddNewMovie;