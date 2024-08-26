import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../config";
import { Carousel } from "./Carousel";
import { images } from "../config";
import BusinessCardWithId from "./BusinessCardWithId";

const MoreAboutBusiness = () => {
  const [mapLocation, setMapLocation] = useState("");
  const { id } = useParams();
  const [filter, setFilter] = useState(null);

  const getFilterData = () => {
    const data = images.filter((img) => img.id == id);
    setFilter(data[0]);
    setMapLocation(data[0]?.location);
  };

  useEffect(() => {
    console.log("re-render");
    getFilterData();
  }, [id]);

  return filter === 0 ? null : (
    <div className="flex flex-col items-center">
      {/* section1 */}

      <div className="flex w-full flex-col justify-center items-center">
        <Carousel data={data}></Carousel>
      </div>

      {/* section2 */}
      {filter && <BusinessCardWithId info={filter} />}

      {/* section3 */}
      <div className=" w-[100%] my-5 rounded-lg h-[670px] flex justify-center ">
        <iframe
          title="map"
          src={mapLocation}
          width="80% sm:70%"
          className="rounded-2xl"
          height="576px"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </div>
    </div>
  );
};

export default MoreAboutBusiness;
