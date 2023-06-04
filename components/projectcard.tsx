import { useState } from "react";
import { boxShadow } from "@/styles/presets";
import {
    Box,
    Text,
    Heading,
    Button,
    ButtonGroup,
    Image,
    useMediaQuery,
} from "@chakra-ui/react";
import { Project } from "@/content/projects";
type Props = {
    data?: Project;
    position?: number;
};

export const tech = (item: string, key: string) => {
    return (
        <Box
            key={key}
            userSelect="none"
            bg="white"
            width="fit-content"
            padding="0 10px"
        >
            <Text color="themeRed" fontWeight="600">
                {item}
            </Text>
        </Box>
    );
};

export const techStack = (items?: string[]) => {
    return items!.map((item) => {
        return tech(item, item);
    });
};

export default function ProjectCard({ data, position }: Props) {
    const [smallScreen] = useMediaQuery(`(max-width: 800px)`);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <Box
            padding="20px 20px"
            bg="themeGrey.bg"
            boxShadow={boxShadow}
            display="flex"
            flexDir="column"
            position="relative"
            height="fit-content"
            _after={{
                content: '""',
                position: "absolute",
                bottom: "0",
                left: "0",
                height: "6px",
                bg: "themeRed",
                width: "100%",
            }}
        >
            <Heading
                position="absolute"
                zIndex="1"
                top="-3rem"
                left="-2rem"
                color="themeRed"
                fontWeight="900"
                fontSize="5rem"
                userSelect="none"
            >
                {position! + 1}
                <span style={{ color: "white" }}>.</span>
            </Heading>
            <Box
                margin="-20px -20px"
                filter="brightness(0.3)"
                transition="height .75s"
                zIndex="0"
                height={isOpened ? "20rem" : "0"}
                overflow="hidden"
            >
                <Image
                    width="100%"
                    alt={`${data?.name}'s project image`}
                    src={data ? data.imageSrc : ""}
                />
            </Box>
            <Image
                position="absolute"
                zIndex="2"
                cursor="pointer"
                right="20px"
                height="1rem"
                alt="open div arrow"
                onClick={() => setIsOpened(!isOpened)}
                transform={isOpened ? "" : "rotate(180deg)"}
                src="/svg/Arrow.svg"
                transition="transform .5s"
            />

            <Box display="flex" flexDir="column" gap=".25rem" zIndex="1">
                <Heading
                    boxShadow={boxShadow}
                    bg="themeRed"
                    padding="0 10px"
                    width="fit-content"
                >
                    {data!.name}
                </Heading>
                <Box display="flex" gap="10px">
                    {techStack(data?.tech)}
                </Box>
                <Box
                    display="grid"
                    gridTemplateColumns={smallScreen ? "1fr" : "3fr 1fr"}
                    alignItems="flex-end"
                >
                    <Text color="themeGrey.light">{data!.description}</Text>
                    <ButtonGroup
                        justifyContent="flex-end"
                        marginTop={smallScreen ? "10px" : ""}
                    >
                        <Button
                            as="a"
                            variant={data!.githubLink ? "project" : "disabled"}
                            color="white"
                            bg="transparent"
                            boxShadow="0 0 0 3px white inset"
                            target="_blank"
                            href={data!.githubLink ? data!.githubLink : ""}
                        >
                            Git
                        </Button>
                        <Button
                            as="a"
                            variant={
                                data!.deploymentLink ? "project" : "disabled"
                            }
                            target="_blank"
                            href={
                                data!.deploymentLink ? data!.deploymentLink : ""
                            }
                        >
                            View
                        </Button>
                    </ButtonGroup>
                </Box>
            </Box>
        </Box>
    );
}

