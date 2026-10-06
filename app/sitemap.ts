import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { allPostSlugsQuery } from '@/sanity/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://airwaveglobal.in';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  let postRoutes: MetadataRoute.Sitemap = [];

  try {
    const slugs = await client.fetch<string[]>(allPostSlugsQuery);
    if (slugs && slugs.length > 0) {
      postRoutes = slugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      }));
    }
  } catch (err) {
    console.warn('Could not fetch post slugs for sitemap:', err);
  }

  // Fallback demo slugs if Sanity has no published posts yet
  if (postRoutes.length === 0) {
    const demoSlugs = [
      'not-sure-whether-to-ship-lcl-or-fcl',
      'navigating-india-customs-icegate-2-duty-exemption',
      'maintaining-cold-chain-integrity-across-global-biologics-lanes',
    ];
    postRoutes = demoSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
  }

  return [...staticRoutes, ...postRoutes];
}
