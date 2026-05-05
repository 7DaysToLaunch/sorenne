/** Controlled vocabulary for filters; expand as needed */
export const PROJECT_TAGS = [
	'social',
	'film',
	'content',
	'ooh',
	'activations',
	'retail-design',
	'sports',
	'lifestyle',
	'nike',
	'fashion-beauty',
	'tech',
	'retail',
	'wellness',
	'telecom',
	'social-impact',
	'wifi-broadband',
	'ecommerce',
	'cpg',
	'fintech',
	'animation',
	'digital',
	'design',
	'photo-art-direction',
	'print',
	'apparel'
] as const;

export type ProjectTag = (typeof PROJECT_TAGS)[number];

export type ProjectImages = {
	/** Cards / masonry / work listing thumbnails. */
	portrait: string;
	/** Work detail hero (wide frame); may match portrait until a crop exists. */
	landscape: string;
};

/** Full-page case study theming (shell + hero); omit for default site chrome. */
export type ProjectPageTheme = {
	surface: string;
	foreground: string;
};

/** Fields for home + work listing cards (detail pages are bespoke routes). */
export type ProjectMeta = {
	displayIndex: string;
	slug: string;
	title: string;
	/** Case study hero headline; cards and listings use `title`. Falls back to `title` when omitted. */
	projectTitle?: string;
	description: string;
	/** Longer work-detail hero narrative; cards and listings still use `description`. */
	heroDescription?: string;
	images: ProjectImages;
	tags: ProjectTag[];
	href?: string;
	seo?: {
		title?: string;
		description?: string;
	};
	/** Home masonry grid only: tile spans two row tracks (tall / portrait hero). */
	homeGridPortrait?: boolean;
	/** When set, work detail hero prefers this landscape video (`images.landscape` as poster). */
	heroVideoSrc?: string;
	/**
	 * Vimeo player URL for the hero (`https://player.vimeo.com/video/...`).
	 * When set, shown in the hero instead of a still or `heroVideoSrc`.
	 */
	heroVimeoEmbed?: string;
	/** Applied site-wide on `/work/[slug]` via root layout when present. */
	theme?: ProjectPageTheme;
};

/**
 * Ordered portfolio registry. Unique `slug` per row when titles repeat.
 * Main grid order and copy from `the project timeline CSV` (sheet export).
 */
