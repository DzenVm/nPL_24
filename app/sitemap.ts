import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://zabulic.pro';
  const teraz = new Date();
  return [
    { url: `${base}/`, lastModified: teraz, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/zasady`, lastModified: teraz, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/prywatnosc`, lastModified: teraz, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/kontakt`, lastModified: teraz, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
