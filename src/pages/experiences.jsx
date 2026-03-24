import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "../components/scrolltotop";
import { experiences } from "../data/experiences";

const Experiences = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(experiences.map((exp) => exp.category))];

  const filteredExperiences = experiences.filter(
    (exp) => activeCategory === "All" || exp.category === activeCategory
  );

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-[#fafaf9] text-zinc-900">
        {/* Banner Section */}
          <div className="p-16 pt-28 md:pt-32 bg-lime-900 bg-blend-overlay bg-experiences-banner md:p-32 bg-cover bg-no-repeat">
      <p className="font-heading text-3xl md:text-5xl text-white">Experiences —</p>
          </div>

        {/* Filter Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-primary text-sm transition-all duration-300 border-2 ${
                  activeCategory === cat
                    ? "bg-emerald-900 text-white border-emerald-900 shadow-lg shadow-emerald-900/20 scale-105"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-emerald-900/30 hover:text-emerald-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Experiences Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          >
            <AnimatePresence mode='popLayout'>
              {filteredExperiences.map((exp, index) => (
                <motion.div
                  layout
                  key={exp.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100 flex flex-col h-full"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-900 border border-emerald-100 shadow-sm">
                        {exp.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3 text-emerald-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-primary text-xs font-bold uppercase tracking-wider">{exp.location}</span>
                    </div>
                    
                    <h3 className="font-heading text-2xl md:text-3xl mb-4 group-hover:text-emerald-900 transition-colors">
                      {exp.title}
                    </h3>
                    
                    <p className="font-primary text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">
                      {exp.description}
                    </p>

                    <div className="space-y-4 pt-6 border-t border-zinc-50">
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h, i) => (
                          <span key={i} className="text-[10px] bg-zinc-100 text-zinc-500 px-2 py-1 rounded-md font-primary font-medium">
                            {h}
                          </span>
                        ))}
                      </div>
                      <button className="w-full bg-emerald-900 text-white py-3 rounded-2xl font-heading tracking-wider hover:bg-zinc-900 transition-all duration-300 transform active:scale-95 shadow-md shadow-emerald-900/10">
                        Explore Experience —
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Call to Action Section */}
        <section className="bg-emerald-950 py-24 px-6 mt-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl text-white mb-8">Ready to create your own Nigerian story?</h2>
            <button className="bg-amber-400 hover:bg-white text-emerald-950 px-10 py-4 rounded-full font-heading text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Plan Your Trip Now
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experiences;