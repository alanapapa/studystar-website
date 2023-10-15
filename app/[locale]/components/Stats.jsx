/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Stats = ({ data }) => {
    return (
        <div className="relative bg-cyan-900">
            <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
                <div className="h-full w-full xl:grid xl:grid-cols-2">
                    <div className="h-full xl:relative xl:col-start-2">
                        <img
                            className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                            src={data.img}
                            alt={data.imgAlt}
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
                <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                    <h2 className="text-base font-semibold">
                        <span className="bg-gradient-to-r from-yellow-300 to-yellow-700 bg-clip-text text-transparent">
                            {data.subtitle}
                        </span>
                    </h2>
                    <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                        {data.title}
                    </p>
                    <p className="mt-5 text-lg text-gray-300">
                        {data.description}
                    </p>
                    <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                        {data.metrics.map((item) => (
                            <p key={item.id}>
                                <span className="block text-2xl font-bold text-white">
                                    {item.stat}
                                </span>
                                <span className="mt-1 block text-base text-gray-300">
                                    <span className="font-medium text-white">
                                        {item.emphasis}
                                    </span>{' '}
                                    {item.rest}
                                </span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
