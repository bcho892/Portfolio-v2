import { Box, Heading, Text, Image, useMediaQuery } from '@chakra-ui/react'
import SkillCard from './skillcard'
import { opacity, sectionHeadingSize, centerOnBigScreen, sectionHeadingSizeMobile } from '@/styles/presets'
import SectionSeparator from './sectionseparator'
import { motion } from 'framer-motion'
const skills = [{
    title: "Web Development",
    description: "I am drawn to web development from how it requires one to both combine skills from pure problem solving on the backend with the visual design aspect required on the frontend. From this I have developed an understanding of Javascript/TypeScript and its frameworks to a workable level, and am always looking for projects to undertake."
}, {
    title: "Embedded Systems",
    description: "The challenge of working with both hardware and software which apply to many practical applications is something that I find greatly rewarding and is hence the reason I chose to pursue an ECE degree. As a result I have developed some basic skills in C and analog electronics"
}, {
    title: "Software Development",
    description: "One thing I've learnt from the projects I've undertaken and past experience is the product development field is super rewarding - working with clients and fellow team-members to produce a valuable end-result; hence I am also interested in software development. I have some understanding of OOP design patterns from working with C# and Java."
}].map((item, index) => {
    return (
        <SkillCard key={index} props={{ height: "fit-content" }} title={item.title} description={item.description} />
    )
})

export default function AboutSection() {
    const [smallScreen] = useMediaQuery(`(max-width: 800px)`)
    return (
        <>
            <Box

                display="flex"
                flexDir="column"
                gap=".5rem"
                justifySelf="center"
                padding="170px 0" color="white" position="relative">
                <Box as={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}>
                    <Box position="absolute"
                        left={smallScreen ? "0" : centerOnBigScreen}
                        top="170px"
                        width="100vw"
                        zIndex="-1"
                        minW="1400px"
                    >
                        <Image
                            alt=""
                            transform="rotate(15deg)"
                            opacity={opacity}
                            src='/svg/Skills.svg'>
                        </Image>
                        <Image
                            alt=""
                            width="80%"
                            position="absolute"
                            top="0"
                            left="-50%"
                            opacity={opacity}
                            src='/svg/Triangle1.svg' />
                    </Box>
                    <Box display="grid" gap="1rem" gridTemplateColumns={smallScreen ? "1fr" : "2fr 1fr"} alignItems="center">
                        <Box display="flex" flexDir="column">
                            <Heading fontSize={smallScreen ? sectionHeadingSizeMobile : sectionHeadingSize}>About Me</Heading>
                            <Text>As of 2023, I am a penultimate year ECE student at the University of Auckland who is interested in a broad range of topics in both engineering and tech. Below are the main fields that I am interested in, in which I also try to outline the relevant skills that I have.</Text>
                        </Box>
                        <Box
                            overflow="visible"
                            position="relative"
                            width="100%"
                            _after={{
                                content: '""',
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                bg: 'themeRed',
                                right: '-6px',
                                bottom: '-6px',
                                zIndex: '0',

                                clipPath: "polygon(20% 0%, 100% 0, 81% 79%, 0 79%)"

                            }}
                        >

                        </Box>
                    </Box>
                    <Box display="grid" padding="20px 0" gap="1rem" gridTemplateColumns={smallScreen ? "1fr" : "1fr 1fr 1fr"}>
                        {skills}
                    </Box>
                </Box>
                <SectionSeparator nextSectionName="Projects" />
            </Box>
        </>
    )
}