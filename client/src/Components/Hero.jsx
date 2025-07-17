import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import banner1 from "../assets/banner1.png";
import banner2nd from "../assets/banner2nd.png";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const sliderImages = [
  banner1,
  banner2nd,
  assets.banner_img, // third banner
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative border border-gray-400 rounded-md shadow-sm shadow-slate-300 overflow-hidden">
      {/* Image Slide */}
      <img
        className="w-full lg:h-[450px] h-[250px] rounded-md object-cover transition duration-700 ease-in-out"
        src={sliderImages[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
      />

      {/* Shop Now button */}
      <Link to="/collection">
        <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-4 py-2 border bg-gray-400 text-white border-gray-400 rounded hover:bg-gray-500 hover:text-white">
          Shop Now
        </button>
      </Link>

      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-black rounded-full p-2 hover:bg-white shadow"
      >
        <MdOutlineArrowBackIos size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-black rounded-full p-2 hover:bg-white shadow"
      >
        <MdOutlineArrowForwardIos size={20} />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {sliderImages.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentIndex === idx ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
