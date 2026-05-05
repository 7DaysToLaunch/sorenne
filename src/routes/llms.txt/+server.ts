import { getProjectHref, PROJECTS, type ProjectMeta } from '$lib/data/work';
import { absoluteUrl, projectSeoDescription } from '$lib/seo';

export const prerender = true;

const projects: readonly ProjectMeta[] = PROJECTS;

function cleanText(value: string): string {
	return value.replace(/\s+/g, ' ').trim();
}

export function GET() {
	const portfolioLinks = projects.map((project) => {
		const title = project.projectTitle ?? project.title;
		const description = cleanText(projectSeoDescription(project));

		return `- [${title}](${absoluteUrl(getProjectHref(project))}): ${description}`;
	}).join('\n');

	const body = `# Sorenne

> Portfolio website for Sorenne, a Los Angeles creative director making narrative-led campaign, film, social, design, retail, and digital work.

## Core Pages

- [Home](${absoluteUrl('/')}): Selected work and portfolio highlights.
- [Work](${absoluteUrl('/work')}): Browse the full project archive.
- [About](${absoluteUrl('/about')}): Bio, background, awards, agency collaborations, and contact details.
- [Sitemap](${absoluteUrl('/sitemap.xml')}): XML index of crawlable site pages.

## Portfolio Case Studies

${portfolioLinks}

## Site Notes

- Primary topics: creative direction, brand campaigns, film, social content, design systems, OOH, retail design, digital launches, women-led storytelling, sports, fashion, beauty, technology, wellness, and CPG.
- Notable collaborators and brands include poppi, Lumē, Thinx, Circle, AT&T, Lowe's, QuickBooks, Honest Beauty, Nike, Google Fiber, HP, Comcast, Walmart, Kmart, Asics, and Ion360.
`;

	return new Response(body, {
		headers: {
			'content-type': 'text/plain; charset=utf-8'
		}
	});
}
