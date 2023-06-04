import { Box, Heading, Text, Button, useMediaQuery } from "@chakra-ui/react";
import {
    centerOnBigScreen,
    sectionHeadingSize,
    sectionHeadingSizeMobile,
} from "@/styles/presets";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
type Props = {
    text?: string;
};
export default function BlogHeading(props: PropsWithChildren<Props>) {
    const [smallScreen] = useMediaQuery(`(max-width: 800px)`);
    const [extraSmallScreen] = useMediaQuery(`(max-width: 500px)`);

    return (
        <>
            <Box
                marginTop="2rem"
                display="flex"
                flexDir="column"
                gap=".5rem"
                justifySelf="center"
                color="white"
                position="relative"
            >
                <Box
                    as={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Box display="grid" gap="1rem" alignItems="center">
                        <Box display="flex" flexDir="column">
                            <Heading
                                fontSize={
                                    smallScreen
                                        ? sectionHeadingSizeMobile
                                        : sectionHeadingSize
                                }
                            >
                                {props.text ? props.text : "Benson Cho - Blog"}
                            </Heading>
                        </Box>
                        {props.children}
                    </Box>
                </Box>
            </Box>
        </>
    );
}
