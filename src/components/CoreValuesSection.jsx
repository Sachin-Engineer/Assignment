import React from 'react'
import value1 from '../assets/images/value1.png'
import value2 from '../assets/images/value2.png'
import value3 from '../assets/images/value3.png'
import value4 from '../assets/images/value4.png'
import value5 from '../assets/images/value5.png'

const coreValues = [
    {
        id: 1,
        icon: value1,
        title: "Team-centric",
        description: "We believe that the best solutions come from great conversations. Our team works side by side with clients, building with them not just for them"
    },
    {
        id: 2,
        icon: value2,
        title: "Curious by Nature",
        description: "At iDreamBiz, we ask questions, explore possibilities, and challenge \"standard\" to discover smarter, sharper ways of doing things."
    },
    {
        id: 3,
        icon: value3,
        title: "Solution-Obsessed",
        description: "We move fast, we solve faster. No blockers go unchallenged, no problem stays unsolved we turn ideas into actions."
    },
    {
        id: 4,
        icon: value4,
        title: "Reliable by Default",
        description: "You can count on us to deliver. On time, every time. We own what we commit, and we take pride in the journey every line of code, every deadline."
    },
    {
        id: 5,
        icon: value5,
        title: "Respect-Driven",
        description: "Humility, empathy, and mutual respect form the backbone of our culture. We value people clients, teammates, and partners above all."
    }
]

function CoreValuesSection() {
    return (
        <section className="bg-[#E8EDF5] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 w-full">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-10 lg:mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#0A2540] mb-3 md:mb-4 font-serif">
                        Our Core <span className='text-[#074784]'>Values</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-500">
                        (Because how we build matters just as much as what we build.)
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
                    {coreValues.map((value) => (
                        <div 
                            key={value.id} 
                            className="bg-[#0A3D62] rounded-2xl p-5 md:p-6 lg:p-7 min-h-[280px] md:min-h-[300px] lg:min-h-[320px] flex flex-col relative overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            {/* Icon */}
                            <div className="mb-3 md:mb-4">
                                <img 
                                    src={value.icon} 
                                    alt={value.title} 
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain" 
                                />
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-white text-base md:text-lg font-semibold mb-2 md:mb-3">
                                {value.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-[#B8C5D3] text-justify text-xs md:text-sm leading-relaxed flex-1 pb-8">
                                {value.description}
                            </p>
                            
                            {/* Number */}
                            <div className="absolute bottom-1 right-2">
                                <span className="text-6xl md:text-7xl font-bold text-white/15 leading-none select-none">
                                    {value.id}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoreValuesSection
