import React from 'react'
import SanchitGoel from '../assets/images/SanchitGoel.png'
import AdeshKatiyar from '../assets/images/AdeshKatiyar.png'

function LeadershipSection() {
    const leaders = [
        {
            image: SanchitGoel
        },
        {
            image: AdeshKatiyar
        }
    ]

    return (
        <section className="bg-transparent text-center px-5 py-12 sm:py-16 md:py-20">
            {/* Heading with styled "i" */}
            <div className="mb-8 sm:mb-10">
                <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-light text-gray-100 lowercase tracking-tight leading-none">
                    <span className='capitalize'>L</span>eadersh<span className="text-blue-700 font-semibold">i</span>p
                </h2>
            </div>

            {/* Leaders Grid */}
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 justify-items-center mt-0 md:-mt-12 lg:-mt-16 relative z-10">
                {leaders.map((leader, index) => (
                    <div key={index} className="flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md first:-mt-7 sm:first:-mt-9 md:first:mt-0 bg-transparent">
                        <div className="w-full bg-transparent">
                            <img src={leader.image} alt="Leader photo" className="w-full h-auto object-cover rounded-none shadow-none bg-transparent" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LeadershipSection
