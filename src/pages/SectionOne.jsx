import React from "react";
import img1 from "../utils/img1.png";
import { scrollToSection } from "../components/scrollToSection";

const SectionOne = () => {
    const handleBusinessClick = () => {
        scrollToSection(1000); // Adjust the offset value to scroll to the desired position
      };
  return (
    <div className="bg-red-500 flex justify-center">
      <div className="w-full bg-white flex flex-col lg:flex-row justify-center px-6 lg:px-24 py-12">
        <div className="place-content-center w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-[55px] font-extrabold leading-[40px] lg:leading-[71px] mx-2 my-3">
            Shram, Shine{" "}
            <span className="text-4xl lg:text-[63px] font-extrabold bg-[linear-gradient(to_bottom,_#0D1C9F_0%,_#DE4396_100%)] bg-clip-text text-transparent leading-[40px] lg:leading-[71px]">
              &
            </span>{" "}
            Success
          </h1>
          <p className="mx-2 w-full lg:w-[75%] font-normal leading-[24px] lg:leading-[36px] text-[16px] lg:text-[18px]">
            It is a group of companies, It will try to accomplish the society
            needs, deliver excellence in the service industry & manage multiple
            verticals to cater to all the society's needs.
          </p>
          <button onClick={handleBusinessClick} className="px-4 mx-2 mt-14 rounded-md bg-button py-2 text-white font-semibold">
            Let’s get started!
          </button>
        </div>
        <div className="place-content-center w-full lg:w-1/2  mt-6 lg:mt-0">
          <img src={img1} alt="company home illustration of Something" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
