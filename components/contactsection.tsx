import { Box, Heading, Text, Image } from '@chakra-ui/react'
import { sectionHeadingSize, opacity } from '@/styles/presets'
import { motion } from 'framer-motion'
import ContactForm from './contactform'

export default function ContactSection() {
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
                    display="grid" gridTemplateColumns="1fr 1fr" columnGap="2rem" alignItems="center">
                    <Box>
                        <Heading fontSize={sectionHeadingSize}>Thank You</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error labore ad dignissimos et veniam ducimus tempore quisquam sint iusto.</Text>
                    </Box>
                    <Box>
                        <ContactForm />
                    </Box>
                </Box>
                <Box opacity={opacity} position="absolute" bottom="0" width="100%" zIndex="-1">
                    <Image src="/svg/End.svg" />
                </Box>
            </Box>
        </>
    )
}