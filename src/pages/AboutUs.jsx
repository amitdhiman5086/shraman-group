// import React from "react";
// import SectionAbout from "./SectionAbout";
// import TeamMember from "./TeamMember";
// import { ourMission, teamMember } from "../config";
// import OurVisionMission from "./OurVisionMission";

// const AboutUs = () => {
//   return (
//     <div>
//       <SectionAbout />

//       <div>
//         <h2 className="text-5xl text-center font-semibold leading-[71px] bg-[linear-gradient(to_left,_#0D1C9F_0%,_#DE4396_100%)]  bg-clip-text text-transparent">
//           Our Success Team
//         </h2>
//         <div className="flex gap-10 justify-center">
//           {teamMember.map((person) => (
//             <TeamMember info={person} />
//           ))}
//         </div>
//       </div>
//       {/* Section2 */}
//      {ourMission.map((e ,index)=> <OurVisionMission key={index} data={e} />)}
//     </div>
//   );
// };

// export default AboutUs;


import React from "react";
import SectionAbout from "./SectionAbout";
import TeamMember from "./TeamMember";
import { ourMission, teamMember } from "../config";
import OurVisionMission from "./OurVisionMission";

const AboutUs = () => {
  return (
    <div className="px-4 sm:px-8">
      <SectionAbout />

      <div className="mt-10">
        <h2 className="text-4xl sm:text-5xl text-center font-semibold leading-tight sm:leading-[71px] bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
          Our Success Team
        </h2>
        <div className="flex flex-wrap gap-10 justify-center mt-10">
          {teamMember.map((person, index) => (
            <TeamMember key={index} info={person} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        {ourMission.map((e, index) => (
          <OurVisionMission key={index} data={e} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
