export default {
    name: 'website',
    title: 'Website',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Website Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'image',
            title: 'Website Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'categories',
            title: 'Font Type',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}]
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime'
        },
        {
            name: 'description',
            title: 'Fonts',
            type: 'blockContent'
        }
    ],

}