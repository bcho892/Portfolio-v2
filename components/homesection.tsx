import React from 'react'
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react'
type Props = {}

export default function HomeSection({ }: Props) {
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
                    <Heading as="h1" fontSize={"9xl"}>Hi, I'm Benson</Heading>
                    <Text
                        marginTop={"-2rem"}
                        fontWeight={"400"}
                        fontSize={"3xl"}>I love development and learning</Text>
                    <Button variant={"landing"} textAlign={"left"} width={"70%"}>Read More</Button>
                </Box>

            </Box>
        </>
    )
}