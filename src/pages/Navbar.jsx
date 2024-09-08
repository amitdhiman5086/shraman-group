import React from "react";
import logo from "../utils/logo.png";
import { Link } from "react-router-dom";
import { scrollToSection } from "../components/scrollToSection";

const Navbar = () => {
    const handleBusinessClick = () => {
        scrollToSection(1000); // Adjust the offset value to scroll to the desired position
      };

  return (
    <div className="grid grid-cols-12 h-20 shadow-lg rounded-md px-4 sm:px-0">
      <div className="col-span-2 flex justify-center items-center">
        <div className="w-32 h-14 content-center">
          <Link to={"/"}>
            <img src={logo} alt="logo not found" height={60} width={60} />
          </Link>
        </div>
      </div>
      <div className="col-span-8 text-black flex justify-center items-center">
        <ul className="w-full sm:w-3/4 flex justify-center gap-5 sm:gap-10 text-sm sm:text-base px-2 sm:px-5 items-center font-normal">
          <Link to={"/"} onClick={handleBusinessClick}>
            <li className="cursor-pointer hover:text-primary">Businesses</li>
          </Link>
          <Link to={"/about"}>
            <li className="cursor-pointer hover:text-primary">About Us</li>
          </Link>
        </ul>
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <Link
          to={"/contact"}
          className="text-center px-4 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm bg-gradient-to-r from-secondary to-primary rounded-md text-white font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
