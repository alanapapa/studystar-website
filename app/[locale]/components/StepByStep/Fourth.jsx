import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'

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
                <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-600">
                    Здесь должна быть информация о церемонии награждения, какие
                    работы будут вестись с финалистами и победителем.
                </p>
            </Container>
        </section>
    )
}
