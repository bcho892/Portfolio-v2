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
    const categoriesRes = await fetchAPI("/categories");

    return {
        props: { article: articlesRes.data[0], categories: categoriesRes },
        revalidate: 1,
    };
}

const categoryView = (categories: any) => {
    return (
        <>
            {categories.data.map((category: any) => {
                return (
                    <>
                        <Heading bg="themeRed" padding="0 1rem" as="h2">
                            {category.attributes.name}
                        </Heading>{" "}
                    </>
                );
            })}
        </>
    );
};

const titleSuffix = `- Benson Cho's Blog`;
export default function Article({ article, categories }: Props) {
    console.log(article);
    return (
        <>
            <Seo
                shareImage={article.attributes.cover?.data?.attributes?.url}
                metaTitle={`${article.attributes.title} ${titleSuffix}`}
            />
            <Navigation disableHyperLinks />
            <Box className="container">
                <Box
                    as="a"
                    href="/blog"
                    marginTop="7rem"
                    cursor="pointer"
                    width="2rem"
                    height="2rem"
                    transform="rotate(90deg)"
                >
                    <Image alt="go back" src="/svg/Arrow.svg" />
                </Box>
                <BlogHeading text={article.attributes.title}>
                    <Box display="flex" gap="1rem">
                        {categoryView(categories)}
                    </Box>
                    <Text bg="themeRed" padding="0 1rem">
                        By {article.attributes.author.data.attributes.name},
                        published {formatDate(article.attributes.publishedAt)}
                    </Text>
                </BlogHeading>
            </Box>
            <Box className="container">
                <ArticleBody blocks={article.attributes.blocks} />
            </Box>

            <SideBar />
        </>
    );
}
