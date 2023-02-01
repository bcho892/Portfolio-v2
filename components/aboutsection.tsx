import { Box, Heading, Text, Image } from '@chakra-ui/react'
import SkillCard from './skillcard'
import { opacity, sectionHeadingSize } from '@/styles/presets'
type Props = {}

const skills = [{
    title: "Web Development",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, dignissimos dolorem illo vero repellendus ea corporis eum deleniti mollitia aut?"
}, {
    title: "Embedded Systems",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, dignissimos dolorem illo vero repellendus ea corporis eum deleniti mollitia aut?"
}, {
    title: "Electronics",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, dignissimos dolorem illo vero repellendus ea corporis eum deleniti mollitia aut?"
}].map((item, index) => {
    return (
        <SkillCard key={index} props={{ height: "fit-content" }} title={item.title} description={item.description} />
    )
})

export default function AboutSection({ }: Props) {
    return (
        <>
            <Box
                display="flex"
                flexDir="column"
                gap=".5rem"
                justifySelf="center"
                padding="170px 0" color="white" position="relative">
                <Heading fontSize={sectionHeadingSize}>About Me</Heading>
                <Box position="absolute"
                    left="calc(-1 * ((100vw - 1300px) / 2))"
                    top="170px"
                    width="100vw"
                    zIndex="-1"
                    minW="1400px"
                >
                    <Image
                        transform="rotate(15deg)"
                        opacity={opacity}
                        src='/svg/Skills.svg'>
                    </Image>
                    <Image
                        width="80%"
                        position="absolute"
                        top="0"
                        left="-50%"
                        opacity={opacity}
                        src='/svg/Triangle1.svg' />
                </Box>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error temporibus necessitatibus sint enim fugit, ducimus eos ipsa similique quibusdam?</Text>
                <Box display="grid" columnGap="1rem" gridTemplateColumns={"1fr 1fr 1fr"}>
                    {skills}
                </Box>

            </Box>
        </>
    )
}