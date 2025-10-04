// import React from "react";
// import person1 from "../utils/person1.png";

// const TeamMember = ({info}) => {
//     const {src , name} = info
//   return (
//     <div>
//       <div className="w-80 text-center">
//         <img src={src} alt="Not Found" />
//         <p className="my-3 font-bold">{name}</p>
//       </div>
//     </div>
//   );
// };

// export default TeamMember;


import React from "react";
import person1 from "../utils/person1.png";

const TeamMember = ({ info }) => {
  const { src, name } = info;
  return (
    <div className="w-64 sm:w-80 text-center transition-transform hover:scale-105 duration-300" data-aos="zoom-in" data-aos-duration="600">
      <img src={src || person1} alt="Not Found" className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" />
      <p className="my-3 text-lg sm:text-xl font-bold">{name}</p>
    </div>
  );
};

export default TeamMember;
