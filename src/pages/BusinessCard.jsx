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

const BusinessCard = ({ info }) => {
  const { id, src, alt, description, title, location, img_Link, ceo_Name } =
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
  }, []);

  return (
    <div
      id={`business-card-${id}`}
      className={`flex flex-col sm:flex-row ${
        id % 2 === 0 ? "sm:flex-row-reverse" : ""
      } items-center w-full sm:w-[70%] p-4 sm:p-7 transition-opacity duration-500 ${
        isVisible
          ? id % 2 === 0
            ? "animate-popinRight opacity-100"
            : "animate-popin opacity-100"
          : "opacity-0"
      }`}
    >
      {/* section 1 */}
      <div className="w-full sm:w-1/2 text-start flex flex-col gap-y-5 sm:gap-y-14">
        <h1 className="font-extrabold text-2xl sm:text-3xl">{title}</h1>
        <p className="font-light text-sm sm:text-base">{description}</p>
        <p className="font-light text-sm sm:text-base">{location}</p>
        <div className="flex gap-3">
          <img src={img_Link} alt={alt} className="w-12 h-12" />
          <div className="flex flex-col gap-y-2">
            <h4 className="font-bold">{ceo_Name}</h4>
            <span className="font-extralight">CEO</span>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
        <img src={src} className="rounded-lg w-full h-auto sm:h-[475px]" alt={alt} />
      </div>
    </div>
  );
};

export default BusinessCard;
