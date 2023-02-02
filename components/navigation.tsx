import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { boxShadow } from '@/styles/presets'
import NavItem from './navitem'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
export default function Navigation() {
    const [oldScroll, setOldScroll] = useState<number>(0);
    const [isDown, setIsDown] = useState<boolean>(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > oldScroll) {

            setIsDown(true)
        } else {

            setIsDown(false)
        }
        setOldScroll(latest)
    })
    return (
        <Box
            transform={isDown ? "translateY(-5rem)" : "translateY(0)"}
            transition={"transform .5s, box-shadow .5s"}
            zIndex="999"
            position={'fixed'}
            bg={'themeGrey.dark'}
            width={'100%'}
            color={"white"}
            minHeight={"4rem"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"0 1rem"}
            boxShadow={isDown ? "" : boxShadow}
        >
            <Box
                color={"themeRed"}
                fontSize={"1.5rem"}
                fontFamily={"Bebas Neue"}
                width={"1400px"}
                display={"flex"}
                justifyContent={"flex-end"}
                gap={"1.5rem"}>
                <NavItem text={"Home"} />
                <NavItem text={"About"} />
                <NavItem text={"Projects"} />
                <NavItem text={"Contact"} />
            </Box>
        </Box>
    )
}