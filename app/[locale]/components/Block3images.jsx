/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import { Container } from './Container'
import { CircleBackground } from './CircleBackground'
import Link from 'next/link'

const Block3images = ({
    img1,
    img2,
    img3,
    title,
    description,
    btnTitle,
    btnLink,
}) => {
    return (
        <div className="bg-cyan-900 py-20 sm:py-32 overflow-hidden relative lg:flex lg:items-center">
            <div className="flex items-center gap-8 p-8 lg:p-24">
                <img src={img1} className="w-1/2 rounded-lg" alt="Tree" />
                <div>
                    <img src={img2} className="mb-8 rounded-lg" alt="Tree" />
                    <img src={img3} className="rounded-lg" alt="Tree" />
                </div>
            </div>
            <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">{title}</span>
                </h2>
                <p className="text-md md:text-lg mt-4 text-gray-400">
                    {description}
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <Link href={btnLink} passHref>
                            <button
                                type="button"
                                className="py-2 px-4  bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            >
                                {btnTitle}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block3images
