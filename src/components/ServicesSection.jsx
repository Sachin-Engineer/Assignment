import React, { useState, useRef, useEffect } from 'react';
import './styles.css';
import service1Img from '../assets/images/service1.png';
import service2Img from '../assets/images/service2.png';
import service3Img from '../assets/images/service3.png';
import service4Img from '../assets/images/service4.png';

const ServicesSection = () => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const carouselRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'Intuitive, visually striking designs for effortless digital interactions.',
      image: service1Img,
    },
    {
      id: 2,
      title: 'E-Commerce Platforms',
      description: 'Scalable solutions enhancing shopping experiences and driving growth.',
      image: service2Img,
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Tailored websites for performance, scalability, and a strong online presence.',
      image: service3Img,
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Cutting-edge apps with seamless UX and advanced functionality.',
      image: service4Img,
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Intuitive, visually striking designs for effortless digital interactions.',
      image: service1Img,
    },
    {
      id: 6,
      title: 'E-Commerce Platforms',
      description: 'Scalable solutions enhancing shopping experiences and driving growth.',
      image: service2Img,
    },
    {
      id: 7,
      title: 'Web Development',
      description: 'Tailored websites for performance, scalability, and a strong online presence.',
      image: service3Img,
    },
    {
      id: 8,
      title: 'Mobile App Development',
      description: 'Cutting-edge apps with seamless UX and advanced functionality.',
      image: service4Img,
    },
  ];

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollPosition);
      return () => carousel.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const handlePrevious = () => {
    if (carouselRef.current && !isAtStart) {
      const cardWidth = 280;
      const gap = 30;
      carouselRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current && !isAtEnd) {
      const cardWidth = 280;
      const gap = 30;
      carouselRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto w-full py-20 bg-white">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 text-center mb-10 md:mb-15">
        Providing the best services for you
      </h2>

      <div className="max-w-[1400px] mx-auto mb-10 px-5 overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-7 overflow-x-auto scroll-smooth hide-scrollbar pb-2"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg py-10 px-6 text-center flex flex-col items-center shrink-0 w-[280px] min-w-[250px] cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-[180px] h-[180px] mb-7 flex items-center justify-center">
                <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3">
        <button
          className={`w-10 h-10 border border-gray-300 rounded-md bg-white flex items-center justify-center cursor-pointer transition-all duration-200 text-gray-500 ${isAtStart ? 'opacity-30 cursor-not-allowed bg-gray-100' : 'hover:bg-gray-50 hover:border-gray-400 hover:text-gray-700 active:scale-95'}`}
          onClick={handlePrevious}
          disabled={isAtStart}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className={`w-10 h-10 border border-gray-300 rounded-md bg-white flex items-center justify-center cursor-pointer transition-all duration-200 text-gray-500 ${isAtEnd ? 'opacity-30 cursor-not-allowed bg-gray-100' : 'hover:bg-gray-50 hover:border-gray-400 hover:text-gray-700 active:scale-95'}`}
          onClick={handleNext}
          disabled={isAtEnd}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
