import { Box, Heading, Text, Button, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'
export default function HomeSection() {
    const [smallScreen] = useMediaQuery(`(max-width: 800px)`)
    const [extraSmallScreen] = useMediaQuery(`(max-width: 500px)`)

    return (
        <>

            <Box
                as={motion.div}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                color="white"
                display={"flex"}
                flexDir={"column"}
                minH={"100vh"}
                alignItems="flex-start"
                justifyContent={"center"}
            >
                <Box display={"flex"}
                    flexDir={"column"}
                    gap={"1rem"}

                >
                    <Heading as="h1" fontSize={extraSmallScreen ? "5xl" : smallScreen ? "7xl" : "9xl"} >Hi, I&apos;m Benson</Heading>
                    <Text
                        marginTop={"-2rem"}
                        fontWeight={"400"}
                        fontSize={!smallScreen ? "3xl" : "xl"}>Welcome to my portfolio.</Text>
                    <Button as="a" href="#About" variant={"landing"} textAlign={"left"} width={"70%"}>Read More</Button>
                </Box>

            </Box>
        </>
    )
}