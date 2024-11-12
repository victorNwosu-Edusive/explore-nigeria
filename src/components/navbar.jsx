import logo from "../assets/images/explore-nigeria-header.png";
import { motion } from "framer-motion";
import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
      };

    return (
        <>
        <div className='fixed z-30 w-full p-4 bg-emerald-900/70 backdrop-blur-md flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
        <div className='flex space-x-3 rtl:space-x-reverse'>
          <a className='font-heading text-white text-xl md:text-2xl hover:text-amber-400 duration-300' href=''>Explore Nigeria
          </a>
          <img src={logo} alt="" className="h-7 w-7"  />
        </div>

        <div className='md:flex md:items-center md:space-x-9 md:rtl:space-x-reverse md:text-white md:font-primary'>
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none relative scale-x-[-1] w-6 h-6">
            <span
              className={`block absolute w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              className={`block absolute w-7 h-0.5 bg-white transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block absolute w-6 h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            ></span>
          </button>
        </div>
          <a href="#destination" className='hidden md:block md:text-l p-2 hover:bg-green-600 duration-300 active:text-green-600' title="Destination">Destinations</a>
          <a href="/" className='hidden md:block md:text-l p-2 hover:bg-green-600 duration-300 active:text-green-600' title='Experiences'>Experiences</a>
          <a href="/" className='hidden md:block md:text-l p-2 hover:bg-green-600 duration-300 active:text-green-600' title='Plan Your Trip'>Plan your trip</a>
          <a href="/" className='hidden md:block md:text-l p-2 hover:bg-green-600 duration-300 active:text-green-600' title='Gallery'>Gallery</a>
          <a href="/" className='hidden md:block md:text-l p-2 hover:bg-green-600 duration-300 active:text-green-600' title='Contact Us'>Contact Us</a>

        </div>

       
      </div>

      <div id="mobile" className={`${
          isOpen ? "right-0" : "-right-full"
        } md:hidden fixed grid duration-300 gap-5 text-center z-20 text-white font-heading text-xl h-auto w-full p-3 pb-48 pt-20 bg-emerald-900/90 backdrop-blur-md mx-auto max-w-screen-xl `}>
          <a href="#destination" className='md:block bg-green-500/10 md:text-l p-3 hover:bg-amber-500/30 duration-300 active:text-green-600' onClick={closeMenu} title="Destination">Destinations</a>
          <a href="/" className='relative md:block bg-green-500/10 md:text-l p-3 hover:bg-amber-500/30 duration-300 active:text-green-600' onClick={closeMenu} title='Experiences'>Experiences</a>
          <a href="/" className='md:block bg-green-500/10 md:text-l p-3 hover:bg-amber-500/30 duration-300 active:text-green-600' onClick={closeMenu} title='Plan Your Trip'>Plan your trip</a>
          <a href="/" className='md:block bg-green-500/10 md:text-l p-3 hover:bg-amber-500/30 duration-300 active:text-green-600' onClick={closeMenu} title='Gallery'>Gallery</a>
          <a href="/" className='md:block bg-green-500/10 md:text-l p-3 hover:bg-amber-500/30 duration-300 active:text-green-600' onClick={closeMenu} title='Contact Us'>Contact Us</a>
      </div>

        </>
    );  
}


export default Navbar
