/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import authorImage from 'public/avatars/author.png'
import Image from 'next/image'
import {
    ArrowTopRightOnSquareIcon,
    ChevronRightIcon,
} from '@heroicons/react/20/solid'
import { Container } from './Container'
import Link from 'next/link'

function WinnerOrFinalist({ winnerOrFinalist }) {
    return (
        <div className="flex">
            <h3 className="text-cyan-500">{winnerOrFinalist}</h3>
        </div>
    )
}

function Teacher({
    fullname,
    body,
    occupation,
    winnerOrFinalist,
    image,
    className,
    ...props
}) {
    let animationDelay = useMemo(() => {
        let possibleAnimationDelays = [
            '0s',
            '0.1s',
            '0.2s',
            '0.3s',
            '0.4s',
            '0.5s',
        ]
        return possibleAnimationDelays[
            Math.floor(Math.random() * possibleAnimationDelays.length)
        ]
    }, [])

    return (
        <figure
            className={clsx(
                'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
                className
            )}
            style={{ animationDelay }}
            {...props}
        >
            <blockquote className="text-gray-900">
                <WinnerOrFinalist winnerOrFinalist={winnerOrFinalist} />
                <p className="mt-4 text-lg font-semibold leading-6">
                    {fullname}
                </p>
            </blockquote>
            <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
                {occupation}
            </figcaption>
            <img
                src={image}
                alt="Best teacher of Kazakhstan"
                height="full"
                className="rounded-lg"
            />
        </figure>
    )
}

function splitArray(array, numParts) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        let index = i % numParts
        if (!result[index]) {
            result[index] = []
        }
        result[index].push(array[i])
    }
    return result
}

function TeacherColumn({
    className,
    teachers,
    teacherClassName = () => {},
    msPerPixel = 0,
}) {
    let columnRef = useRef()
    let [columnHeight, setColumnHeight] = useState(0)
    // let duration = `30000ms`
    let duration = `${(columnHeight * msPerPixel) / 3}ms`

    useEffect(() => {
        let resizeObserver = new window.ResizeObserver(() => {
            if (
                columnRef.current &&
                columnHeight < columnRef.current.offsetHeight
            ) {
                setColumnHeight(columnRef.current.offsetHeight)
            }
        })

        resizeObserver.observe(columnRef.current)

        return () => {
            resizeObserver.disconnect()
        }
    }, [])

    return (
        <div
            ref={columnRef}
            className={clsx('animate-marquee space-y-8 py-4', className)}
            style={{ '--marquee-duration': duration }}
        >
            {teachers.concat(teachers).map((teacher, teacherIndex) => (
                <Teacher
                    key={teacherIndex}
                    aria-hidden={teacherIndex >= teachers.length}
                    className={teacherClassName(teacherIndex % teachers.length)}
                    {...teacher}
                />
            ))}
        </div>
    )
}

function TeacherGrid({ teachers }) {
    let containerRef = useRef()
    let isInView = useInView(containerRef, { once: true, amount: 0.4 })
    let columns = splitArray(teachers, 3)
    columns = [columns[0], columns[1], splitArray(columns[2], 2)]

    return (
        <div
            ref={containerRef}
            className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
        >
            {isInView && (
                <>
                    <TeacherColumn
                        teachers={[
                            ...columns[0],
                            ...columns[2].flat(),
                            ...columns[1],
                        ]}
                        teacherClassName={(teacherIndex) =>
                            clsx(
                                teacherIndex >=
                                    columns[0].length + columns[2][0].length &&
                                    'md:hidden',
                                teacherIndex >= columns[0].length && 'lg:hidden'
                            )
                        }
                        msPerPixel={10}
                    />
                    <TeacherColumn
                        teachers={[...columns[1], ...columns[2][1]]}
                        className="hidden md:block"
                        teacherClassName={(teacherIndex) =>
                            teacherIndex >= columns[1].length && 'lg:hidden'
                        }
                        msPerPixel={15}
                    />
                    <TeacherColumn
                        teachers={columns[2].flat()}
                        className="hidden lg:block"
                        msPerPixel={10}
                    />
                </>
            )}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
        </div>
    )
}

export function Teachers({ title, subtitle, btn1, btn2, teachers }) {
    return (
        <section
            id="teachers"
            aria-labelledby="teachers-fullname"
            className="pt-20 pb-16 sm:pt-32 sm:pb-24"
        >
            <Container>
                <h2
                    id="teachers-fullname"
                    className="text-3xl font-serif font-extrabold sm:text-4xl tracking-tight text-cyan-700 text-center uppercase"
                >
                    {title}
                </h2>
                <p className="mt-2 text-lg text-gray-600 text-center">
                    {subtitle}
                </p>
                <div className="mt-8">
                    <div className="flex rounded-md justify-center gap-4 md:gap-10">
                        <Link
                            href={'/winners'}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-700 hover:bg-yellow-400 px-5 py-3 text-base font-medium text-gray-200 hover:text-gray-800 shadow-xl"
                        >
                            {btn1}
                        </Link>
                        <Link
                            href={'/finalists'}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-700 hover:bg-yellow-400 px-5 py-3 text-base font-medium text-gray-200 hover:text-gray-800 shadow-xl"
                        >
                            {btn2}
                        </Link>
                    </div>
                </div>
                <TeacherGrid teachers={teachers} />
            </Container>
        </section>
    )
}
