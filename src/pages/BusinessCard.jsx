// import React, { useEffect, useState } from "react";

// const BusinessCard = ({ info }) => {
//   const { id, src, alt, description, title, location, img_Link, ceo_Name } = info;
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     const element = document.getElementById(`business-card-${id}`);
//     const rect = element.getBoundingClientRect();
//     if (rect.top < window.innerHeight && rect.bottom >= 0) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Check on mount

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       id={`business-card-${id}`}
//       className={`flex ${id % 2 === 0 ? "flex-row-reverse" : ""} items-center w-[70%] p-7 transition-opacity duration-500 ${isVisible ? id%2==0 ? "animate-popinRight opacity-100" : "animate-popin opacity-100"  : 'opacity-0'}`}
//     >
//       {/* section 1 */}
//       <div className="w-1/2 text-start flex flex-col gap-y-14">
//         <h1 className="font-extrabold text-3xl">{title}</h1>
//         <p className="font-light">{description}</p>
//         <p className="font-light">{location}</p>
//         <div className="flex gap-3">
//           <img src={img_Link} alt={alt} />
//           <div className="flex flex-col gap-y-2">
//             <h4 className="font-bold">{ceo_Name}</h4>
//             <span className="font-extralight">CEO</span>
//           </div>
//         </div>
//       </div>
//       {/* section 2 */}
//       <div className="w-1/2">
//         <img src={src} className="rounded-lg w-[90%] h-[475px]" alt={alt} />
//       </div>
//     </div>
//   );
// };

// export default BusinessCard;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BusinessCard = ({ info }) => {
  const { id, src, alt, title, description, img_Link, ceo_Name } =
    info;
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById(`business-card-${id}`);
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      id={`business-card-${id}`}
      className={`flex flex-col-reverse lg:flex-row ${
        id % 2 === 0 ? "lg:flex-row-reverse" : ""
      } items-center w-full lg:w-[70%] p-4 lg:p-7 transition-opacity duration-500 ${
        isVisible ? (id % 2 === 0 ? "opacity-100" : "opacity-100") : "opacity-0"
      }`}
    >
      {/* section 1 */}
      <div className="w-full lg:border-0 border-2 my-2 py-2 border-black lg:w-1/2 text-start flex flex-col gap-y-5 lg:gap-y-14 px-8">
        <h1 className="font-extrabold text-2xl lg:text-3xl">{title}</h1>
        <p className="font-light text-sm lg:text-base">{description}</p>
        {/* <div className="flex gap-3 "> */}
          {/* <img src={img_Link} alt={alt} className="w-12  rounded-full h-12" /> */}
          {/* <div className="flex items-center gap-y-2"> */}
            {/* <h4 className="font-bold">{ceo_Name}</h4> */}
            {/* <span className="font-extralight">CEO</span> */}
          {/* </div> */}
        {/* </div> */}
      </div>
      {/* section 2 */}
      {/* <div className="w-full sm:w-1/2 mt-4 sm:mt-0 hover:overflow-hidden hover:scale-110    relative flex ">
        <img
          src={src}
          className="z-10 hover:z-0  rounded-lg w-full h-auto sm:h-[475px]"
          alt={alt}
        />
         <Link
          to="https://www.google.com/"
          className="opacity-0 hover:backdrop-blur-sm hover:rounded-lg  lg:opacity-100 z-0 absolute inset-0 text-xl underline flex justify-center items-center bg-transparent hover:text-black lg:hover:z-30"
        >
          View Site
        </Link>
      </div> */}
      <div className="relative  flex w-full lg:w-1/2 mt-4 lg:mt-0 overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          src={src}
          className="z-10 lg:p-0 p-[6%] rounded-lg w-full h-full lg:h-[475px] transition-transform duration-300 ease-in-out"
          alt={alt}
        />
        <Link
          to="https://www.google.com/"
          className="opacity-0 lg:h-full h-[94%] hover:opacity-100 hover:backdrop-blur-sm hover:rounded-lg hover:lg:opacity-100 z-10 absolute inset-0 text-xl underline flex justify-center items-center bg-transparent hover:text-black transition-opacity duration-300 ease-in-out"
        >
          Visit Site
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
