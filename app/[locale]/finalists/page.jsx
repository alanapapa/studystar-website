/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'

const finalists2020 = {
    title: 'Финалисты 2020 года',
    description: 'Описание про Премию того года и другая информация',
    img1: 'https://source.unsplash.com/100x100/?portrait?0',
    fullname1: 'Фамилия Имя Отчество',
    occupation1: 'Учитель Математики',

    img2: 'https://source.unsplash.com/100x100/?portrait?1',
    fullname2: 'Фамилия Имя Отчество',
    occupation2: 'Учитель Физики',

    img3: 'https://source.unsplash.com/100x100/?portrait?2',
    fullname3: 'Фамилия Имя Отчество',
    occupation3: 'Учитель начальных классов',

    img4: 'https://source.unsplash.com/100x100/?portrait?3',
    fullname4: 'Фамилия Имя Отчество',
    occupation4: 'Учитель Английского языка',

    img5: 'https://source.unsplash.com/100x100/?portrait?4',
    fullname5: 'Фамилия Имя Отчество',
    occupation5: 'Учитель Истории',

    img6: 'https://source.unsplash.com/100x100/?portrait?5',
    fullname6: 'Фамилия Имя Отчество',
    occupation6: 'Учитель Казахского языка и Литературы',

    img7: 'https://source.unsplash.com/100x100/?portrait?6',
    fullname7: 'Фамилия Имя Отчество',
    occupation7: 'Учитель Химии',

    img8: 'https://source.unsplash.com/100x100/?portrait?7',
    fullname8: 'Фамилия Имя Отчество',
    occupation8: 'Учитель Географии',

    img9: 'https://source.unsplash.com/100x100/?portrait?8',
    fullname9: 'Фамилия Имя Отчество',
    occupation9: 'Учитель Физики',

    img10: 'https://source.unsplash.com/100x100/?portrait?9',
    fullname10: 'Фамилия Имя Отчество',
    occupation10: 'Учитель Математики',
}

const finalists2021 = {
    title: 'Финалисты 2021 года',
    description: 'Описание про Премию того года и другая информация',
    img1: 'https://source.unsplash.com/100x100/?portrait?10',
    fullname1: 'Фамилия Имя Отчество',
    occupation1: 'Учитель Математики',

    img2: 'https://source.unsplash.com/100x100/?portrait?11',
    fullname2: 'Фамилия Имя Отчество',
    occupation2: 'Учитель Физики',

    img3: 'https://source.unsplash.com/100x100/?portrait?12',
    fullname3: 'Фамилия Имя Отчество',
    occupation3: 'Учитель начальных классов',

    img4: 'https://source.unsplash.com/100x100/?portrait?13',
    fullname4: 'Фамилия Имя Отчество',
    occupation4: 'Учитель Английского языка',

    img5: 'https://source.unsplash.com/100x100/?portrait?14',
    fullname5: 'Фамилия Имя Отчество',
    occupation5: 'Учитель Истории',

    img6: 'https://source.unsplash.com/100x100/?portrait?15',
    fullname6: 'Фамилия Имя Отчество',
    occupation6: 'Учитель Казахского языка и Литературы',

    img7: 'https://source.unsplash.com/100x100/?portrait?16',
    fullname7: 'Фамилия Имя Отчество',
    occupation7: 'Учитель Химии',

    img8: 'https://source.unsplash.com/100x100/?portrait?17',
    fullname8: 'Фамилия Имя Отчество',
    occupation8: 'Учитель Географии',

    img9: 'https://source.unsplash.com/100x100/?portrait?18',
    fullname9: 'Фамилия Имя Отчество',
    occupation9: 'Учитель Физики',

    img10: 'https://source.unsplash.com/100x100/?portrait?19',
    fullname10: 'Фамилия Имя Отчество',
    occupation10: 'Учитель Математики',
}

