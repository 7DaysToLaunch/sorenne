<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { personSchema, webPageSchema } from '$lib/seo';

	const title = 'About — Sorenne';
	const description =
		'Creative Director in Los Angeles, making narrative-led brand work with awards recognition and collaborations across leading agencies and brands.';
</script>

<Seo
	{title}
	{description}
	canonicalPath="/about"
	type="profile"
	image="/images/about/portrait.png"
	imageAlt="Sorenne portrait"
	jsonLd={[
		personSchema(),
		webPageSchema({
			path: '/about',
			title,
			description,
			type: 'AboutPage'
		})
	]}
/>

<article class="about">
	<header class="about__masthead">
		<figure class="about__figure">
			<img
				class="about__photo"
				src="/images/about/portrait.png"
				width="1600"
				height="1067"
				alt="Sorenne in the desert at sunrise or sunset, wearing sunglasses and a wide-brimmed hat, Joshua trees and mountains behind her."
				decoding="async"
				fetchpriority="high"
			/>
		</figure>

		<p class="about__kicker font-ui">Hello, I am</p>
		<h1 class="about__name">Sorenne</h1>
	</header>

	<div class="about__grid">
		<div class="about__col">
			<p>
				I’m a Creative Director based in Los Angeles, who also loves spending time in the desert,
				staring at Mount San Jacinto, from the comfort of our homestead cabin—<span
					class="about__spot">Big Little Mountain</span>.
			</p>
			<p>
				People say I have a knack for sifting out the stories that make people feel alive and
				empowered. Especially those of us who identify as women. I’m interested in brands brave
				enough to drive a cultural conversation. And I leave every brand more elevated than I found
				it.
			</p>
			<p>
				I’ve collaborated at these places:
				<strong>W+K, Goodby Silverstein &amp; Partners, Nike, TBWA/Chiat Day, and Deutsch LA</strong>,
				and I’ve won awards from those shows people care about—like Cannes, One Show, D&amp;AD, and
				Communication Arts.
			</p>
		</div>

		<div class="about__col">
			<p>I’ve even received an award for women in advertising.</p>
			<p>
				If you Google stalk me, you’ll discover that I created my own brand of leather goods and
				accessories for women,
				<a class="about__link" href="/work/von-drenik">Von Drenik</a>, and that I married a musician
				named Matt. And yes, our wedding was featured in
				<a
					class="about__link"
					href="https://www.marthastewart.com/"
					target="_blank"
					rel="noopener noreferrer">Martha Stewart</a>.
			</p>
			<p>
				We now have a 6 year old named Iggy. (Not named after Iggy Pop, but YES like Iggy Pop.) We
				call the historic neighborhood of Mount Washington our home and call our local coyotes “the
				neighbors.”
			</p>
			<p class="about__contact">
				I can be reached at this email address that I’ve had so long I just can’t change:
				<a class="about__link about__link--email" href="mailto:sorenneagade@gmail.com">sorenneagade@gmail.com</a>
			</p>
		</div>
	</div>
</article>

<style>
	.about {
		margin-top: calc(-1 * var(--site-nav-offset));
		padding: calc(var(--site-nav-offset) + var(--space-12) + var(--space-8)) var(--space-gutter)
			var(--space-20);
		background: var(--color-bg-cool);
		color: var(--color-fg-on-cool);

		& :focus-visible {
			outline-color: color-mix(in oklab, var(--color-fg-on-cool) 85%, transparent);
		}
	}

	.about__masthead {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		max-width: var(--width-max);
		margin-inline: auto;
		padding-bottom: var(--space-16);

		& .about__figure {
			margin: 0 0 var(--space-10);
			padding: 0;
			width: min(38rem, 100%);
		}

		& .about__photo {
			display: block;
			width: 100%;
			height: auto;
			aspect-ratio: 3 / 2;
			object-fit: cover;
			border-radius: var(--radius-md);
			box-shadow:
				0 20px 40px color-mix(in oklab, var(--palette-neutral-1000) 28%, transparent),
				0 0 0 1px color-mix(in oklab, var(--color-fg-on-cool) 12%, transparent);
		}

		& .about__kicker {
			margin: 0 0 var(--space-4);
			color: color-mix(in oklab, var(--color-fg-on-cool) 72%, transparent);
		}

		& .about__name {
			margin: 0;
			font-family: var(--font-heading);
			font-size: clamp(3.25rem, 11vw, 6.75rem);
			font-weight: var(--font-weight-regular);
			line-height: var(--leading-none);
			letter-spacing: var(--tracking-tight);
			text-transform: uppercase;
			text-wrap: balance;
			color: inherit;
		}
	}

	.about__grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(var(--space-8), 4vw, var(--space-16));
		column-gap: clamp(var(--space-10), 6vw, var(--space-20));
		max-width: min(80rem, 100%);
		margin-inline: auto;
		font-size: var(--text-md);
		line-height: var(--leading-relaxed);
		color: color-mix(in oklab, var(--color-fg-on-cool) 88%, transparent);
	}

	.about__col {
		& p {
			margin: 0 0 var(--space-6);
			text-wrap: pretty;
		}

		& p:last-child {
			margin-bottom: 0;
		}
	}

	.about__spot {
		color: var(--color-fg-on-cool);
		font-weight: var(--font-weight-semibold);
	}

	.about__link {
		color: var(--color-fg-on-cool);
		text-decoration-thickness: 1px;
		text-underline-offset: 0.14em;
		font-weight: var(--font-weight-medium);
		transition:
			color var(--duration-fast) var(--ease-out),
			text-decoration-thickness var(--duration-fast) var(--ease-out);

		&:hover {
			color: #fff;
			text-decoration-thickness: 2px;
		}

		&.about__link--email {
			word-break: break-word;
		}
	}

	.about__contact {
		padding-top: var(--space-2);
		font-size: var(--text-base);
		color: color-mix(in oklab, var(--color-fg-on-cool) 92%, transparent);
	}

	@media (width <= 52rem) {
		.about__grid {
			grid-template-columns: 1fr;
		}

		.about__masthead {
			padding-bottom: var(--space-12);
		}
	}
</style>
