
export default{
    name: 'art',
    title: 'Art',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title of the art',
            type:'string'
        },
        {
            name: 'slug',
            title: 'Slug of the art',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        },
        {
            name: 'collection',
            title: 'Collection of the art',
            type: 'reference',
            to: [
                {
                    type: 'collection', 
                },
            ],
        },
        {
            name: 'image',
            title: 'Image URL',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Description of the art',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ],
        },
        
    ],
}