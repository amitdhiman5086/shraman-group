import React from "react";
import person1 from "../utils/person1.png";

const TeamMember = ({info}) => {
    const {src , name} = info
  return (
    <div>
      <div className="w-80 text-center">
        <img src={src} alt="Not Found" />
        <p className="my-3 font-bold">{name}</p>
      </div>
    </div>
  );
};

export default TeamMember;
