import { Container } from '../Container'
import { SectionHeading } from '../SectionHeading'

export function Second() {
    return (
        <section
            id="second"
            aria-labelledby="second-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="2" id="second-title">
                    Участие в конкурсе
                </SectionHeading>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Критерий отбора
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    Здесь должна быть информация кто и как может принимать
                    участие в конкурсе.
                </p>
            </Container>
        </section>
    )
}
