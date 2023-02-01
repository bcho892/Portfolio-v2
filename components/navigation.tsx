import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'
import { boxShadow } from '@/styles/presets'
import NavItem from './navitem'
type Props = {}



export default function Navigation({ }: Props) {
    return (
        <Box
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
            boxShadow={boxShadow}
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