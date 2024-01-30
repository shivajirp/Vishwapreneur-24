// import React from 'react'
// import './About.css';


// const About = () => {
//   return (
//     <>
//       <div id="About mt-6 ">
//         <div className="pb-12 min-h-fit bg-fixed bg-cover bg-center bgImage">
//           <div className="aboutCard ">
//             <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
//               About
//             </h1>

//             <div className=" flex flex-col md:flex-row items-center justify-center">
//               <div className="md:w-1/2 lg:w-1/2 lg:ml-32 w-1/6">
//                 <iframe
//                   width="530"
//                   height="300"
//                   src="https://www.youtube.com/embed/ZBqbC8Kdg60?si=3xAuLcNd8Z_obVoJ"
//                   title="YouTube video player"
//                   // frameborder="0"
//                   allowFullScreen={true}
//                   allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   className="border border-1 rounded-lg -ml-28 w-[18rem] h-[15rem] mb-12 md:h-[16rem] md:w-[25rem] md:ml-12 lg:h-[16rem] lg:w-[30rem]"
//                 ></iframe>
//               </div>

//               <div className=" lg:py-10">
//                 <p className="text-gray-300 mx-6 text-lg lg:text-xl lg:mx-16 lg:pl-10">
//                   Vishwapreneur is a National Level Entrepreneurial Summit
//                   showcasing entrepreneurs, creators, and innovative minds of
//                   our century who had the courage to think out of the box.
//                   Vishwapreneur is a platform for budding entrepreneurs to seek
//                   motivation & guidance through the experiences of successful
//                   business tycoons.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About


import React from 'react'
import './About.css';
<<<<<<< HEAD
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ScrollAnimation1 from '../../Animations/ScrollAnimation1';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const About = () => {
  return (
    <>
      <div id="About" className='mt-0 h-fit'>
        <div className="pb-12 min-h-screen bg-fixed bg-cover bg-center bgImage">
        <ScrollAnimation1>
          <motion.div 
          className="aboutCard" 
          >
=======
// import { about } from '../Navbar/Navbar';

const About = () => {
  return (
    <div name="about" className='pt-16'>
      <div  id="About ">
        <div className="pb-12 min-h-fit bg-fixed bg-cover bg-center bgImage">
          <div className="aboutCard ">
>>>>>>> 27c1b70642ec53568a7a625ab0b167e521b416e4
            <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
              About
            </h1>

            <div className=" flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 lg:w-1/2 lg:ml-32 w-1/6">
                <iframe
                  width="530"
                  height="300"
                  src="https://www.youtube.com/embed/ZBqbC8Kdg60?si=3xAuLcNd8Z_obVoJ"
                  title="YouTube video player"
                  // frameborder="0"
                  allowFullScreen={true}
                  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="border border-1 rounded-lg -ml-28 w-[18rem] h-[15rem] mb-12 md:h-[16rem] md:w-[25rem] md:ml-12 lg:h-[16rem] lg:w-[30rem]"
                ></iframe>
              </div>

              <div className=" lg:py-10">
                <p className="text-gray-300 mx-6 text-lg lg:text-xl lg:mx-16 lg:pl-10">
                  Vishwapreneur is a National Level Entrepreneurial Summit
                  showcasing entrepreneurs, creators, and innovative minds of
                  our century who had the courage to think out of the box.
                  Vishwapreneur is a platform for budding entrepreneurs to seek
                  motivation & guidance through the experiences of successful
                  business tycoons.
                </p>
              </div>
            </div>
          </motion.div>
          </ScrollAnimation1>
        </div>
      </div>
    </div>
  );
}

export default About