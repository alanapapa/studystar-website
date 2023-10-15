import { Text } from '@react-three/drei'
import { fadeOnBeforeCompileFlat } from '../../utils/fadeMaterial'

export const TextSection = ({ title, subtitle, ...props }) => {
    const fontTitleProps = {
        font: '/fonts/PT_Serif/PTSerif-Bold.ttf',
        fontSize: 0.52,
        letterSpacing: -0.05,
        lineHeight: 1,
        maxWidth: 4,
        'material-toneMapped': false,
    }
    const fontSubtitleProps = {
        font: '/fonts/PT_Sans/PTSans-Regular.ttf',
        fontSize: 0.3,
        maxWidth: 4,
        'material-toneMapped': false,
    }
    return (
        <>
            <group {...props}>
                {!!title && (
                    <Text
                        color="yellow"
                        anchorX={'left'}
                        anchorY="bottom"
                        {...fontTitleProps}
                    >
                        {title}
                        {/* <meshStandardMaterial
                            color={'gold'}
                            onBeforeCompile={fadeOnBeforeCompileFlat}
                        /> */}
                    </Text>
                )}

                <Text
                    color="white"
                    anchorX={'left'}
                    anchorY="top"
                    {...fontSubtitleProps}
                >
                    {subtitle}
                    {/* <meshStandardMaterial
                        color={'white'}
                        onBeforeCompile={fadeOnBeforeCompileFlat}
                    /> */}
                </Text>
            </group>
        </>
    )
}
