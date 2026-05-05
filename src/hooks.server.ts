import type { Handle } from '@sveltejs/kit';

/** Legacy Cargo-style paths → current routes. */
const LEGACY_PATH_REDIRECTS: ReadonlyMap<string, string> = new Map([
	['/Home-to-Any-Possibility', '/work/lowes-always-home'],
	['/home-to-any-possibility', '/work/lowes-always-home'],
	/** Formerly sorenne.com/LOWE-S-1 → Lowe’s Open Builder case study */
	['/LOWE-S-1', '/work/lowes-open-builder'],
	['/lowe-s-1', '/work/lowes-open-builder'],
	['/Make-More-Holiday', '/work/lowes-holiday-togetherness'],
	['/make-more-holiday', '/work/lowes-holiday-togetherness'],
	['/Father-s-Day', '/work/lowes-fathers-day'],
	['/father-s-day', '/work/lowes-fathers-day'],
	['/Always-Home', '/work/lowes-military-families'],
	['/always-home', '/work/lowes-military-families'],
	['/Hoops', '/work/nike-hoops'],
	['/hoops', '/work/nike-hoops'],
	['/NIKE-ID-1', '/work/nike-id'],
	['/nike-id-1', '/work/nike-id'],
	['/Marry-Me', '/work/nike-shox-bella'],
	['/marry-me', '/work/nike-shox-bella'],
	['/Melt', '/work/nike-nhl-lockout'],
	['/melt', '/work/nike-nhl-lockout'],
	['/Make-Yourself', '/work/nike-make-yourself'],
	['/make-yourself', '/work/nike-make-yourself'],
	['/Pretty-1', '/work/nike-maria-sharapova'],
	['/pretty-1', '/work/nike-maria-sharapova'],
	['/Olympic-Design', '/work/nike-olympic-design'],
	['/olympic-design', '/work/nike-olympic-design'],
	['/Rock-Victorious', '/work/nike-rock-victorious'],
	['/rock-victorious', '/work/nike-rock-victorious'],
	['/Pro', '/work/nike-womens-training-pro'],
	['/pro', '/work/nike-womens-training-pro'],
	['/128-NYC', '/work/nike-serena-williams-shoe'],
	['/128-nyc', '/work/nike-serena-williams-shoe'],
	['/Live-in-the-Wow', '/work/ion360'],
	['/live-in-the-wow', '/work/ion360'],
	['/ION360', '/work/ion360'],
	['/ion360', '/work/ion360'],
	['/Happy-Business', '/work/quickbooks-happy-business'],
	['/happy-business', '/work/quickbooks-happy-business'],
	['/Social-Design', '/work/quickbooks-social-design'],
	['/social-design', '/work/quickbooks-social-design'],
	['/Hands', '/work/hp-hands-campaign'],
	['/hands', '/work/hp-hands-campaign'],
	['/The-Slowskys', '/work/comcast-slowskys'],
	['/the-slowskys', '/work/comcast-slowskys'],
	['/Sofia-Vergara', '/work/kmart-sofia-vergara-fashion'],
	['/sofia-vergara', '/work/kmart-sofia-vergara-fashion'],
	['/Money-Can-t-Buy-Style', '/work/kmart-money-cant-buy-style'],
	['/money-can-t-buy-style', '/work/kmart-money-cant-buy-style'],
	["/Let's-Be-Honest", '/work/honest-beauty-launch'],
	['/Let-s-Be-Honest', '/work/honest-beauty-launch'],
	['/let-s-be-honest', '/work/honest-beauty-launch']
]);

export const handle: Handle = async ({ event, resolve }) => {
	let pathname = event.url.pathname;
	if (pathname.length > 1 && pathname.endsWith('/')) pathname = pathname.slice(0, -1);
	const target = LEGACY_PATH_REDIRECTS.get(pathname);
	if (target) {
		return Response.redirect(new URL(target, event.url).href, 301);
	}
	return resolve(event);
};
