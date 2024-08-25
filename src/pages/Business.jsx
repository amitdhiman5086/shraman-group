// import React from "react";

// const Business = () => {

//   return (
//     <div className=" mt-8 w-full  flex justify-center items-center">
//       <div className=" w-1/2 ">
//         <div className="  h-1 bg-gradient-to-br from-lineLeft to-lineRight "></div>
//         <div className=" mt-3 text-center">
//           <h1 className="text-3xl font-bold">
//             Businesses we have <br />
//             <sapn className="font-light text-gray-500 text-2xl">Our Business</sapn>
//           </h1>
//         </div>
//       </div>
     

//     </div>
    
//   );
// };

// export default Business;

import React from "react";

const Business = () => {
  return (
    <div className="mt-8 w-full flex justify-center items-center px-4 sm:px-0">
      <div className="w-full sm:w-1/2">
        <div className="h-1 bg-gradient-to-br from-lineLeft to-lineRight"></div>
        <div className="mt-3 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Businesses we have <br />
            <span className="font-light text-gray-500 text-xl sm:text-2xl">
              Our Business
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Business;



