import React from "react";
import { Link } from "react-router-dom";

const BusinessCardWithId = ({ info }) => {
  const { id, src, alt, title, information, img_Link, ceo_Name } = info;
  return (
    <div
      className={`flex ${
        id % 2 === 0 ? "flex-row-reverse animate-popinRight" : "animate-popin"
      }   items-center w-[70%]   my-10 `}
    >
      {/* section 1 */}
      <div className=" w-1/2  text-start flex flex-col gap-y-14">
       <Link to={"https://www.google.com/"}> <h1 className="font-extrabold text-3xl ">{title}</h1></Link>
        <p className="font-light">{information}</p>
        <div className=" flex  gap-3">
          <img className="" src={img_Link} alt={alt} />
          <div className="flex flex-col gap-y-2">
            <h4 className="font-bold">{ceo_Name}</h4>
            <span className="font-extralight">CEO</span>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className={`w-1/2 relative hover:opacity-50 hover:cursor-pointer ${id % 2 !== 0 ? "flex justify-end" : ""}  `}>
        <img src={src} className="z-10 hover:z-0 rounded-lg w-[90%] h-[475px]" alt={alt} />
        <Link to={"https://www.google.com/"} className="z-0 w-[90%] absolute h-[475px] text-xl underline flex justify-center bg-gray-300 bg-transparent items-center hover:text-black hover:z-30">View Site</Link>
      </div>
    </div>
  );
};

export default BusinessCardWithId;
