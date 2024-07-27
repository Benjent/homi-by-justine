import type { StrapiRichTextBody } from "./strapi";

export default interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    body: StrapiRichTextBody;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
