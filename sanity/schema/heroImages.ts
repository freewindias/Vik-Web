export default{
    name: 'heroImage',
    title: 'Hero Image',
    type: 'document',
    fields: [
        {
            name: 'HerroImage',
            title: 'Hero Image',
            type: 'image',
        },
        {
            name: "heroUrl",
            title: 'Hero url',
            type : 'string',
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