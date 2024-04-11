import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MoviePage(){
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  // const [movies, setMovies] = useState();
  const movies = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    },
    {
      id: 4,
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg",
    },
    {
      id: 5,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      year: 1999,
      imageUrl:
        "https://w0.peakpx.com/wallpaper/43/548/HD-wallpaper-matrix-resurrections-movie-thumbnail.jpg",
    },
    {
      id: 6,
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/nrsx0jEaBgXq4PWo7SooSnYJTv.jpg",
    },
    {
      id: 7,
      title: "The Lord of the Rings: The Return of the King",
      director: "Peter Jackson",
      year: 2003,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    },
    {
      id: 8,
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
    },
    {
      id: 9,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      director: "Peter Jackson",
      year: 2001,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    },
    {
      id: 10,
      title: "Fight Club",
      director: "David Fincher",
      year: 1999,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/4GpwvwDjgwiShr1UBJIn5fk1gwT.jpg",
    },
    {
      id: 11,
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg",
    },
    {
      id: 12,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      year: 1999,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/lZpWprJqbIFpEV5uoHfoK0KCnTW.jpg",
    },
    {
      id: 13,
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/nrsx0jEaBgXq4PWo7SooSnYJTv.jpg",
    },
    {
      id: 14,
      title: "The Lord of the Rings: The Return of the King",
      director: "Peter Jackson",
      year: 2003,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    },
    {
      id: 15,
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
    },
    {
      id: 16,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      director: "Peter Jackson",
      year: 2001,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    },
    {
      id: 17,
      title: "Fight Club",
      director: "David Fincher",
      year: 1999,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/4GpwvwDjgwiShr1UBJIn5fk1gwT.jpg",
    },
    {
      id: 18,
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg",
    },
    {
      id: 19,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      year: 1999,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/lZpWprJqbIFpEV5uoHfoK0KCnTW.jpg",
    },
    {
      id: 20,
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      imageUrl:
        "https://image.tmdb.org/t/p/w500/nrsx0jEaBgXq4PWo7SooSnYJTv.jpg",
    },
  ];

  // useEffect(() => {
  //   const response = axios.get("http://localhost:8888/admin/addMovie")
  
    
  // }, [])
  
  return (
    <div>
      <h1 className="text-3xl text-red-500 text-center m-2 font-bold">Movies</h1>
      <form className="flex justify-center items-center">
        <input
          className="border w-3/4 p-3 mt-7 mr-2"
          type="text"
          placeholder="Search Movie . . ."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
          <button className="h-12 w-42 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-7">Search</button>
      </form>

      <div className="mt-16 mx-10">
        <div className="card grid grid-cols-3 gap-10">
          {movies.map((item) => (
            <div className="text-center border rounded-md p-4" key={item.id}>
              <img src={item.imageUrl} alt="" />
              <h5 className="text-lg font-semibold">{item.title}</h5>
              <h4 className="text-lg text-gray-500">{item.year}</h4>
              <h4 className="text-lg text-gray-500">{item.director}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default MoviePage;
