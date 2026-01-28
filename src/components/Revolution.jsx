import React from 'react'

// Import Industry card images
import Industry1 from '../assets/images/Industry1.png'
import Industry2 from '../assets/images/Industry2.png'
import Industry3 from '../assets/images/Industry3.png'
import Industry4 from '../assets/images/Industry4.png'
import Industry5 from '../assets/images/Industry5.png'
import Industry6 from '../assets/images/Industry6.png'
import Industry7 from '../assets/images/Industry7.png'
import Industry8 from '../assets/images/Industry8.png'

function Revolution() {
  const cardImages = [
    Industry1,
    Industry2,
    Industry3,
    Industry4,
    Industry5,
    Industry6,
    Industry7,
    Industry8
  ]

  return (
    <section className="max-w-7xl py-20 bg-white overflow-hidden">
      <div className="w-[95%] mx-auto px-5 relative">
        {/* Background Text */}
        <div 
          className="absolute top-9 left-[120px] sm:top-1 sm:left-[180px] md:-top-8 md:left-[280px] -translate-x-1/2 font-bold text-[#f2f2f2] text-[50px] sm:text-[80px] md:text-[120px] md:left-[] font-bold whitespace-nowrap pointer-events-none z-0 tracking-tight"
        >
          Revolut<span className="text-[#1946b6]">i</span>on
        </div>

        {/* Horizontal Line */}
        <div className="relative z-10 pt-20">
          <div className="w-full h-0.5 bg-[#1964b6]"></div>
        </div>

        {/* Timeline Cards Carousel */}
        <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide relative z-10 pb-4">
          {cardImages.map((image, index) => (
            <div 
              className="shrink-0"
              key={index}
            >
              <img 
                src={image} 
                alt={`Timeline card ${index + 1}`} 
                className="h-80 w-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Revolution