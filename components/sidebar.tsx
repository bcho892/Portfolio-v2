import { Box, Heading, Image } from "@chakra-ui/react"

type Props = {}

export default function SideBar({ }: Props) {
    return (
        <>
            <Box

                color={"white"}
                position={"fixed"}
                display="flex"
                flexDir="column"
                alignItems="center"
                top="0"
                left="0"
                height="100vh"
            >
                <Box height="55%"
                    width="4px"
                    bg="white">

                </Box>
                <Heading
                    padding="2rem 0"
                    fontSize="2rem"
                    as="p"
                    userSelect="none"
                    transform="rotate(-90deg)">Find Me</Heading>
                <Box height="10%"
                    width="4px"
                    bg="themeRed">
                </Box>
                <Box height="2rem" width="2rem" margin=".5rem 0">
                    <Image src="/svg/LinkedIn.svg" />
                </Box>
                <Box height="1%"
                    width="4px"
                    bg="themeRed"></Box>
                <Box height="2rem" width="2rem" margin=".5rem 0" >
                    <Image src="/svg/GitHub.svg" />
                </Box>
            </Box>
        </>
    )
}