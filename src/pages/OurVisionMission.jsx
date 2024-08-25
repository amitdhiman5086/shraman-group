// import React, { useEffect, useState } from "react";
// import Points from "./Points";

// const OurVisionMission = ({ data }) => {
//   const { title1, title2, points } = data;
//   const [isVisible, setIsVisible] = useState(false);

//   const handleScroll = () => {
//     const element = document.getElementById('vision-mission');
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
//       id="vision-mission"
//       className={`flex flex-col mb-7 place-items-center transition-opacity duration-500 ${isVisible ? 'animate-popin opacity-100' : 'opacity-0'}`}
//     >
//       {/* part1 */}
//       <div className="w-[90%] flex-col flex justify-start">
//         <p className="text-6xl text-start font-semibold leading-[71px]">
//           {title1}
//           <span className="bg-[linear-gradient(to_bottom,_#0D1C9F_0%,_#DE4396_100%)] bg-clip-text text-transparent">
//             {" "}
//             {title2}
//           </span>
//         </p>
//         <div className="w-[75%] h-1 bg-gray-500"></div>
//       </div>
//       {/* part2 */}
//       <div className="w-[90%]">
//         {points.map((point, index) => (
//           <Points key={index} point={point} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurVisionMission;


import React, { useEffect, useState } from "react";
import Points from "./Points";

const OurVisionMission = ({ data }) => {
  const { title1, title2, points } = data;
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById('vision-mission');
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="vision-mission"
      className={`flex flex-col mb-7 place-items-center transition-opacity duration-500 ${
        isVisible ? 'animate-popin opacity-100' : 'opacity-0'
      }`}
    >
      {/* Part 1 */}
      <div className="w-[90%] flex-col flex justify-start">
        <p className="text-4xl sm:text-6xl text-start font-semibold leading-tight sm:leading-[71px]">
          {title1}
          <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
            {title2}
          </span>
        </p>
        <div className="w-full sm:w-[75%] h-1 bg-gray-500 mt-2"></div>
      </div>

      {/* Part 2 */}
      <div className="w-[90%] sm:w-[90%] md:justify-start mt-5">
        {points.map((point, index) => (
          <Points key={index} point={point} />
        ))}
      </div>
    </div>
  );
};

export default OurVisionMission;
