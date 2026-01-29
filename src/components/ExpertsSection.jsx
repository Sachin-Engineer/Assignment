import React, { useState } from 'react';

const ExpertsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const experts = [
    {
      count: "50+",
      title: "Experts",
      heading: {
        main: "Making ",
        highlight: "Digital & Fintech",
        rest: " Look Effortless"
      },
      subheading: "(Because It Should Be)",
      description: "We specialize in delivering custom fintech solutions, seamless integrations, and powerful digital platforms that help businesses scale faster. With 15+ years of expertise, we've partnered with enterprises across industries to simplify processes, enhance customer experiences, and unlock growth opportunities"
    },
    {
      count: "100+",
      title: "Projects",
      heading: {
        main: "Delivering ",
        highlight: "Innovative Solutions",
        rest: " Worldwide"
      },
      subheading: "(Proven Track Record)",
      description: "From startups to Fortune 500 companies, we've successfully delivered over 100 transformative projects. Our portfolio spans mobile apps, web platforms, blockchain solutions, and enterprise software that drives real business value and measurable results"
    },
    {
      count: "15+",
      title: "Years",
      heading: {
        main: "Building ",
        highlight: "Trust & Excellence",
        rest: " Since 2010"
      },
      subheading: "(Experience That Counts)",
      description: "With over 15 years in the industry, we bring deep technical expertise and strategic insight to every project. Our longevity speaks to our commitment to quality, innovation, and building lasting partnerships that help businesses thrive in the digital age"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? experts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === experts.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl w-[95%] mx-auto bg-linear-to-br from-purple-50 to-blue-50 rounded-3xl p-4 md:p-8 lg:p-20 mt-20 mb-20">
      <div className="expert flex flex-col min-[820px]:flex-row justify-between gap-12 items-center">
        {/* Left Side - Counter Section */}
        <div className="flex flex-col w-fit items-center">
          <div className="mb-8 transition-all duration-500 ease-in-out">
            <h2 className="text-8xl md:text-[120px] font-bold text-orange-500 leading-none mb-4">
              {experts[currentIndex].count}
            </h2>
            <p className="text-[20px] text-center font-semibold text-gray-800">
              {experts[currentIndex].title}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-gray-400 rounded-md bg-transparent flex items-center justify-center cursor-pointer transition-all duration-200 text-gray-500 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-700 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-gray-400 rounded-md bg-transparent flex items-center justify-center cursor-pointer transition-all duration-200 text-gray-500 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-700 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div className="w-full p-[5px] min-[400px]:p-[8px] min-[820px]:p-0 min-[820px]:w-[700px] flex flex-col items-start transition-all duration-500 ease-in-out">
          <h1 className="text-xl min-[400px]:text-2xl min-[600px]:text-3xl min-[820px]:text-[32px] font-normal text-gray-800 mb-4 min-[820px]:mb-6 leading-tight">
            {experts[currentIndex].heading.main}
            <span className="text-blue-600 font-semibold">{experts[currentIndex].heading.highlight}</span>
            {experts[currentIndex].heading.rest}
            <br />
            <span className="text-gray-600">{experts[currentIndex].subheading}</span>
          </h1>

          <p className="text-[#767676] text-[14px] min-[400px]:text-[15px] min-[820px]:text-[16px] mb-6 min-[820px]:mb-8 leading-relaxed">
            {experts[currentIndex].description}
          </p>

          <button className='pt-2 pb-2 pl-5 pr-5 bg-[#1946b6] text-white rounded-md cursor-pointer transition duration-200 ease-out hover:bg-blue-700 hover:shadow-md hover:-translate-y-px active:scale-95 active:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white'>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertsSection;
