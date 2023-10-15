'use client'
import { useId, useRef, useState } from 'react'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { Button } from './Button'
import { Container } from './Container'
// import { PhoneFrame } from './PhoneFrame'
import StarTeachers from './StarTeachers'

function BackgroundIllustration(props) {
    let id = useId()

    return (
        <div {...props}>
            <svg
                viewBox="0 0 1026 1026"
                fill="none"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full animate-spin-slow"
            >
                <path
                    d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                    stroke="#D4D4D4"
                    strokeOpacity="0.7"
                />
                <path
                    d="M513 1025C230.23 1025 1 795.77 1 513"
                    stroke={`url(#${id}-gradient-1)`}
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient
                        id={`${id}-gradient-1`}
                        x1="1"
                        y1="513"
                        x2="1"
                        y2="1025"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#F2B80E" />
                        <stop offset="1" stopColor="#F2B80E" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <svg
                viewBox="0 0 1026 1026"
                fill="none"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
            >
                <path
                    d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                    stroke="#D4D4D4"
                    strokeOpacity="0.7"
                />
                <path
                    d="M913 513c0 220.914-179.086 400-400 400"
                    stroke={`url(#${id}-gradient-2)`}
                    strokeLinecap="round"
                />
                <defs>
                    <linearGradient
                        id={`${id}-gradient-2`}
                        x1="913"
                        y1="513"
                        x2="913"
                        y2="913"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#F2B80E" />
                        <stop offset="1" stopColor="#F2B80E" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

function PlayIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
            <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
            <path
                d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
                fill="#A3A3A3"
                stroke="#A3A3A3"
            />
        </svg>
    )
}

export default function Hero({
    title1,
    title2,
    description,
    btnTitle,
    btnLink,
    teachers,
}) {
    return (
        <div className="overflow-hidden py-10 sm:py-28 lg:pb-10 xl:pb-10">
            <Container>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-2">
                    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 -mt-10">
                        <h1 className="text-4xl md:text-5xl text-center md:text-left font-serif font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-yellow-700 bg-clip-text text-transparent">
                            {title1}
                        </h1>
                        <h1 className="text-5xl md:text-6xl tracking-wide text-center md:text-left font-serif font-extrabold bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text text-transparent">
                            {title2}
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 text-justify">
                            {description}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 justify-center md:justify-start">
                            <Button
                                href={btnLink}
                                target="_blank"
                                variant="outline"
                            >
                                <PlayIcon className="h-6 w-6 flex-none" />
                                <span className="ml-2.5">{btnTitle}</span>
                            </Button>
                        </div>
                    </div>
                    <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                        <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
                        <div className="-mx-4 h-[300px] md:h-[648px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                            <StarTeachers teachers={teachers} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
