import { Box, Heading, Text } from "@chakra-ui/react"

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
                gap="2rem"
                left="0"
                height="100vh"
            >
                <Box height="55%"
                    width="4px"
                    bg="white">

                </Box>
                <Heading fontSize="2rem"
                    transform="rotate(-90deg)">Find Me</Heading>
                <Box height="10%"
                    width="4px"
                    bg="themeRed">

                </Box>

            </Box>
        </>
    )
}