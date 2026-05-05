import type { OnNavigate } from '@sveltejs/kit';
import gsap from 'gsap';

/** Horizontal wipe over main content only; nav/footer stay fixed. */
export async function runPageTransition(
	navigation: OnNavigate,
	root: HTMLElement,
	curtain: HTMLElement
): Promise<(() => void) | void> {
	const fromPath = navigation.from?.url.pathname;
	const toPath = navigation.to?.url.pathname;
	if (!toPath || fromPath === toPath) return;

	gsap.killTweensOf([root, curtain]);

	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduced) {
		await gsap.to(root, { opacity: 0.94, duration: 0.12, ease: 'power1.out', overwrite: 'auto' });
		return () => {
			gsap.fromTo(
				root,
				{ opacity: 0.94 },
				{
					opacity: 1,
					duration: 0.26,
					ease: 'power2.out',
					overwrite: 'auto',
					clearProps: 'opacity'
				}
			);
		};
	}

	const back = navigation.type === 'popstate' && navigation.delta < 0;
	const coverOrigin = back ? 'right center' : 'left center';
	const revealOrigin = back ? 'left center' : 'right center';

	gsap.set(curtain, {
		visibility: 'visible',
		pointerEvents: 'auto',
		transformOrigin: coverOrigin,
		scaleX: 0
	});

	await gsap.to(curtain, {
		scaleX: 1,
		duration: 0.62,
		ease: 'power3.inOut',
		overwrite: 'auto'
	});

	return () => {
		gsap.set(curtain, { transformOrigin: revealOrigin });
		gsap.to(curtain, {
			scaleX: 0,
			duration: 0.68,
			ease: 'power3.inOut',
			overwrite: 'auto',
			onComplete: () => {
				gsap.set(curtain, {
					visibility: 'hidden',
					pointerEvents: 'none',
					clearProps: 'scale,transformOrigin'
				});
			}
		});
		gsap.fromTo(
			root,
			{ opacity: 0.93 },
			{
				opacity: 1,
				duration: 0.48,
				delay: 0.1,
				ease: 'power2.out',
				overwrite: 'auto',
				clearProps: 'opacity'
			}
		);
	};
}
