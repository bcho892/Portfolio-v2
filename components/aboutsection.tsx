import { Box, Heading, Text } from '@chakra-ui/react'
import SkillCard from './skillcard'
type Props = {}

export default function AboutSection({ }: Props) {
    return (
        <>
            <Box padding="100px 0" color="white">
                <Heading fontSize={"8xl"}>About Me</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error temporibus necessitatibus sint enim fugit, ducimus eos ipsa similique quibusdam?</Text>
                <Box display="grid" columnGap="1rem" gridTemplateColumns={"1fr 1fr 1fr"}>
                    <SkillCard
                        props={{ height: "20rem" }}
                        title="hate"
                        description="love"></SkillCard>
                    <SkillCard
                        props={{ height: "20rem" }}
                        title="hate"
                        description="love"></SkillCard>
                    <SkillCard
                        props={{ height: "20rem" }}
                        title="hate"
                        description="love"></SkillCard>
                </Box>

            </Box>
        </>
    )
}