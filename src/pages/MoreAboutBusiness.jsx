import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from '../config'
import { Carousel } from './Carousel'
import { images } from "../config";
import BusinessCardWithId from "./BusinessCardWithId";

const MoreAboutBusiness = () => {
  const { id } = useParams();
  const [filter, setFilter] = useState(null);

  const getFilterData = () => {
    const data = images.filter((img) => img.id == id);
    setFilter(data[0]);
  };

  useEffect(() => {
    console.log("re-render");
    getFilterData();
  }, [id]);

  return filter === 0 ? null : (
    <div className="flex flex-col items-center">
      {/* section1 */}
  
     <div className='flex w-full flex-col justify-center items-center'>
      <Carousel data={data}></Carousel>
        
    </div>
    
      {/* section2 */}
      {filter && <BusinessCardWithId info={filter} />}

      {/* section3 */}
      <div className=" w-[100%] my-5 rounded-lg h-[670px] flex justify-center ">
        <iframe
        title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
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
