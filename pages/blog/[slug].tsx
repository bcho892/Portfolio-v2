import { useState, useEffect } from "react";
import BlogHeading from "@/components/blogheading";
import Navigation from "@/components/navigation";
import SideBar from "@/components/sidebar";
import { fetchAPI } from "@/lib/strapi";
import { Box, Text } from "@chakra-ui/react";
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
    const articlesRes = await fetchAPI("/articles", {
        filters: {
            slug: params.slug,
        },
        populate: ["image", "category", "author.picture", "blocks"],
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
                <Box flexDir="column" display="flex">
                    {article.attributes.blocks.map((block) => {
                        return <ReactMarkdown children={block.body} />;
                    })}
                </Box>
            </Box>
            <SideBar />
        </>
    );
}