export const PROJECTS = [
	{
		displayIndex: '01',
		slug: 'poppi',
		title: 'poppi',
		projectTitle: 'MAKE IT POPPI',
		description: 'It\'s just a vibes thing. Super Bowl LX.',
		heroDescription: `While other good-for-you sodas talk about health benefits, poppi knows the real reason you drink soda: VIBES. So for Super Bowl LX we launched a new platform for the brand by turning the vibes Wayyyyy up. 

We took a physics lecture from zero to poppi with the ultimate vibe setter herself, Charli XCX. In the middle of promoting her new A24 film, Charli rips through the space vibe continuum with Rachel Sennott to throw an absurd, poppi-fueled rave.`,
		images: {
			portrait: '/work-images/poppi/hero-portrait.avif',
			landscape: '/work-images/poppi/hero.avif'
		},
		tags: ['film', 'social', 'content', 'cpg'],
		homeGridPortrait: true,
		theme: {
			surface: '#FFFFFF',
			foreground: '#000000'
		},
		seo: {
			title: 'MAKE IT POPPI — Sorenne',
			description: 'It\'s just a vibes thing. Super Bowl LX.'
		}
	},
	{
		displayIndex: '02',
		slug: 'lume',
		title: 'Lumē',
		projectTitle: 'ODOR FREE YOURSELF',
		description: 'A Social-First Launch for Odor Free Yourself, the new platform for a women\'s deodorant.',
		heroDescription: 'There are over 300,000 five star reviews singing the praises of Lume’s life-changing odor protection. So we took those real reviews and turned them into animated music videos in a social-first launch of a new platform. All based around the confidence you have when you smell great.',
		images: {
			portrait: '/work-images/lume/hero.avif',
			landscape: '/work-images/lume/hero.avif'
		},
		tags: ['film', 'social', 'animation', 'cpg'],
		theme: {
			surface: '#DDE1E4',
			foreground: '#FE5000'
		},
		seo: {
			title: 'ODOR FREE YOURSELF — Sorenne',
			description: 'A Social-First Launch for Odor Free Yourself, the new platform for a women\'s deodorant.'
		}
	},
	{
		displayIndex: '03',
		slug: 'thinx-social-films',
		title: 'Thinx',
		projectTitle: 'THINX 12 HR',
		description: 'A series of social films putting a new product to the test.',
		heroDescription: 'We needed to launch Thinx\'s innovative new 12-hour period underwear. A unique product with a unique story to tell. No pads. No leaks. Twelve hours to free bleed. So we partnered with comedians Natasha Leggero and X Mayo for a half-day road trip to show the product really put to the test. We dropped a short film plus entertaining clips across cobranded social channels. Who knew periods could be so bloody entertaining?',
		images: {
			portrait: '/work-images/thinx-social-films/hero.avif',
			landscape: '/work-images/thinx-social-films/hero.avif'
		},
		tags: ['film', 'wellness', 'content', 'cpg'],
		theme: {
			surface: '#E8D5DC',
			foreground: '#000000'
		},
		seo: {
			title: 'THINX 12 HR — Sorenne',
			description: 'A series of social films putting a new product to the test.'
		}
	},
	{
		displayIndex: '04',
		slug: 'thinx-ai',
		title: 'Thinx',
		projectTitle: 'GET BLOODY EDUCATED',
		description: 'A film that uses AI to expose stigmas and misinformation.',
		heroDescription: `Thinx asked us to challenge period stigma. What we found was worse: censorship.

Menstruation queries are banned across the internet—from AI platforms to company search engines. Images flagged. Prompts blocked. Information disappeared.

We made a film to expose the problem. We had it drive to GetBloodyEducated.com, a resource hub for real menstruation information. (The client rebranded it to align with their Bodywise platform, but our original URL said everything.)`,
		images: {
			portrait: '/work-images/thinx-ai/hero.avif',
			landscape: '/work-images/thinx-ai/hero.avif'
		},
		tags: ['social', 'film', 'wellness'],
		theme: {
			surface: '#663B4C',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '05',
		slug: 'circle-ipo',
		title: 'Circle',
		projectTitle: 'THAT\'S MONEY BUILT DIFFERENT',
		description: 'A multi-channel city takeover for the brand debut on the NYSE.',
		heroDescription: `Circle is a global fintech company focused on building a new internet financial system that enables seamless global money movement through digital currencies like USDC. 

Tasked with creating a splash for the brand IPO, we took over NYC with a campaign called “That’s Money Built Different." From a digital OOH takeover, to a fleet of vintage taxis, to a 16’ acrylic bull sculpture, the debut told the story of who Circle is and what sets the brand apart. 

The “Transparent Bull” attracted such large crowds, the NYSE President arranged for it to be permanently installed in the institution’s lobby to greet visitors.`,
		images: {
			portrait: '/work-images/circle-ipo/hero.avif',
			landscape: '/work-images/circle-ipo/hero.avif'
		},
		tags: ['tech', 'ooh', 'activations', 'design'],
		theme: {
			surface: '#F0F0F0',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '06',
		slug: 'att-retail-film-iphone-16-pro',
		title: 'AT&T',
		projectTitle: 'ATT X APPLE',
		description: 'A retail film for Apple iphone pro.',
		heroDescription: 'To promote the iphone 16 pro, we created a film for AT&T that emphasized the immense storage capacity of the new model with a story of an unexpected and talented wedding photographer.',
		images: {
			portrait: '/work-images/att-retail-film-iphone-16-pro/hero-landscape.avif',
			landscape: '/work-images/att-retail-film-iphone-16-pro/hero-landscape.avif'
		},
		tags: ['film', 'tech', 'retail'],
		homeGridPortrait: false,
		theme: {
			surface: '#DBDBDB',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '07',
		slug: 'lowes-always-home',
		title: 'Lowe\'s',
		projectTitle: 'HOME TO ANY POSSIBILITY',
		description: 'Home to Any Possibility. A new campaign and brand remodel.',
		heroDescription: `When Lowe's hired a new CMO at the top of 2020, she handed us a hard hat and called for a brand renovation.

Could we bring style and sophistication… to the world of tools, hardware, and appliances?

Our insight: appeal to a wider audience beyond the typical DIYer. Inspire renters, first-time home buyers and the design-savvy to jump in. From here, the team I led crafted an entirely new look, tone, sound, and tagline. With an elevated style, friendlier voice, and a fully rearchitected creative platform, we helped democratize home improvement, tell the world Lowe's is Home to Any Possibility and increase sales by 30%.`,
		heroVimeoEmbed:
			'https://player.vimeo.com/video/717600801?h=89b921df60&title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/lowes-always-home/hero.avif',
			landscape: '/work-images/lowes-always-home/hero.avif'
		},
		tags: ['retail', 'film'],
		theme: {
			surface: '#FFFFFF',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '08',
		slug: 'lowes-holiday-togetherness',
		title: 'Lowe\'s',
		projectTitle: 'MAKE MORE HOLIDAY',
		description: 'A holiday film about togetherness.',
		heroDescription: 'The pandemic kept us apart…for a very long time. Would Holiday ‘21 be the moment to finally reunite us? Unprompted, we presented an emotional brand spot where even the inflatables share the same sentiment. Client let us produce it. Lowe’s sold out of all their holiday inventory long before Dec 24th.',
		heroVimeoEmbed:
			'https://player.vimeo.com/video/717602784?h=461056e04c&title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/lowes-holiday-togetherness/hero.avif',
			landscape: '/work-images/lowes-holiday-togetherness/hero.avif'
		},
		tags: ['film', 'retail'],
		theme: {
			surface: '#9B1A32',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '09',
		slug: 'lowes-open-builder',
		title: 'Lowe\'s',
		projectTitle: 'LOWE\'S OPEN BUILDER',
		description: 'Providing building materials to builders of the Metaverse.',
		heroDescription: `Our clients asked us: How can we get in on the ground floor of the Metaverse? Could we do it in six weeks to maximize PR opportunities at Cannes? 

To accelerate our timeline, we started with something that Lowe's already owned, an extensive 3D product catalog 
of over 5500 renderings. What if Lowe's offered these building materials to Metaverse virtual creators? 

My team quickly built a website called Open Builder, providing free downloads of these 3D assets. Then we created wearable NFTs, granting tokenized access to curated packs of Open Builder objects. And voila, Lowe's was the very first home improvement store in the Metaverse, the press took notice and the CMO worked 
the PR circuit at Cannes for additional earned media.`,
		heroVimeoEmbed:
			'https://player.vimeo.com/video/791290305?h=ee20aa8b58&title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/lowes-open-builder/hero.avif',
			landscape: '/work-images/lowes-open-builder/hero.avif'
		},
		tags: ['social', 'activations', 'digital'],
		theme: {
			surface: '#F0F0F0',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '10',
		slug: 'lowes-military-families',
		title: 'Lowe\'s',
		projectTitle: 'ALWAYS HOME',
		description: 'A film highlighting an initiative for military families.',
		heroDescription: `Lowe’s asked us to boost a key initiative: drive program sign-ups for military families.

We dove in with a research-heavy approach, focused on interviews with “military brats,” and hit upon a key insight: these people moved so frequently that they never put roots down or felt like they belonged anywhere. We crafted a film and digital campaign that positioned Lowe’s as a solution to help military families feel “at home,” and get connected, quickly.  

The work not only generated a significant increase in awareness and a spike in sign-ups, it also, apparently, really got under the skin of a certain unnamed competitor.`,
		heroVimeoEmbed:
			'https://player.vimeo.com/video/790967725?h=9d51f623a6&title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/lowes-military-families/hero.avif',
			landscape: '/work-images/lowes-military-families/hero.avif'
		},
		tags: ['film', 'digital', 'retail'],
		theme: {
			surface: '#90A0A0',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '11',
		slug: 'lowes-fathers-day',
		title: 'Lowe\'s',
		projectTitle: 'LOWE\'S FATHER\'S DAY',
		description: 'Lowe’s Dad becomes a kid in a candy store on Father’s Day.',
		heroDescription: `Inspired by the magical world of Willy Wonka, Dad becomes a kid in a candy store when he goes to Lowe’s on Father’s Day. (Many a dad’s dream, surprisingly or not.) 

I pushed hard to license ‘The Candy Man’ and then had it covered by Louise Post of the band Veruca Salt for a fresh take. This second layer Easter egg makes me 
happy and gives dads one more thing to smile about, which they genuinely deserve on Father’s Day.`,
		heroVimeoEmbed:
			'https://player.vimeo.com/video/791300849?h=c29efd7d0d&title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/lowes-fathers-day/hero.avif',
			landscape: '/work-images/lowes-fathers-day/hero.avif'
		},
		tags: ['film', 'retail'],
		theme: {
			surface: '#DDE1E4',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '12',
		slug: 'quickbooks-happy-business',
		title: 'Quickbooks',
		projectTitle: 'HAPPIER BUSINESS',
		description: 'A 360 campaign that turns grumpy business owners into happy ones.',
		heroDescription: `One of the business challenges Quickbooks faced was the conversion of small businesses from using spreadsheets to using their software. 

To show the dramatic potential of Quickbooks and inspire change, we transformed iconic, notoriously grumpy, television characters who had small businesses. FY20 global launch. Note: one of our original spots featured the Soup Nazi from Seinfeld, but the client, wanting to play it safe, pulled the plug. No soup for you!

The spots were part of a $100m integrated campaign spanning channels from social and digital to broadcast and OLVs. We even created a line of Dojo merch.`,
		heroVimeoEmbed:
			'https://player.vimeo.com/video/410353018?title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/quickbooks-happy-business/hero.avif',
			landscape: '/work-images/quickbooks-happy-business/hero.avif'
		},
		tags: ['film', 'social', 'digital', 'tech'],
		theme: {
			surface: '#FFFFFF',
			foreground: '#000000'
		},
		seo: {
			title: 'HAPPIER BUSINESS — Sorenne',
			description: 'A 360 campaign that turns grumpy business owners into happy ones.'
		}
	},
	{
		displayIndex: '13',
		slug: 'quickbooks-social-design',
		title: 'Quickbooks',
		projectTitle: 'QB SOCIAL DESIGN',
		description: 'A social design system.',
		heroDescription: 'QuickBooks puts small business owners at the center of everything they do. So we created a friendly and flexible visual language that put people at the forefront of QuickBooks social communication. It was key to bring an optimistic and conversational tone to the feed. One that would give the sense that QuickBooks was speaking to their followers in a person-to-person kind of way, and not in a brand-to-person way.',
		images: {
			portrait: '/work-images/quickbooks-social-design/hero.avif',
			landscape: '/work-images/quickbooks-social-design/hero.avif'
		},
		tags: ['social', 'tech', 'design'],
		theme: {
			surface: '#FFFFFF',
			foreground: '#000000'
		},
		seo: {
			title: 'QB SOCIAL DESIGN — Sorenne',
			description: 'A social design system.'
		}
	},
	{
		displayIndex: '14',
		slug: 'honest-beauty-launch',
		title: 'Honest Beauty',
		projectTitle: 'LET\'S BE HONEST',
		description: 'Launch film for Jessica’s Alba’s beauty brand.',
		heroDescription: 'Jessica Alba was launching a new beauty brand based on the same concept as her Honest Baby products—just clean, honest ingredients with nothing bad in there to worry about. To support the launch, I worked directly with Jessica to make a web film that showcased the worries women have going on inside their heads.',
		heroVimeoEmbed:
			'https://player.vimeo.com/video/166888204?title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/honest-beauty-launch/hero.avif',
			landscape: '/work-images/honest-beauty-launch/hero.avif'
		},
		tags: ['film', 'fashion-beauty'],
		theme: {
			surface: '#F3C3C2',
			foreground: '#000000'
		},
		seo: {
			title: 'LET\'S BE HONEST — Sorenne',
			description: 'Launch film for Jessica’s Alba’s beauty brand.'
		}
	},
	{
		displayIndex: '15',
		slug: 'von-drenik',
		title: 'Von Drenik',
		description: 'Leather goods & accessories brand designed and created by moi.',
		images: {
			portrait: '/work-images/von-drenik/hero.avif',
			landscape: '/work-images/von-drenik/hero.avif'
		},
		tags: ['design', 'fashion-beauty']
	},
	{
		displayIndex: '16',
		slug: 'ion360',
		title: 'Ion360',
		projectTitle: 'LIVE IN THE WOW',
		description: 'Launch of a 360 camera for your smart phone.',
		heroDescription: 'A 360-degree camera for your smartphone wanted to make a 360-degree launch campaign. Working direct-to-client, as a freelance agency of one, I put together an all-star team of partners, collaborated, pulled some favors and oversaw the creation for everything from soup to nuts. Branding, packaging, OLVs, and a big broadcast moment on the Billboard music awards. And I did it all in just a couple of months.',
		heroVimeoEmbed: 'https://player.vimeo.com/video/281106238?title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/ion360/hero.avif',
			landscape: '/work-images/ion360/hero.avif'
		},
		tags: ['film', 'tech', 'social'],
		theme: {
			surface: '#FFE397',
			foreground: '#000000'
		},
		seo: {
			title: 'LIVE IN THE WOW — Sorenne',
			description: 'Launch of a 360 camera for your smart phone.'
		}
	},
	{
		displayIndex: '17',
		slug: 'asics-i-move-me',
		title: 'Asics',
		projectTitle: 'I MOVE ME',
		description: 'A running campaign to reach beyond runners.',
		heroDescription: 'Asics launched #IMoveMe to expand beyond its core running audience, with the philosophy that moving your body moves your mind—anchored by the "Wake Up" spot and supported across OOH, print, social film, and apparel.',
		images: {
			portrait: '/work-images/asics-i-move-me/hero.avif',
			landscape: '/work-images/asics-i-move-me/hero.avif'
		},
		tags: ['film', 'sports'],
		theme: {
			surface: '#160D4D',
			foreground: '#FFFFFF'
		}
	},
	{
		displayIndex: '18',
		slug: 'nike-maria-sharapova',
		title: 'Nike',
		projectTitle: 'PRETTY',
		description: 'Just Do It spot for Maria Sharapova.',
		heroDescription: `The brief: create a brand spot for Maria Sharapova. Make it as disruptive as the ones made for men. We created Pretty to dispel, and make fun of, the silly myth that Grand Slam winner and Olympic Silver medalist, Maria Sharapova is just a pretty face. 

And we won gold of our own: Cannes Gold Lion`,
		heroVimeoEmbed:
			'https://player.vimeo.com/video/282146410?title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/nike-maria-sharapova/hero.avif',
			landscape: '/work-images/nike-maria-sharapova/hero.avif'
		},
		tags: ['film', 'sports'],
		theme: {
			surface: '#DBDBDB',
			foreground: '#2600FF'
		},
		seo: {
			title: 'PRETTY — Sorenne',
			description: 'Just Do It spot for Maria Sharapova.'
		}
	},
	{
		displayIndex: '19',
		slug: 'google-fiber-launch',
		title: 'Google',
		projectTitle: 'GOOGLE FIBER',
		description: 'A localized city + community launch for Fiber.',
		heroDescription: `Google Fiber was rolling out to cities nationwide, and Austin was second in line. While competitors were already in the market, Google wanted to cut through the noise—they asked us to prove why speed actually mattered. Not just another broadband pitch. We were tasked with showing the real human impact: how fiber could transform lives and strengthen communities.

Directed by Morgan Neville.

Bonus: that grandma in the ad? My mother-in-law, Bonnie. And those grand kids are actually my niece and nephew, Mia and Ulysses. (Pretty cute, if you ask me.)`,
		images: {
			portrait: '/work-images/google-fiber-launch/hero.avif',
			landscape: '/work-images/google-fiber-launch/hero.avif'
		},
		tags: ['digital', 'film', 'ooh', 'photo-art-direction'],
		theme: {
			surface: '#FFFFFF',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '20',
		slug: 'nike-make-yourself',
		title: 'Nike',
		projectTitle: 'MAKE YOURSELF',
		description: 'Women’s Training Seasonal Story / Make Yourself',
		heroDescription: `How does Nike Women’s Training compete with the Lululemon yoga pant that everyone and their mom has to have?

Blur the line between “training wear” and fashion flare. We pushed towards a streetwear edge. We showed women they could wear our training products out of the gym, and even into a club.

For our seasonal shoot, we mixed Training apparel with Sportswear and Running styles, and created gym sets with deliberate wear and grit. The resulting images turned out so well…we were asked to leverage them for an ad campaign.`,
		images: {
			portrait: '/work-images/nike-make-yourself/hero.avif',
			landscape: '/work-images/nike-make-yourself/hero.avif'
		},
		tags: ['sports', 'photo-art-direction'],
		homeGridPortrait: true,
		theme: {
			surface: '#DBDBDB',
			foreground: '#000000'
		},
		seo: {
			title: 'MAKE YOURSELF — Sorenne',
			description: 'Women’s Training Seasonal Story / Make Yourself'
		}
	},
	{
		displayIndex: '21',
		slug: 'nike-serena-williams-shoe',
		title: 'Nike',
		projectTitle: '128 / NYC',
		description: 'Celebrating Serena Williams with a special shoe and retail pop-up.',
		heroDescription: 'How does Women’s Training support the G.O.A.T. during the US Open in NYC? Make her a kick-ass, limited-edition Air Max Trainer and an eye-catching apparel collection to match; immortalize this iconic star in a larger-than-life portrait; and pull it all together in a dramatic, Nike pop-up “showcase.”',
		images: {
			portrait: '/work-images/nike-serena-williams-shoe/hero.avif',
			landscape: '/work-images/nike-serena-williams-shoe/hero.avif'
		},
		tags: ['sports', 'design'],
		theme: {
			surface: '#EEEEEE',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '22',
		slug: 'nike-womens-training-pro',
		title: 'Nike',
		projectTitle: 'NIKE PRO',
		description: 'Women\'s Training Pro',
		heroDescription: `Nike Pro - technical, training apparel designed for function over fashion. Problem: not popular with women beyond competitive athletes. But what if we changed that? Focus on the beauty of the female form, instead of technical details.

Sales went to new levels.`,
		images: {
			portrait: '/work-images/nike-womens-training-pro/hero.avif',
			landscape: '/work-images/nike-womens-training-pro/hero.avif'
		},
		tags: ['design', 'sports', 'photo-art-direction'],
		theme: {
			surface: '#DBDBDB',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '23',
		slug: 'nike-rock-victorious',
		title: 'Nike',
		projectTitle: 'ROCK VICTORIOUS',
		description: 'Rock Victorious campaign print and retail',
		heroDescription: 'A premium, diamond-crusted, global campaign, celebrating our female athletes and promoting the all-so-awesome Diamond FLX Sister One Trainer. Pronouns: she/her',
		images: {
			portrait: '/work-images/nike-rock-victorious/hero.avif',
			landscape: '/work-images/nike-rock-victorious/hero.avif'
		},
		tags: ['design', 'sports', 'photo-art-direction'],
		theme: {
			surface: '#DBDBDB',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '24',
		slug: 'nike-hoops',
		title: 'Nike',
		projectTitle: 'NIKE HOOPS',
		description: 'Hoops OOH & poster campaign',
		heroDescription: `The ask: create posters so iconic that every teenage hoops fan will hang them on their bedroom walls. 

This campaign was created when LeBron had just signed his first, $90M Nike contract. Creating the vision of “King James” for a 19-year-old LeBron was incredibly bold, like placing a bet on the type of player he’d become. And years later…he’s now come full circle, taking the record for the NBA’s all-time top scorer. I’m still proud of this work and it goes without saying that it has stood the test of time.`,
		images: {
			portrait: '/work-images/nike-hoops/hero.avif',
			landscape: '/work-images/nike-hoops/hero.avif'
		},
		tags: ['ooh', 'photo-art-direction', 'sports'],
		theme: {
			surface: '#EEEEEE',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '25',
		slug: 'nike-shox-bella',
		title: 'Nike',
		projectTitle: 'MARRY ME',
		description: 'Global film for the Nike running shoe Shox Bella.',
		heroDescription: `How do you market a new running shoe geared towards a global female audience? Create a charming, fairytale-inspired story of women empowerment (before that was really a thing)… in Italy… with subtitles.

Barbara Lippert of Adweek called the spot, “the most delightful and high-spirited running commercial ever created for women.”`,
		heroVimeoEmbed: 'https://player.vimeo.com/video/15697795?title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/nike-shox-bella/hero.avif',
			landscape: '/work-images/nike-shox-bella/hero.avif'
		},
		tags: ['film', 'sports'],
		theme: {
			surface: '#EEEEEE',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '26',
		slug: 'nike-id',
		title: 'Nike',
		projectTitle: 'NIKE ID',
		description: 'A campaign to launch the custom design offering, Nike ID',
		heroDescription: `Announce, launch, build buzz, and drive traffic to Nike ID (now called Nike By You), an all-new dotcom service where customers can design their kicks to be more “uniquely theirs” with color, pattern, materials, and copy.

We were determined to create a campaign as eclectic as our audience. Make it go beyond sport. Make it bigger. Make it appeal to more of a streetwear culture. Do it in a graphic way. And, of course, make it memorable.

Was it successful? Billions of dollars of sales later, they’ve renamed it, but the experience remains the same.`,
		images: {
			portrait: '/work-images/nike-id/hero.avif',
			landscape: '/work-images/nike-id/hero.avif'
		},
		tags: ['ooh', 'sports'],
		theme: {
			surface: '#FFFFFF',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '27',
		slug: 'kmart-money-cant-buy-style',
		title: 'Money Can\'t Buy Style / Kmart Fashion',
		projectTitle: 'MONEY CAN\'T BUY STYLE',
		description: 'Street cast Influencer campaign.',
		heroDescription: 'In the “pre-influencer” era, we took a street-casting approach to find our own “influencers.” Meet our “Stylepreneurs” - handpicked individuals who don’t need a designer name or an expensive price tag to tell the world they have style. We then designed an integrated social + live remix contest in NY where our Stylepreneurs had a chance to show off their best “looks” in a series of challenges, using specified Kmart pieces. And we enlisted one of the co-host’s of the Fashion Police to serve as our Shop Your Way host.',
		images: {
			portrait: '/work-images/kmart-money-cant-buy-style/hero.avif',
			landscape: '/work-images/kmart-money-cant-buy-style/hero.avif'
		},
		tags: ['social', 'photo-art-direction', 'fashion-beauty'],
		theme: {
			surface: '#FFFFFF',
			foreground: '#000000'
		},
		seo: {
			title: 'MONEY CAN\'T BUY STYLE — Sorenne',
			description: 'Street cast Influencer campaign.'
		}
	},
	{
		displayIndex: '28',
		slug: 'kmart-sofia-vergara-fashion',
		title: 'Sofia Vergara / Kmart Fashion',
		projectTitle: 'SOFIA VERGARA',
		description: 'Inspiring women to proudly Work What You Got!',
		heroDescription: 'Before so many brands were spreading the gospel of body positivity, Sofia Vergara launched an affordable apparel line aimed to celebrate every woman exactly as she is! Sofia is never afraid to speak her mind, or show off her assets. In this Kmart Fashion campaign, we championed every type of woman with a call to “Work What They’ve Got.”',
		images: {
			portrait: '/work-images/kmart-sofia-vergara-fashion/hero.avif',
			landscape: '/work-images/kmart-sofia-vergara-fashion/hero.avif'
		},
		tags: ['film', 'fashion-beauty', 'print'],
		theme: {
			surface: '#FFFFFF',
			foreground: '#000000'
		},
		seo: {
			title: 'SOFIA VERGARA — Sorenne',
			description: 'Inspiring women to proudly Work What You Got!'
		}
	},
	{
		displayIndex: '29',
		slug: 'nike-olympic-design',
		title: 'Nike',
		projectTitle: 'OLYMPIC DESIGN',
		description: 'Olympic Design experience',
		heroDescription: `What started out as a request for an inspo "deck” blossomed into a 550+ page, labor-of-love, bound volume that encompasses the Olympic experience from the resurrection in Athens in 1896 to Beijing 2008, all through the perspective of design.

We made it not only to celebrate the performances, people, places, and politics, but as part of the design process…to inspire and inform how the designer’s art both promoted the games and fueled the performances themselves, in order to help inform the games to come.

We printed a limited edition of the book and handed them out to the Design Lead of each group designing for the London games.

To this day, it still lives on my coffee table.`,
		images: {
			portrait: '/work-images/nike-olympic-design/hero.avif',
			landscape: '/work-images/nike-olympic-design/hero.avif'
		},
		tags: ['sports', 'design'],
		theme: {
			surface: '#FFFFFF',
			foreground: '#000000'
		},
		seo: {
			title: 'OLYMPIC DESIGN — Sorenne',
			description: 'Olympic Design experience'
		}
	},
	{
		displayIndex: '30',
		slug: 'hp-hands-campaign',
		title: 'HP',
		projectTitle: 'HANDS',
		description: 'Hands campaign for the personal computer',
		heroDescription: `As part of the personal computer Hands campaign, we featured Serena Williams and her dynamic personality. We brought a fresh approach to this one, with each twist and turn of the spot, a new visual style is introduced to reveal another facet of Serena. 

For this campaign, we also produced a dedicated website featuring extensive interviews, content, behind the scenes footage, and an animated PSA short.`,
		heroVimeoEmbed:
			'https://player.vimeo.com/video/282244482?title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/hp-hands-campaign/hero.avif',
			landscape: '/work-images/hp-hands-campaign/hero.avif'
		},
		tags: ['film', 'digital', 'social', 'tech'],
		theme: {
			surface: '#FFFFFF',
			foreground: '#000000'
		},
		seo: {
			title: 'HANDS — Sorenne',
			description: 'Hands campaign for the personal computer'
		}
	},
	{
		displayIndex: '31',
		slug: 'nike-nhl-lockout',
		title: 'Nike',
		projectTitle: 'MELT',
		description: 'Melt',
		heroDescription: 'When the NHL was in the midst of a labor lockout, Nike tasked us (practically begged us) to create a spot that would bring some focus to the problem and get the teams back on the ice. Our response was this simple, artful film. The lacing up of skates soon followed…and things were once again right in the hockey world.',
		heroVimeoEmbed: 'https://player.vimeo.com/video/14706191?title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/nike-nhl-lockout/hero.avif',
			landscape: '/work-images/nike-nhl-lockout/hero.avif'
		},
		tags: ['sports', 'film'],
		theme: {
			surface: '#FFFFFF',
			foreground: '#000000'
		}
	},
	{
		displayIndex: '32',
		slug: 'comcast-slowskys',
		title: 'Comcast',
		projectTitle: 'THE SLOWSYS',
		description: 'The Slowskys',
		heroDescription: 'People wanted more of everyone’s favorite turtle couple, Bill and Karolyn Slowsky, so we gave them more…spots, website, webfilms, belated e-cards and screensavers.',
		heroVimeoEmbed: 'https://player.vimeo.com/video/14231138?title=0&byline=0&portrait=0',
		images: {
			portrait: '/work-images/comcast-slowskys/hero.avif',
			landscape: '/work-images/comcast-slowskys/hero.avif'
		},
		tags: ['film', 'digital'],
		theme: {
			surface: '#FFFFFF',
			foreground: '#000000'
		},
		seo: {
			title: 'THE SLOWSYS — Sorenne',
			description: 'The Slowskys'
		}
	}
] as const satisfies readonly ProjectMeta[];

export type ProjectSlug = (typeof PROJECTS)[number]['slug'];

export function getProjectHref(project: ProjectMeta): string {
	return project.href ?? `/work/${project.slug}`;
}

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
	return PROJECTS.find((p) => p.slug === slug);
}

/** Slug segment for `/work/[slug]` paths (not `/work` index). */
export function getWorkDetailSlug(pathname: string): string | undefined {
	if (pathname === '/work' || !pathname.startsWith('/work/')) return undefined;
	const rest = pathname.slice('/work/'.length).replace(/\/+$/, '');
	const slug = rest.split('/')[0];
	return slug || undefined;
}

/** Curated lead order for the home masonry grid; remaining projects follow in registry order. */
const HOME_MASONRY_LEAD_SLUGS = [
	'poppi',
	'lume',
	'thinx-social-films',
	'thinx-ai',
	'att-retail-film-iphone-16-pro'
] as const;

export function getHomeMasonryProjects(): ProjectMeta[] {
	const lead = HOME_MASONRY_LEAD_SLUGS.map((slug) => getProjectBySlug(slug)).filter(
		(p): p is ProjectMeta => p !== undefined
	);
	const leadSet = new Set<string>(HOME_MASONRY_LEAD_SLUGS);
	const rest = PROJECTS.filter((p) => !leadSet.has(p.slug));
	return [...lead, ...rest];
}

export function filterProjectsByTags(
	projects: readonly ProjectMeta[],
	selectedTags: ReadonlySet<ProjectTag>
): ProjectMeta[] {
	if (selectedTags.size === 0) return [...projects];
	return projects.filter((p) => p.tags.some((t) => selectedTags.has(t)));
}

const TAG_LABEL_OVERRIDES: Partial<Record<ProjectTag, string>> = {
	cpg: 'CPG',
	ooh: 'OOH',
	'retail-design': 'Retail / Design',
	'fashion-beauty': 'Fashion / Beauty',
	'social-impact': 'Social / Impact',
	'wifi-broadband': 'WiFi / Broadband'
};

export function tagLabel(tag: ProjectTag): string {
	const override = TAG_LABEL_OVERRIDES[tag];
	if (override) return override;
	return tag
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' / ');
}
