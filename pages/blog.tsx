import Head from "next/head";
import "@fontsource/open-sans";
import "@fontsource/bebas-neue";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

import Navigation from "@/components/navigation";
import SideBar from "@/components/sidebar";
import BlogHeading from "@/components/blogheading";
import BensonCho from "@/components/bensoncho";
import { fetchAPI } from "@/lib/strapi";
import ArticleList from "@/components/articlelist";

type Props = {
    articles: any;
    categories: any;
};

export async function getStaticProps() {
    const [articles, categories] = await Promise.all([
        fetchAPI("/articles", { populate: ["image", "category"] }),
        fetchAPI("/categories"),
    ]);
    return {
        props: {
            articles: articles,
            categories: categories,
        },
        revalidate: 1,
    };
}

export const categoryView = (categories: any) => {
    return (
        <>
            {categories.data.map((category: any) => {
                return (
                    <>
                        <Heading
                            bg="themeRed"
                            padding="0 1rem"
                            as="a"
                            href={`/blog/category/${category.attributes.slug}`}
                        >
                            {category.attributes.name}
                        </Heading>{" "}
                    </>
                );
            })}
        </>
    );
};

export default function Blog({ articles, categories }: Props) {
    console.log(categories);
    return (
        <>
            <Head>
                <title>Benson Cho - Blog</title>
                <meta
                    name="description"
                    content="I am a penultimate year ECE student at the University of Auckland who is interested in a broad range of topics in both engineering and tech. This is my blog"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Benson Cho's Portfolio" />
                <meta
                    property="og:description"
                    content="I am a penultimate year ECE student at the University of Auckland who is interested in a broad range of topics in both engineering and tech. This is my blog"
                />
                <meta property="og:image" content="/images/sitepreview.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation disableHyperLinks />
            <Box className="container" margin="auto">
                <Box
                    as="a"
                    href="/"
                    marginTop="7rem"
                    cursor="pointer"
                    width="2rem"
                    height="2rem"
                    transform="rotate(90deg)"
                >
                    <Image alt="go back" src="/svg/Arrow.svg" />
                </Box>
                <BlogHeading>
                    <Box
                        justifySelf="flex-end"
                        display="flex"
                        gap="1rem"
                        marginTop="-1.5rem"
                        marginBottom="1rem"
                    >
                        {categoryView(categories)}
                    </Box>
                </BlogHeading>
                {articles && <ArticleList articles={articles.data} />}
            </Box>
            <BensonCho isFixed />
            <SideBar />
        </>
    );
}
