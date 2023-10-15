/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import Slider from '../../utils/react-infinite-logo-slider'

export default function ParallaxImage({ partners, title }) {
    return (
        <div className="mb-20 md:my-32">
            <h2
                id="teachers-fullname"
                className="text-3xl font-serif font-extrabold sm:text-4xl tracking-tight text-cyan-700 text-center my-10 uppercase"
            >
                {title}
            </h2>
            <div className="[mask-image:linear-gradient(to_left,white_60%,transparent)]">
                <div className="[mask-image:linear-gradient(to_right,white_60%,transparent)]">
                    <Slider
                        width="250px"
                        duration={14}
                        pauseOnHover={false}
                        blurBorders={false}
                        blurBoderColor={'#fff'}
                    >
                        {partners.map((partner, i) => (
                            <Slider.Slide key={i}>
                                <Link href={partner.link}>
                                    <img
                                        src={partner.imgLink}
                                        alt={partner.title}
                                        className="w-36"
                                    />
                                </Link>
                            </Slider.Slide>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
