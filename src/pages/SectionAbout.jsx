import React from 'react'

const SectionAbout = () => {
  return (
    <div>
          {/*section1 */}
      <div className=" flex justify-center items-center py-20  ">
        <p className="text-6xl text-center font-semibold leading-[71px]">
          We’re here to <br />
          <span className="bg-[linear-gradient(to_bottom,_#0D1C9F_0%,_#DE4396_100%)]  bg-clip-text text-transparent">
            {" "}
            guarante your success
          </span>
        </p>
      </div>
      {/* Section2 */}
      <div className="flex flex-col place-items-center  ">
        {/* part1 */}
        <div className="w-[90%] px-10 animate-popinRight pt-8 pb-20 rounded-2xl bg-[linear-gradient(to_bottom,_#0D1C9F_0%,_#DE4396_100%)]  ">
          <p className="text-xl font-normal text-white text-center">
            Foundation will work on Health Care, Education & Old age related
            activity; Shramam Ventures will work Software services & other
            service related activity; And Shramam Infra will work on
            Infrastructure, Trading and Transportation.
          </p>
        </div>
        {/* part2 */}
        <div className="w-[100%]  -mt-10 my-5 rounded-lg  flex justify-center  animate-popin">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
          width="70%"
          className="rounded-2xl"
          height="444px"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </div>
      </div>
    </div>
  )
}

export default SectionAbout