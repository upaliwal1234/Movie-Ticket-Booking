import { Carousel, IconButton } from "@material-tailwind/react";
import MovieCard from "../Movies/MovieCard";
import CardSlider from "../CardSlider/CardSlider";
import { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../../DB";
// import CardSlider from "../CardSlider/CardSlider";
import Star from '/yellowstar.svg';


export default function CarouselCustomArrows() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      let response = await axios.get(`${baseURL}/movies`);
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Carousel
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <img
          src="https://i.ibb.co/R7Hbw4b/banner1.jpg"
          alt="image 1"
          className="h-80 w-full object-cover"
        />
        <img
          src="https://i.ibb.co/sgJ2pfL/banner2.jpg"
          alt="image 2"
          className="h-80 w-full object-cover"
        />
        <img
          src="https://i.ibb.co/FX3bkFb/banner3.jpg"
          alt="image 3"
          className="h-80 w-full object-cover"
        />
      </Carousel>
      <br></br>
      <h1 className="p-2 text-4xl ml-[8.5rem] font-bold">Recommended Movies</h1>
      <br></br>
      <div className="w-[80vw] mx-auto">
        <CardSlider items={data} />
      </div>
      {/* <div className="flex mx-[7rem] justify-center items-center h-screen">
      <CardSlider items={items} />
    </div> */}
    </>

  );
}