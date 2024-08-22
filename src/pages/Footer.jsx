import React from "react";
import logo from "../utils/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="flex flex-col">
        <div className="w-full h-[450px]  grid grid-cols-10">
      <div className=" col-span-4 flex justify-center mt-11">
        <div className=" w-1/2 h-auto ">
          <img src={logo} className="h-7  mb-3" alt="logo" />
          <p className="mt-10 font-normal ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className=" col-span-2 flex justify-center  mt-11">
        <div className=" w-1/2 h-auto ">
          <span className="font-bold">Links</span>
          <ul className=" mt-10 flex flex-col gap-3 font-extralight ">
            <Link to={"/"}>
              {" "}
              <li className="cursor-pointer hover:text-primary">About Us</li>
            </Link>
            <Link to={"/servies"}>
              <li className="cursor-pointer hover:text-primary">Servies</li>
            </Link>
            <Link to={"/casestudies"}>
              <li className="cursor-pointer hover:text-primary">
                Case Studies
              </li>
            </Link>
            <Link to={"/Blog"}>
              <li className="cursor-pointer hover:text-primary">Blog</li>
            </Link>
            <Link to={"/howitworks"}>
              <li className="cursor-pointer hover:text-primary">
                How it Works
              </li>
            </Link>
            <Link to={"/hire"}>
              <li className="cursor-pointer hover:text-primary">Hire</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className=" col-span-4 flex justify-start  mt-11">
        <div className=" w-1/2 h-auto">
          <span className="font-bold ">Contact Us</span>
          <div className="flex  justify-between h-[60%] flex-col">
            <div className="mt-10 flex flex-col gap-3 font-extralight">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <Link
                to={`tel:+923183561921`}
                className="text-blue-500 hover:underline ml-2"
              >
                +923183561921
              </Link>
            </div>
            <div className="">
              <ul className="flex  gap-2 justify-end mr-4">
                <Link to={"#"}>
                  <FaFacebookF className="size-8 rounded-full m-1  p-[2px] shadow-md" />
                </Link>
                <Link to={"#"}>
                  <FaInstagram className="size-8 rounded-full m-1  p-[2px] shadow-md" />
                </Link>
                <Link to={"#"}>
                  <CiLinkedin className="size-8 rounded-full m-1  p-[2px] shadow-md" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col">
        <div className="w-full bg-gray-500 h-[2px]">
             
        </div>
        <div className="text-center p-3 font-light">
        © 2024 Copyright by IK Developers. All rights reserved.
        </div>
    </div>
    </div>
  );
};

export default Footer;
