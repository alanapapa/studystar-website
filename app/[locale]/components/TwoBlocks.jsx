/* eslint-disable @next/next/no-img-element */
import React from 'react'

const TwoBlocks = ({ data }) => {
    return (
        <div className="relative overflow-hidden pt-2 md:pt-16 pb-32">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48" />
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                        <div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                    {data.firstTitle}
                                </h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    {data.firstDescription}
                                </p>

                                {data.firstBtnTitle && (
                                    <div className="mt-6">
                                        <a
                                            href={data.firstBtnLink}
                                            className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-yellow-600 to-cyan-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-yellow-700 hover:to-cyan-700"
                                        >
                                            {data.firstBtnTitle}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-200 pt-6">
                            <blockquote>
                                <div>
                                    <p className="text-base text-gray-500">
                                        {data.firstSubdescription}
                                    </p>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src={data.firstImg}
                                alt={data.firstImgAlt}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                        <div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                    {data.secondTitle}
                                </h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    {data.secondDescription}
                                </p>
                                {data.secondBtnTitle && (
                                    <div className="mt-6">
                                        <a
                                            href={data.secondBtnLink}
                                            className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-yellow-600 to-cyan-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-yellow-700 hover:to-cyan-700"
                                        >
                                            {data.secondBtnTitle}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                        <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                src={data.secondImg}
                                alt={data.secondImgAlt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoBlocks
