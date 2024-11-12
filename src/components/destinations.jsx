import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import image from "../assets/images/body-image.jpg";
import obudu from "../assets/images/obudu-image.png";
import ogbunike from "../assets/images/ogbunike-caves.png";
import zuma from "../assets/images/zuma-image.jpg";

const Destinations = () => {
  return (
    <div className="h-auto text-white p-8 md:p-20" id="destination">
      <p className="font-heading text-3xl md:text-4xl text-center mb-5">Popular Destinations</p>
      <p className="tracking-[.40em] text-white font-primary text-[12px] md:text-sm text-center md:text-center mb-3 md:mb-6">FEATURED LANDSCAPES</p>
      
      <div className="grid gap-5">
        
        {/* Obudu Mountain Resort */}
        <motion.div
          className="grid md:flex relative h-auto rounded-xl bg-green-800/20 w-full gap-1"
          initial={{ x: -100, opacity: 0 }} // Start off-screen and invisible
          whileInView={{ x: 0, opacity: 1 }} // Slide in to view
          transition={{ duration: 0.5 }} // Control speed
          viewport={{ once: true }} // Trigger animation only once
        >
          <p className="font-primary text-4xl p-3 bg-green-900 text-white absolute top-0 left-0 font-bold">01</p>
          <img src={obudu} alt="Obudu Mountain Resort" className="static h-full w-full= md:h-full md:w-72 object-cover mx-auto" />
          <div className="flex-auto text-white space-y-4 p-8 ">
            <p className="font-heading text-2xl md:text-3xl">Obudu Mountain Resort</p>
            <p className="font-primary text-[12px] md:text-md bg-green-800/40 p-3 rounded-md w-fit shadow-inner shadow-green-600/50">LOCATION: CROSS RIVER STATE</p>
            <p className="font-primary text-md md:text-xl">Obudu Mountain Resort, also known as Obudu Cattle Ranch, is one of Nigeria’s most sought-after tourist destinations, 
              nestled in the heart of Cross River State. Located 1,575 meters above sea level, it offers a serene retreat with stunning views of the lush rainforest, valleys, and 
              rolling hills.</p>
              <p className="hidden md:font-primary md:block md:text-md md:bg-amber-800/40 md:p-3 md:rounded-md md:w-fit md:shadow-inner md:shadow-amber-600/50">
              What to explore:<ul>
                <li>Cable Car Ride: The resort boasts one of the longest cable car rides in Africa, offering a thrilling aerial view of the mountains and surrounding landscape.</li>
              </ul></p>
          </div>
        </motion.div>

        {/* Ogbunike Caves */}
        <motion.div
          className="grid md:flex relative h-auto rounded-xl bg-green-800/20 w-full gap-1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }} // Slight delay for staggered effect
          viewport={{ once: true }}
        >
          <p className="font-primary text-4xl p-3 bg-green-900 text-white absolute top-0 left-0 font-bold">02</p>
          <img src={ogbunike} alt="Ogbunike Caves" className="static md:h-full w-full md:w-72 object-cover mx-auto" />
          <div className="flex-auto text-white space-y-4 p-8 ">
            <p className="font-heading text-2xl md:text-3xl">Ogbunike Caves</p>
            <p className="font-primary text-[12px] md:text-md bg-green-800/40 p-3 rounded-md w-fit shadow-inner shadow-green-600/50">LOCATION: ANAMBRA STATE</p>
            <p className="font-primary text-md md:text-xl">Ogbunike Caves are a unique natural formation located in Ogbunike, Anambra State. The caves are known for 
              their spiritual and historical significance. They are a UNESCO World Heritage candidate and serve as a pilgrimage site for the people of the region.</p>
              <p className="hidden md:font-primary md:block md:text-md md:bg-amber-800/40 md:p-3 md:rounded-md md:w-fit md:shadow-inner md:shadow-amber-600/50">
              What to explore:<ul>
                <li>Exploring the caves and the spiritual history tied to the site.</li>
              <li>Hiking through the forest to reach the caves.</li>
              </ul></p>
          </div>
        </motion.div>

        {/* Idanre Hills */}
        <motion.div
          className="grid md:flex relative h-auto rounded-xl bg-green-800/20 w-full gap-1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="font-primary text-4xl p-3 bg-green-900 text-white absolute top-0 left-0 font-bold">03</p>
          <img src={image} alt="Idanre Hills" className="static md:h-full md:w-72 object-cover mx-auto" />
          <div className="flex-auto text-white space-y-4 p-8 ">
            <p className="font-heading text-2xl md:text-3xl">Idanre Hills</p>
            <p className="font-primary text-[12px] md:text-md bg-green-800/40 p-3 rounded-md w-fit shadow-inner shadow-green-600/50">LOCATION: OGUN STATE</p>
            <p className="font-primary text-md md:text-xl">Idanre Hills is a stunning tourist attraction located in the heart of Ondo State, Nigeria. Known for its breathtaking landscapes and rich history, 
              the hills offer an exceptional adventure for nature lovers and thrill-seekers alike</p>
              <p className="hidden md:font-primary md:block md:text-md md:bg-amber-800/40 md:p-3 md:rounded-md md:w-fit md:shadow-inner md:shadow-amber-600/50">
              What to explore:<ul>
                <li>The Idanre Hilltop: A challenging but rewarding climb that offers panoramic views of the surrounding valley.</li>
              </ul></p>
          </div>
        </motion.div>

        {/* Zuma Rock */}
        <motion.div
          className="grid md:flex relative h-auto rounded-xl bg-green-800/20 w-full gap-1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="font-primary text-4xl p-3 bg-green-900 text-white absolute top-0 left-0 font-bold">04</p>
          <img src={zuma} alt="Zuma Rock" className="static md:h-full md:w-72 object-cover mx-auto" />
          <div className="flex-auto text-white space-y-4 p-8 ">
            <p className="font-heading text-2xl md:text-3xl">Zuma Rock</p>
            <p className="font-primary text-[12px] md:text-md bg-green-800/40 p-3 rounded-md w-fit shadow-inner shadow-green-600/50">LOCATION: NIGER STATE</p>
            <p className="font-primary text-md md:text-xl">Zuma Rock, often referred to as the “Gateway to Abuja,” is an iconic natural landmark located just 
              outside Nigeria’s capital, Abuja. Known for its towering presence and distinctive granite face, Zuma Rock stands at 725 meters tall and is a breathtaking 
              sight, visible from miles away as you approach the Federal Capital Territory.</p>
              <p className="hidden md:font-primary md:block md:text-md md:bg-amber-800/40 md:p-3 md:rounded-md md:w-fit md:shadow-inner md:shadow-amber-600/50">
              What to explore:<ul>
                <li>The Rock Formation: Zuma Rock's massive size and unique shape, with its human-like face etched into the stone, 
              make it one of the most recognizable landmarks in Nigeria.</li>
              <li>The Zuma Rock Resort: Situated at the base of the rock, this resort offers a peaceful escape with beautiful views, making it a great spot for relaxation and sightseeing.</li>
              </ul></p>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Destinations;