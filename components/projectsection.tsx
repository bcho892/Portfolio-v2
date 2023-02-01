import { Box, Heading } from "@chakra-ui/react"
import { sectionHeadingSize } from "@/styles/presets"
import ProjectCard from "./projectcard"
type Props = {}

export default function ProjectSection({ }: Props) {
    return (
        <>
            <Box
                display="flex"
                flexDir="column"
            >
                <Heading fontSize={sectionHeadingSize}>Featured Projects</Heading>
                <Box>
                    <ProjectCard />
                </Box>
            </Box>
        </>
    )
}