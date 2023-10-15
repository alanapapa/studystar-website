'use client'
import React from 'react'
import { Nav } from '../components/StepByStep/Nav'
import { First } from '../components/StepByStep/First'
import { Testimonial } from '../components/Testimonial'
import { Second } from '../components/StepByStep/Second'
import { Third } from '../components/StepByStep/Third'
import { FreeChapters } from '../components/FreeChapters'
import { Fourth } from '../components/StepByStep/Fourth'
import { Testimonials } from '../components/Testimonials'
import { Fifth } from '../components/StepByStep/Fifth'
import avatarImage1 from 'public/avatars/avatar-1.png'
import avatarImage2 from 'public/avatars/avatar-2.png'

const Criteria = () => {
    return (
        <>
            <Nav />
            <First />
            {/* <Testimonial
                id="testimonial-from-tommy-stroman"
                author={{
                    name: 'Tommy Stroman',
                    role: 'Front-end developer',
                    image: avatarImage1,
                }}
            >
                <p>
                    “I didn’t know a thing about icon design until I read this
                    book. Now I can create any icon I need in no time. Great
                    resource!”
                </p>
            </Testimonial> */}
            <Second />
            {/* <Testimonial
                id="testimonial-from-gerardo-stark"
                author={{
                    name: 'Gerardo Stark',
                    role: 'Creator of Pandemicons',
                    image: avatarImage2,
                }}
            >
                <p>
                    “I’ve tried to create my own icons in the past but quickly
                    got frustrated and gave up. Now I sell my own custom icon
                    sets online.”
                </p>
            </Testimonial> */}
            <Third />
            {/* <FreeChapters /> */}
            <Fourth />
            {/* <Testimonials /> */}
            <Fifth />
        </>
    )
}

export default Criteria
