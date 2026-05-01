export const PERSONAL = {
  name: 'Kevin Kane',
  title: 'Founder & Senior Software Engineer',
  location: 'Greater Los Angeles Area',
  phone: '703.389.3972',
  email: 'kevinthomaskane@gmail.com',
  website: 'https://www.10xdev.io',
  github: 'https://github.com/kevinthomaskane',
  summary:
    'Engineer with 8 years of industry experience and a track record of shipping production-grade full-stack products. As Founder of 10xDev.io, I design, build, and launch complete SaaS platforms, multi-tenant directory products, and autonomous agentic systems — from database architecture to deployment — integrating Claude and OpenAI throughout to maximize delivery speed and quality.',
};

export const SKILLS: Record<string, string[]> = {
  Frontend: [
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Vue',
    'Storybook',
    'SCSS',
    'HTML',
  ],
  'Backend / Databases': [
    'Node.js',
    'PostgreSQL',
    'Supabase',
    'Redis',
    'RESTful APIs',
    'GraphQL',
    'MongoDB',
    'Typesense',
  ],
  'APIs & Integrations': ['Stripe', 'Claude', 'OpenAI API', 'Mapbox', 'Resend'],
  'DevOps & Tooling': [
    'Git',
    'Docker',
    'Vercel',
    'Render',
    'Cloudflare',
    'pnpm workspaces',
    'Zod',
    'Playwright',
  ],
};

