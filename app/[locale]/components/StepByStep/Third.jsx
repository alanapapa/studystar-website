import Image from 'next/image'

import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'
import abstractBackgroundImage from 'public/resources/abstract-background.png'
import discordImage from 'public/resources/discord.svg'
import figmaImage from 'public/resources/figma.svg'
import videoPlayerImage from 'public/resources/video-player.svg'
import authorImage from 'public/avatars/author.png'

const resources = [
    {
        title: 'Фамилия Имя Отчество',
        description: 'Должность и другие достижения',
        image: function FigmaImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <Image src={authorImage} alt="" unoptimized />
                </div>
            )
        },
    },
    {
        title: 'Фамилия Имя Отчество',
        description: 'Должность и другие достижения',
        image: function VideoPlayerImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        className="absolute inset-0 h-full w-full object-cover"
                        src={authorImage}
                        alt=""
                        width={'200'}
                        height={'200'}
                        sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
                    />
                    <Image
                        className="relative"
                        src={authorImage}
                        alt=""
                        unoptimized
                    />
                </div>
            )
        },
    },
    {
        title: 'Фамилия Имя Отчество',
        description: 'Должность и другие достижения',
        image: function DiscordImage() {
            return (
                <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
                    <Image src={authorImage} alt="" unoptimized />
                </div>
            )
        },
    },
]

export function Third() {
    return (
        <section
            id="third"
            aria-labelledby="third-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="3" id="third-title">
                    Академия Судей
                </SectionHeading>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Кто будет рассматривать анкеты и как
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    Здесь будет информация об Академии Судей и данные членов
                    Академии Судей.
                </p>
            </Container>
            <Container size="lg" className="mt-16">
                <ol
                    role="list"
                    className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
                >
                    {resources.map((resource) => (
                        <li
                            key={resource.title}
                            className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
                        >
                            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                                <resource.image />
                            </div>
                            <div>
                                <h3 className="text-base font-medium tracking-tight text-slate-900">
                                    {resource.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    {resource.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    )
}
