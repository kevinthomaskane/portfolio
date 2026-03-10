export const PERSONAL = {
  name: 'Kevin Kane',
  title: 'Founder & Senior Software Engineer',
  location: 'Greater Los Angeles Area',
  phone: '703.389.3972',
  email: 'kevinthomaskane@gmail.com',
  website: 'https://www.10xdev.io',
  github: 'https://github.com/kevinthomaskane',
  summary:
    'Engineer with 8 years of industry experience and a track record of shipping production-grade full-stack products. As Founder of 10xDev.io, I design, build, and launch complete SaaS applications and client platforms — from database architecture to deployment — integrating AI tooling throughout the process to maximize delivery speed and quality.',
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
  'APIs & Integrations': ['Stripe', 'OpenAI API', 'Mapbox', 'Resend'],
  'DevOps & Tooling': [
    'Git',
    'Docker',
    'Vercel',
    'Render',
    'Cloudflare',
    'pnpm workspaces',
    'Zod',
    'Playwright',
    'Cucumber',
  ],
};

export interface Project {
  name: string;
  slug: string;
  url: string | null;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    name: 'White Crow Directory Platform',
    slug: 'white-crow',
    url: null,
    tagline: 'Multi-tenant business directory SaaS',
    description:
      'A platform that aggregates business data from Google Places API and powers multiple niche directory websites from a single codebase. Built as a pnpm monorepo with two independently deployable services and a shared package.',
    tech: [
      'Next.js 16',
      'TypeScript',
      'Supabase',
      'Typesense',
      'Mapbox',
      'Stripe',
      'Cloudflare',
      'pnpm monorepo',
    ],
    highlights: [
      'Monorepo architecture with Next.js frontend + TypeScript background worker + shared package',
      'Distributed job queue for Google Places API ingestion via custom Supabase RPC',
      'Typesense full-text search, Mapbox interactive maps, Stripe subscriptions',
      'Multi-tenant: single codebase serves multiple directory verticals',
    ],
  },
  {
    name: 'Retailers of Art Glass & Supplies',
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
          'Designed, architected, and shipped multiple production full-stack applications end-to-end, owning the full lifecycle from database schema design through CI/CD and deployment on Vercel and Render',
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
          'Designed and developed a multi-site platform using Next.js and a headless WordPress CMS',
          'Built robust, reusable frontend components with Next.js, TypeScript, and Tailwind CSS',
          'Wrote GraphQL queries to retrieve dynamic content across multiple branded properties',
          'Contributed to the successful launch of high-traffic sites including onlyinyourstate.com and wellandgood.com',
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
          'Delivered features across frontend (Vue, SCSS), backend microservices (Python, Redis, Elasticsearch), and internal full-stack apps (Node.js)',
          'Mentored junior engineers and conducted code reviews to support onboarding and team growth',
        ],
      },
      {
        title: 'Software Engineer',
        dates: 'Aug 2018 – July 2022',
        bullets: [
          'Maintained and improved a portfolio of 50+ content-rich websites on a Flask/Jinja/MongoDB stack',
          'Enhanced performance using Lighthouse audits and frontend best practices',
          'Independently redesigned and rebuilt several production websites using Jinja, Vue, Vanilla JS, and SCSS',
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
