import React from "react";
import logo from "../assets/images/explore-nigeria-footer.png";

const Footer = () => {

    return (
        <>

        <footer role="contentinfo" className="h-auto p-7 pt-16 md:pt-32 md:px-32 bg-footer-pattern bg-green-900 bg-blend-color-burn bg-fixed bg-no-repeat bg-cover bg-center">
        
        
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
          <a href="" className="hover:bg-amber-600 duration-300 ">Destinations</a>
          <a href="" className="hover:bg-amber-600 duration-300 ">Experiences</a>
          <a href="" className="hover:bg-amber-600 duration-300 ">Plan your trip</a>
          <a href="" className="hover:bg-amber-600 duration-300 ">Gallery</a>
          <a href="" className="hover:bg-amber-600 duration-300 ">Contact Us</a>
          </div>

          <div className="grid *:py-1 pb-5">
          <p className="font-heading text-3xl md:text-3xl text-white">Connect with us</p>
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