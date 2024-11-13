import React from "react";
import logo from "../assets/images/explore-nigeria-footer.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from "react-router-dom";


const Footer = () => {

    return (
        <>

        <footer role="contentinfo" className="h-auto p-11 pt-16 md:pt-32 md:px-32 bg-footer-pattern bg-green-950 md:bg-green-900 bg-blend-color-burn bg-fixed bg-no-repeat bg-cover bg-center">
        
        
        <div className="block md:grid md:grid-cols-5 gap-14 md:gap-14 text-sm text-white font-primary pb-16">
        <div className="grid *:py-1 pb-5 col-span-2">
          <p className="font-heading text-3xl md:text-3xl text-white">About — </p>
          <p className="md:text-[15px]">
          <span className="font-heading text-xl md:text-[20px]">Explore Nigeria</span> is a journey through Nigeria's diverse landscapes, cultures, and traditions. Discover the
            beauty, history, and heritage of this West African nation, from stunning landscapes to vibrant festivals.
          </p>
          </div>

          <div className="grid *:py-1 pb-5">
          <p className="font-heading text-3xl md:text-3xl text-white">Quick Links</p>
          <NavLink to="/destinations" className="hover:bg-amber-600 duration-300 ">Destinations</NavLink>
          <NavLink to="/experiences" className="hover:bg-amber-600 duration-300 ">Experiences</NavLink>
          <NavLink to="/plan-your-trip" className="hover:bg-amber-600 duration-300 ">Plan your trip</NavLink>
          <NavLink to="/gallery" className="hover:bg-amber-600 duration-300 ">Gallery</NavLink>
          <NavLink to="/contact-us" className="hover:bg-amber-600 duration-300 ">Contact Us</NavLink>
          </div>

          <div className="grid col-span-2 *:py-1 pb-5">
            <div className="grid-row space-x-2">
          <p className="font-heading text-3xl md:text-3xl text-white">Connect with us</p>
          <div className="space-x-2 m-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:bg-amber-900 hover:text-white duration-300 bg-amber-400 text-green-950 p-2 px-3 rounded-full">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:bg-amber-900 hover:text-white duration-300 bg-amber-400 text-green-950 p-2 px-[10px] rounded-full">
              <i className="fab fa-twitter"></i> 
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:bg-amber-900 hover:text-white duration-300 bg-amber-400 text-green-950 p-2 px-[10px] rounded-full">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:bg-amber-900 hover:text-white duration-300 bg-amber-400 text-green-950 p-2 rounded-full">
              <i className="fab fa-youtube"></i>
            </a>
            </div>
            </div>
          </div>
          
        </div>


        
        
        <div className="md:flex flex justify-between flex-wrap pt-2 md:pt-3">
        <div className="flex space-x-3 rtl:space-x-reverse opacity-60">
        <a className='font-heading text-white text-md md:text-xl hover:text-amber-400 duration-300' href=''>Explore Nigeria
          </a>
          <img src={logo} alt="" className="h-6 w-6 md:h-6 md:w-6"  />
          </div>

        <div className="md:flex md:items-center md:space-x-9 md:rtl:space-x-reverse md:text-white md:font-primary">
        <p className="space-x-6 flex text-white font-primary text-[12px] md:text-sm ">© {new Date().getFullYear()} Explore Nigeria</p>
        </div>
        
       </div>
       </footer>
          
        </>
      )
    }
    
    export default Footer