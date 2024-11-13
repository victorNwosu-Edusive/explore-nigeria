import React from "react";
import ScrollToTop from "../components/scrolltotop";

const Dest = () => {
    return (
        <>
      <ScrollToTop />
      <div className="p-16 pt-28 md:pt-32 bg-green-900 bg-blend-overlay bg-destination-banner md:p-32 bg-cover bg-no-repeat">
        <p className="font-heading text-3xl md:text-5xl text-white">Destination — </p>
      </div>
      </>
    );
  };
  
  export default Dest;