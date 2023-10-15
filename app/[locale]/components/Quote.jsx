import { CircleBackground } from './CircleBackground'
import { Container } from './Container'

export default function Quote({ data }) {
    return (
        <section
            id="get-free-shares-today"
            className="relative overflow-hidden bg-cyan-900 py-20 sm:py-28"
        >
            <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
                <CircleBackground
                    color="#F2B80E"
                    className="animate-spin-slower"
                />
            </div>
            <Container className="relative">
                <div className="mx-auto max-w-md sm:text-center">
                    <h2 className="text-3xl font-semibold tracking-normal font-serif text-white sm:text-4xl">
                        {data.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        {data.description}
                    </p>
                </div>
            </Container>
        </section>
    )
}
