import React from "react";

const Points = ({ point }) => {
  const { title, info } = point;
  console.log(point);
  return (
    <div className=" grid grid-cols-12 my-3 ">
      <div className="col-span-3 font-bold overflow-hidden text-ellipsis mr-2">{title}</div>
      <div className="col-span-9">{info} </div>
    </div>
  );
};

export default Points;
