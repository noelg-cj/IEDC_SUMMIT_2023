export default {
    name: 'schedule',
    type: 'document',
    title: 'Schedule',
    fields:[
        {
          name: 'event',
					type: 'string',
					title: 'Event Name',
				},
				{
					name:'order',
					type:'number',
					title:'Display Order',
				},
				{
					name:'venue',
					type:'string',
					title:'Venue',
					options: {
						list: [
							{title: 'DJ Hall', value: 'djHall'},
							{title: 'Sargam Stage', value: 'sargamStage'},
							{title: 'CGPU Hall', value: 'cgpuHall'},
							{title: 'Substage', value: 'substage'},
							{title: 'CETAA Hall', value: 'ceataaHall'},
						],
						layout: 'radio',
					},
				},
				{
					name: 'speaker',
					type: 'string',
					title: 'Speaker',
        },
				{
					name:'job',
					type:'string',
					title:'Job Title',	
				},
				{
					name:'image',
					type:'image',
					title:'Image',
				},
				{
					name: 'starttime',
					type: 'datetime',
					title: 'Event Start Time',
					options: {
						dateFormat: 'DD/MM/YYYY hh:mm A',
						timeStep: 15,  // 15-minute intervals
					},
					default: '2023-10-09T' + '00:00:00Z',  // Default date: 9th October 2023
				},
				{
					name: 'endtime',
					type: 'datetime',
					title: 'Event End Time',
					options: {
						dateFormat: 'DD/MM/YYYY hh:mm A',
						timeStep: 15,  // 15-minute intervals
					},
					default: '2023-10-09T' + '00:00:00Z',  // Default date: 9th October 2023
				},

    ]
}