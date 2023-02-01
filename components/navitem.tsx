import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../styles/navitem.module.css'
type Props = {
    text: string
}

export default function NavItem({ text }: Props) {
    return (
        <Text
            cursor="pointer"
            position={"relative"}
            _after={{
                content: "''",
                height: "4px",
                width: "4px",
                position: "absolute",
                bg: "white",
                bottom: "11px",
                right: "-6px"
            }}>{text}</Text>
    )
}