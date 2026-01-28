import React from 'react'
import HeroSection from "../components/HeroSection"
import ExpertsSection from "../components/ExpertsSection"
import ClientsSection from "../components/ClientsSection"
import ServicesSection from "../components/ServicesSection"
import ClientStoriesSection from "../components/ClientStoriesSection"
import ThodaAurSection from "../components/ThodaAurSection"
import BlogsSection from "../components/BlogsSection"

function Home() {
    return (
        <>
            <section className="Hero-Section pl-5 pr-5 pt-3 pb-3">
                <HeroSection />
            </section>

            <section className="pl-5 pr-5 pt-3 pb-3">
                <ExpertsSection />
            </section>

            <section className="w-full pl-5 pr-5 pt-3 pb-3">
                <ClientsSection />
            </section>

            <section className="w-full pl-5 pr-5 pt-3 pb-3">
                <ServicesSection />
            </section>

            <section className='w-full'>
                <ThodaAurSection />
            </section>

            <section className='w-full'>
                <ClientStoriesSection />
            </section>

            <section className="blogs pl-5 pr-5 pt-3 pb-3">
                <BlogsSection />
            </section>
        </>
    )
}

export default Home