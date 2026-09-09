import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://maineroofingscapesrepairs.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/']
      },
      // Explicitly allow AI / Answer engine discovery bots
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Applebot-Extended'],
        allow: ['/', '/llms.txt', '/llms-full.txt']
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
