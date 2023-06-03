import { Text } from "@chakra-ui/react";

import React from "react";

type Props = {
    text: string;
    isMobile?: boolean;
    isRedirect: boolean;
};

export default function NavItem({ text, isMobile, isRedirect = false }: Props) {
    let desktop = !isMobile;
    return (
        <Text
            as="a"
            href={isRedirect ? `/${text.toLowerCase()}` : `#${text}`}
            listStyleType="none"
            cursor="pointer"
            position={"relative"}
            _hover={{
                _after: {
                    transition:
                        "bottom .2s linear 0s, width .2s linear .2s, right .2s linear .3s",
                    bottom: desktop ? "16px" : "45px",
                    width: "100%",
                    right: "0",
                },
            }}
            _after={{
                transition:
                    "bottom .2s linear .3s, width .2s linear .2s, right .2s linear 0s",
                content: "''",
                height: desktop ? "4px" : "10px",
                width: desktop ? "4px" : "10px",
                position: "absolute",
                bg: "white",
                bottom: desktop ? "11px" : "29px",
                right: desktop ? "-6px" : "-12px",
            }}
        >
            {text}
        </Text>
    );
}

