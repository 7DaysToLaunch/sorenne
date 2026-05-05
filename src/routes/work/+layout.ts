import { getProjectBySlug, getWorkDetailSlug } from '$lib/data/work';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
	const slug = getWorkDetailSlug(url.pathname);
	const workProject = slug ? getProjectBySlug(slug) : undefined;
	return {
		workShellTheme: workProject?.theme,
		workProject
	};
};
