export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
};

export type ArticleModel = {
    attributes: {
        title: string;
        description: string;
        publishedAt: string;
        updatedAt: string;
        blocks: any;
        author: any;
        slug: string;
        cover: {
            data: {
                attributes?: {
                    url?: string;
                };
            };
        };
        category: {
            data: {
                attributes: {
                    name: string;
                };
            };
        };
    };
};
