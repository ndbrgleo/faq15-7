import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'answer',
            title: 'Answer',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'FAQ', value: 'FAQ' },
                    { title: 'Video Tutorials', value: 'Video Tutorials' },
                    { title: 'FX Market Mechanics', value: 'FX Market Mechanics' },
                    { title: 'FX Instruments', value: 'FX Instruments' },
                    { title: 'FX Courses', value: 'FX Courses' },
                    { title: 'Guides', value: 'Guides' },
                ],
            },
        }),
        defineField({
            name: 'videoEmbed',
            title: 'Video Embed URL',
            type: 'url',
        }),
        defineField({
            name: 'orderRank',
            type: 'string',
            hidden: true, // Required by plugin, but invisible in Studio
        }),
    ],
})

