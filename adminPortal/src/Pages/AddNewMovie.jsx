import React from "react";

function AddNewMovie() {
  return (
    <div className="  text-red-500 flex justify-center my-10"  style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
      <form className="w-3/4 p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 text-center">Add New Movie</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
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
            className="border w-full p-2"
            placeholder="Enter image URL..."
          />
        </div>
        <button className="h-12 w-42 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mb-4">
          Add New Movie
        </button>
      </form>
    </div>
  );red
}

export default AddNewMovie;
