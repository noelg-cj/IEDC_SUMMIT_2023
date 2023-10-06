export default {
  name: 'speaker',
  type: 'document',
  title: 'Speakers',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'title1',
      type: 'string',
      title: 'Title1',
    },
    {
      name: 'title2',
      type: 'string',
      title: 'Title2',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
  ],
}
