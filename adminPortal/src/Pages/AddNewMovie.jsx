import React, { useState } from "react";

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
      <form onSubmit={handleSubmit} className="w-3/4 p-8 bg-gray-100 rounded-lg shadow-lg">
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
        {/* Add other input fields similarly */}
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
