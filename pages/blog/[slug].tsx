import { useState, useEffect } from "react";
import BlogHeading from "@/components/blogheading";
import Navigation from "@/components/navigation";
import SideBar from "@/components/sidebar";
import { fetchAPI, getArticleDetails, getStrapiURL } from "@/lib/strapi";
import { Box, Text, Image } from "@chakra-ui/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
type Props = {
    article: any;
};

export async function getStaticPaths() {
    const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

    return {
        paths: articlesRes.data.map((article) => ({
            params: {
                slug: article.attributes.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const articlesRes = await getArticleDetails("/articles", {
        filters: {
            slug: params.slug,
        },
        populate: ["image", "category", "blocks", "deep,5"],
    });
    const categoriesRes = await fetchAPI("/categories");

    return {
        props: { article: articlesRes.data[0], categories: categoriesRes },
        revalidate: 1,
    };
}

export default function Article({ article }: Props) {
    console.log(article);
    return (
        <>
            <Navigation />
            <Box className="container">
                <BlogHeading text={article.attributes.title} />
            </Box>
            <Box className="container">
                {article.attributes.blocks.map((block: any) => {
                    return (
                        <>
                            {block.body && (
                                <ReactMarkdown>{block.body}</ReactMarkdown>
                            )}
                            {block.file && (
                                <Image
                                    alt={
                                        block.file.data.attributes
                                            .alternativeText
                                    }
                                    src={getStrapiURL(
                                        block.file.data.attributes.url
                                    )}
                                />
                            )}
                        </>
                    );
                })}
            </Box>
            <SideBar />
        </>
    );
}
