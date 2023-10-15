'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Hero2 from '../components/Hero2'
import TwoBlocks from '../components/TwoBlocks'
import Stats from '../components/Stats'
import CTA3 from '../components/CTA3'

const dataHero = {
    img: 'https://tengrinews.kz/userdata/news/2021/news_445276/thumb_m/photo_370279.png',
    imgAlt: 'People working on laptops',
    title1: 'Национальная Премия',
    title2: 'Учитель Казахстана',
    description: `Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat aliqua.`,
    btn1: 'Get started',
    btn1Link: '#',
    btn2: 'Live demo',
    btn2Link: '#',
}

const About = () => {
    const t = useTranslations('About')
    const cta = useTranslations('CTA')

    const dataTwoBlocks = {
        firstTitle: t('firstTitle'),
        firstDescription: t('firstDescription'),
        firstBtnTitle: t('firstBtnTitle'),
        firstBtnLink: t('firstBtnLink'),
        firstSubdescription: t('firstSubdescription'),
        firstImg: t('firstImg'),
        firstImgAlt: t('firstImgAlt'),
        secondTitle: t('secondTitle'),
        secondDescription: t('secondDescription'),
        secondBtnTitle: t('secondBtnTitle'),
        secondBtnLink: t('secondBtnLink'),
        secondImg: t('secondImg'),
        secondImgAlt: t('secondImgAlt'),
    }
    const dataStats = {
        img: t('statsImg'),
        imgAlt: t('statsImgAlt'),
        subtitle: t('statsSubtitle'),
        title: t('statsTitle'),
        description: t('statsDescription'),
        metrics: [
            {
                id: 1,
                stat: t('stat1'),
                emphasis: t('emphasis1'),
                rest: t('rest1'),
            },
            {
                id: 2,
                stat: t('stat2'),
                emphasis: t('emphasis2'),
                rest: t('rest2'),
            },
            {
                id: 3,
                stat: t('stat3'),
                emphasis: t('emphasis3'),
                rest: t('rest3'),
            },
            {
                id: 4,
                stat: t('stat4'),
                emphasis: t('emphasis4'),
                rest: t('rest4'),
            },
        ],
    }
    return (
        <>
            {/* <Hero2 data={dataHero} /> */}
            <TwoBlocks data={dataTwoBlocks} />
            <Stats data={dataStats} />
            <CTA3
                data={{
                    title1: cta('title1'),
                    title2: cta('title2'),
                    btn1: cta('btn1'),
                    btn1Link: cta('btn1Link'),
                }}
            />
        </>
    )
}

export default About
