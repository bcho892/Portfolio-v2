import { Box, Text } from "@chakra-ui/react"
import { BoxProps } from "@chakra-ui/react"
type Props = {
    props: BoxProps,
    title: string,
    description: string,
}

export default function SkillCard({ props, title, description }: Props) {
    return (
        <>
            <Box bg="themeGrey.bg"
                padding="20px 10px"
                display="flex"
                flexDir="column"
                position="relative"
                boxShadow="0 2px 5px #2e2e2e"
                _after={{ content: '""', height: '6px', bg: 'themeRed', position: 'absolute', width: '100%', left: "0", top: "0" }}
                {...props}>
                <Text fontWeight="900" fontSize="3xl">{title}</Text>
                <Text color="themeGrey.light">{description}</Text>
            </Box>
        </>
    )
}