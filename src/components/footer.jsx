import React from "react";
import logo from "../assets/images/explore-nigeria-footer.png";

const Footer = () => {

    return (
        <>

        <footer role="contentinfo" className="h-auto p-7 md:p-32 bg-footer-pattern bg-green-800 bg-blend-color-burn bg-no-repeat bg-cover bg-center">
        
        
        <div className="md:flex flex justify-between flex-wrap">
        <div className="flex space-x-3 rtl:space-x-reverse opacity-60">
        <a className='font-heading text-white text-md md:text-3xl hover:text-amber-400 duration-300' href=''>Explore Nigeria
          </a>
          <img src={logo} alt="" className="h-6 w-6 md:h-9 md:w-9"  />
          </div>

        <div className="md:flex md:items-center md:space-x-9 md:rtl:space-x-reverse md:text-white md:font-primary">
        <p className="space-x-6 flex text-white font-primary text-[12px] md:text-sm ">© 2024 Explore Nigeria</p>
        </div>
        
       </div>
       </footer>
          
        </>
      )
    }
    
    export default Footer