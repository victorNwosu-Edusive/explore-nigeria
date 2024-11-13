import React from 'react';
import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from "../src/components/navbar"; 
import './App.css';
import Destinations from "../src/components/destinations";
import Highlights from "../src/components/highlights";
import Gallery from "../src/components/gallery";
import Footer from './components/footer';

const Homepage = () => {

return (
    <>

        <Navbar />
        <nav role='navigation' className="relative md:text-center h-auto md:h-lvh p-10 md:p-20 md:pt-44 pt-40 pb-52 md:pb-52 bg-hero-pattern bg-green-700 bg-blend-overlay bg-no-repeat bg-cover">
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="App"
        >
          <p className="tracking-[.55em] text-white font-primary text-sm md:text-center mb-3 md:mb-6">EXPLORE NIGERIA</p>
          <p className=" text-3xl md:text-5xl align-middle font-primary text-white"> <span className="font-heading">Discover</span> the Vibrant <span className="text-amber-400 underline decoration-dashed font-heading">Heart of Africa</span> – Explore Nigeria’s Rich Culture, 
            Scenic Beauty, and Hidden Gems.</p>
            <button className="p-2 px-7 md:px-8 bg-green-900 text-xl text-white font-heading mt-5 hover:bg-black hover:text-amber-400 duration-300">Start Exploring —</button>
            </motion.div>
            <p className="text-[9px] md:text-sm absolute bottom-0 text-white font-primary bg-green-900 p-2 px-3">Image: Idanre Hills, Ogun State, Nigeria. Source: Wikipedia</p>
        </nav>

        <Destinations />
        <Highlights />
        <Gallery />
        <Footer />
        
      
    </>
  )
}

export default Homepage