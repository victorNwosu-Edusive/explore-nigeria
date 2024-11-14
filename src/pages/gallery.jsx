import React, { useState } from 'react';
import Modal from '../components/Modal';
import image1 from "../assets/images/olumo-rock.jpeg";
import image2 from "../assets/images/obudu-holy-mountain.jpg";
import image3 from "../assets/images/awhum-caves.jpeg";
import image4 from "../assets/images/Zuma-Rock-Nigeria-jpg.webp";
import image5 from "../assets/images/suspended-lake-ado-awaye-hills.jpg";
import image6 from "../assets/images/Matsirga_Waterfalls.jpg";
import image7 from "../assets/images/Ikogosi-Ekiti_warm_spring-1.jpg";
import image8 from "../assets/images/Sabuwar_Kofa_Gate-1.webp";
import image9 from "../assets/images/Sukur_Hidi-1.webp";
import ScrollToTop from '../components/scrolltotop';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: image1, alt: 'Olumo Rock', text: 'Olumo Rock in Abeokuta, Ogun State, is one of Nigeria’s most famous natural landmarks, standing as a historic and cultural symbol. Rising 137 meters above the ground, it served as a natural fortress for the Egba people during inter-tribal wars in the 19th century.' },
    { src: image2, alt: 'Obudu Holy Mountain', text: 'Obudu Holy Mountain is a serene, spiritually revered site near the Obudu Mountain Resort in Cross River State, Nigeria. Known for its misty peaks, the mountain is a popular pilgrimage site for people seeking peace, reflection, and connection with nature.' },
    { src: image3, alt: 'Awhum Caves', text: 'Awhum Caves in Enugu State feature a dramatic waterfall at the entrance, creating an enchanting, misty atmosphere. The surrounding environment is believed to have healing and spiritual powers, drawing pilgrims from across Nigeria.' },
    { src: image4, alt: 'Zuma Rock', text: 'Zuma Rock, often referred to as the “Gateway to Abuja,” is an iconic natural landmark located just outside Nigeria’s capital, Abuja.' },
    { src: image5, alt: 'Iyake Suspended Lake', text: 'The Iyake Suspended Lake is a unique and mystical natural wonder located on the Ado-Awaye Mountains in Oyo State, Nigeria. Known as one of only two suspended lakes in the world (the other being in Colorado, USA), it sits atop a hill surrounded by lush greenery and rugged cliffs.' },
    { src: image6, alt: 'Matsirga Falls', text: 'Located near Kafanchan in Kaduna State, Nigeria, is a captivating waterfall celebrated for its scenic beauty and serene environment. Originating from the Kagoro Hills, the water cascades down from a height of about 30 meters, creating a stunning mist and a cooling effect around the falls.' },
    { src: image7, alt: 'Ikogosi Warm Spring', text: 'Ikogosi Warm Spring is a fascinating natural attraction located in Ekiti State, Nigeria, known for its unique warm and cold springs that flow side by side from the same source.' },
    { src: image8, alt: 'Subwufar Kofa Gate', text: 'it is a historical landmark located in Kano, Nigeria, and is one of the famous twelve gates of the ancient Kano City Wall. Built during the reign of Emir Muhammad Rumfa in the 15th century, these gates served as important entry points to the walled city, protecting it from invaders and marking Kano as a center of trade and Islamic scholarship in West Africa.' },
    { src: image9, alt: 'Sukur Hidi', text: 'Located in Adamawa, Nigeria, is a UNESCO World Heritage hilltop kingdom known for its ancient terraced farms, stone-paved pathways, and the Hidi Palace overlooking the Mandara Mountains. This timeless settlement showcases the ingenuity of the Sukur people, who mastered iron-smelting and adapted beautifully to the rugged landscape.' },
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
<>

    <ScrollToTop />
    <div className="p-16 pt-28 md:pt-32 bg-emerald-900 bg-blend-overlay bg-gallery-banner md:p-32 bg-cover bg-no-repeat">
        <p className="font-heading text-3xl md:text-5xl text-white">Gallery — </p>
        <p className=" text-white font-primary text-sm md:text-xl mt-1 ">A Visual Journey through Nigeria's wonders</p>
      </div>
    <div className='p-3 md:p-11'>
    <p className=" text-white text-center font-primary text-[11px] md:text-sm mt-6 ">TAP/CLICK ON IMAGES TO SEE INFO</p>
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