import { createClient } from '@sanity/client';

const client = createClient({
    projectId: '274ci4g1',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: true,
});

export const getFAQs = async () => {
    try {
        const data = await client.fetch(`*[_type == "faq"] | order(orderRank) {
  _id,
  question,
  answer,
  category,
  videoEmbed
}`)

        console.log("✅ FAQs loaded:", data.length);
        return data;
    } catch (error) {
        console.error("🚨 Failed to fetch FAQs from Sanity:", error);
        return [];
    }
};
