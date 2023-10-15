import { usePlay } from '../../contexts/Play'
import { useProgress } from '@react-three/drei'
import { useTranslations } from 'next-intl'
import React from 'react'

export const Overlay = () => {
    const t = useTranslations('StoryText')
    const { progress } = useProgress()
    const { play, end, setPlay, hasScroll } = usePlay()
    return (
        <div
            className={`overlay ${play ? 'overlay--disable' : ''} ${
                hasScroll ? 'overlay--scrolled' : ''
            } absolute top-0 left-0 bottom-0 right-0`}
        >
            <div
                className={`loader ${
                    progress === 100 ? 'loader--disappear' : ''
                } absolute top-0 left-0 bottom-0 right-0 bg-white transition-opacity ease-in-out`}
            />
            {progress === 100 && (
                <div
                    className={`intro ${
                        play ? 'intro--disappear' : ''
                    } flex justify-center items-center flex-col h-[100%]`}
                >
                    <h3 className="logo-subtitle text-white text-[1rem] md:text-[2rem] text-center font-thin font-serif tracking-tighter p-0 m-0 translateY-[50%] absolute top-[30vh]">
                        {t('intro')}
                    </h3>
                    <h1 className="logo-title bg-gradient-to-r from-yellow-300 to-yellow-700 bg-clip-text text-transparent text-[2rem] md:text-[4rem] font-semibold font-serif tracking-wide p-0 m-0 translateY-[50%] absolute top-[40vh]">
                        Study-Star
                    </h1>
                    <p className="intro__scroll">
                        {t('scroll')}
                        {/* Саяхатты бастау үшін төмен жылжытыңыз */}
                        {/* Прокрутите вниз, чтобы начать путешествие */}
                        {/* Scroll to begin the journey */}
                    </p>
                    <button
                        className="explore py-[1rem] px-[2rem] border-none font-serif text-[1.25rem] tracking-widest  text-cyan-800 bg-white hover:bg-yellow-500 rounded-xl cursor-pointer inline-block mt-[320px] relative z-10 overflow-hidden"
                        onClick={() => setPlay(true)}
                    >
                        {t('start')}
                    </button>
                </div>
            )}
            <div className={`outro ${end ? 'outro--appear' : ''}`}>
                <p className="outro__text text-center font-semibold bg-gradient-to-r from-yellow-300 to-yellow-700 bg-clip-text text-transparent">
                    {t('outro')}
                    {/* Жұлдыздарға саяхатымыз сізге ұнады деген үміттеміз... */}
                    {/* Надеемся что вам понравился наш полет к звездам... */}
                </p>
            </div>
        </div>
    )
}
