import React from "react";
import logo from "../utils/logo.png";
import name from "../utils/name.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" grid grid-cols-12 h-20 shadow-md rounded-md ">
      <div className="col-span-2 content-center text-center flex justify-center items-center">
        <div>
          <img src={logo} className="h-10 pb-[12px]" alt="logo" />
        </div>
        <div>
          <img src={name} className="h-[26px]" alt="logo" />
        </div>
      </div>
      <div className="col-span-8  text-black content-center flex justify-center ">
        <ul className=" w-3/4 flex text-[16px] justify-between px-5 items-center font-normal">
          <Link to={"/"}>
            {" "}
            <li className="cursor-pointer hover:text-primary">About Us</li>
          </Link>
          <Link to={"/servies"}>
            <li className="cursor-pointer hover:text-primary">Servies</li>
          </Link>
          <Link to={"/casestudies"}>
            <li className="cursor-pointer hover:text-primary">Case Studies</li>
          </Link>
          <Link to={"/Blog"}>
            <li className="cursor-pointer hover:text-primary">Blog</li>
          </Link>
          <Link to={"/howitworks"}>
            <li className="cursor-pointer hover:text-primary">How it Works</li>
          </Link>
          <Link to={"/hire"}>
            <li className="cursor-pointer hover:text-primary">Hire</li>
          </Link>
        </ul>
      </div>
      <div className="col-span-2 content-center text-center ">
        <button className="text-center px-6 py-4 text-[14px]  bg-gradient-to-r from-secondary to-primary rounded-md text-white font-semibold">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
