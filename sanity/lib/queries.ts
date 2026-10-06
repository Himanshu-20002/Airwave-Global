import { groq } from 'next-sanity';

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  accentColor?: 'orange' | 'blue' | 'green' | 'slate' | string;
}

export interface PostCard {
  _id: string;
  title: string;
  slug: { current: string };
  category?: Category;
  publishedAt: string;
  readingTime?: string;
  excerpt: string;
  mainImage?: any;
}

export interface PostDetail extends PostCard {
  authorName?: string;
  body: any[];
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

export const latestPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    mainImage,
    category->{
      _id,
      title,
      slug,
      accentColor
    }
  }
`;

export const allPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    mainImage,
    category->{
      _id,
      title,
      slug,
      accentColor
    }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    authorName,
    mainImage,
    body,
    metaTitle,
    metaDescription,
    keywords,
    category->{
      _id,
      title,
      slug,
      accentColor
    }
  }
`;

export const allPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

export const relatedPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && category._ref == $categoryId && slug.current != $currentSlug] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    mainImage,
    category->{
      _id,
      title,
      slug,
      accentColor
    }
  }
`;

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    accentColor
  }
`;
