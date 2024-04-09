import React from 'react';
import { useState,useNavigate} from 'react';
import axios from 'axios';
import baseURL from '../'
function MoviePage() {
  const navigate=useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [movieName, setMovieName] = useState('');
  const handleChange = (e) => {
    setMovieName(e.target.value);
  }
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
  const handleClick = async () => {
    setSuggestions([]);
    fetchdata();
  }
  const fetchdata = async () => {
    try {
      let response = await axios.get(`${baseURL}/admin/search/movie/${movieName}`);
      // console.log(response.data);
      if (response.status === 200) {
        let data = response.data;
        setMovieName('');
        navigate(`/movies/${response.data.name}/${response.data._id}`);
      }
    }
    catch (err) {
      console.error('Error in fetching data', err);
    }
  }
  const handleSuggestionClick = (movieName) => {
    setMovieName(movieName);
    setSuggestions([]);
  }
  return (
    <div style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
      <h1 className="text-3xl text-red-500 text-center m-2 font-bold">Movies</h1>
      <div className="flex justify-center items-center">
        <input
          className="border w-3/4 p-3 mt-7 mr-2"
          type="text"
          value={movieName}
          onChange={handleChange}
          placeholder="Search Movie . . ."
        />
        <button className='m-1' type='submit' onClick={handleClick}>
          <svg className='w-5 fill-gray-500 mr-1 hover:fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
        </button>
      </div>

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
