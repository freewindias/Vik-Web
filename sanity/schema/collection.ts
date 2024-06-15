export default{
    name: 'collection',
    title: 'Collection',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title of the Collection',
            type:'string'
        },
        {
            name: 'slug',
            title: 'Slug of the Collection',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        },
    ],
}