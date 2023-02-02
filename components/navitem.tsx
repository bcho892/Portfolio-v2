import { Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../styles/navitem.module.css'
type Props = {
    text: string
}

export default function NavItem({ text }: Props) {
    return (
        <Text
            as="a"
            href={`#${text}`}
            listStyleType="none"
            cursor="pointer"
            position={"relative"}
            _hover={{
                _after: {
                    transition: "bottom .2s linear 0s, width .2s linear .2s, right .2s linear .3s",
                    bottom: "16px",
                    width: "100%",
                    right: "0"
                }
            }}
            _after={{
                transition: "bottom .2s linear .3s, width .2s linear .2s, right .2s linear 0s",
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