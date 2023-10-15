/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useTranslations } from 'next-intl'
import Hero from './components/Hero'
import Partners from './components/Partners'
import { Teachers } from './components/Teachers'
import Quote from './components/Quote'
import ParallaxText from './components/ParallaxText'
import Block3images from './components/Block3images'
import BlockWith3dLogo from './components/BlockWith3dLogo'
import Logo3d from './components/Logo3d'
import Fullpage from './components/Fullpage'
import StoryCanvas from './components/StoryCanvas'
import formatTeacherData from '../utils/formatTeacherData'
import i18n from '@/i18n'
import CTA3 from './components/CTA3'

const partners = [
    {
        title: 'bbc',
        link: '#',
        imgLink: '/logos/bbc.svg',
    },
    {
        title: 'cbs',
        link: '#',
        imgLink: '/logos/cbs.svg',
    },
    {
        title: 'cnn',
        link: '#',
        imgLink: '/logos/cnn.svg',
    },
    // {
    //     title: 'fast',
    //     link: '#',
    //     imgLink: '/logos/fast-company.svg',
    // },
    {
        title: 'forbes',
        link: '#',
        imgLink: '/logos/forbes.svg',
    },
    // {
    //     title: 'huffpost',
    //     link: '#',
    //     imgLink: '/logos/huffpost.svg',
    // },
]

const teachers = [
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Преподаватель Химии',
        winnerOrFinalist: 'Финалист',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Преподаватель Математики',
        winnerOrFinalist: 'Финалист',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Преподаватель Начальных Классов',
        winnerOrFinalist: 'Победитель',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Директор школы',
        winnerOrFinalist: 'Финалист',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Преподаватель Английского языка',
        winnerOrFinalist: 'Финалист',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Учитель Истории',
        winnerOrFinalist: 'Финалист',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Учитель Казахского языка и Литературы',
        winnerOrFinalist: 'Финалист',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Преподаватель Физкультуры',
        winnerOrFinalist: 'Победитель',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Воспитатель детского сада',
        winnerOrFinalist: 'Финалист',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Учитель Истории',
        winnerOrFinalist: 'Финалист',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Учитель Русского языка и Литературы',
        winnerOrFinalist: 'Финалист',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Преподаватель Биологии',
        winnerOrFinalist: 'Финалист',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Учитель Физики',
        winnerOrFinalist: 'Финалист',
    },
    {
        fullname: 'Фамилия Имя Отчество',
        occupation: 'Доцент Университета',
        winnerOrFinalist: 'Финалист',
    },
]

const block3imgs = {
    img1: 'https://www.tailwind-kit.com/images/landscape/3.jpg',
    img2: 'https://www.tailwind-kit.com/images/landscape/2.jpg',
    img3: 'https://www.tailwind-kit.com/images/landscape/4.jpg',
    title: 'NTPK',
    description: `Краткая информация о проекте Национальная Премия Учитель
                    Казахстана с переходом на страницу «О Проекте», где
                    будет подробная информация. Это часть международного проекта
                    Global Teacher Prize, «учительский» аналог Нобелевской
                    премии с призовым фондом в 1 миллион долларов США, это отбор
                    10 лучших учителей страны для участия в отборочном туре
                    Глобальной премии «Учитель Мира»`,
    btnTitle: 'Подробнее о Проекте',
    btnLink: '/about',
}

const quoteData = {
    title: 'Учитель',
    description: `— это светлая звезда, которая освещает путь знаний и вдохновляет на бесконечное стремление к ней.`,
}

const heroData = {
    title1: `Global\xa0Teacher\xa0Prize`,
    title2: `Kazakhstan`,
    description: `Это часть международного проекта Global Teacher
                            Prize, «учительский» аналог Нобелевской премии с
                            призовым фондом в 1 миллион долларов США, это отбор
                            10 лучших учителей страны для участия в отборочном
                            туре Глобальной премии «Учитель Мира»`,
    btnTitle: 'Церемония награждения 2020',
    btnLink:
        'https://www.youtube.com/watch?v=88n62sbxewQ&ab_channel=NationalTeacherPrizeKazakhstan',
    teachers: [
        'https://images.unsplash.com/photo-1580894736036-7a68513983ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    ],
}

const dataCTA = {
    title1: 'Вы готовы стать Teacher-Star?',
    title2: 'Нажмите сюда и создайте свой аккаунт.',
    btn1: 'Teacher-Star.me',
    btn1Link: '#',
    btn2: '',
    btn2Link: '#',
}

export default function Home() {
    const t = useTranslations('Index')
    const cta = useTranslations('CTA')
    // const bestTeachers = useTranslations('BestTeachers')
    const objCount = 14 // Количество объектов
    const bestTeachers = []

    const useGetTranslation = (i) => useTranslations(`BestTeachers${i}`)

    for (let i = 1; i <= objCount; i++) {
        const key = useGetTranslation(i)
        const obj = {}
        obj.fullname = key('fullname')
        obj.occupation = key('occupation')
        obj.winnerOrFinalist = key('winnerOrFinalist')
        obj.image = key('image')
        bestTeachers.push(obj)
    }

    const aboutData = {
        img: 'https://images.unsplash.com/photo-1580894736036-7a68513983ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
        subtitle: t('aboutSubtitle'),
        title: t('aboutTitle'),
        description: t('aboutDescription'),
        btnTitle: t('aboutButton'),
        btnLink: '/about',
    }
    return (
        <>
            {/* <Hero {...heroData} /> */}
            <StoryCanvas />
            <section
                aria-label="Partners"
                className="pt-[3vh] pb-5vh] relative"
            >
                <Partners partners={partners} title={t('partners')} />
            </section>

            <section aria-label="About">
                <BlockWith3dLogo data={aboutData} />
            </section>
            <section aria-label="Best Teachers">
                <Teachers
                    teachers={bestTeachers}
                    title={t('bestTeachersTitle')}
                    subtitle={t('bestTeachersSubtitle')}
                    btn1={t('bestTeachersWinners')}
                    btn2={t('bestTeachersFinalists')}
                />
            </section>
            <section aria-label="Quote">
                <Quote
                    data={{
                        title: t('quoteTitle'),
                        description: t('quoteDescription'),
                    }}
                />
            </section>
            <CTA3
                data={{
                    title1: cta('title1'),
                    title2: cta('title2'),
                    btn1: cta('btn1'),
                    btn1Link: cta('btn1Link'),
                }}
            />

            <section
                aria-label="Teacher Prize Parallax"
                className="pt-[5vh] pb-[5vh] relative"
            >
                <ParallaxText baseVelocity={-1}>
                    Global Teacher Prize Kazakhstan{' '}
                    <span className="text-yellow-400">★</span>
                </ParallaxText>
                <ParallaxText baseVelocity={1}>
                    Global Teacher Prize Kazakhstan{' '}
                    <span className="text-yellow-400">★</span>
                </ParallaxText>
            </section>
        </>
    )
}
