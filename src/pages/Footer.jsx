// import React from "react";
// import logo from "../utils/logo.png";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";

// import { CiLinkedin } from "react-icons/ci";
// import { BsTwitter } from "react-icons/bs";

// const Footer = () => {
//   return (
//     <div className="flex flex-col">
//       <div className="w-full h-[450px]  grid grid-cols-10">
//         <div className=" col-span-4 flex justify-center mt-11">
//           <div className=" w-1/2 h-auto ">
//             <img src={logo} className="-ml-[10px] w-32 h-14 " alt="logo" />
//             <p className="mt-10 font-normal ">
//               It is a group of companies, It will try to accomplish the society
//               needs, deliver the excellence in service industry & Manage the
//               multiple vertical to cater all the society needs.
//             </p>
//           </div>
//         </div>
//         <div className=" col-span-2 flex justify-center  mt-11">
//           <div className=" w-1/2 h-auto ">
//             <span className="font-bold">Links</span>
//             <ul className=" mt-10 flex flex-col gap-3 font-extralight ">
//               <Link to={"/about"}>
//                 {" "}
//                 <li className="cursor-pointer hover:text-primary">About Us</li>
//               </Link>
//               <Link to={"/"}>
//                 {" "}
//                 <li className="cursor-pointer hover:text-primary">
//                   Businesses
//                 </li>
//               </Link>
//             </ul>
//           </div>
//         </div>
//         <div className=" col-span-4 flex justify-start  mt-11">
//           <div className=" w-1/2 h-auto">
//             <span className="font-bold ">Contact Us</span>
//             <div className="flex  justify-between h-[60%] flex-col">
//               <div className="mt-10 flex flex-col gap-3 font-extralight">
//                 <Link
//                   to={`tel:+919108610903`}
//                   className="text-blue-500 hover:underline ml-2"
//                 >
//                   +919108610903
//                 </Link>
//                 <Link
//                   to={`mailto:Chandra.p0704@gmail.com`}
//                   className="text-blue-500 hover:underline ml-2"
//                 >
//                   Chandra.p0704@gmail.com
//                 </Link>
//               </div>
//               <div className="">
//                 <ul className="flex  gap-2 justify-end mr-4">
//                   <Link to={"#"}>
//                     <FaFacebookF className="size-8 rounded-full m-1  p-[2px] shadow-md" />
//                   </Link>
//                   <Link to={"#"}>
//                     <FaInstagram className="size-8 rounded-full m-1  p-[2px] shadow-md" />
//                   </Link>
//                   <Link to={"#"}>
//                     <CiLinkedin className="size-8 rounded-full m-1  p-[2px] shadow-md" />
//                   </Link>
//                   <Link to={"#"}>
//                     <BsTwitter className="size-8 rounded-full m-1  p-[2px] shadow-md" />
//                   </Link>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col">
//         <div className="w-full bg-gray-500 h-[2px]"></div>
//         <div className="text-center p-3 font-light">
//           © 2024 Copyright by IK Developers. All rights reserved.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import logo from "../utils/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full py-10 grid grid-cols-1 sm:grid-cols-10 gap-8">
        <div className="col-span-4 flex justify-center sm:justify-center">
          <div className="w-3/4 sm:w-1/2">
            <img src={logo} height={60} width={60} alt="logo" />
            <p className="mt-5 sm:mt-10 text-sm font-normal">
              It is a group of companies, It will try to accomplish the society
              needs, deliver the excellence in service industry & manage the
              multiple vertical to cater all the society needs.
            </p>
          </div>
        </div>
        <div className="col-span-2 ml-3 flex justify-center sm:justify-start">
          <div className="w-3/4 sm:w-1/2">
            <span className="font-bold">Links</span>
            <ul className="mt-5 sm:mt-10 flex flex-col gap-3 text-sm font-extralight">
              <Link to={"/about"}>
                <li className="cursor-pointer hover:text-primary">About Us</li>
              </Link>
              <Link to={"/"}>
                <li className="cursor-pointer hover:text-primary">Businesses</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-span-4 flex justify-center sm:justify-start">
          <div className="w-3/4 sm:w-1/2">
            <span className="font-bold">Contact Us</span>
            <div className="flex flex-col justify-between h-[60%] mt-5 sm:mt-10">
              <div className="flex flex-col gap-3 text-sm font-extralight">
                <Link
                  to={`tel:+919108610903`}
                  className="text-blue-500 hover:underline"
                >
                  +919108610903
                </Link>
                <Link
                  to={`mailto:support@shramamgroup.com`}
                  className="text-blue-500 hover:underline"
                >support@shramamgroup.com
                </Link>
              </div>
              <div className="mt-5 sm:mt-0">
                <ul className="flex gap-2 justify-center sm:justify-end">
                  <Link to={"#"}>
                    <FaFacebookF className="size-8 rounded-full m-1 p-[2px] shadow-md" />
                  </Link>
                  <Link to={"#"}>
                    <FaInstagram className="size-8 rounded-full m-1 p-[2px] shadow-md" />
                  </Link>
                  <Link to={"#"}>
                    <CiLinkedin className="size-8 rounded-full m-1 p-[2px] shadow-md" />
                  </Link>
                  <Link to={"#"}>
                    <BsTwitter className="size-8 rounded-full m-1 p-[2px] shadow-md" />
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-full bg-gray-500 h-[2px]"></div>
        <div className="text-center p-3 text-xs sm:text-sm font-light">
          © 2024 Copyright by Shramam Group. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
