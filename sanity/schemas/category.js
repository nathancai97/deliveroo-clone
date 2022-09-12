export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'string',
      type: 'Category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'image',
      type: 'Image of Category',
    },
  ],
}
