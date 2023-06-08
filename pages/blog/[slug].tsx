import { useState, useEffect } from "react";
import BlogHeading from "@/components/blogheading";
import Navigation from "@/components/navigation";
import SideBar from "@/components/sidebar";
import { fetchAPI, getArticleDetails, getStrapiURL } from "@/lib/strapi";
import { Box, Text, Image, Heading } from "@chakra-ui/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ArticleBody from "@/components/articlebody";
import { ArticleModel, formatDate } from "@/lib/utils";
import Seo from "@/components/seo";
import BackButton from "@/components/backbutton";
type Props = {
    article: ArticleModel;
    categories: any;
};

export async function getStaticPaths() {
    const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

    return {
        paths: articlesRes.data.map((article: ArticleModel) => ({
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
    });

    return {
        props: { article: articlesRes.data[0] },
        revalidate: 60 * 60 * 24,
    };
}

const titleSuffix = `- Benson Cho's Blog`;
export default function Article({ article }: Props) {
    console.log(article);
    return (
        <>
            {article && (
                <>
                    <Seo
                        shareImage={
                            article.attributes.cover?.data?.attributes?.url
                        }
                        metaTitle={`${article.attributes.title} ${titleSuffix}`}
                    />
                    <Navigation disableHyperLinks />
                    <Box className="container">
                        <BackButton text="All Posts" href="/blog" />
                        <BlogHeading text={article.attributes.title}>
                            <Text bg="themeRed" padding="0 1rem">
                                By{" "}
                                {article.attributes.author.data &&
                                    article.attributes.author.data.attributes
                                        .name}
                                , published{" "}
                                {formatDate(article.attributes.publishedAt)}
                            </Text>
                        </BlogHeading>
                    </Box>
                    <Box className="container">
                        <ArticleBody blocks={article.attributes.blocks} />
                    </Box>

                    <SideBar />
                </>
            )}
        </>
    );
}
