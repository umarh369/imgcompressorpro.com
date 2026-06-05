import type { APIRoute } from 'astro';

const site = 'https://imgcompressorpro.com';

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/compress-jpg', priority: '0.9', changefreq: 'monthly' },
  { url: '/compress-png', priority: '0.9', changefreq: 'monthly' },
  { url: '/compress-webp', priority: '0.9', changefreq: 'monthly' },
  { url: '/reduce-image-size', priority: '0.9', changefreq: 'monthly' },
  { url: '/optimize-images-for-website', priority: '0.9', changefreq: 'monthly' },
  { url: '/compress-images-for-email', priority: '0.8', changefreq: 'monthly' },
  { url: '/compress-images-for-social-media', priority: '0.8', changefreq: 'monthly' },
  { url: '/about', priority: '0.6', changefreq: 'monthly' },
  { url: '/contact', priority: '0.6', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.4', changefreq: 'yearly' },
  { url: '/terms', priority: '0.4', changefreq: 'yearly' },
];

const lastmod = new Date().toISOString().split('T')[0];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ url, priority, changefreq }) => `  <url>
    <loc>${site}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
