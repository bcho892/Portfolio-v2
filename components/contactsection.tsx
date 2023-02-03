import { Box, Heading, Text, Image, useMediaQuery } from '@chakra-ui/react'
import { sectionHeadingSize, opacity, sectionHeadingSizeMobile } from '@/styles/presets'
import { motion } from 'framer-motion'
import ContactForm from './contactform'

export default function ContactSection() {
    const [smallScreen] = useMediaQuery(`(max-width: 800px)`)
    return (
        <>
            <Box position="relative"
                display="flex"
                flexDir="column"
                padding="150px 0">
                <Box
                    as={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    display="grid" gridTemplateColumns={smallScreen ? "1fr" : "1fr 1fr"} columnGap="2rem" rowGap="2rem" alignItems="center">
                    <Box>
                        <Heading fontSize={smallScreen ? sectionHeadingSizeMobile : sectionHeadingSize}>Thank You</Heading>
                        <Text>Well done on reaching the end! A heads up that I am always open to freelance opportunites; and also feel free to leave a message about anything! Alternatively you can reach me at <b>bensonconcept1@gmail.com</b></Text>
                    </Box>
                    <Box>
                        <ContactForm />
                    </Box>
                </Box>
                <Box opacity={opacity}
                    pointerEvents="none"
                    minW="700px"
                    position="absolute" left={smallScreen ? "-100px" : "0"} bottom="0" width="100%" zIndex="-1">
                    <Image alt="" src="/svg/End.svg" />
                </Box>
            </Box>
        </>
    )
}