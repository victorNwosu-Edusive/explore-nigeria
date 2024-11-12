import React, { useState } from 'react';
import Modal from './Modal';
import image1 from "../assets/images/body-image.jpg";
import image2 from "../assets/images/obudu-image.png";
import image3 from "../assets/images/ogbunike-caves.png";
import image4 from "../assets/images/zuma-image.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: image1, alt: 'Obudu Mountain Resort' },
    { src: image2, alt: 'Zuma Rock' },
    { src: image3, alt: 'Ibeno Beach' },
    { src: image4, alt: 'Idanre Hills' },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
<>
    <p className="font-heading text-3xl md:text-4xl text-center text-amber-500 mt-11">Gallery</p>
        <p className="tracking-[.40em] text-white font-primary text-[10px] text-center md:text-center mt-1 md:mb-6">A VISUAL JOURNEY THROUGH NIGERIA'S WONDERS</p>
    <div className="p-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
          onClick={() => openModal(image)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
      ))}
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </div>

    </>
  );
};

export default Gallery;