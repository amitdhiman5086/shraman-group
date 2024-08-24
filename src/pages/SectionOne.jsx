import React from 'react'
import img1 from "../utils/img1.png";


const SectionOne = () => {
  return (
    <div className="bg-red-500 flex justify-center">
    <div className="w-full bg-white flex justify-center px-24 py-12">
      <div className=" place-content-center w-1/2 animate-popinRight">
        <h1 className="text-[55px]  font-extrabold leading-[71px] mx-2 my-3">
          Shram, Shine{" "}
          <span className="text-[63px] font-extrabold bg-[linear-gradient(to_bottom,_#0D1C9F_0%,_#DE4396_100%)]  bg-clip-text text-transparent leading-[71px]">
            &
          </span>{" "}
          Success
        </h1>

        <p className="mx-2 w-[75%] font-normal leading-[36px] text-[18px] ">
          It is a group of companies, It will try to accomplish the society
          needs, deliver the excellence in service industry & Manage the
          multiple vertical to cater all the society needs.
        </p>
        <button className="px-4 mx-2 mt-14 rounded-md bg-button py-2 text-white font-semibold">
          Let’s get started!
        </button>
      </div>

      <div className=" place-content-center w-1/2 animate-popin">
        <img src={img1} alt="Image of Something " />
      </div>
    </div>
  </div>
  )
}

export default SectionOne