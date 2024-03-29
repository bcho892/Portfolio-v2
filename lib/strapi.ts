//https://strapi.io/blog/build-a-blog-with-next-react-js-strapi
import qs from "qs";

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path: string = "") {
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337"
    }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
    // Merge default and user options
    const headers = new Headers();
    headers.append("Authorization", `bearer ${process.env.STRAPI_TOKEN}`);
    headers.append("Content-Type", "application/json");
    const mergedOptions = {
        // eslint-disable-next-line quotes
        headers: headers,

        ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
        `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
        console.error(response.statusText);
        throw new Error(`An error occured please try again`);
    }
    const data = await response.json();
    return data;
}

export async function getArticleDetails(
    path,
    urlParamsObject = {},
    options = {}
) {
    const headers = new Headers();
    headers.append("Authorization", `bearer ${process.env.STRAPI_TOKEN}`);
    headers.append("Content-Type", "application/json");
    // Merge default and user options
    const mergedOptions = {
        headers: headers,
        ...options,
    };

    // Build request URL
    const requestUrl = `${getStrapiURL(`/api${path}?populate=deep,3`)}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
        console.error(response.statusText);
        throw new Error(`An error occured please try again`);
    }
    const data = await response.json();
    return data;
}

export function getStrapiMedia(media) {
    const { url } = media.data.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
}
