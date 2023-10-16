import Block3images from '../Block3images'
import { Container } from '../Container'
import { GridPattern } from '../GridPattern'
import { SectionHeading } from '../SectionHeading'
import { LoremIpsum } from 'react-lorem-ipsum'

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
    btnLink: '',
}

export function First() {
    return (
        <section
            id="first"
            aria-labelledby="first-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="1" id="first-title">
                    Сообщество
                </SectionHeading>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Сообщество Study-Star
                </p>
                <div className="mt-4 text-lg tracking-tight text-slate-700">
                    <LoremIpsum p={4} />
                </div>
            </Container>
        </section>
    )
}
