/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero2 = ({ data }) => {
    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                    <div className="absolute inset-0">
                        <img
                            className="h-full w-full object-cover"
                            src={data.img}
                            alt={data.imgAlt}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-800 to-cyan-700 mix-blend-multiply" />
                    </div>
                    <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
                        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-white">
                                {data.title1}
                            </span>
                            <span className="block text-cyan-200">
                                {data.title2}
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-lg text-center text-xl text-cyan-200 sm:max-w-3xl">
                            {data.description}
                        </p>
                        <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                                <a
                                    href={data.btn1Link}
                                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-cyan-700 shadow-sm hover:bg-cyan-50 sm:px-8"
                                >
                                    {data.btn1}
                                </a>
                                <a
                                    href={data.btn2Link}
                                    className="flex items-center justify-center rounded-md border border-transparent bg-cyan-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                                >
                                    {data.btn2}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2
