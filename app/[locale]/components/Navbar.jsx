'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LocaleSwitcher from './LocaleSwitcher'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    const t = useTranslations('Nav')
    const items = ['home', 'about', 'contact']
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-semibold text-xl">
                    <a href="/">Your App</a>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleNavbar}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                {items.map((item) => (
                    <Link
                        key={item}
                        href={
                            item == 'home'
                                ? '/'
                                : item == 'about'
                                ? '/about'
                                : item == 'contact'
                                ? '/contact'
                                : ''
                        }
                    >
                        {t(item)}
                    </Link>
                ))}
                <LocaleSwitcher />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-16 left-0 right-0 bg-blue-500 p-4"
                    >
                        {items.map((item) => (
                            <Link
                                key={item}
                                href={
                                    item == 'home'
                                        ? '/'
                                        : item == 'about'
                                        ? '/about'
                                        : item == 'contact'
                                        ? '/contact'
                                        : ''
                                }
                            >
                                {t(item)}
                            </Link>
                        ))}
                        <LocaleSwitcher />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
