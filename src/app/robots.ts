import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/login',
        '/signup',
        '/vendor/login',
        '/vendor/register',
      ],
    },
    sitemap: 'https://eveno-beta.vercel.app/sitemap.xml',
  };
}
