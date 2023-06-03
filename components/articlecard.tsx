import {
    Box,
    Button,
    Text,
    ButtonGroup,
    Heading,
    useMediaQuery,
} from "@chakra-ui/react";
import { boxShadow } from "@/styles/presets";

type Props = {
    article: {
        attributes: {
            title: string;
            description: string;
            publishedAt: string;
            updatedAt: string;
        };
    };
};
const date = new Date();

export default function ArticleCard({ article }: Props) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };
    const [smallScreen] = useMediaQuery(`(max-width: 800px)`);
    return (
        <Box
            as="a"
            href={`/blog/${article.attributes.slug}`}
            padding="20px 20px"
            bg="themeGrey.bg"
            boxShadow={boxShadow}
            display="flex"
            flexDir="column"
            position="relative"
            height="fit-content"
            _hover={{
                transform: "scale(1.05)",
            }}
            transition="transform .4s"
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
            <Box
                margin="-20px -20px"
                filter="brightness(0.3)"
                transition="height .75s"
                zIndex="0"
                overflow="hidden"
            ></Box>

            <Box display="flex" flexDir="column" gap=".25rem" zIndex="1">
                <Heading bg="themeRed" padding="0 10px" width="fit-content">
                    {article.attributes.title}
                </Heading>
                <Box display="grid" alignItems="flex-end">
                    <Text fontSize="sm">
                        <strong>
                            Published{" "}
                            {formatDate(article.attributes.publishedAt)}
                        </strong>
                    </Text>
                    <Text>{article.attributes.description}</Text>
                </Box>
            </Box>
        </Box>
    );
}
