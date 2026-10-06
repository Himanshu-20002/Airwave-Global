import { defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO & Social Sharing Metadata',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL path (e.g. /blog/my-article-slug). Click Generate after typing title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readingTime',
      title: 'Estimated Reading Time',
      type: 'string',
      description: 'e.g. "4 min read"',
      initialValue: '4 min read',
    }),
    defineField({
      name: 'mainImage',
      title: 'Featured Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (Crucial for SEO)',
          description: 'Describe the image for search engines and accessibility.',
        },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
      description: 'Shown on the homepage cards, blog listing, and Google snippets (120-200 characters recommended).',
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'authorName',
      title: 'Author / Contributor Name',
      type: 'string',
      initialValue: 'Airwave Trade Intelligence Team',
    }),
    defineField({
      name: 'body',
      title: 'Article Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2 (Section Title)', value: 'h2' },
            { title: 'Heading 3 (Sub-heading)', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),

    // SEO Fieldset
    defineField({
      name: 'metaTitle',
      title: 'Custom Meta Title',
      type: 'string',
      fieldset: 'seo',
      description: 'Leave empty to use article title. Ideally 50-60 characters.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Custom Meta Description',
      type: 'text',
      rows: 2,
      fieldset: 'seo',
      description: 'Leave empty to use excerpt. Ideally 140-160 characters for Google snippet.',
    }),
    defineField({
      name: 'keywords',
      title: 'SEO Keywords',
      type: 'array',
      fieldset: 'seo',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare({ title, category, media, date }) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : '';
      return {
        title,
        subtitle: [category, formattedDate].filter(Boolean).join(' • '),
        media,
      };
    },
  },
});
