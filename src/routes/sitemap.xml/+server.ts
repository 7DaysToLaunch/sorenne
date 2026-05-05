import { getProjectHref, PROJECTS } from '$lib/data/work';
import { SITE_URL } from '$lib/seo';

export const prerender = true;

const LASTMOD = '2026-05-06';

const pages = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/work', priority: '0.9', changefreq: 'weekly' },
	{ path: '/about', priority: '0.7', changefreq: 'monthly' },
	...PROJECTS.map((project) => ({
		path: getProjectHref(project),
		priority: '0.8',
		changefreq: 'monthly'
	}))
].filter((page) => page.path.startsWith('/'));

function absoluteUrl(path: string): string {
	return new URL(path, SITE_URL).href;
}

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

export function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `	<url>
		<loc>${escapeXml(absoluteUrl(page.path))}</loc>
		<lastmod>${LASTMOD}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: {
			'content-type': 'application/xml; charset=utf-8'
		}
	});
}
