import type { PageLoad } from './$types';
import { projectPageLoad } from '$lib/data/project-page-load';

export const load: PageLoad = () => projectPageLoad('nike-nhl-lockout');
