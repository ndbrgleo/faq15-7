import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemaTypes'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'Knowledge Base',

  projectId: '274ci4g1',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) =>
          S.list()
              .title('Content')
              .items([
                // One section per category
                S.listItem()
                    .title('FAQ Categories')
                    .child(
                        S.list()
                            .title('Grouped by Category')
                            .items(
                                [
                                  'Frequently Asked Questions',
                                  //'FAQ',
                                  'Video Tutorials',
                                  'FX Fundamentals',
                                  //'FX Instruments',
                                  //'FX Courses',
                                  'Guides'
                                ].map((category) =>
                                    orderableDocumentListDeskItem({
                                      type: 'faq',
                                      title: category,
                                      id: `orderable-faq-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`, // ✅ Safe ID
                                      filter: `_type == "faq" && category == $category`,
                                      params: { category },
                                      S,
                                      context,
                                    })
                                )
                            )
                    ),
              ]),
    }),
    visionTool()
  ],

  schema: {
    types: schemas,
  },
})
