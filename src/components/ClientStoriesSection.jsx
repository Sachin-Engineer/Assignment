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
        <div className="client-stories-section max-w-7xl">
            <div className="client-stories-container w-[95%]">
                <div className="client-stories-header">
                    <h2 className="client-stories-title text-center text-5xl">Client Stories</h2>
                    <button className="read-more-btn">
                        Read More →
                    </button>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card h-[355.19px] relative">
                            <h3 className="testimonial-title text-[32px]">"{testimonial.title}"</h3>
                            <p className="testimonial-text text-[16px] text-justify">{testimonial.text}</p>
                            {testimonial.image && (
                                <div className="author-avatar absolute right-14 bottom-15">
                                    <img src={testimonial.image} className='h-10' alt="" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientStoriesSection;
