import { Box, Heading, Text, Button, useMediaQuery } from '@chakra-ui/react'

export default function HomeSection() {
    const [smallScreen] = useMediaQuery(`(max-width: 800px)`)

    return (
        <>

            <Box color="white"
                display={"flex"}
                flexDir={"column"}
                minH={"100vh"}
                alignItems="flex-start"
                justifyContent={"center"}
            >
                <Box display={"flex"}
                    flexDir={"column"}
                    gap={"1rem"}>
                    <Heading as="h1" fontSize={!smallScreen ? "9xl" : "7xl"} >Hi, I'm Benson</Heading>
                    <Text
                        marginTop={"-2rem"}
                        fontWeight={"400"}
                        fontSize={!smallScreen ? "3xl" : "xl"}>I love development and learning</Text>
                    <Button as="a" href="#About" variant={"landing"} textAlign={"left"} width={"70%"}>Read More</Button>
                </Box>

            </Box>
        </>
    )
}