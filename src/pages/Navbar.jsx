// import React from "react";
// import logo from "../utils/logo.png";
// import name from "../utils/name.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className=" grid grid-cols-12 h-20 shadow-lg rounded-md ">
//       <div className="col-span-2 content-center text-center flex justify-center items-center">
//         <div className="-ml-[10px] w-32 h-14 ">
//           <Link to={"/"}>
//             {" "}
//             <img src={logo} alt="logo not found" />
//           </Link>
//         </div>
//       </div>
//       <div className="col-span-8  text-black content-center flex justify-center ">
//         <ul className=" w-3/4 flex text-[16px] justify-center gap-10 px-5 items-center font-normal">
//           <Link to={"/"}>
//             {" "}
//             <li className="cursor-pointer hover:text-primary">Businesses</li>
//           </Link>
//           <Link to={"/about"}>
//             {" "}
//             <li className="cursor-pointer hover:text-primary">About Us</li>
//           </Link>
//         </ul>
//       </div>
//       <div className="col-span-2 content-center text-center ">
//         <Link to={"/contact"}  className="text-center px-6 py-4 text-[14px]  bg-gradient-to-r from-secondary to-primary rounded-md text-white font-semibold">
//           Contact Us
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import logo from "../utils/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="grid grid-cols-12 h-20 shadow-lg rounded-md px-4 sm:px-0">
      <div className="col-span-2 flex justify-center items-center">
        <div className="w-32 h-14">
          <Link to={"/"}>
            <img src={logo} alt="logo not found" />
          </Link>
        </div>
      </div>
      <div className="col-span-8 text-black flex justify-center items-center">
        <ul className="w-full sm:w-3/4 flex justify-center gap-5 sm:gap-10 text-sm sm:text-base px-2 sm:px-5 items-center font-normal">
          <Link to={"/"}>
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