const finalists2022 = {
    title: 'Финалисты 2022 года',
    description: 'Описание про Премию того года и другая информация',
    img1: 'https://source.unsplash.com/100x100/?portrait?0',
    fullname1: 'Фамилия Имя Отчество',
    occupation1: 'Учитель Математики',

    img2: 'https://source.unsplash.com/100x100/?portrait?1',
    fullname2: 'Фамилия Имя Отчество',
    occupation2: 'Учитель Физики',

    img3: 'https://source.unsplash.com/100x100/?portrait?2',
    fullname3: 'Фамилия Имя Отчество',
    occupation3: 'Учитель начальных классов',

    img4: 'https://source.unsplash.com/100x100/?portrait?3',
    fullname4: 'Фамилия Имя Отчество',
    occupation4: 'Учитель Английского языка',

    img5: 'https://source.unsplash.com/100x100/?portrait?4',
    fullname5: 'Фамилия Имя Отчество',
    occupation5: 'Учитель Истории',

    img6: 'https://source.unsplash.com/100x100/?portrait?5',
    fullname6: 'Фамилия Имя Отчество',
    occupation6: 'Учитель Казахского языка и Литературы',

    img7: 'https://source.unsplash.com/100x100/?portrait?6',
    fullname7: 'Фамилия Имя Отчество',
    occupation7: 'Учитель Химии',

    img8: 'https://source.unsplash.com/100x100/?portrait?7',
    fullname8: 'Фамилия Имя Отчество',
    occupation8: 'Учитель Географии',

    img9: 'https://source.unsplash.com/100x100/?portrait?8',
    fullname9: 'Фамилия Имя Отчество',
    occupation9: 'Учитель Физики',

    img10: 'https://source.unsplash.com/100x100/?portrait?9',
    fullname10: 'Фамилия Имя Отчество',
    occupation10: 'Учитель Математики',
}

const FinalistsList = ({ finalists }) => {
    return (
        <section className="py-6 ">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">
                    {finalists.title}
                </h1>
                <p className="max-w-2xl text-center ">
                    {finalists.description}
                </p>
                <div className="flex flex-row flex-wrap-reverse justify-center">
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={finalists.img1}
                        />
                        <p className="text-xl font-semibold leadi">
                            {finalists.fullname1}
                        </p>
                        <p className="">{finalists.occupation1}</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={finalists.img2}
                        />
                        <p className="text-xl font-semibold leadi">
                            {finalists.fullname2}
                        </p>
                        <p className="dark:text-gray-400">
                            {finalists.occupation2}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={finalists.img3}
                        />
                        <p className="text-xl font-semibold leadi">
                            {finalists.fullname3}
                        </p>
                        <p className="dark:text-gray-400">
                            {finalists.occupation3}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={finalists.img4}
                        />
                        <p className="text-xl font-semibold leadi">
                            {finalists.fullname4}
                        </p>
                        <p className="dark:text-gray-400">
                            {finalists.occupation4}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={finalists.img5}
                        />
                        <p className="text-xl font-semibold leadi">
                            {finalists.fullname5}
                        </p>
                        <p className="dark:text-gray-400">
                            {finalists.occupation5}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={finalists.img6}
                        />
                        <p className="text-xl font-semibold leadi">
                            {finalists.fullname6}
                        </p>
                        <p className="dark:text-gray-400">
                            {finalists.occupation6}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={finalists.img7}
                        />
                        <p className="text-xl font-semibold leadi">
                            {finalists.fullname7}
                        </p>
                        <p className="dark:text-gray-400">
                            {finalists.occupation7}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={finalists.img8}
                        />
                        <p className="text-xl font-semibold leadi">
                            {finalists.fullname8}
                        </p>
                        <p className="dark:text-gray-400">
                            {finalists.occupation8}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={finalists.img9}
                        />
                        <p className="text-xl font-semibold leadi">
                            {finalists.fullname9}
                        </p>
                        <p className="dark:text-gray-400">
                            {finalists.occupation9}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                            src={finalists.img10}
                        />
                        <p className="text-xl font-semibold leadi">
                            {finalists.fullname10}
                        </p>
                        <p className="dark:text-gray-400">
                            {finalists.occupation10}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Finalists = () => {
    const [activeTab, setActiveTab] = useState(2)
    const years = [2020, 2021, 2022]

    useEffect(() => {}, [activeTab])

    return (
        <>
            <div>
                {' '}
                <div className="grid grid-cols-3 gap-5 m-2">
                    {' '}
                    {years.map((year, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`p-4 rounded shadow-md ${
                                i === activeTab
                                    ? 'text-white bg-cyan-700'
                                    : 'bg-white text-cyan-700'
                            }`}
                        >
                            {' '}
                            {year}{' '}
                        </button>
                    ))}
                </div>{' '}
                {activeTab === 0 && <FinalistsList finalists={finalists2020} />}
                {activeTab === 1 && <FinalistsList finalists={finalists2021} />}
                {activeTab === 2 && <FinalistsList finalists={finalists2022} />}
            </div>
        </>
    )
}

export default Finalists
