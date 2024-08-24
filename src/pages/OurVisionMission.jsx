import React from 'react'
import Points from './Points'

const OurVisionMission = ({data}) => {
  const  {title1 ,title2 , points} = data
  return (
    <div className=' flex flex-col mb-7 place-items-center '>
        {/* part1 */}
        <div className='w-[90%]  flex-col  flex justify-start'>
        <p className="text-6xl text-start font-semibold leading-[71px]">
          {title1}
          <span className="bg-[linear-gradient(to_bottom,_#0D1C9F_0%,_#DE4396_100%)]  bg-clip-text text-transparent">
            {" "}
            {title2}
          </span>
        </p>
        <div className='w-[75%] h-1 bg-gray-500'></div>

        </div>
        {/* part2 */}
        <div className='w-[90%] '>
           {points.map((point , index)=> <Points key={index} point={point}/>)}
        </div>
       
        
    </div>
  )
}

export default OurVisionMission