export interface Project {
  name: string;
  slug: string;
  url: string | null;
  date: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    name: 'White Crow Directories',
    slug: 'white-crow',
    url: 'https://goodfloridalawyers.com',
    tagline: 'One-click agentic directory site platform',
    date: 'April 2026',
    description:
      'A multi-tenant SaaS platform built for an SEO agency that provisions a fully configured, live business directory website — complete with real business data, search, maps, billing, and an ongoing agentic content engine — from a single button press. Turns a multi-week manual build into a one-click operation and keeps sites ranking autonomously.',
    tech: [
      'Next.js 16',
      'OpenAI API',
      'TypeScript',
      'Supabase',
      'Typesense',
      'Mapbox',
      'Stripe',
      'Cloudflare',
      'Google Places API',
      'pnpm monorepo',
    ],
    highlights: [
      'One-click site provisioning pipeline: Supabase site record, AI-generated categories, Google Places ingestion jobs, auto-generated branding, Supabase Management API auth config, and Cloudflare subdomain — all from a single server action',
      'Multi-tenant architecture on a single Next.js deployment: proxy middleware resolves hostname → SiteConfig, with per-tenant filtering via site_businesses / site_categories / site_cities join tables',
      'Agentic content engine: background worker polls a Postgres-backed job queue via a claim_next_job RPC with distributed locking and 5-minute stale recovery, powering six processors including a generate-articles SEO agent',
      'Admin dashboard with live job tracker, Typesense sync panel, on-demand biweekly business refresh, and Cloudflare CDN cache purges wired into every content mutation',
      'Stripe Checkout + customer portal for business claim/upgrade flows, with webhooks keeping Supabase state in lockstep',
      'Shared Zod schemas across web app and worker so job payloads never drift out of sync',
    ],
  },
  {
    name: 'BetBot',
    slug: 'betbot',
    date: 'March 2026',
    url: 'https://betbot.10xdev.io',
    tagline: 'Autonomous NBA research & pick generation platform',
    description:
      'An autonomous NBA research and pick generation platform powered by three Claude AI agents that wake up on a schedule, browse the web for real-time information, reason over what they find, and generate structured betting recommendations — running 24/7 in the cloud with zero human involvement after setup.',
    tech: [
      'Claude AI',
      'TypeScript',
      'PostgreSQL',
      'Playwright',
      'Brave Search API',
    ],
    highlights: [
      'Three-agent system: Research Agent (24h + 3h pre-game runs), Pick Agent (structured JSON picks with reasoning + downstream SMS/X posts), and Baseline Agent (seasonal team profiles)',
      'Agentic tool-use loop giving Claude web search, a Playwright-backed page fetcher for JS-rendered sites, and a database writer — the agent decides what to search, what to persist, and when to stop',
      'Two-layer persistent memory: season baselines + game-specific research, fed to the Pick Agent together to mirror how sharp bettors assemble analysis',
      'Autonomous scheduler running four crons: odds sync, research dispatch, pick generation, and post-game grading — with duplicate-run prevention via the agent_runs table',
      'Prompt injection defense: delimiter-tagged web content, regex sanitization, and system-prompt privilege separation',
      'Every pick stored with agent version, token usage, and cost for full transparency and quality tracking across prompt/model changes',
    ],
  },
  {
    name: 'Agentic Outreach System',
    slug: 'agentic-outreach-system',
    date: 'March 2026',
    url: null,
    tagline: 'Autonomous AI sales pipeline',
    description:
      'A fully autonomous outreach system powered by five AI agents that find prospects, research businesses, generate custom landing pages, and send personalized emails — running 24/7 on a single VPS with zero human involvement after setup.',
    tech: [
      'Claude AI',
      'Node.js',
      'SQLite',
      'Google Places API',
      'Hunter.io',
      'nginx',
      'Ansible',
      'PM2',
      'Resend',
    ],
    highlights: [
      'Five-stage pipeline (prospect → research → build → outreach → monitor) coordinated by a thin orchestrator that self-heals on failure and self-seeds when the queue runs dry',
      'Autonomous prospector uses Claude to pick categories/cities, queries Google Places, and scores each business for web presence quality',
      'Agentic research loop via Claude tool use: search + scrape tools autonomously build structured profiles, with Hunter.io cross-checks for email deliverability',
      'AI-generated HTML landing pages served instantly on per-business HTTPS subdomains via wildcard nginx + DNS + Certbot',
      'Entire stack codified in an Ansible playbook (Node, PM2, nginx, Certbot, app) with ansible-vault secrets and daily SQLite backups',
      'Guardrails: daily pipeline caps, complaint-rate circuit breaker, exponential backoff, and an inbox-monitor agent that matches replies via stored Message-IDs',
    ],
  },
  {
    name: 'Retailers of Art Glass & Supplies',
    date: 'February 2026',
    slug: 'rags',
    url: 'https://stainedglassretailers.com',
    tagline: 'Membership platform for a national non-profit',
    description:
      'A full-stack membership platform covering a public-facing site, member services portal, and admin dashboard for a stained glass retailers association with members across North America.',
    tech: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Supabase',
      'Stripe',
      'Mapbox',
      'Resend',
      'Upstash Redis',
    ],
    highlights: [
      'Stripe billing for annual dues + one-time event payments with full webhook lifecycle',
      'Mapbox store locator with automatic address geocoding on profile updates',
      'Next.js Server Actions with Zod validation — no traditional API routes',
      'Vercel Cron jobs for automated dues reminders, Upstash Redis rate limiting',
    ],
  },
  {
    name: 'StackTracer.io',
    slug: 'stacktracer',
    date: 'July 2025',
    url: 'https://stacktracer.io',
    tagline: 'SaaS tool for managing & visualizing tech stacks',
    description:
      'A developer-focused SaaS product for tracking tech stacks across projects and organizations. Features team collaboration, interactive diagrams, and a tiered subscription model.',
    tech: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Stripe',
      'OpenAI API',
      'React Flow',
      'Resend',
    ],
    highlights: [
      'Three-tier Stripe subscription model (Free/Pro/Enterprise) with 14-day trials',
      'Team orgs with role-based access via Supabase Row Level Security',
      'Multi-step email invitation flow using Resend',
      'OpenAI integration + React Flow for interactive tech stack diagrams',
    ],
  },
];

export interface Role {
  title: string;
  dates: string;
  bullets: string[];
}

export interface Job {
  company: string;
  location: string;
  roles: Role[];
}

