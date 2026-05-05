import { getProjectHref, tagLabel, type ProjectMeta } from '$lib/data/work';

export type JsonLd = Record<string, unknown> | Record<string, unknown>[];

export const SITE_URL = 'https://sorenne.com';
export const SITE_NAME = 'Sorenne';
export const DEFAULT_TITLE = 'Sorenne — Creative Director';
export const DEFAULT_DESCRIPTION =
	'Sorenne is a Los Angeles creative director making narrative-led campaign, film, social, design, retail, and digital work.';
export const DEFAULT_SOCIAL_IMAGE = '/brand/256x256_V1.png';
export const PERSON_ID = `${SITE_URL}/#sorenne`;

export function absoluteUrl(pathOrUrl: string): string {
	return new URL(pathOrUrl, SITE_URL).href;
}

export function cleanText(value: string): string {
	return value.replace(/\s+/g, ' ').trim();
}

export function projectSeoTitle(project: ProjectMeta): string {
	return project.seo?.title ?? `${project.projectTitle ?? project.title} — ${SITE_NAME}`;
}

export function projectSeoDescription(project: ProjectMeta): string {
	return cleanText(project.seo?.description ?? project.heroDescription ?? project.description);
}

export function personSchema(): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': PERSON_ID,
		name: SITE_NAME,
		jobTitle: 'Creative Director',
		url: SITE_URL,
		email: 'mailto:sorenneagade@gmail.com',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Los Angeles',
			addressRegion: 'CA',
			addressCountry: 'US'
		},
		knowsAbout: [
			'Creative direction',
			'Brand campaigns',
			'Film',
			'Social content',
			'Design',
			'Retail design',
			'Digital launches'
		]
	};
}

export function websiteSchema(): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${SITE_URL}/#website`,
		name: SITE_NAME,
		url: SITE_URL,
		description: DEFAULT_DESCRIPTION,
		creator: { '@id': PERSON_ID }
	};
}

export function webPageSchema({
	path,
	title,
	description,
	type = 'WebPage'
}: {
	path: string;
	title: string;
	description: string;
	type?: 'WebPage' | 'AboutPage' | 'CollectionPage';
}): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': type,
		name: title,
		headline: title,
		description,
		url: absoluteUrl(path),
		isPartOf: { '@id': `${SITE_URL}/#website` },
		about: { '@id': PERSON_ID }
	};
}

export function projectSchema(project: ProjectMeta): Record<string, unknown> {
	const path = getProjectHref(project);
	const title = project.projectTitle ?? project.title;

	return {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: title,
		headline: title,
		description: projectSeoDescription(project),
		url: absoluteUrl(path),
		image: absoluteUrl(project.images.landscape || DEFAULT_SOCIAL_IMAGE),
		creator: { '@id': PERSON_ID },
		keywords: project.tags.map(tagLabel).join(', '),
		isPartOf: {
			'@type': 'CollectionPage',
			name: 'Work — Sorenne',
			url: absoluteUrl('/work')
		}
	};
}
