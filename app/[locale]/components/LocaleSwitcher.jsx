/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'
import { useTransition, useState, useEffect, useRef } from 'react'
import CountryFlag from 'react-country-flag'
import { useAnimate, stagger, motion } from 'framer-motion'

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        // animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 })

        animate(
            'ul',
            {
                clipPath: isOpen
                    ? 'inset(0% 0% 0% 0% round 10px)'
                    : 'inset(10% 50% 90% 50% round 10px)',
            },
            {
                type: 'spring',
                bounce: 0,
                duration: 0.5,
            }
        )

        animate(
            'li',
            isOpen
                ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
                : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
            {
                duration: 0.2,
                delay: isOpen ? staggerMenuItems : 0,
            }
        )
    }, [isOpen])

    return scope
}

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher')
    const [isPending, startTransition] = useTransition()
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const scope = useMenuAnimation(isOpen)
    const selectRef = useRef(null)

    const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setIsOpen(false) // Закрыть, если клик сделан вне элемента
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    function onSelectChange(nextLocale) {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale })
            setIsOpen(false) // Закрыть выпадающий список после выбора
        })
    }

    return (
        <>
            <label
                className={clsx(
                    'relative text-white my-auto',
                    isPending && 'transition-opacity [&:disabled]:opacity-30'
                )}
            >
                <p className="sr-only">{t('label')}</p>
                <div className="relative inline-block" ref={scope}>
                    <motion.div
                        whileTap={{ scale: 0.97 }}
                        className={clsx(
                            'bg-transparent pl-2 pr-6 rounded-md outline-none cursor-pointer',
                            isOpen && 'border-blue-500'
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="flex items-center" ref={selectRef}>
                            <span className="text-transparent">
                                {t('locale', { locale })}
                            </span>
                            <CountryFlag
                                className="w-5 h-5 mr-2"
                                countryCode={
                                    locale === 'kk'
                                        ? 'KZ'
                                        : locale === 'en'
                                        ? 'GB'
                                        : locale.toUpperCase()
                                }
                            />
                        </div>
                    </motion.div>
                    {/* {isOpen && ( */}
                    <ul className="absolute inset-x-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md">
                        {['kk', 'en', 'ru'].map((cur) =>
                            cur !== locale ? (
                                <li
                                    key={cur}
                                    className="px-2 py-1 cursor-pointer hover:bg-blue-100 text-orange-600"
                                    onClick={() => onSelectChange(cur)}
                                >
                                    {t('locale', { locale: cur })}
                                </li>
                            ) : (
                                ''
                            )
                        )}
                    </ul>
                    {/* )} */}
                </div>
            </label>
        </>
    )
}
