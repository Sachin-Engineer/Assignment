import React from 'react';
import './styles.css';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';

const ClientStoriesSection = () => {
    const testimonials = [
        {
            id: 1,
            title: "Amazing",
            text: "One of the best and cooperative people to work with. They work with great enthusiasm and totally cater to your needs. You guys are really doing fantastic and wish you very best. Looking forward to work with you on my upcoming projects as well",
            name: "Mr. Siddharth",
            position: "Yourthreehvt",
            image: client1,
        },
        {
            id: 2,
            title: "Best Service",
            text: "Its really amazing that at last I found the real people who are the hub of web development services. Thank you iDreamBiz for your best quality services and experience what you offered me...The iDreamBiz support team is really amazing who puts their every efforts in the successful implementation of the project",
            name: "Mr. Navin Bhardwaj",
            position: "My SMS Kart",
            image: client2,
        }
    ];

    return (
        <section 
            className="max-w-[1440px]  mx-auto w-full py-16 md:py-20 px-5"
            style={{ background: 'radial-gradient(circle at center, #0F3F6C, #001F3D, #021C34)' }}
        >
            <div className="">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-12 md:mb-15">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white text-center">
                        Client Stories
                    </h2>
                    <button className="bg-transparent text-white border-none text-base cursor-pointer px-4 py-2 transition-opacity duration-300 hover:opacity-80">
                        Read More →
                    </button>
                </div>

                <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 relative">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={testimonial.id} 
                            className={`bg-transparent relative h-auto md:h-[355px] ${index === 0 ? 'md:pr-20' : 'md:pl-20'}`}
                        >
                            <h3 className="text-2xl md:text-3xl font-normal text-white mb-6">
                                "{testimonial.title}"
                            </h3>
                            <p className="text-sm md:text-base text-white/90 leading-7 font-light text-justify mb-10">
                                {testimonial.text}
                            </p>
                            {testimonial.image && (
                                <div className="mt-4 flex justify-end">
                                    <img src={testimonial.image} className='h-10 md:h-12' alt="" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientStoriesSection;
