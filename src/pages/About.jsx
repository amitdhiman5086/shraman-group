import React from "react";
import img1 from "../utils/img1.png"
import icon1 from "../utils/icon1.png";
import icon2 from "../utils/icon2.png";
import icon3 from "../utils/icon3.png";
import icon4 from "../utils/icon4.png";
import icon5 from "../utils/icon5.png";
const About = () => {
  return (
    <div className="flex flex-col">
      {/* section 1 */}
      <div className="bg-red-500 flex justify-center">
        <div className="w-full bg-white flex justify-center px-24 py-12">
          <div className=" place-content-center w-1/2">
            <h1 className="text-[55px]  font-light leading-[71px] mx-2 my-3">
              Great{" "}
              <span className="text-[63px] font-extrabold bg-[linear-gradient(to_bottom,_#0D1C9F_0%,_#DE4396_100%)]  bg-clip-text text-transparent leading-[71px]">
                Product
              </span>{" "}
              is
            </h1>
            <h1 className="text-[55px] font-extrabold text-black mx-2 my-3">
              {" "}
              built by great{" "}
              <span className="text-[63px] font-extrabold bg-[linear-gradient(to_bottom,_#0D1C9F_0%,_#DE4396_100%)]  bg-clip-text text-transparent leading-[71px]">
                teams
              </span>
            </h1>
            <p className="mx-2 font-normal leading-[36px] text-[18px] ">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>
            <button className="px-4 mx-2 mt-14 rounded-md bg-button py-2 text-white font-semibold">
              Let’s get started!
            </button>
          </div>

          <div className=" place-content-center w-1/2 ">
            <img src={img1} alt="Image of Something " />
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className=" flex  space-x-16  overflow-hidden ">
       <div className="flex space-x-16 animate-loop-scroll">
       <img src={icon1} className="max-w-none" alt="Logos" />
        <img src={icon2}  className="max-w-none"  alt="Logos" />
        <img src={icon3}  className="max-w-none"  alt="Logos" />
        <img src={icon4}  className="max-w-none"  alt="Logos" />
        <img src={icon5}  className="max-w-none"  alt="Logos" />
       </div>
       <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
       <img src={icon1}  className="max-w-none"  alt="Logos" />
        <img src={icon2}  className="max-w-none"  alt="Logos" />
        <img src={icon3}  className="max-w-none"  alt="Logos" />
        <img src={icon4}  className="max-w-none"  alt="Logos" />
        <img src={icon5}  className="max-w-none"  alt="Logos" />
       </div>
      </div>
      {/* section 3 */}
      <div className="bg-red-500 w-full h-8 flex justify-center items-center">
        <div className="bg-white w-1/3 h-1">
          <div className="bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
