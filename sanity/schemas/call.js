export default {
    name: 'call',
    type: 'document',
    title: 'Engagement Calls',
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
        type: 'string',
        title: 'Button status',
      },
    ],
  };
  