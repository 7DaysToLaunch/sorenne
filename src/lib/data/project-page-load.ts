import { error } from '@sveltejs/kit';
import { getProjectBySlug, type ProjectMeta } from './work';

/** Use from each `work/<slug>/+page.ts` so metadata stays tied to the registry. */
export function projectPageLoad(slug: string): { project: ProjectMeta } {
	const project = getProjectBySlug(slug);
	if (!project) error(404, 'Not found');
	return { project };
}
