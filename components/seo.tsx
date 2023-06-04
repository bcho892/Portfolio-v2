//https://strapi.io/blog/build-a-blog-with-next-react-js-strapi
import Head from "next/head";
type Props = {
    metaTitle?: string;
    metaDescription?: string;
    shareImage?: string;
};

const Seo = ({ metaTitle, metaDescription, shareImage }: Props) => {
    return (
        <Head>
            {metaTitle && (
                <>
                    <title>{metaTitle}</title>
                    <meta property="og:title" content={metaTitle} />
                    <meta name="twitter:title" content={metaTitle} />
                </>
            )}
            {metaDescription && (
                <>
                    <meta name="description" content={metaDescription} />
                    <meta property="og:description" content={metaDescription} />
                    <meta
                        name="twitter:description"
                        content={metaDescription}
                    />
                </>
            )}
            {shareImage && (
                <>
                    <meta property="og:image" content={shareImage} />
                    <meta name="twitter:image" content={shareImage} />
                    <meta name="image" content={shareImage} />
                </>
            )}
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default Seo;
