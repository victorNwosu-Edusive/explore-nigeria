import React from "react";
import ScrollToTop from "../components/scrolltotop";
import nigeriamap from "../assets/images/nigeria-road-map.jpg"

const Contact = () => {
    return (
        <>
       <ScrollToTop />
      <div className="p-16 pt-28 md:pt-32 bg-emerald-700 bg-blend-overlay bg-contactus md:p-32 bg-cover bg-no-repeat">
      <p className="font-heading text-3xl md:text-5xl text-white">Contact Us —</p>
      <p className="font-primary text-sm md:text-xl text-white">Enjoying the site? Let us know what you think!</p>
      </div>
      <div className="p-9 md:p-16 lg:p-32 bg-emerald-100">
        <div className="sm:block md:block lg:grid md:grid-cols-1 lg:grid-cols-2 md:gap-11">
          <div className="grid mb-10 md:mb-10 relative after:absolute after:inset-0 after:bg-green-400 after:mix-blend-soft-light">
            <img src={nigeriamap} alt="" className=" grayscale" />
            <p className="font-heading text-xl">The Map of Nigeria</p>
          </div>

          <form action="" className="grid">
            <h1 className="font-heading text-green-900 text-2xl md:text-3xl text-center md:text-center">Send us a message</h1>
            <div className="block md:grid *:border-2 *:border-green-700 md:grid-cols-2 gap-3 p-4">
            <input type="text" required placeholder="Firstname" className="focus:border-green-600 duration-300 w-full my-3 md:my-0 lg:my-0 md:w-full lg:w-full placeholder-green-900 text-sm placeholder-opacity-25 font-primary grid p-2 bg-green-700/20" />
            <input type="text" required placeholder="Lastname" className="w-full my-3 md:my-0 lg:my-0 md:w-full lg:w-full placeholder-green-900 text-sm placeholder-opacity-25 font-primary grid p-2 bg-green-700/20" />
            <input type="email" required placeholder="Email" className="w-full my-3 md:my-0 lg:my-0 md:w-full lg:w-full placeholder-green-900 text-sm placeholder-opacity-25 font-primary grid col-span-2 p-2 bg-green-700/20" />
            <input type="text" required placeholder="Phone Number" className="w-full my-3 md:my-0 lg:my-0 md:w-full lg:w-full placeholder-green-900 text-sm placeholder-opacity-25 font-primary grid col-span-2 p-2 bg-green-700/20" />
            <textarea name=""  className="w-full h-40 my-3 md:my-0 lg:my-0 md:w-full lg:w-full placeholder-green-900 text-sm placeholder-opacity-25 font-primary grid col-span-2 p-2 bg-green-700/20" id="" placeholder="Message..."></textarea>
            <button className="w-full my-3 md:my-0 lg:my-0 md:w-full lg:w-full text-sm font-primary grid col-span-2 md:col-span-1 lg:col-span-2 p-2 border-none bg-green-900 duration-300 hover:bg-green-700 text-white">Send</button>
            </div>
            

          </form>

        </div>

      </div>
      </>
    );
  };
  
  export default Contact;