import React from 'react'
import LaunchingSection from '../components/LaunchingSection'
import IDBsection from '../components/IDBsection'
import LeadershipSection from '../components/LeadershipSection'
import Revolution from '../components/Revolution'
import CoreValuesSection from '../components/CoreValuesSection'
import ContactSection from '../components/ContactSection'

function About() {
    return (
        <div>
            <div className="pl-5 pr-5 pt-3 pb-3">
                <LaunchingSection />
            </div>

            <div>
                <IDBsection />
            </div>

            <div>
                <LeadershipSection />
            </div>

            <div className='pl-5 pr-5 pt-3 pb-3'>
                <Revolution />
            </div>

            <div>
                <CoreValuesSection />
            </div>

            <div>
                <ContactSection />
            </div>
        </div>
    )
}

export default About