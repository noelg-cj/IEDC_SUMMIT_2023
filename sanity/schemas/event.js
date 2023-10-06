export default {
    name: 'event',
    type: 'document',
    title: 'Events',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'poster',
        type: 'image',
        title: 'Poster',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'link',
        type: 'string',
        title: 'Form Link',
      },
      {
        name: 'button',
        type: 'number',
        title: 'Button ID',
      },
      {
        name: 'section',
        type: 'number',
        title: 'Section ID',
      },
    ],
  };
  