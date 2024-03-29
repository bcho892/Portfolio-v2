import { ArticleModel } from "@/lib/utils";
import { Box, Heading } from "@chakra-ui/react";
import ArticleCard from "./articlecard";
import ProjectCard from "./projectcard";

type Props = {
    articles: any;
};

export default function ArticleList({ articles }: Props) {
    return (
        <>
            <Box
                display="flex"
                flexDir="column"
                marginBottom="5rem"
                marginTop="2rem"
                gap="5rem"
            >
                {articles.length > 0 ? (
                    articles.map((article: ArticleModel, index: number) => {
                        return <ArticleCard key={index} article={article} />;
                    })
                ) : (
                    <Heading
                        bg="themeRed"
                        width="fit-content"
                        fontSize="xxx-large"
                        padding="0 1rem"
                    >
                        Nothing found
                    </Heading>
                )}
            </Box>
        </>
    );
}
