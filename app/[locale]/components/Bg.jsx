'use client'
import { Environment, Sphere, Stars, Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Gradient, LayerMaterial } from 'lamina'
import { useRef } from 'react'
import * as THREE from 'three'

export const Bg = ({ bgColors }) => {
    const start = 0
    const end = -1.5
    const gradientRef = useRef()
    const gradientEnvRef = useRef()

    useFrame(() => {
        gradientRef.current.colorA = new THREE.Color(bgColors.current.colorA)
        gradientRef.current.colorB = new THREE.Color(bgColors.current.colorB)
        gradientEnvRef.current.colorA = new THREE.Color(bgColors.current.colorA)
        gradientEnvRef.current.colorB = new THREE.Color(bgColors.current.colorB)
    })

    return (
        <>
            <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
                <LayerMaterial color={'#ffffff'} side={THREE.BackSide}>
                    <Gradient
                        ref={gradientRef}
                        axes="y"
                        start={start}
                        end={end}
                    />
                </LayerMaterial>
            </Sphere>
            <Environment resolution={256} frames={Infinity}>
                <Sphere
                    scale={[100, 100, 100]}
                    rotation-y={Math.PI / 2}
                    rotation-x={Math.PI}
                >
                    <LayerMaterial color={'#ffffff'} side={THREE.BackSide}>
                        <Gradient
                            ref={gradientEnvRef}
                            axes="y"
                            start={start}
                            end={end}
                        />
                    </LayerMaterial>
                </Sphere>
            </Environment>
            <Stars
                radius={100}
                depth={100}
                count={4000}
                factor={4}
                saturation={0}
                fade
                speed={0.2}
            />
            {/* <Sparkles
                count={300}
                size={3}
                speed={0.02}
                opacity={1}
                scale={10}
                color="#fff3b0"
            /> */}
        </>
    )
}
