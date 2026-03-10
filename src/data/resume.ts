export const PERSONAL = {
  name: 'Kevin Kane',
  title: 'Founder & Senior Software Engineer',
  location: 'Greater Los Angeles Area',
  phone: '703.389.3972',
  email: 'kevinthomaskane@gmail.com',
  website: 'https://www.10xdev.io',
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
