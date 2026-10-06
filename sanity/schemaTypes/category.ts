import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accentColor',
      title: 'Badge Color Theme',
      type: 'string',
      description: 'Used for badge highlights on cards and headers',
      options: {
        list: [
          { title: 'Orange (#fe7f25 - Freight Default)', value: 'orange' },
          { title: 'Sky Blue (#0284c7 - Customs & Compliance)', value: 'blue' },
          { title: 'Emerald Green (Cold Chain & Pharma)', value: 'green' },
          { title: 'Slate Dark (General)', value: 'slate' },
        ],
      },
      initialValue: 'orange',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
});
