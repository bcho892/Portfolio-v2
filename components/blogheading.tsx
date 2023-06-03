import { Box, Heading, Text, Button, useMediaQuery } from "@chakra-ui/react";
import {
    centerOnBigScreen,
    sectionHeadingSize,
    sectionHeadingSizeMobile,
} from "@/styles/presets";
import { motion } from "framer-motion";
type Props = {
    text: string;
};
export default function BlogHeading({ text = "Benson Cho - Blog" }: Props) {
    const [smallScreen] = useMediaQuery(`(max-width: 800px)`);
    const [extraSmallScreen] = useMediaQuery(`(max-width: 500px)`);

    return (
        <>
            <Box
                marginTop="10rem"
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
                    <Box
                        position="absolute"
                        left={smallScreen ? "0" : centerOnBigScreen}
                        top="170px"
                        width="100vw"
                        zIndex="-1"
                        minW="1400px"
                    ></Box>
                    <Box display="grid" gap="1rem" alignItems="center">
                        <Box display="flex" flexDir="column">
                            <Heading
                                padding="0 2rem"
                                fontSize={
                                    smallScreen
                                        ? sectionHeadingSizeMobile
                                        : sectionHeadingSize
                                }
                            >
                                {text}
                            </Heading>
                        </Box>
                        <Box
                            overflow="visible"
                            position="relative"
                            width="100%"
                            _after={{
                                content: '""',
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                bg: "themeRed",
                                right: "-6px",
                                bottom: "-6px",
                                zIndex: "0",

                                clipPath:
                                    "polygon(20% 0%, 100% 0, 81% 79%, 0 79%)",
                            }}
                        ></Box>
                    </Box>
                    <Box
                        display="grid"
                        padding="20px 0"
                        gap="1rem"
                        gridTemplateColumns={
                            smallScreen ? "1fr" : "1fr 1fr 1fr"
                        }
                    ></Box>
                </Box>
            </Box>
        </>
    );
}
