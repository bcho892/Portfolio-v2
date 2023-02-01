import React from 'react'
import { boxShadow } from '@/styles/presets'
import { Box, Text, Heading, Button, ButtonGroup, Image } from '@chakra-ui/react'
type Props = {}

const techStack = (item: string) => {
    return (
        <Box bg="white" width="fit-content" padding="0 10px">
            <Text color="themeRed"
                fontWeight="600"
            >
                {item}
            </Text>
        </Box>
    )
}

export default function ProjectCard({ }: Props) {
    return (
        <Box
            padding="20px 20px"
            bg="themeGrey.bg"
            boxShadow={boxShadow}
            display="flex"
            flexDir="column"
            position="relative"

            _after={{ content: '""', position: "absolute", bottom: "0", left: "0", height: "6px", bg: "themeRed", width: "100%" }}
        >
            <Text position="absolute"
                top="-2.5rem"
                left="-2rem"
                color="themeRed"
                fontWeight="800"
                fontSize="5rem"
            >2</Text>
            <Image position="absolute"
                cursor="pointer"
                right="20px"
                height="1rem"
                src="/svg/Arrow.svg" />
            <Box display="flex"
                flexDir="column"
                gap=".25rem">

                <Heading>
                    Stutors
                </Heading>
                <Box display="flex" gap="10px">
                    {techStack("love")}
                    {techStack("hate")}
                </Box>
                <Box display="grid" gridTemplateColumns="3fr 1fr" alignItems="flex-end">
                    <Text color="themeGrey.light">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et aspernatur ratione, temporibus animi, asperiores eius aliquam ad maiores harum aut, voluptatibus repellendus consequatur in sunt possimus sint ullam consectetur!
                    </Text>
                    <ButtonGroup justifyContent="flex-end">
                        <Button variant='project'>Love</Button>
                        <Button variant='project'>Hate</Button>
                    </ButtonGroup>
                </Box>
            </Box>
        </Box>
    )
}