export const EXPERIENCE: Job[] = [
  {
    company: '10xDev',
    location: 'Los Angeles, CA',
    roles: [
      {
        title: 'Founder',
        dates: 'July 2025 – Present',
        bullets: [
          'Launched 10 web apps, completed 12 client contracts, and generated over 30k in profit.',
          'Worked with a wide variety of businesses to deliver web and software projects, including full-stack systems that leverage AI and autonomous agents, membership platforms that optimize business processes, and fully custom online stores.',
          'Used Typescript, Next.js, Supabase, Typesense, Stripe, Cloudflare, and Render to build a multi-tenant SaaS platform for an SEO agency. Admins provide a domain name, vertical, and categories and the platform auto-populates a shared business database and provisions a live directory site. (e.g. goodfloridalawyers.com)',
          'Helped a non-profit optimize their membership processes by migrating their site to a Typescript/Next.js/Supabase/Vercel stack, complete with automated payment and membership emails, Stripe for membership dues payments, and an administrative dashboard for managing events. (stainedglassretailers.com)',
          'Built an autonomous AI system, powered by Claude, that uses AI agents to run web-based research, persist findings to Postgres, and generate predictions. The system runs on a VPS, uses Next.js for its web interface, manages users and authentication with Clerk, and integrates Stripe for payments. (betbot.10xdev.io)',
        ],
      },
    ],
  },
  {
    company: 'World of Good Brands',
    location: 'Remote',
    roles: [
      {
        title: 'Senior Software Engineer',
        dates: 'May 2023 – Feb 2025',
        bullets: [
          'Designed and developed a multi-site platform using Next.js and a headless WordPress CMS.',
          'Built robust, reusable frontend components with Next.js, TypeScript, and Tailwind CSS.',
          'Wrote GraphQL queries to retrieve dynamic content across multiple branded properties.',
          'Contributed to the successful launch of high-traffic sites including onlyinyourstate.com and wellandgood.com.',
        ],
      },
    ],
  },
  {
    company: 'Leaf Group',
    location: 'Santa Monica, CA / Remote',
    roles: [
      {
        title: 'Senior Software Engineer',
        dates: 'July 2022 – May 2023',
        bullets: [
          'Delivered features across frontend (Vue, SCSS), backend microservices (Python, Redis, Elasticsearch), and internal full-stack apps (Node.js).',
          'Mentored junior engineers and conducted code reviews to support onboarding and team growth.',
        ],
      },
      {
        title: 'Software Engineer',
        dates: 'Aug 2018 – July 2022',
        bullets: [
          'Maintained and improved a portfolio of 50+ content-rich websites on a Flask/Jinja/MongoDB stack.',
          'Enhanced performance using Lighthouse audits and frontend best practices.',
          'Independently redesigned and rebuilt several production websites using Jinja, Vue, Vanilla JS, and SCSS.',
        ],
      },
    ],
  },
];

export const EDUCATION = [
  {
    degree: 'Full-Stack Web Development Certificate',
    school: 'UCLA Extension',
    date: '2018',
  },
  {
    degree: 'Front-End Web Development Certificate',
    school: 'Beach Coders Academy',
    date: '2018',
  },
  {
    degree: 'B.S. Marketing Management',
    school: 'Virginia Tech',
    date: '2015',
  },
];

export const REFERRALS = [
  {
    name: 'Greg Wilken',
    email: 'greg@gwilken.com',
    phone: '(310) 963-9102',
    text: 'I strongly and enthusiastically can recommend Kevin for the position of Senior Software Engineer. I hired Kevin for the position of Software Engineer and was his direct supervisor for over 5 years. He is an exceptional developer: an excellent team player, hungry to improve his skills, and can appreciate how a larger strategic vision fits into the work of day-to-day development. During his tenure with Leaf Group and World of Good Brands, he was instrumental in developing an entirely new platform that powered the most critical assets of the company. Prior to that project, he excelled working on a legacy code base, where he was able to innovate within significant constraints. He was responsible for launching multiple new products and developing full stack applications. He was promoted and received multiple bonuses for performance. He is affable, easy to work with, takes constructive criticism to heart, and always is looking to better his knowledge. Hire him. Please reach out to me if you have any questions.',
  },
  {
    name: 'Andrew Alburn',
    title: 'Principal Product Manager @ World of Good Brands',
    text: "I'm happy to write this letter of recommendation for Kevin Kane. I had the pleasure of working with Kevin and can say without hesitation that he's one of the most capable and reliable web developers I've worked with. Kevin regularly took on some of the toughest challenges on our team—often the ones others weren't quite sure how to approach. I gave him those projects because I knew he could handle them, and he always delivered. He's a strong problem-solver who's not afraid to dig in, even when the path forward isn't immediately clear. Something else that really stands out about Kevin is how well he works with others. He's a great collaborator and often brought his leadership to the team. He has a knack for communicating technical concepts in a way that makes sense to non-technical folks, which makes him incredibly valuable in cross-functional settings. His work is consistently high-quality, and he's someone who helps move projects forward—offering clarity when things get murky and stepping up wherever he's needed. On top of all that, he's just a genuinely nice guy and a pleasure to have on the team. Any team would be lucky to have Kevin. I'd jump at the chance to work with him again.",
  },
];
