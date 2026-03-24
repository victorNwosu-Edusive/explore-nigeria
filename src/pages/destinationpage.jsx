import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "../components/scrolltotop";
import { destinations } from "../data/destinations";

const Dest = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("All");

  const states = ["All", ...new Set(destinations.map((d) => d.location.replace(" STATE", "")))];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "All" || dest.location.includes(selectedState);
    return matchesSearch && matchesState;
  });

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-green-50 text-white">
        {/* Banner Section */}
        <div className="p-16 pt-28 md:pt-32 bg-green-900 bg-blend-overlay bg-destination-banner md:p-32 bg-cover bg-no-repeat">
      <p className="font-heading text-3xl md:text-5xl text-white">Destinations —</p>
      </div>

        {/* Search and Filter Section */}
        <div className="sticky top-16 z-10 bg-green-900/90 backdrop-blur-md p-4 md:p-8 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-3 font-primary focus:outline-none focus:border-amber-400 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {states.map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className={`px-4 py-2 rounded-full font-primary text-xs md:text-sm whitespace-nowrap transition-all ${
                    selectedState === state 
                    ? "bg-amber-400 text-black font-bold" 
                    : "bg-white/5 hover:bg-white/10 text-white"
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="max-w-7xl mx-auto p-4 md:p-12">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredDestinations.map((dest) => (
                <motion.div
                  layout
                  key={dest.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-[450px] rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/5"
                >
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                    <p className="font-primary text-xs text-amber-400 font-bold tracking-widest uppercase">
                      {dest.location}
                    </p>
                    <h3 className="font-heading text-2xl md:text-3xl">
                      {dest.name}
                    </h3>
                    <p className="font-primary text-sm line-clamp-3 text-white/80 group-hover:line-clamp-none transition-all duration-300">
                      {dest.description}
                    </p>
                    <div className="pt-2">
                      <button className="font-primary px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider transition-colors border border-white/20">
                        View Details —
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-20">
              <p className="font-primary text-2xl opacity-50">No destinations found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dest;