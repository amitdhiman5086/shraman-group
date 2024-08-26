import React from "react";
import icon1 from "../utils/icon1.png";
import icon2 from "../utils/icon2.png";
import icon3 from "../utils/icon3.png";


const ScrollBar = () => {
  return (
    <div className="flex flex-nowrap  overflow-hidden ">
      <div className="flex  animate-loop-scroll ">
        <img
          src={icon1}
          className="max-w-none mx-10 object-contain mix-blend-color-burn aspect-[3/2] w-48  "
          alt="Logos"
        />
        <img
          src={icon2}
          className="max-w-none w-48 aspect-[3/2] mix-blend-color-burn object-contain mx-10 "
          alt="Logos"
        />
        <img
          src={icon3}
          className="max-w-none w-48  aspect-[3/2] mix-blend-color-burn object-contain   mx-10 "
          alt="Logos"
        />
        <img
          src={icon1}
          className="max-w-none mx-10 object-contain mix-blend-color-burn aspect-[3/2] w-48  "
          alt="Logos"
        />
        <img
          src={icon2}
          className="max-w-none w-48 aspect-[3/2] mix-blend-color-burn object-contain mx-10 "
          alt="Logos"
        />
        <img
          src={icon3}
          className="max-w-none w-48  aspect-[3/2] mix-blend-color-burn object-contain   mx-10 "
          alt="Logos"
        />
      </div>
      <div className="flex    animate-loop-scroll">
        <img
          src={icon1}
          className="max-w-none mx-10 object-contain mix-blend-color-burn aspect-[3/2] w-48  "
          alt="Logos"
        />
        <img
          src={icon2}
          className="max-w-none w-48 aspect-[3/2] mix-blend-color-burn object-contain mx-10 "
          alt="Logos"
        />
        <img
          src={icon3}
          className="max-w-none w-48  aspect-[3/2] mix-blend-color-burn object-contain   mx-10 "
          alt="Logos"
        />
        <img
          src={icon1}
          className="max-w-none mx-10 object-contain mix-blend-color-burn aspect-[3/2] w-48  "
          alt="Logos"
        />
        <img
          src={icon2}
          className="max-w-none w-48 aspect-[3/2] mix-blend-color-burn object-contain mx-10 "
          alt="Logos"
        />
        <img
          src={icon3}
          className="max-w-none w-48  aspect-[3/2] mix-blend-color-burn object-contain   mx-10 "
          alt="Logos"
        />
      </div>
    </div>
  );
};

export default ScrollBar;
