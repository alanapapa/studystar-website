'use client'
import { useRef } from 'react'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from 'framer-motion'
import { wrap } from '@motionone/utils'

export default function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    })

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

    const directionFactor = useRef(1)
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get()

        baseX.set(baseX.get() + moveBy)
    })
    return (
        <div
            className={`uppercase text-[64px] overflow-hidden m-0 whitespace-nowrap flex flex-nowrap font-semibold`}
            style={{ letterSpacing: '-2px', lineHeight: '0.8' }}
        >
            <motion.div
                className={`uppercase text-[34px] md:text-[64px] flex flex-nowrap whitespace-nowrap font-semibold font-[Sofia-Pro] text-cyan-700 opacity-50`}
                style={{ x }}
            >
                {[...Array(4).keys()].map((index) => (
                    <span key={index} className="block mr-[30px]">
                        {children}
                    </span>
                ))}
            </motion.div>
        </div>
    )
}
