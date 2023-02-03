import { Box, Heading, Image, useMediaQuery } from "@chakra-ui/react"
import { motion } from "framer-motion"

const openInNewTab = (url: string) => window.open(url, "_blank")

const mobileVersion = (
    <>
        <Box
            as={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            color={"white"}
            position={"absolute"}
            display="flex"
            flexDir="column"
            marginLeft="auto"
            alignItems="center"
            justifyContent="center"
            gap=".1rem"
            bottom="0"
            width="100%"
        >
            <Box display="flex">
                <Box
                    cursor="pointer"
                    as={motion.div}
                    onClick={() => openInNewTab("https://www.linkedin.com/in/benson-cho-918996234")}
                    whileHover={{ y: -2 }}
                    height="2rem" width="2rem" margin=".5rem 0">
                    <Image

                        alt="linkedin icon" src="/svg/LinkedIn.svg" />
                </Box>
                <Box height="1%"
                    width="4px"
                    bg="themeRed"></Box>
                <Box
                    onClick={() => openInNewTab("https://github.io/bcho892")}

                    cursor="pointer"
                    as={motion.div}
                    whileHover={{ y: -2 }}
                    height="2rem" width="2rem" margin=".5rem 0" >
                    <Image alt="github icon" src="/svg/GitHub.svg" />
                </Box>
            </Box>
            <Heading fontSize="md">Designed &amp; Built by Benson Cho</Heading>
        </Box>
    </>
)
const desktopVersion = (
    <>
        <Box
            as={motion.div}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
            <Box
                cursor="pointer"
                as={motion.div}
                onClick={() => openInNewTab("https://www.linkedin.com/in/benson-cho-918996234")}
                whileHover={{ y: -2 }}
                height="2rem" width="2rem" margin=".5rem 0">
                <Image alt="linkedin icon" src="/svg/LinkedIn.svg" />
            </Box>
            <Box height="1%"
                width="4px"
                bg="themeRed"></Box>
            <Box
                onClick={() => openInNewTab("https://github.com/bcho892")}
                cursor="pointer"
                as={motion.div}
                whileHover={{ y: -2 }}
                height="2rem" width="2rem" margin=".5rem 0" >
                <Image alt="github icon" src="/svg/GitHub.svg" />
            </Box>
            <Box height="5%"
                width="4px"
                bg="white"></Box>
        </Box>


        <Heading
            width="100%"
            textAlign="center"
            position="absolute"
            bottom="0"
            fontSize="md">Designed &amp; Built by Benson Cho</Heading>

    </>)



export default function SideBar() {
    const [smallScreen] = useMediaQuery(`(max-width: 800px)`)
    return (
        smallScreen ? mobileVersion : desktopVersion
    )
}