import React from "react";

import SectionOne from "./SectionOne";
import ScrollBar from "./ScrollBar";
import Business from "./Business";
import BusinessCard from "./BusinessCard";
import { images } from "../config";
import { Link } from "react-router-dom";
const About = () => {
  console.log(images);
  return (
    <div className="flex flex-col">
      {/* section 1 */}
      <SectionOne />
      {/* section 2 */}
      <ScrollBar />

      {/* section 3 */}
      <Business />
      <div className="flex flex-col  gap-y-10 w-full  text-center">
        {images.map((img) => (
          <Link className="flex justify-center" key={img.id} to={"/" + img.id}>
            {" "}
            <BusinessCard key={img.id} info={img} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
