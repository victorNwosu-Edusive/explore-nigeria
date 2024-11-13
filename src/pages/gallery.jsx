import React, { useState } from 'react';
import Modal from '../components/Modal';
import image1 from "../assets/images/body-image.jpg";
import image2 from "../assets/images/obudu-image.png";
import image3 from "../assets/images/ogbunike-caves.png";
import image4 from "../assets/images/zuma-image.jpg";
import ScrollToTop from '../components/scrolltotop';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: image1, alt: 'Idanre Hills', text: 'Idanre Hills is a stunning tourist attraction located in the heart of Ondo State, Nigeria.' },
    { src: image2, alt: 'Obudu Mountain Resort', text: 'Obudu Mountain Resort, also known as Obudu Cattle Ranch, is one of Nigeria’s most sought-after tourist destinations nestled in the heart of Cross River State.' },
    { src: image3, alt: 'Ogbunike Caves', text: 'Ogbunike Caves are a unique natural formation located in Ogbunike, Anambra State. The caves are known for their spiritual and historical significance.' },
    { src: image4, alt: 'Zuma Rock', text: 'Zuma Rock, often referred to as the “Gateway to Abuja,” is an iconic natural landmark located just outside Nigeria’s capital, Abuja.' },
    { src: image3, alt: 'Ogbunike Caves', text: 'Ogbunike Caves are a unique natural formation located in Ogbunike, Anambra State. The caves are known for their spiritual and historical significance.' },
    { src: image4, alt: 'Zuma Rock', text: 'Zuma Rock, often referred to as the “Gateway to Abuja,” is an iconic natural landmark located just outside Nigeria’s capital, Abuja.' },
    { src: image3, alt: 'Ogbunike Caves', text: 'Ogbunike Caves are a unique natural formation located in Ogbunike, Anambra State. The caves are known for their spiritual and historical significance.' },
    { src: image4, alt: 'Zuma Rock', text: 'Zuma Rock, often referred to as the “Gateway to Abuja,” is an iconic natural landmark located just outside Nigeria’s capital, Abuja.' },
    { src: image3, alt: 'Ogbunike Caves', text: 'Ogbunike Caves are a unique natural formation located in Ogbunike, Anambra State. The caves are known for their spiritual and historical significance.' },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
<>

    <ScrollToTop />
    <div className="p-16 pt-28 md:pt-32 bg-green-900 bg-blend-overlay bg-destination-banner md:p-32 bg-cover bg-no-repeat">
        <p className="font-heading text-3xl md:text-5xl text-white">Gallery — </p>
        <p className="tracking-[.35em] text-white font-primary text-[12px] font-bold mt-1 ">A VISUAL JOURNEY THROUGH NIGERIA'S WONDERS</p>
      </div>
    <div className='p-8 md:p-11'>
    <div className="p-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative cursor-pointer overflow-hidden rounded-md shadow-lg"
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

    </div>

    </>
  );
};

export default Gallery;