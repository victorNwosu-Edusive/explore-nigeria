import React from 'react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';

const Destinations = () => {
  const featuredDestinations = destinations.slice(0, 4);

  return (
    <div className="h-auto text-white p-8 md:p-20" id="destination">
      <p className="font-heading text-3xl md:text-4xl text-center mb-5">Popular Destinations</p>
      <p className="tracking-[.40em] text-white font-primary text-[12px] md:text-sm text-center md:text-center mb-3 md:mb-6">FEATURED LANDSCAPES</p>
      
      <div className="grid gap-10 md:gap-24">
        {featuredDestinations.map((dest, index) => (
          <motion.div
            key={dest.id}
            className="grid md:flex relative h-auto rounded-xl bg-green-800/20 w-full gap-1 overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="font-primary text-4xl p-3 bg-green-900 text-white absolute top-0 left-0 font-bold z-10">0{index + 1}</p>
            <img src={dest.image} alt={dest.name} className="static h-64 w-full md:h-auto md:w-72 object-cover mx-auto" />
            <div className="flex-auto text-white space-y-4 p-8 ">
              <p className="font-heading text-2xl md:text-3xl">{dest.name}</p>
              <p className="font-primary text-[12px] md:text-md bg-green-800/40 p-3 rounded-md w-fit shadow-inner shadow-green-600/50">LOCATION: {dest.location}</p>
              <p className="font-primary text-md md:text-xl">{dest.description}</p>
              {dest.explore && (
                <div className="hidden md:font-primary md:block md:text-md md:bg-amber-800/40 md:p-3 md:rounded-md md:w-fit md:shadow-inner md:shadow-amber-600/50">
                  <p className="font-bold mb-1">What to explore:</p>
                  <ul className="list-disc list-inside">
                    {dest.explore.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/destinations" className="inline-block p-2 px-7 md:px-8 bg-green-900 text-xl text-white font-heading hover:bg-black hover:text-amber-400 duration-300">See More Destinations —</Link>
      </div>
    </div>
  );
};

export default Destinations;