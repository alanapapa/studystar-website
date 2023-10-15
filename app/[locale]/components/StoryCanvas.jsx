'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from '../components/Experience'
import { ScrollControls, Stars, Sparkles } from '@react-three/drei'
import { EffectComposer, Noise } from '@react-three/postprocessing'
import { Overlay } from '../components/Overlay'
import { usePlay } from '../../contexts/Play'

const StoryCanvas = () => {
    const { play, end } = usePlay()
    return (
        <div className="h-[95vh]">
            <Canvas>
                <color attach="background" args={['#ececec']} />
                <ScrollControls
                    pages={play && !end ? 30 : 0}
                    damping={0.5}
                    style={{
                        top: '10px',
                        left: '0px',
                        bottom: '10px',
                        right: '10px',
                        width: 'auto',
                        height: 'auto',
                        animation: 'fadein 2.4s ease-in-out forwards',
                        opacity: 0,
                    }}
                >
                    <Experience />
                </ScrollControls>
                <Sparkles
                    count={300}
                    size={3}
                    speed={0.02}
                    opacity={1}
                    scale={10}
                    color="#fff3b0"
                />
                {/* <EffectComposer>
                    <Noise opacity={0.02} />
                </EffectComposer> */}
            </Canvas>
            <Overlay />
        </div>
    )
}

export default StoryCanvas
