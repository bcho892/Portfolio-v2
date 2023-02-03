import { useState } from 'react'
import { Box, Text, useMediaQuery, Image } from '@chakra-ui/react'
import NavItem from './navitem'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { boxShadow } from '@/styles/presets'
const navLinks = (isMobile?: boolean) => (
    <>
        <NavItem isMobile={isMobile} text={"Home"} />
        <NavItem isMobile={isMobile} text={"About"} />
        <NavItem isMobile={isMobile} text={"Projects"} />
        <NavItem isMobile={isMobile} text={"Contact"} />
    </>
)

const desktopMenu = (
    <>
        <Box
            color={"themeRed"}
            fontSize={"1.5rem"}
            fontFamily={"Bebas Neue"}
            width={"1400px"}
            display={"flex"}
            justifyContent={"flex-end"}
            gap={"1.5rem"}>
            {navLinks()}
        </Box>
    </>
)

const mobileMenu = (open: boolean, handleClick: () => void) => (
    <>
        <Box

            position={"fixed"}
            color={"themeRed"}
            fontSize={"4rem"}
            fontFamily={"Bebas Neue"}
            width={"300px"}
            display={"flex"}
            flexDir="column"
            justifyContent="center"
            alignItems={"flex-end"}
            gap={"1.5rem"}
            top="0"
            height="100vh"
            bg="themeGrey.bg"
            right="0"
            paddingRight="20px"
            boxShadow={boxShadow}
            zIndex="1000"
            transition="transform .5s"
            transform={open ? "translateX(0)" : "translateX(500px)"}
        >

            <Text
                fontSize="9xl"
                top="0"
                left="10px"
                position="absolute"
                userSelect="none"
                cursor="pointer"
                zIndex="1001"
                color="white"
                transform="rotate(45deg)"
                transition="transform .2s"
                onClick={() => handleClick()}
                _hover={{
                    transform: "rotate(35deg)"
                }}
            >+</Text>

            {navLinks(true)}
        </Box>
    </>
)

export default function Navigation() {
    const [oldScroll, setOldScroll] = useState<number>(0);
    const [isDown, setIsDown] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const { scrollY, scrollYProgress } = useScroll();
    const [smallScreen] = useMediaQuery(`(max-width: 800px)`)
    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }


    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > oldScroll) {

            setIsDown(true)
        } else {

            setIsDown(false)
        }
        setOldScroll(latest)
    })
    return (
        <>
            <Box
                transform={isDown ? "translateY(-4rem)" : "translateY(0)"}
                transition={"transform .5s"}
                zIndex="999"
                position={'fixed'}
                bg={'themeGrey.dark'}
                width={'100%'}
                color={"white"}
                height={"4rem"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"0 1rem"}

            >
                <Box
                    as="a"
                    href="/"
                    cursor="pointer"
                    height="2rem"
                    width="2rem">
                    <Image src="/svg/logo.svg" alt="site logo" />
                </Box>
                {smallScreen ? <>
                    <Box
                        cursor="pointer"
                        onClick={() => handleClick()}
                        marginLeft="auto"
                        width="2rem"
                        height="2rem"
                        transform="rotate(90deg)">
                        <Image alt="open mobile menu" src="/svg/Arrow.svg" />
                    </Box>
                </>
                    : desktopMenu}
                <Box
                    as={motion.div}
                    style={{ scaleX: scrollYProgress }}
                    position="absolute"
                    bgGradient="linear(to-r,themeGrey.dark, themeRed)"
                    bottom="-2px"
                    left="0"
                    right="0"
                    height="2px"
                    zIndex="1001"
                    transformOrigin="0%"
                >

                </Box>
            </Box>
            {mobileMenu(menuOpen, handleClick)}
        </>
    )
}