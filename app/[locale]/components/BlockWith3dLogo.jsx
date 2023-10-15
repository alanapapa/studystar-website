/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
    ArrowTopRightOnSquareIcon,
    ChevronRightIcon,
} from '@heroicons/react/20/solid'
import Logo3d from './Logo3d'
import Link from 'next/link'

const BlockWith3dLogo = ({ data }) => {
    const { img, subtitle, title, description, btnLink, btnTitle } = data
    return (
        <div className="relative bg-cyan-900 mix-blend-multiply">
            <div className="relative h-56 bg-gradient-to-b md:bg-gradient-to-r from-cyan-700 to-cyan-900 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                {/* <img className="h-full w-full object-cover" src={img} alt="" /> */}
                <Logo3d />
                {/* <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-cyan-900 mix-blend-multiply"
                /> */}
            </div>
            <div className="relative mx-auto max-w-md py-12 px-6 sm:max-w-7xl sm:pb-20 md:py-28 lg:px-8 lg:py-32">
                <div className="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 className="text-lg font-semibold bg-gradient-to-r from-yellow-300 to-yellow-700 bg-clip-text text-transparent">
                        {subtitle}
                    </h2>
                    <p className="mt-2 text-white text-3xl font-serif font-extrabold sm:text-4xl tracking-tight my-10 uppercase">
                        {title}
                    </p>
                    <p className="mt-3 text-lg text-gray-300 text-justify">
                        {description}
                    </p>
                    <div className="mt-8">
                        <div className="inline-flex rounded-md shadow">
                            <Link
                                href={btnLink}
                                passHref
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-yellow-400"
                            >
                                {btnTitle}
                                {/* <ArrowTopRightOnSquareIcon
                                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                /> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlockWith3dLogo
