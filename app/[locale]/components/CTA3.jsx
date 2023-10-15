import React from 'react'

const CTA3 = ({ data }) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-4xl py-16 px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-around lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                    <span className="-mb-1 block bg-gradient-to-r from-yellow-400 to-yellow-700 bg-clip-text pb-1 text-transparent">
                        {data.title1}
                    </span>
                    <span className="-mb-1 block bg-gradient-to-r from-cyan-400 to-cyan-700 bg-clip-text pb-1 text-transparent">
                        {data.title2}
                    </span>
                </h2>
                <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
                    <a
                        href={data.btn1Link}
                        className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-yellow-600 to-cyan-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-yellow-700 hover:to-cyan-700"
                    >
                        {data.btn1}
                    </a>
                    {/* <a
                        href={data.btn2Link}
                        className="flex items-center justify-center rounded-md border border-transparent bg-yellow-100 px-4 py-3 text-base font-medium text-cyan-800 shadow-sm hover:bg-yellow-400"
                    >
                        {data.btn2}
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default CTA3
