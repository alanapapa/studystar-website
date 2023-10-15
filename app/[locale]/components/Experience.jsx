/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { use, useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { Bg } from './Bg'
import {
    Float,
    Line,
    OrbitControls,
    PerspectiveCamera,
    Text,
    useScroll,
    Stars,
    Sparkles,
} from '@react-three/drei'
import { Spaceship } from './Spaceship'
import { StrunnedStars } from './StrunnedStars'
import { Model as Logo3d } from './Logo3d'
import { Star } from './Star'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Group, Vector3, Euler } from 'three'
import { TextSection } from './TextSection'
import { color } from 'framer-motion'
import gsap from 'gsap'
import { usePlay } from '../../contexts/Play'
import { useTranslations } from 'next-intl'

const LINE_NB_POINTS = 1000
const CURVE_DISTANCE = 250
const CURVE_AHEAD_CAMERA = 0.008
const CURVE_AHEAD_SPACESHIP = 0.02
const SPACESHIP_MAX_ANGLE = 35
const FRICTION_DISTANCE = 42

const Experience = () => {
    const t = useTranslations('StoryText')
    const curvePoints = useMemo(
        () => [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, -CURVE_DISTANCE),
            new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
            new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
            new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
            new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
            new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
            new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
        ],
        []
    )

    const sceneOpacity = useRef(0)
    const lineMaterialRef = useRef()

    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3(curvePoints, false, 'catmullrom', 0.5)
    }, [])

    const textSections = useMemo(() => {
        return [
            {
                cameraRailDist: -1,
                position: new THREE.Vector3(
                    curvePoints[1].x - 4,
                    curvePoints[1].y,
                    curvePoints[1].z
                ),
                title: t('title1'),
                subtitle: t('subtitle1'),
            },
            {
                cameraRailDist: 1,
                position: new THREE.Vector3(
                    curvePoints[2].x + 1,
                    curvePoints[2].y,
                    curvePoints[2].z
                ),
                title: t('title2'),
                subtitle: t('subtitle2'),
            },
            {
                cameraRailDist: -1,
                position: new THREE.Vector3(
                    curvePoints[3].x - 3,
                    curvePoints[3].y,
                    curvePoints[3].z
                ),
                title: t('title3'),
                subtitle: t('subtitle3'),
            },
            {
                cameraRailDist: 1,
                position: new THREE.Vector3(
                    curvePoints[4].x + 1,
                    curvePoints[4].y,
                    curvePoints[4].z
                ),
                title: t('title4'),
                subtitle: t('subtitle4'),
            },
        ]
    }, [])

    const stars = useMemo(
        () => [
            // start
            {
                position: new THREE.Vector3(-3.5, -3.2, -7),
            },
            {
                position: new THREE.Vector3(3.5, -4, -10),
            },
            {
                scale: new THREE.Vector3(4, 4, 4),
                position: new THREE.Vector3(-18, 0.2, -68),
                rotation: new Euler(-Math.PI / 5, Math.PI / 6, 0),
            },
            {
                scale: new THREE.Vector3(2.5, 2.5, 2.5),
                position: new THREE.Vector3(10, -1.2, -52),
            },
            //first point
            {
                scale: new Vector3(4, 4, 4),
                position: new THREE.Vector3(
                    curvePoints[1].x + 10,
                    curvePoints[1].y - 4,
                    curvePoints[1].z + 64
                ),
            },
            {
                scale: new Vector3(3, 3, 3),
                position: new THREE.Vector3(
                    curvePoints[1].x - 20,
                    curvePoints[1].y + 4,
                    curvePoints[1].z + 28
                ),
            },
            {
                rotation: new Euler(0, Math.PI / 7, Math.PI / 5),
                scale: new Vector3(5, 5, 5),
                position: new THREE.Vector3(
                    curvePoints[1].x - 13,
                    curvePoints[1].y + 4,
                    curvePoints[1].z - 62
                ),
            },
            {
                rotation: new Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
                scale: new Vector3(5, 5, 5),
                position: new THREE.Vector3(
                    curvePoints[1].x + 54,
                    curvePoints[1].y + 2,
                    curvePoints[1].z - 82
                ),
            },
            {
                scale: new Vector3(5, 5, 5),
                position: new THREE.Vector3(
                    curvePoints[1].x + 8,
                    curvePoints[1].y - 14,
                    curvePoints[1].z - 22
                ),
            },
            // second point
            {
                scale: new Vector3(2, 2, 2),
                position: new Vector3(
                    curvePoints[2].x - 2,
                    curvePoints[2].y + 4,
                    curvePoints[2].z - 26
                ),
            },
            {
                scale: new Vector3(4, 4, 4),
                position: new Vector3(
                    curvePoints[2].x + 12,
                    curvePoints[2].y + 1,
                    curvePoints[2].z - 86
                ),
                rotation: new Euler(Math.PI / 4, 0, Math.PI / 3),
            },
            // third point
            {
                scale: new Vector3(3, 3, 3),
                position: new Vector3(
                    curvePoints[3].x + 3,
                    curvePoints[3].y - 10,
                    curvePoints[3].z + 50
                ),
            },
            {
                scale: new Vector3(3, 3, 3),
                position: new Vector3(
                    curvePoints[3].x - 10,
                    curvePoints[3].y,
                    curvePoints[3].z + 30
                ),
                rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
            },
            {
                scale: new Vector3(4, 4, 4),
                position: new Vector3(
                    curvePoints[3].x - 20,
                    curvePoints[3].y - 5,
                    curvePoints[3].z - 8
                ),
                rotation: new Euler(Math.PI, 0, Math.PI / 5),
            },
            {
                scale: new Vector3(5, 5, 5),
                position: new Vector3(
                    curvePoints[3].x + 0,
                    curvePoints[3].y - 5,
                    curvePoints[3].z - 98
                ),
                rotation: new Euler(0, Math.PI / 3, 0),
            },
            // fourth point
            {
                scale: new Vector3(2, 2, 2),
                position: new Vector3(
                    curvePoints[4].x + 3,
                    curvePoints[4].y - 10,
                    curvePoints[4].z + 2
                ),
            },
            {
                scale: new Vector3(3, 3, 3),
                position: new Vector3(
                    curvePoints[4].x + 24,
                    curvePoints[4].y - 6,
                    curvePoints[4].z - 42
                ),
                rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
            },
            {
                scale: new Vector3(3, 3, 3),
                position: new Vector3(
                    curvePoints[4].x - 4,
                    curvePoints[4].y + 9,
                    curvePoints[4].z - 62
                ),
                rotation: new Euler(Math.PI / 3, 0, Math.PI / 3),
            },
            // final
            {
                scale: new Vector3(3, 3, 3),
                position: new Vector3(
                    curvePoints[6].x + 12,
                    curvePoints[6].y - 5,
                    curvePoints[6].z + 60
                ),
                rotation: new Euler(Math.PI / 4, Math.PI / 6, 0),
            },
            {
                scale: new Vector3(3, 3, 3),
                position: new Vector3(
                    curvePoints[6].x - 12,
                    curvePoints[6].y + 5,
                    curvePoints[6].z + 120
                ),
                rotation: new Euler(Math.PI / 4, Math.PI / 6, 0),
            },
            {
                scale: new Vector3(3, 3, 3),
                position: new Vector3(
                    curvePoints[6].x - 12,
                    curvePoints[6].y + 5,
                    curvePoints[6].z + 120
                ),
                rotation: new Euler(Math.PI / 4, Math.PI / 6, 0),
            },
            {
                scale: new Vector3(4, 4, 4),
                position: new Vector3(
                    curvePoints[6].x,
                    curvePoints[6].y,
                    curvePoints[6].z
                ),
                rotation: new Euler(0, 0, 0),
            },
        ],
        []
    )

    const linePoints = useMemo(() => {
        return curve.getPoints(LINE_NB_POINTS)
    }, [curve])

    const shape = useMemo(() => {
        const shape = new THREE.Shape()
        shape.moveTo(0, -0.08)
        shape.lineTo(0, 0.8)
        return shape
    }, [curve])

    const cameraGroup = useRef()
    const cameraRail = useRef()
    const camera = useRef()
    const scroll = useScroll()
    const lastScroll = useRef(0)

    const { play, setHasScroll, end, setEnd } = usePlay()

    useFrame((_state, delta) => {
        if (window.innerWidth > window.innerHeight) {
            camera.current.fov = 30
            camera.current.position.z = 5
        } else {
            camera.current.fov = 100
            camera.current.position.z = 4
        }

        if (lastScroll.current <= 0 && scroll.offset > 0) {
            setHasScroll(true)
        }

        if (play && !end && sceneOpacity.current < 1) {
            sceneOpacity.current = THREE.MathUtils.lerp(
                sceneOpacity.current,
                1,
                delta * 0.1
            )
        }

        if (end && sceneOpacity.current > 0) {
            sceneOpacity.current = THREE.MathUtils.lerp(
                sceneOpacity.current,
                0,
                delta
            )
        }

        lineMaterialRef.current.opacity = sceneOpacity.current

        if (end) {
            return
        }

        const scrollOffset = Math.max(0, scroll.offset)

        let friction = 1
        let resetCameraRail = true

        textSections.forEach((textSection) => {
            const distance = textSection.position.distanceTo(
                cameraGroup.current.position
            )

            if (distance < FRICTION_DISTANCE) {
                friction = Math.max(distance / FRICTION_DISTANCE, 0.1)
                const targetCameraRailPosition = new Vector3(
                    (1 - distance / FRICTION_DISTANCE) *
                        textSection.cameraRailDist,
                    0,
                    0
                )
                cameraRail.current.position.lerp(
                    targetCameraRailPosition,
                    delta
                )
                resetCameraRail = false
            }
        })
        if (resetCameraRail) {
            const targetCameraRailPosition = new Vector3(0, 0, 0)
            cameraRail.current.position.lerp(targetCameraRailPosition, delta)
        }

        let lerpedScrollOffset = THREE.MathUtils.lerp(
            lastScroll.current,
            scrollOffset,
            delta * friction
        )

        lerpedScrollOffset = Math.min(lerpedScrollOffset, 1)
        lerpedScrollOffset = Math.max(lerpedScrollOffset, 0)

        lastScroll.current = lerpedScrollOffset
        tl.current.seek(lerpedScrollOffset * tl.current.duration())

        const curPoint = curve.getPoint(scrollOffset)

        cameraGroup.current.position.lerp(curPoint, delta * 24)

        const lookAtPoint = curve.getPoint(
            Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
        )

        const currentLookAt = cameraGroup.current.getWorldDirection(
            new THREE.Vector3()
        )
        const targetLookAt = new THREE.Vector3()
            .subVectors(curPoint, lookAtPoint)
            .normalize()

        const lookAt = currentLookAt.lerp(targetLookAt, delta * 24)
        cameraGroup.current.lookAt(
            cameraGroup.current.position.clone().add(lookAt)
        )

        // Spaceship rotation

        const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_SPACESHIP)

        const nonLerpLookAt = new Group()
        nonLerpLookAt.position.copy(curPoint)
        nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt))
        tangent.applyAxisAngle(
            new THREE.Vector3(0, 1, 0),
            -nonLerpLookAt.rotation.y
        )

        let angle = Math.atan2(-tangent.z, tangent.x)
        angle = -Math.PI / 2 + angle

        let angleDegrees = (angle * 180) / Math.PI
        angleDegrees *= 2.4

        if (angleDegrees < 0) {
            angleDegrees = Math.max(angleDegrees, -SPACESHIP_MAX_ANGLE)
        }
        if (angleDegrees > 0) {
            angleDegrees = Math.min(angleDegrees, SPACESHIP_MAX_ANGLE)
        }

        angle = (angleDegrees * Math.PI) / 180

        const targetSpaceshipQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
                spaceship.current.rotation.x,
                spaceship.current.rotation.y,
                angle
            )
        )
        spaceship.current.quaternion.slerp(targetSpaceshipQuaternion, delta * 2)

        if (
            cameraGroup.current.position.z <
            curvePoints[curvePoints.length - 1].z + 100
        ) {
            setEnd(true)
            shipOutTl.current.play()
        }
    })

    const spaceship = useRef()

    const tl = useRef()
    const bgColors = useRef({
        colorA: '#0e7490',
        colorB: '#ffffff',
        // #ffcc00
    })

    const shipInTl = useRef()
    const shipOutTl = useRef()

    useLayoutEffect(() => {
        tl.current = gsap.timeline()
        tl.current.to(bgColors.current, {
            duration: 1,
            colorA: '#0e7490',
            colorB: '#ffffff',
            // #facc15
        })
        tl.current.to(bgColors.current, {
            duration: 1,
            colorA: '#0e7490',
            colorB: '#ffffff',
            // #ffcc00,
        })
        tl.current.to(bgColors.current, {
            duration: 1,
            colorA: '#0e7490',
            colorB: '#ffffff',
            // #facc15
        })
        tl.current.pause()

        shipInTl.current = gsap.timeline()
        shipInTl.current.pause()
        shipInTl.current.from(spaceship.current.position, {
            duration: 3,
            z: 5,
            y: -2,
        })

        shipOutTl.current = gsap.timeline()
        shipOutTl.current.pause()

        shipOutTl.current.to(
            spaceship.current.position,
            {
                duration: 10,
                z: -250,
                y: 10,
            },
            0
        )
        shipOutTl.current.to(
            cameraRail.current.position,
            {
                duration: 8,
                y: 12,
            },
            0
        )
        shipOutTl.current.to(spaceship.current.position, {
            duration: 1,
            z: -1000,
        })
    }, [])

    useEffect(() => {
        if (play) {
            shipInTl.current.play()
        }
    }, [play])

    return useMemo(
        () => (
            <>
                {/* <OrbitControls enableZoom={false} /> */}
                <group ref={cameraGroup}>
                    <Bg bgColors={bgColors} />
                    <group ref={cameraRail}>
                        <PerspectiveCamera ref={camera} makeDefault />
                    </group>
                    <group ref={spaceship}>
                        <Float
                            floatIntensity={1}
                            speed={1.5}
                            rotationIntensity={0.5}
                        >
                            <Spaceship
                                rotation-y={Math.PI / 2}
                                scale={[0.1, 0.1, 0.1]}
                                position-y={0.1}
                            />
                        </Float>
                    </group>
                </group>
                {/* TEXT */}
                {textSections.map((textSection, index) => (
                    <TextSection {...textSection} key={index} />
                ))}

                {/* LINE */}
                <group position-y={-2}>
                    {/* <Line
                    points={linePoints}
                    color="white"
                    opacity={0.7}
                    transparent
                    lineWidth={16}
                /> */}
                    <mesh position-y={-2}>
                        <extrudeGeometry
                            args={[
                                shape,
                                {
                                    steps: LINE_NB_POINTS,
                                    bevelEnabled: false,
                                    extrudePath: curve,
                                },
                            ]}
                        />
                        <meshStandardMaterial
                            color={'white'}
                            ref={lineMaterialRef}
                            opacity={1}
                            transparent
                            envMapIntensity={2}
                        />
                    </mesh>
                </group>

                {stars.map((star, index) => (
                    <Star sceneOpacity={sceneOpacity} key={index} {...star} />
                ))}

                <Logo3d
                    scale={new Vector3(100, 100, 100)}
                    position={
                        new Vector3(
                            curvePoints[7].x - 6,
                            curvePoints[7].y,
                            curvePoints[7].z
                        )
                    }
                    rotation={new Euler(0, 0, 0)}
                />
            </>
        ),
        []
    )
}

export default Experience
