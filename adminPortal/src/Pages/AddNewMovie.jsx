import React, { useState } from "react";
import axios from 'axios';
import baseURL from "../DB";
function AddNewMovie() {
  const [formData, setFormData] = useState({
    name: "",
    ratings: "",
    language: [],
    duration: "",
    genre: "",
    certificate: "",
    releaseDate: "",
    desc: "",
    cast: [{ name: "", role: "", img: "" }],
    crew: [{ name: "", role: "", img: "" }],
    bgimage: "",
    poster: "",
    reviews: [],
    cinemas: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    let updatedLanguages;
    if (checked) {
      updatedLanguages = [...formData.language, value];
    } else {
      updatedLanguages = formData.language.filter((lang) => lang !== value);
    }
    setFormData({
      ...formData,
      language: updatedLanguages
    });
  };

  const handleCastChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCast = [...formData.cast];
    updatedCast[index][name] = value;
    setFormData({
      ...formData,
      cast: updatedCast
    });
  };

  const handleCrewChange = (index, e) => {
    const { name, value } = e.target;
    const updatedCrew = [...formData.crew];
    updatedCrew[index][name] = value;
    setFormData({
      ...formData,
      crew: updatedCrew
    });
  };

  const handleAddCast = () => {
    setFormData({
      ...formData,
      cast: [...formData.cast, { name: "", role: "", img: "" }]
    });
  };

  const handleAddCrew = () => {
    setFormData({
      ...formData,
      crew: [...formData.crew, { name: "", role: "", img: "" }]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            value={formData.name}
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
            value={formData.ratings}
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
                checked={formData.language.includes("English")}
                onChange={handleLanguageChange}
              />
              English
            </label>
            <label>
              <input
                type="checkbox"
                name="language"
                value="Spanish"
                checked={formData.language.includes("Spanish")}
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
            value={formData.duration}
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
            value={formData.genre}
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
            value={formData.certificate}
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
            value={formData.releaseDate}
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
            value={formData.desc}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Cast:</label>
          {formData.cast.map((actor, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Name"
                value={actor.name}
                onChange={(e) => handleCastChange(index, e)}
              />
              <input
                type="text"
                placeholder="Role"
                value={actor.role}
                onChange={(e) => handleCastChange(index, e)}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={actor.img}
                onChange={(e) => handleCastChange(index, e)}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddCast}>Add Cast Member</button>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Crew:</label>
          {formData.crew.map((crewMember, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Name"
                value={crewMember.name}
                onChange={(e) => handleCrewChange(index, e)}
              />
              <input
                type="text"
                placeholder="Role"
                value={crewMember.role}
                onChange={(e) => handleCrewChange(index, e)}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={crewMember.img}
                onChange={(e) => handleCrewChange(index, e)}
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
            value={formData.bgimage}
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
            value={formData.poster}
            onChange={handleChange}
          />
        </div>
        {/* Add reviews and cinemas similarly */}
        <button type="submit" onClick={handleClick} className="h-12 w-42 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mb-4">
          Add New Movie
        </button>
      </form>
    </div>
  );
}

export default AddNewMovie;
