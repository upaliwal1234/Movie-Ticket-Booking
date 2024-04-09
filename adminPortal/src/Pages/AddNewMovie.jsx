import React, { useState } from "react";

function AddNewMovie() {
  // State variables for each input field
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Event handlers for input changes
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDirectorChange = (event) => {
    setDirector(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform the submission logic
    console.log("Title:", title);
    console.log("Director:", director);
    console.log("Year:", year);
    console.log("Image URL:", imageUrl);
  };

  return (
    <div className="text-red-500 flex justify-center my-10">
      <form onSubmit={handleSubmit} className="w-3/4 p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 text-center">Add New Movie</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="border w-full p-2"
            placeholder="Enter title..."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="director" className="block mb-1">
            Director:
          </label>
          <input
            type="text"
            id="director"
            name="director"
            value={director}
            onChange={handleDirectorChange}
            className="border w-full p-2"
            placeholder="Enter director..."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="year" className="block mb-1">
            Year:
          </label>
          <input
            type="number"
            id="year"
            name="year"
            value={year}
            onChange={handleYearChange}
            className="border w-full p-2"
            placeholder="Enter year..."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block mb-1">
            Image URL:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
            onChange={handleImageUrlChange}
            className="border w-full p-2"
            placeholder="Enter image URL..."
          />
        </div>
        <button
          type="submit"
          className="h-12 w-42 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mb-4"
        >
          Add New Movie
        </button>
      </form>
    </div>
  );
}

export default AddNewMovie;
