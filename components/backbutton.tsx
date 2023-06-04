import { Box, Image, Heading } from "@chakra-ui/react";

type Props = {
    text?: string;
    href?: string;
};

export default function BackButton({ text = "", href = "" }: Props) {
    return (
        <>
            <Box
                as="a"
                href={href}
                _hover={{
                    transform: "scale(1.05)",
                }}
                transition="transform .4s"
                marginTop="7rem"
                cursor="pointer"
                width="fit-content"
                height="fit-content"
                padding=".2rem"
                display="flex"
                gap=".1rem"
                bg="themeRed"
                alignItems="center"
            >
                <Box display="flex" height="2.2rem" width="2.2rem">
                    <Image
                        maxHeight="100%"
                        transform="rotate(90deg)"
                        alt="go back"
                        src="/svg/Arrow.svg"
                    />
                </Box>

                <Heading paddingTop="5px" paddingRight="10px" height="100%">
                    {text}
                </Heading>
            </Box>
        </>
    );
}
