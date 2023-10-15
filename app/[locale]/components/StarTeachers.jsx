/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const StarTeachers = ({ teachers }) => {
    const [currentTeacherIndex, setCurrentTeacherIndex] = useState(0)

    const nextTeacher = () => {
        setCurrentTeacherIndex((prevIndex) => (prevIndex + 1) % teachers.length)
    }

    // Здесь определите ваши варианты анимации для Framer Motion
    const teacherAnimation = {
        hidden: { opacity: 1, x: 200 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                type: 'spring',
                stiffness: 40,
                repeatType: 'mirror',
            },
        },
        exit: {
            opacity: 1,
            x: 200,
            transition: {
                duration: 0.5,
                type: 'spring',
                stiffness: 20,
                repeatType: 'mirror',
            },
        },
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextTeacher()
        }, 6000)

        return () => {
            clearInterval(interval)
        }
    }, [currentTeacherIndex])

    return (
        <div className="w-full">
            <div className="w-full relative ml-5">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={teachers[currentTeacherIndex]}
                        src={teachers[currentTeacherIndex]}
                        alt={`Teacher ${currentTeacherIndex + 1}`}
                        initial={teacherAnimation.hidden}
                        animate={teacherAnimation.visible}
                        exit={teacherAnimation.exit}
                        // variants={teacherAnimation}
                        className="w-[90%] absolute rounded-lg [mask-image:linear-gradient(to_left,white_40%,transparent)]"
                    />
                </AnimatePresence>
            </div>
        </div>
    )
}

export default StarTeachers
