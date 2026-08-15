import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Update this to your actual domain name once you deploy, or set NEXT_PUBLIC_BASE_URL in your .env file
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://vedantsarode.vercel.app';

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
