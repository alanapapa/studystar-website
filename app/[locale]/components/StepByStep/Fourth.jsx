import { use, useEffect } from 'react'
import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'
import { LoremIpsum } from 'react-lorem-ipsum'

export function Fourth() {
    return (
        <section
            id="fourth"
            aria-labelledby="fourth-title"
            className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
        >
            <Container>
                <SectionHeading number="4" id="fourth-title">
                    Национальная Премия
                </SectionHeading>
                <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                    Учитель Казахстана
                </p>
                <div className="mt-4 text-lg tracking-tight text-slate-700">
                    <LoremIpsum p={4} />
                </div>
            </Container>
        </section>
    )
}
