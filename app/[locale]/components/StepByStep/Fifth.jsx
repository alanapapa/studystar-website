import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '../GridPattern'
import { SectionHeading } from '../SectionHeading'
import { Container } from '../Container'

export function Fifth() {
    return (
        <section
            id="fifth"
            aria-labelledby="fifth-title"
            className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
        >
            <Container>
                <SectionHeading number="4" id="fifth-title">
                    Глобальная Премия
                </SectionHeading>
                <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                    Учитель Мира
                </p>
                <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
                    Здесь будет информация о глобальной премии Учитель Мира и
                    участии в ней.
                </p>
            </Container>
        </section>
    )
}
