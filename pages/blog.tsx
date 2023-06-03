import Head from "next/head";
import "@fontsource/open-sans";
import "@fontsource/bebas-neue";
import { Box, Image } from "@chakra-ui/react";

import Navigation from "@/components/navigation";
import SideBar from "@/components/sidebar";
import BlogHeading from "@/components/blogheading";
import BensonCho from "@/components/bensoncho";
import { fetchAPI } from "@/lib/strapi";

type Props = {
    articles: any;
};

export async function getStaticProps() {
    const [articles] = await Promise.all([
        fetchAPI("/articles", { populate: ["image", "category"] }),
    ]);
    return {
        props: {
            articles: articles,
        },
        revalidate: 1,
    };
}

export default function Home({ articles }: Props) {
    console.log(articles);
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
                    content="I am a penultimate year ECE student at the University of Auckland who is interested in a broad range of topics in both engineering and tech."
                />
                <meta property="og:image" content="/images/sitepreview.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <Box className="container" margin="auto">
                <BlogHeading />
            </Box>
            <BensonCho />
            <SideBar />
        </>
    );
}
