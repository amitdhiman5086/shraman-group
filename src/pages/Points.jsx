import React from "react";

const Points = ({ point }) => {
  const { title, info } = point;
  console.log(point);
  return (
    <div className=" md:grid md:grid-cols-12  my-4 ">
      <div className="md:col-span-3   mb-3 md:mb-0 font-bold overflow-hidden text-ellipsis md:mr-0 mr-2">{title}</div>
      <div className="md:col-span-9 text-sm md:text-base ">{info} </div>
    </div>
  );
};

export default Points;
