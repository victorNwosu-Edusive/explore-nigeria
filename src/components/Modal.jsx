import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose} // Close modal when clicking outside of modal content
    >
      <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
      >
        <img src={image.src} alt={image.alt} className="w-full h-auto" />
        <div className="p-6 text-center">
          <h3 className="text-2xl font-heading text-green-900 mb-2">{image.alt}</h3>
          <p className="text-gray-700 font-primary mb-4">{image.text}</p>
          <button 
            className="px-6 py-2 bg-green-900 text-white font-heading rounded hover:bg-black transition duration-300"
            onClick={onClose}
          >
            Close [x]
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;