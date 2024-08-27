// import React from "react";
// import { Link } from "react-router-dom";

// const BusinessCardWithId = ({ info }) => {
//   const { id, src, alt, title, information, img_Link, ceo_Name } = info;
//   return (
//     <div
//       className={`flex ${
//         id % 2 === 0 ? "flex-row-reverse animate-popinRight" : "animate-popin"
//       }   items-center w-[70%]   my-10 `}
//     >
//       {/* section 1 */}
//       <div className=" w-1/2  text-start flex flex-col gap-y-14">
//        <Link to={"https://www.google.com/"}> <h1 className="font-extrabold text-3xl ">{title}</h1></Link>
//         <p className="font-light">{information}</p>
//         <div className=" flex  gap-3">
//           <img className="" src={img_Link} alt={alt} />
//           <div className="flex flex-col gap-y-2">
//             <h4 className="font-bold">{ceo_Name}</h4>
//             <span className="font-extralight">CEO</span>
//           </div>
//         </div>
//       </div>
//       {/* section 2 */}
//       <div className={`w-1/2 relative hover:opacity-50 hover:cursor-pointer ${id % 2 !== 0 ? "flex justify-end" : "flex"}  `}>
//         <img src={src} className="z-10 hover:z-0 rounded-lg w-[90%] h-[475px]" alt={alt} />
//         <Link to={"https://www.google.com/"} className="z-0 w-[90%] absolute h-[475px] text-xl underline flex justify-center bg-gray-300 bg-transparent items-center hover:text-black hover:z-30">View Site</Link>
//       </div>
//     </div>
//   );
// };

// export default BusinessCardWithId;

import React from "react";
import { Link } from "react-router-dom";

const BusinessCardWithId = ({ info }) => {
  const { id, src, alt, title, information, img_Link, ceo_Name } = info;
  return (
    <div
      className={`flex flex-col md:flex-row ${
        id % 2 === 0
          ? "md:flex-row-reverse animate-popinRight"
          : "animate-popin"
      } items-center w-full md:w-[70%] my-10`}
    >
      {/* Section 1 */}
      <div className="w-full md:w-1/2 text-start flex flex-col gap-y-6 md:gap-y-14 p-4">
        <Link to="https://www.google.com/">
          <h1 className="font-extrabold text-2xl text-blue-500 md:text-black md:text-3xl">
            {title}
          </h1>
        </Link>
        <p className="font-light text-sm md:text-base">{information}</p>
        <div className="flex gap-3 items-center">
          <img className="w-12 rounded-full h-12" src={img_Link} alt={alt} />
          <div className="flex flex-col gap-y-1">
            <h4 className="font-bold text-lg">{ceo_Name}</h4>
            <span className="font-extralight text-sm">CEO</span>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div
        className={`w-full md:w-1/2 relative hover:cursor-pointer ${
          id % 2 !== 0 ? "md:flex justify-end" : "md:flex"
        }`}
      >
        <img
          src={src}
          className="z-10 hover:z-0 rounded-lg w-full md:w-[90%] h-[275px] md:h-[475px] object-cover"
          alt={alt}
        />
      </div>
    </div>
  );
};

export default BusinessCardWithId;
