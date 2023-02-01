import { Box, Heading, Image } from "@chakra-ui/react"
import { sectionHeadingSize, opacity, centerOnBigScreen } from "@/styles/presets"
import ProjectCard from "./projectcard"
import { projects } from "@/content/projects"
type Props = {}

const projectItems = projects.map((item, index) => {
    return (
        <ProjectCard data={item} position={index} key={item.name} />
    )
})

export default function ProjectSection({ }: Props) {
    return (
        <>
            <Box
                position="relative"
                display="flex"
                flexDir="column"
            >
                <Box position="absolute"
                    left={centerOnBigScreen}
                    top="50%"
                    minW="800px"
                    width="60%"
                    zIndex="-1"
                    opacity={opacity}
                    transform="rotate(-45deg)"
                >
                    <Image src="/svg/My.svg" />
                    <Box width="200%">
                        <Image
                            src="/svg/Works.svg" />
                    </Box>
                </Box>
                <Heading fontSize={sectionHeadingSize}>Featured Projects</Heading>
                <Box display="grid" gridTemplateColumns="1fr" rowGap="4rem" padding="50px 0">
                    {projectItems}
                </Box>
            </Box>
        </>
    )
}