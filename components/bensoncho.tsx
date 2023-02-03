import { Box, Image, keyframes } from '@chakra-ui/react'
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
    return (
        <Box
            pointerEvents="none"
            width='100vw'
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
                minW="2000px"
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
                minW="1100px"
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