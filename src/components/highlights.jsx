import React from 'react';
import { motion } from 'framer-motion';
import lagos from "../assets/images/lagos-festival.jpg";
import craft from "../assets/images/crafts.png";
import dance from "../assets/images/dance.jpeg";
import dishes from "../assets/images/dishes.webp";

const Highlights = () => {
    return (
      <div className="h-auto text-white p-10 md:p-20 bg-green-50">
        <p className="font-heading text-3xl md:text-4xl text-center mb-5 text-green-900">Cultural Highlights</p>
        <p className="tracking-[.40em] text-green-900 font-primary text-sm text-center md:text-center mb-3 md:mb-6">EXPERIENCE THE RICH TRADITIONS AND HERITAGE OF NIGERIA</p>
  
        <div className="grid md:grid-cols-2 gap-3 md:gap-11 items-center">
          
          {/* Festivals and Events */}
          <div className="p-7 bg-white border-dashed border-2 border-green-900 rounded-xl">
            <motion.img 
              src={lagos} 
              alt="Festivals and Events" 
              className="rounded-md w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
            <p className="font-bold mt-3 font-heading text-2xl md:text-3xl text-left text-green-900">Festivals and Events</p>
            <p className="font-primary text-md md:text-md text-left text-green-900 mb-5">Durbar, Eyo, Calabar Carnival & more.</p>
            <button className="bg-green-900 md:text-2xl p-2 px-6 font-heading text-amber-400 hover:bg-black duration-300">Explore Further</button>
          </div>
  
          {/* Traditional Arts and Crafts */}
          <div className="p-7 bg-white border-dashed border-2 border-green-900 rounded-xl">
            <motion.img 
              src={craft} 
              alt="Traditional Arts and Crafts" 
              className="rounded-md w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
            <p className="font-bold mt-3 font-heading text-2xl md:text-3xl text-left text-green-900">Traditional Arts and Crafts</p>
            <p className="font-primary text-md md:text-md text-left text-green-900 mb-5">Aso-Oke, Benin Bronzes, Nok Terracotta.</p>
            <button className="bg-green-900 md:text-2xl p-2 px-6 font-heading text-amber-400 hover:bg-black duration-300">Explore Further</button>
          </div>
  
          {/* Cuisine */}
          <div className="p-7 bg-white border-dashed border-2 border-green-900 rounded-xl">
            <motion.img 
              src={dishes} 
              alt="Cuisine" 
              className="rounded-md w-full"
              whileHover={{ scale: 1.05}}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
            <p className="font-bold mt-3 font-heading text-2xl md:text-3xl text-left text-green-900">Cuisine</p>
            <p className="font-primary text-md md:text-md text-left text-green-900 mb-5">Jollof Rice, Pounded Yam, Suya & more.</p>
            <button className="bg-green-900 md:text-2xl p-2 px-6 font-heading text-amber-400 hover:bg-black duration-300">Explore Further</button>
          </div>
  
          {/* Music and Dance */}
          <div className="p-7 bg-white border-dashed border-2 border-green-900 rounded-xl">
            <motion.img 
              src={dance} 
              alt="Music and Dance" 
              className="rounded-md w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            />
            <p className="font-bold mt-3 font-heading text-2xl md:text-3xl text-left text-green-900">Music and Dance</p>
            <p className="font-primary text-md md:text-md text-left text-green-900 mb-5">Afrobeat, Highlife, Traditional Dance.</p>
            <button className="bg-green-900 md:text-2xl p-2 px-6 font-heading text-amber-400 hover:bg-black duration-300">Explore Further</button>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Highlights;