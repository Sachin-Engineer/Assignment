import React, { useEffect, useRef, useState } from 'react';
import MultipleIcons from '../assets/images/MultipleIcons.png'
import FirstOne from '../assets/images/FirstOne.png'
import OriginalAvatar from '../assets/Original-Avatar.mp4'

const ThodaAurSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoRef = useRef(null);

    // Auto-close when video ends
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        const handleEnded = () => setIsOpen(false);
        v.addEventListener('ended', handleEnded);
        return () => v.removeEventListener('ended', handleEnded);
    }, [isOpen]);

    // Prevent background scroll when modal open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
    return (
        <>
            <div className="max-w-7xl mx-auto w-full bg-white px-6">
                <div className="">
                    {/* Large background text */}
                    <div className="thoda-container relative">
                        {/* THODA AUR text */}
                        <h1 className="thodaaur-text text-center text-[40px] sm:text-[80px] md:text-[100px] lg:text-[160px] font-bold text-[#f2f2f2] leading-none tracking-tight uppercase">
                            THODA AUR
                        </h1>

                        {/* Content block - relative overlap ~50% of heading */}
                        <div className="relative w-full bg-white flex items-center pt-4 pb-4 -mt-3 sm:-mt-7 md:-mt-10 lg:-mt-16">
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

            <div className='max-w-7xl w-full mx-auto overflow-x-hidden'>
                <img
                    src={MultipleIcons}
                    className='w-full h-auto block cursor-pointer'
                    style={{ width: '100%', maxWidth: '100%' }}
                    alt="Open video"
                    onClick={() => setIsOpen(true)}
                />
            </div>

            {isOpen && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center'
                    aria-modal="true"
                    role="dialog"
                >
                    {/* Backdrop with blur */}
                    <div
                        className='absolute inset-0 bg-black/50 backdrop-blur-sm'
                        onClick={() => setIsOpen(false)}
                    />
                    {/* Modal content */}
                    <div className='relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-2'>
                        {/* Close icon */}
                        <button
                            aria-label='Close video'
                            className='absolute -top-6 -right-1 sm:-top-8 sm:-right-2 text-white hover:text-gray-200'
                            onClick={() => setIsOpen(false)}
                        >
                            {/* X icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 9.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 11l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 12.06l-5.47 5.47a.75.75 0 1 1-1.06-1.06L10.94 11 5.47 5.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Video container - vertical format */}
                        <div className='mx-auto rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black'>
                            <video
                                ref={videoRef}
                                src={OriginalAvatar}
                                controls
                                autoPlay
                                playsInline
                                className='block mx-auto'
                                style={{
                                    width: '100%',
                                    maxHeight: '80vh',
                                    aspectRatio: '9 / 16', // vertical
                                    objectFit: 'contain'
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className='relative max-w-7xl mx-auto w-full overflow-x-hidden'>
                <img src={FirstOne} style={{ width: '100%', maxWidth: '100%', display: 'block' }} alt="" />

                <button className='absolute right-20 bottom-5 border-2 border-[#c74931] text-[#c74931] hover:border-white hover:text-white hover:bg-[#c74931] pt-2 pb-2 pl-5 pr-5 rounded-[10px] transition-all duration-300 cursor-pointer' >Let’s Connect & Create Together</button>
            </div>
        </>
    );
};

export default ThodaAurSection;
