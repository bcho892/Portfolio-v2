import { Box, Image, keyframes, useMediaQuery } from '@chakra-ui/react'
import { opacity } from '@/styles/presets'
import { motion } from 'framer-motion'

const choAnimationKeyframes = keyframes`
0% { transform: translate(0,  0); }
50%  { transform: translate(2px, 0); }
100%   { transform: translate(0, 0); } 
`;

const bensonAnimationKeyframes = keyframes`
0% { transform: translate(-10%,  0); }
50%  { transform: translate(-10.1%, 0); }
100%   { transform: translate(-10%, 0); } 
`;

const choAnimation = `${choAnimationKeyframes} 2s ease-in-out infinite`;
const bensonAnimation = `${bensonAnimationKeyframes} 2s ease-in-out infinite`


export default function BensonCho() {
    const [smallScreen] = useMediaQuery(`(max-width: 800px)`)
    return (
        <Box
            as={motion.div}
            initial={{ opacity: 0, x: -2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            pointerEvents="none"
            width={smallScreen ? '50vw' : '100vw'}
            position="absolute"
            zIndex="-1"
            top="-10rem"
            height="calc(100vh + 10rem)"

            overflow="hidden"
        >
            <Box
                transform="translateX(-10%)"
                zIndex="-1"
                animation={bensonAnimation}
                width="140%"
                minW="100vw"
            >
                <Image
                    alt=""
                    src="/svg/Benson.svg"
                    opacity={opacity}
                    minW="100%"
                    transform="rotate(-30deg)" />
            </Box>
            <Box

                animation={choAnimation}
                position="absolute"
                width="80%"
                left="25%"
                minW="100vw"
            >
                <Image
                    alt=""
                    opacity={opacity}
                    src="/svg/Cho.svg"
                    minW="100%"
                    transform="rotate(-30deg)" />
            </Box>
        </Box >
    )
}