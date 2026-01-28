import React, { useState, useRef, useEffect } from 'react';
import './styles.css';

const ServicesSection = () => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const carouselRef = useRef(null);

  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'Intuitive, visually striking designs for effortless digital interactions.',
      image: '/src/assets/images/service1.png',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'E-Commerce Platforms',
      description: 'Scalable solutions enhancing shopping experiences and driving growth.',
      image: '/src/assets/images/service2.png',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Tailored websites for performance, scalability, and a strong online presence.',
      image: '/src/assets/images/service3.png',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Cutting-edge apps with seamless UX and advanced functionality.',
      image: '/src/assets/images/service4.png',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Intuitive, visually striking designs for effortless digital interactions.',
      image: '/src/assets/images/service1.png',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 6,
      title: 'E-Commerce Platforms',
      description: 'Scalable solutions enhancing shopping experiences and driving growth.',
      image: '/src/assets/images/service2.png',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      id: 7,
      title: 'Web Development',
      description: 'Tailored websites for performance, scalability, and a strong online presence.',
      image: '/src/assets/images/service3.png',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 8,
      title: 'Mobile App Development',
      description: 'Cutting-edge apps with seamless UX and advanced functionality.',
      image: '/src/assets/images/service4.png',
      gradient: 'from-red-400 to-pink-500'
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
      const cardWidth = carouselRef.current.querySelector('.service-card').offsetWidth;
      const gap = 30; // gap between cards
      carouselRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current && !isAtEnd) {
      const cardWidth = carouselRef.current.querySelector('.service-card').offsetWidth;
      const gap = 30; // gap between cards
      carouselRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="services-section">
      <h2 className="services-title text-[48px]">Providing the best services for you</h2>
      
      <div className="services-carousel-wrapper">
        <div className="services-carousel" ref={carouselRef}>
          {services.map((service) => (
            <div key={service.id} className="service-card cursor-pointer">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="services-pagination">
        <button 
          className={`pagination-arrow pagination-prev ${isAtStart ? 'disabled' : ''}`}
          onClick={handlePrevious}
          disabled={isAtStart}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button 
          className={`pagination-arrow pagination-next ${isAtEnd ? 'disabled' : ''}`}
          onClick={handleNext}
          disabled={isAtEnd}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
