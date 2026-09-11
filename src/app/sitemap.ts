import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maineroofingscapesrepairs.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/commercial-roofing',
    '/roof-restoration',
    '/metal-roofing',
    '/roof-replacement',
    '/roof-repair',
    '/ice-dam-removal',
    '/roof-inspection',
    '/projects',
    '/blog',
    '/blog/brown-water-stain-ceiling-after-snow-maine',
    '/blog/commercial-roof-restoration-vs-replacement',
    '/blog/emergency-roof-repair-storm-damage-maine',
    '/blog/how-to-choose-roofing-contractor-maine',
    '/blog/ice-dam-prevention-removal-maine',
    '/blog/standing-seam-metal-roof-cost-maine',
    '/about',
    '/reviews',
    '/contact',
    '/privacy-policy'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.includes('roof-') || route.includes('commercial') ? 0.9 : 0.7
  }));
}
