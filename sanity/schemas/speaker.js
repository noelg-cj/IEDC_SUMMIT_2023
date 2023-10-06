export default {
  name: 'speaker',
  type: 'document',
  title: 'Speakers',
  fields: [
    {
      name:'order',
      type:'number',
      title:'Order',
      default: 1000,
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'title1',
      type: 'string',
      title: 'Title 1',
    },
    {
      name: 'title2',
      type: 'string',
      title: 'Title 2',
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
