import Head from "next/head";
import "@fontsource/open-sans";
import "@fontsource/bebas-neue";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

import Navigation from "@/components/navigation";
import SideBar from "@/components/sidebar";
import BlogHeading from "@/components/blogheading";
import BensonCho from "@/components/bensoncho";
import { fetchAPI } from "@/lib/strapi";
import { categoryView } from "@/pages/blog";
import ArticleList from "@/components/articlelist";
import BackButton from "@/components/backbutton";

type Props = {
    articles: any;
    categories: any;
    category: any;
};

export async function getStaticPaths() {
    const categoriesRes = await fetchAPI("/categories");

    return {
        paths: categoriesRes.data.map((category: any) => ({
            params: {
                slug: category.attributes.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const matchingCategories = await fetchAPI("/categories", {
        filters: { slug: params.slug },
        populate: {
            articles: {
                populate: "*",
            },
        },
    });
    const allCategories = await fetchAPI("/categories");

    return {
        props: {
            category: matchingCategories.data[0],
            categories: allCategories,
        },
        revalidate: 1,
    };
}

export default function Categories({ category }: Props) {
    //console.log(category);
    const articles = category.attributes.articles.data;
    return (
        <>
            <Navigation disableHyperLinks />
            <Box className="container" margin="auto">
                <BackButton text="All Posts" href="/blog" />
                <BlogHeading text={`Blog - ${category.attributes.name}`}>
                    <Box
                        justifySelf="flex-end"
                        display="flex"
                        gap="1rem"
                        marginTop="-1.5rem"
                        marginBottom="1rem"
                    ></Box>
                </BlogHeading>
                {articles && <ArticleList articles={articles} />}
            </Box>
            <BensonCho isFixed />
            <SideBar />
        </>
    );
}
