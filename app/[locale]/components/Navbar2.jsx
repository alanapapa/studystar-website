/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import {
    motion,
    AnimatePresence,
    MotionConfig,
    useScroll,
    useAnimation,
    useViewportScroll,
} from 'framer-motion'
import LocaleSwitcher from './LocaleSwitcher'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Logo, Logomark } from './Logo'
import TextWithLetterAnimation from './TextWithLetterAnimation'
import LogoLight from './LogoLight'
import { usePlay } from '../../contexts/Play'

export default function Navbar2() {
    const [mobileNav, setMobileNav] = useState(false)
    const [prevScrollY, setPrevScrollY] = useState(0)
    const { scrollY } = useScroll()
    const controls = useAnimation()
    const { play, end, setPlay, hasScroll } = usePlay()

    // Задайте пороговое значение для начала анимации
    const threshold = 20 // Пример порогового значения
    // Анимация при скролле вниз
    const animateOnScrollDown = () => {
        if (controls && controls.start) {
            controls.start({ opacity: 0, y: -100 })
        }
    }

    // Анимация при скролле вверх
    const animateOnScrollUp = () => {
        if (controls && controls.start) {
            controls.start({ opacity: 1, y: 0 })
        }
    }

    // Отслеживание скролла и вызов соответствующих анимаций
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > prevScrollY && currentScrollY > threshold) {
                animateOnScrollDown()
            } else if (currentScrollY < prevScrollY - threshold / 2) {
                animateOnScrollUp()
            }
            setPrevScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [prevScrollY])

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav)
        if (!mobileNav) {
            document.body.style.overflow = 'hidden'
        } else {
            // Удалите блокировку прокрутки при закрытии меню
            document.body.style.overflow = 'auto'
        }
    }

    const t = useTranslations('Nav')
    const navItems = [
        ['home', '/'],
        ['about', '/about'],
        ['winners', '/winners'],
        ['finalists', '/finalists'],
        ['criteria', '/criteria'],
    ]

    return (
        <>
            {(!play || end) && (
                <motion.header
                    initial={{ opacity: 1, y: 0 }}
                    animate={mobileNav ? {} : controls}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    // style={{ opacity: invertedScrollYProgress }}
                    // mb-8 rounded-b-xl mx-0.5 md:mx-4
                    className={`sticky top-0 inset-x-0 p-4 bg-cyan-800 bg-transparent-80 z-50`}
                >
                    <nav className="container mx-auto">
                        <div className="flex justify-between">
                            <Link
                                href={'/'}
                                className="flex gap-4 items-center text-white"
                            >
                                <LogoLight width="50" color="#F2B80E" />
                                <TextWithLetterAnimation text="Study-Star" />

                                <motion.div
                                    className="w-2 h-2 text-yellow-400"
                                    initial={{
                                        scale: 0,
                                        rotate: 0,
                                        x: -150,
                                        y: -20,
                                    }}
                                    animate={{
                                        scale: 1,
                                        rotate: -370,
                                        x: -15,
                                        y: -10,
                                    }}
                                    whileInView={true}
                                    transition={{
                                        duration: 3,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    ★
                                </motion.div>
                            </Link>
                            <div className="flex justify-between">
                                <LocaleSwitcher />
                                <motion.button
                                    initial="hide"
                                    animate={mobileNav ? 'show' : 'hide'}
                                    onClick={toggleMobileNav}
                                    className="flex flex-col space-y-1 relative z-10 justify-center"
                                >
                                    <motion.span
                                        variants={{
                                            hide: {
                                                rotate: 0,
                                            },
                                            show: {
                                                rotate: 45,
                                                y: 5,
                                            },
                                        }}
                                        className="w-6 bg-white h-px block"
                                    ></motion.span>
                                    <motion.span
                                        variants={{
                                            hide: {
                                                opacity: 1,
                                            },
                                            show: {
                                                opacity: 0,
                                            },
                                        }}
                                        className="w-6 bg-white h-px block"
                                    ></motion.span>
                                    <motion.span
                                        variants={{
                                            hide: {
                                                rotate: 0,
                                            },
                                            show: {
                                                rotate: -45,
                                                y: -5,
                                            },
                                        }}
                                        className="w-6 bg-white h-px block"
                                    ></motion.span>
                                </motion.button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {mobileNav && (
                                <MotionConfig
                                    transition={{
                                        type: 'tween',
                                        bounce: 1,
                                    }}
                                >
                                    <motion.div
                                        key="mobile-nav"
                                        variants={{
                                            hide: {
                                                y: '-100%',
                                                transition: {
                                                    type: 'spring',
                                                    bounce: 0.1,
                                                    when: 'afterChildren',
                                                    staggerChildren: 0.25,
                                                },
                                            },
                                            show: {
                                                y: '0%',
                                                transition: {
                                                    type: 'spring',
                                                    bounce: 0.1,
                                                    when: 'beforeChildren',
                                                    staggerChildren: 0.25,
                                                },
                                            },
                                        }}
                                        initial="hide"
                                        animate="show"
                                        exit="hide"
                                        className="fixed inset-0 bg-cyan-800 p-6 flex flex-col justify-center space-y-10"
                                    >
                                        <div className="mx-auto">
                                            <LogoLight width="100" />
                                        </div>
                                        <motion.ul
                                            variants={{
                                                hide: {
                                                    y: '25%',
                                                    opacity: 0,
                                                },
                                                show: {
                                                    y: '0%',
                                                    opacity: 1,
                                                },
                                            }}
                                            className="list-none space-y-6 mx-auto"
                                        >
                                            {navItems.map(([item, href]) => (
                                                <Link key={item} href={href}>
                                                    <li
                                                        onClick={
                                                            toggleMobileNav
                                                        }
                                                        className="text-white text-xl py-2 text-center"
                                                    >
                                                        {t(item)}
                                                    </li>
                                                </Link>
                                            ))}
                                        </motion.ul>
                                        <motion.div
                                            variants={{
                                                hide: {
                                                    y: '25%',
                                                    opacity: 0,
                                                },
                                                show: {
                                                    y: '0%',
                                                    opacity: 1,
                                                },
                                            }}
                                            className="w-full h-px bg-white/30"
                                        ></motion.div>
                                        <motion.ul
                                            variants={{
                                                hide: {
                                                    y: '25%',
                                                    opacity: 0,
                                                },
                                                show: {
                                                    y: '0%',
                                                    opacity: 1,
                                                },
                                            }}
                                            className="list-none flex justify-center gap-x-4"
                                        >
                                            <li>
                                                <a
                                                    href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-yellow-400"
                                                >
                                                    <span className="sr-only">
                                                        Facebook
                                                    </span>
                                                    <svg
                                                        className="h-6 w-6"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-yellow-400"
                                                >
                                                    <span className="sr-only">
                                                        Instagram
                                                    </span>
                                                    <svg
                                                        className="h-6 w-6"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="/"
                                                    rel="noreferrer"
                                                    target="_blank"
                                                    className="text-white transition hover:text-yellow-400"
                                                >
                                                    <span className="sr-only">
                                                        Twitter
                                                    </span>
                                                    <svg
                                                        className="h-6 w-6"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </motion.ul>
                                    </motion.div>
                                </MotionConfig>
                            )}
                        </AnimatePresence>
                    </nav>
                </motion.header>
            )}
        </>
    )
}
