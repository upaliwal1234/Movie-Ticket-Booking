import { Carousel, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../../DB";
import CardSlider from "../CardSlider/CardSlider";

export default function CarouselCustomArrows() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get(`${baseURL}/movies`);
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(timer);
  }, [currentIndex, images]);

  useEffect(() => {
    const imageUrls = [
      "https://giffiles.alphacoders.com/222/222045.gif",
      "https://images8.alphacoders.com/100/1003220.png",
      "https://images7.alphacoders.com/104/1045911.jpg",
      "https://wallpapercave.com/wp/wp8807385.jpg"
    ];

    setImages(imageUrls);
  }, []);

  return (
    <>
      <Carousel
        className=""
        autoplay
        autoplayInterval={4000}
        infiniteLoop
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
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={images[(currentIndex + index) % images.length]} // Dynamically render images based on currentIndex
            alt={`image ${index + 1}`}
            className="h-80 w-full object-cover"
          />
        ))}
      </Carousel>

      <br />
      <h1 className="p-2 text-4xl ml-[8.5rem] font-bold">Recommended Movies</h1>
      <br />
      <div className="w-[80vw] mx-auto">
        <CardSlider items={data} />
      </div>
    </>
  );
}
