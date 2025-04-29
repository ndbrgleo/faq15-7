import 'dotenv/config';
import { createClient } from '@sanity/client';
import { v4 as uuidv4 } from 'uuid';
import { faqItems } from '../../src/lib/faq-data';

const client = createClient({
    projectId: '274ci4g1',
    dataset: 'production',
    apiVersion: '2023-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});

async function importFaqs() {
    for (const item of faqItems) {
        const doc = {
            _id: item.id,
            _type: 'faq',
            question: item.question,
            answer: item.answer
                .toString()
                .split('\n\n')
                .map((para) => ({
                    _type: 'block',
                    _key: uuidv4(),
                    children: [
                        {
                            _type: 'span',
                            _key: uuidv4(),
                            text: para.trim(),
                        },
                    ],
                })),
            category: item.category,
            videoEmbed: item.videoEmbed || '',
        };

        await client.createOrReplace(doc);
        console.log(`✅ Imported: ${item.id}`);
    }
}

importFaqs().catch((err) => {
    console.error('🚨 Import failed:', err);
});
