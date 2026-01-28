import React from 'react';
import MultipleIcons from '../assets/images/MultipleIcons.png'
import FirstOne from '../assets/images/FirstOne.png'

const ThodaAurSection = () => {
    return (
        <>
            <div className="w-full bg-white pt-16 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Large background text */}
                    <div className="thoda-container relative h-[200px]">
                        {/* THODA AUR text */}
                        <h1 className="thodaaur-text text-center text-[40px] sm:text-[80px] md:text-[100px] lg:text-[160px] font-bold text-[#f2f2f2] leading-none tracking-tight uppercase">
                            THODA AUR
                        </h1>

                        {/* Content overlay */}
                        <div className="thoda-content absolute top-7 sm:top-14 w-full bg-white flex items-center pt-5 pb-5">
                            <div className="max-w-[95%] mx-auto">
                                <p className="text-gray-700 leading-6">
                                    <span className="text-blue-600 font-semibold">
                                        <span className='text-[#26b5e9]'>5</span>
                                        <span className='text-[#ef4444]'>0</span>
                                        <span className='text-[#f59e0b]'>0</span>
                                        <span className='text-[#84cc16]'>MG</span>
                                    </span> aka{' '}
                                    <span className="text-[#1946b6] text-[10px] font-semibold">"THODA AUR"</span> in our product line, symbolizes our commitment to delivering more quality, more innovation, and more value. We believe in going the extra mile to ensure our clients receive unparalleled services and solutions that exceed expectations !
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='w-full overflow-x-hidden'>
                <img src={MultipleIcons} className='w-full h-auto block' style={{ width: '100%', maxWidth: '100%' }} alt="" />
            </div>

            <div className='relative w-full overflow-x-hidden'>
                <img src={FirstOne} style={{ width: '100%', maxWidth: '100%', display: 'block' }} alt="" />

                <button className='absolute right-20 bottom-5 border-2 border-[#c74931] text-[#c74931] hover:border-white hover:text-white hover:bg-[#c74931] pt-2 pb-2 pl-5 pr-5 rounded-[10px] transition-all duration-300 cursor-pointer' >Let’s Connect & Create Together</button>
            </div>
        </>
    );
};

export default ThodaAurSection;
