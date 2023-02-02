import { Image, Box, Text, Heading, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const textSize = "xl"
const animationKeyframes = keyframes`
0% { transform: translate(0,  0px); }
50%  { transform: translate(0, 3px); }
100%   { transform: translate(0, -0px); } 
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

const SectionSeparator = () => {
    return (
        <>

            <Box
                userSelect="none"
                cursor="pointer"
                as={motion.div}
                initial={{ opacity: 0, bottom: -50 }}
                whileInView={{ opacity: 1, bottom: 0 }}
                animation={animation}
                display="flex"
                flexDir="column"
                width="2rem"
                position="absolute"
                bottom="0"
                alignItems="center"
                right="0"
            >

                <Heading fontSize={textSize} >Scroll</Heading>
                <Image  src="/svg/Arrow.svg" />
                <Heading fontSize={textSize} >Down</Heading>

            </Box>
        </>
    )
}

export default SectionSeparator