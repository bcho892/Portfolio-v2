import { getStrapiURL } from "@/lib/strapi";
import { Image, Box } from "@chakra-ui/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
type Props = {
    blocks: any;
};

export default function ArticleBody({ blocks }: Props) {
    return (
        <>
            <Box
                display="flex"
                flexDir="column"
                marginBottom="5rem"
                marginTop="1rem"
            >
                {blocks.map((block: any) => {
                    return (
                        <>
                            {block.body && (
                                <ReactMarkdown>{block.body}</ReactMarkdown>
                            )}
                            {block.file && (
                                <Image
                                    margin="1rem 0"
                                    alt={
                                        block.file.data.attributes
                                            .alternativeText
                                    }
                                    src={block.file.data.attributes.url}
                                />
                            )}
                        </>
                    );
                })}
            </Box>
        </>
    );
}
