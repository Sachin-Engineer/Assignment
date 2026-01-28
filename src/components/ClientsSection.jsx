import React from 'react';
import './styles.css';

// Import all frame images
import frame1 from '../assets/images/frame1.png';
import frame2 from '../assets/images/frame2.png';
import frame3 from '../assets/images/frame3.png';
import frame4 from '../assets/images/frame4.png';
import frame5 from '../assets/images/frame5.png';
import frame6 from '../assets/images/frame6.png';
import frame7 from '../assets/images/frame7.png';

const ClientsSection = () => {
  const clientLogos = [
    frame1, frame2, frame3, frame4, frame5, frame6, frame7
  ];

  return (
    <div className="clients-section relative">
      <div className="clients-heading flex justify-end">
        <h2 className='text-[200px] font-bold leading-6 pt-5'><span className='capitalize'>C</span>l<span className='text-[#1946b6]'>i</span>ents</h2>
      </div>
      
      <div className="clients-slider bg-white absolute bottom-4">
        <div className="clients-track">
          {/* First set of logos */}
          {clientLogos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="client-logo">
              <img src={logo} className='h-50px' alt={`Client ${index + 1}`} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clientLogos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="client-logo">
              <img src={logo} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
