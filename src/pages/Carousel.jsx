import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="relative flex justify-center items-center  w-[70%] h-[670px] ">
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="absolute drop-shadow-md w-8 h-8 text-white hover:cursor-pointer left-4"
      />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={
              slide === idx ? "rounded-lg shadow-md w-full h-full object-cover" : "hidden"
            }
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="absolute drop-shadow-md w-8 h-8 text-white hover:cursor-pointer right-4"
      />
      <span className="flex absolute bottom-4">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx
                  ? "bg-white h-2 w-2 rounded-full border-none outline-none shadow-md mx-1 cursor-pointer"
                  : "bg-gray-500 h-2 w-2 rounded-full border-none outline-none shadow-md mx-1 cursor-pointer "
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
