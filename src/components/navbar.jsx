import logo from "../assets/images/explore-nigeria-header.png";
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom";
import Footer from "./footer";
import ScrollToTop from "./scrolltotop";

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
        <ScrollToTop />
        <nav className='fixed z-30 w-full p-4 ease-in bg-emerald-900/70 backdrop-blur-md flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
        <div className='flex space-x-3 rtl:space-x-reverse'>
          <NavLink to="/" className='font-heading text-white text-xl md:text-2xl hover:text-amber-400 duration-300' onClick={closeMenu} >Explore Nigeria
          </NavLink>
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

        
          <NavLink to="/destinations" className={({ isActive }) =>
          `p-2 rounded-md ${isActive ? "hidden md:block bg-green-600" : "hidden md:block md:text-l p-2 hover:bg-green-600 duration-300 active:text-green-600"}`
        } title="Destination">Destinations</NavLink>
          <NavLink to="/experiences" className={({ isActive }) =>
          `p-2 rounded-md ${isActive ? "hidden md:block bg-green-600" : "hidden md:block md:text-l p-2 hover:bg-green-600 duration-300 active:text-green-600"}`
        } title='Experiences'>Experiences</NavLink>
          <NavLink to="/plan-your-trip" className={({ isActive }) =>
          `p-2 rounded-md ${isActive ? "hidden md:block bg-green-600" : "hidden md:block md:text-l p-2 hover:bg-green-600 duration-300 active:text-green-600"}`
        } title='Plan Your Trip'>Plan your trip</NavLink>
          <NavLink to="/gallery" className={({ isActive }) =>
          `p-2 rounded-md ${isActive ? "hidden md:block bg-green-600" : "hidden md:block md:text-l p-2 hover:bg-green-600 duration-300 active:text-green-600"}`
        } title='Gallery'>Gallery</NavLink>
          <NavLink to="/contact-us" className={({ isActive }) =>
          `p-2 rounded-md ${isActive ? "hidden md:block bg-green-600" : "hidden md:block md:text-l p-2 hover:bg-green-600 duration-300 active:text-green-600"}`
        } title='Contact Us'>Contact Us</NavLink>

        </div>

       
      </nav>

      <div id="mobile" className={`${
          isOpen ? "top-0" : "-top-full"
        } md:hidden fixed grid duration-300 ease-out gap-5 text-center z-20 text-white font-heading text-xl h-auto w-full p-3 pb-52 pt-20 bg-emerald-900/90 backdrop-blur-md mx-auto max-w-screen-xl `}>
          <NavLink to="/destinations" className={({ isActive }) =>
          `p-2 rounded-md ${isActive ? "bg-green-600" : "md:block bg-green-500/10 md:text-l p-3 hover:bg-amber-500/30 duration-300 active:text-green-600"}`
        } onClick={closeMenu} title="Destination">Destinations</NavLink>
          <NavLink to="/experiences" className={({ isActive }) =>
          `p-2 rounded-md ${isActive ? "bg-green-600" : "md:block bg-green-500/10 md:text-l p-3 hover:bg-amber-500/30 duration-300 active:text-green-600"}`
        } onClick={closeMenu} title='Experiences'>Experiences</NavLink>
          <NavLink to="/plan-your-trip" className={({ isActive }) =>
          `p-2 rounded-md ${isActive ? "bg-green-600" : "md:block bg-green-500/10 md:text-l p-3 hover:bg-amber-500/30 duration-300 active:text-green-600"}`
        } onClick={closeMenu} title='Plan Your Trip'>Plan your trip</NavLink>
          <NavLink to="/gallery" className={({ isActive }) =>
          `p-2 rounded-md ${isActive ? "bg-green-600" : "md:block bg-green-500/10 md:text-l p-3 hover:bg-amber-500/30 duration-300 active:text-green-600"}`
        } onClick={closeMenu} title='Gallery'>Gallery</NavLink>
          <NavLink to="/contact-us" className={({ isActive }) =>
          `p-2 rounded-md ${isActive ? "bg-green-600" : "md:block bg-green-500/10 md:text-l p-3 hover:bg-amber-500/30 duration-300 active:text-green-600"}`
        } onClick={closeMenu} title='Contact Us'>Contact Us</NavLink>
      </div>
      
      
          <Outlet />
          <Footer />
        </>
    );  
}


export default Navbar
