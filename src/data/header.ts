export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  hasDropdown: boolean;
  megaMenuComponent?: string;
}

export interface MegaMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  id: string;
  title?: string;
  subtitle?: string;
  items: MegaMenuItem[];
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#',
    hasDropdown: true,
    megaMenuComponent: 'HomeMegaMenu',
  },
  {
    id: 'pages',
    label: 'Solutions',
    href: '#',
    hasDropdown: true,
    megaMenuComponent: 'PageMegaMenu',
  },
  {
    id: 'about',
    label: 'About',
    href: '#',
    hasDropdown: true,
    megaMenuComponent: 'AboutMenu',
  },
  {
    id: 'services',
    label: 'Services',
    href: '#',
    hasDropdown: true,
    megaMenuComponent: 'ServicesMenu',
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '#',
    hasDropdown: true,
    megaMenuComponent: 'BlogMenu',
  },
  {
    id: 'contact',
    label: 'Contact Us',
    href: '/contact-us',
    hasDropdown: false,
  },
];

// About Menu Data
export const aboutMenuItems: MegaMenuItem[] = [
  { id: 'about-1', label: 'About 01', href: '/about-01' },
  { id: 'about-2', label: 'About 02', href: '/about-02' },
  { id: 'about-3', label: 'About 03', href: '/about-03' },
];

// Blog Menu Data
export const blogMenuItems: MegaMenuItem[] = [
  { id: 'blog-1', label: 'Blog 01', href: '/blog-01' },
  { id: 'blog-2', label: 'Blog 02', href: '/blog-02' },
  { id: 'blog-3', label: 'Blog 03', href: '/blog-03' },
  { id: 'blog-details', label: 'Blog Details', href: '/blog/5-strategies-for-effective-brand-storytelling' },
];

// Services Menu Data
export const servicesMenuItems: MegaMenuItem[] = [
  { id: 'services-1', label: 'Services Page 01', href: '/our-services-01' },
  { id: 'services-2', label: 'Services Page 02', href: '/our-services-02' },
  { id: 'services-3', label: 'Services Page 03', href: '/our-services-03' },
  { id: 'services-details', label: 'Services Details', href: '/our-services/cost-allocation-and-calculation' },
];

// Home Mega Menu Data (3 columns)
export const homeMegaMenuColumns: MegaMenuColumn[] = [
  {
    id: 'column-1',
    items: [
      { id: 'home-1', label: '01. Crypto Marketing', href: '/' },
      { id: 'home-2', label: '02. AI Software', href: '/homepage-02' },
      { id: 'home-3', label: '03. AI Chatbot', href: '/homepage-03' },
      { id: 'home-4', label: '04. Web Hosting', href: '/homepage-04' },
      { id: 'home-5', label: '05. Analytics & Reporting', href: '/homepage-05' },
      { id: 'home-6', label: '06. Financial Application', href: '/homepage-06' },
      { id: 'home-7', label: '07. Payment Solutions', href: '/homepage-07' },
      { id: 'home-8', label: '08. Online Banking', href: '/homepage-08' },
      { id: 'home-9', label: '09. Cloud Based Software', href: '/homepage-09' },
      { id: 'home-10', label: '10. Cyber Security', href: './homepage-10' },
      { id: 'home-11', label: '11. Email Marketing', href: '/homepage-11' },
      { id: 'home-12', label: '12. Lead Capture', href: '/homepage-12' },
    ],
  },
  {
    id: 'column-2',
    items: [
      { id: 'home-13', label: '13. Messaging Platform', href: '/homepage-13' },
      { id: 'home-14', label: '14. Mortgage Services', href: '/homepage-14' },
      { id: 'home-15', label: '15. Creative Portfolio', href: '/homepage-15' },
      { id: 'home-16', label: '16. App Builder', href: '/homepage-16' },
      { id: 'home-17', label: '17. App Development', href: '/homepage-17' },
      { id: 'home-18', label: '18. AI Agency', href: '/homepage-18' },
      { id: 'home-19', label: '19. Smart Solutions', href: '/homepage-19' },
      { id: 'home-20', label: '20. Risk Management Software', href: '/homepage-20' },
      { id: 'home-21', label: '21. Personal Finance', href: '/homepage-21' },
      { id: 'home-22', label: '22. Mobile Management Software', href: '/homepage-22' },
      { id: 'home-23', label: '23. Investment Management', href: '/homepage-23' },
    ],
  },
  {
    id: 'column-3',
    items: [
      { id: 'home-24', label: '24. Insurance Software', href: '/homepage-24' },
      { id: 'home-25', label: '25. Property Management', href: '/homepage-25' },
      { id: 'home-26', label: '26. Pos System', href: '/homepage-26' },
      { id: 'home-27', label: '27. Social Media Management', href: '/homepage-27' },
      { id: 'home-28', label: '28. Nuvexa CRM', href: '/homepage-28' },
      { id: 'home-29', label: '29. Wealth Management', href: '/homepage-29' },
      { id: 'home-30', label: '30. Security Software', href: '/homepage-30' },
      { id: 'home-31', label: '31. Time Tracking', href: '/homepage-31' },
      { id: 'home-32', label: '32. Data Visualization', href: '/homepage-32' },
      { id: 'home-33', label: '33. Digital Marketing Agency', href: '/homepage-33' },
      { id: 'home-34', label: '34. Forex Trading', href: '/homepage-34' },
      { id: 'home-35', label: '35. Decentralized Finance', href: '/homepage-35' },
    ],
  },
];

// Page Mega Menu Data (4 columns)
export const pageMegaMenuColumns: MegaMenuColumn[] = [
  {
    id: 'column-1',
    title: 'Ideation',
    subtitle: 'From concept to validation',
    items: [
      { id: 'idea-to-mvp', label: 'Idea to MVP Roadmap', href: '/solutions/idea-to-mvp-roadmap' },
      { id: 'landing-page-waitlist', label: 'Landing Page + Waitlist', href: '/solutions/landing-page-waitlist' },
      { id: 'tech-stack-advice', label: 'Tech Stack Advice', href: '/solutions/tech-stack-advice' },
      { id: 'market-validation', label: 'Market Validation Tools', href: '/solutions/market-validation-tools' },
    ],
  },
  {
    id: 'column-2',
    title: 'Realization',
    subtitle: 'Building your solution',
    items: [
      { id: 'no-code-mvp', label: 'No-Code MVP Development', href: '/solutions/no-code-mvp-development' },
      { id: 'website-app-dev', label: 'Website or App Development', href: '/solutions/website-or-app-development' },
      { id: 'crm-payment-integrations', label: 'CRM or Payment Integrations', href: '/solutions/crm-or-payment-integrations' },
      { id: 'analytics-setup', label: 'Analytics Setup', href: '/solutions/analytics-setup' },
    ],
  },
  {
    id: 'column-3',
    title: 'Acceleration',
    subtitle: 'Scaling and optimization',
    items: [
      { id: 'feature-development', label: 'Feature Development', href: '/solutions/feature-development' },
      { id: 'internal-tools', label: 'Internal Tools + Dashboards', href: '/solutions/internal-tools-dashboards' },
      { id: 'conversion-optimization', label: 'Conversion Optimization', href: '/solutions/conversion-optimization' },
      { id: 'product-ux-review', label: 'Product UX Review', href: '/solutions/product-ux-review' },
    ],
  },
  {
    id: 'column-4',
    title: 'Automation',
    subtitle: 'Streamlining operations',
    items: [
      { id: 'zapier-automation', label: 'Zapier & Workflow Automation', href: '/solutions/zapier-workflow-automation' },
      { id: 'ai-chatbots', label: 'AI Chatbots & Assistants', href: '/solutions/ai-chatbots-assistants' },
      { id: 'operations-dashboard', label: 'Operations Dashboard', href: '/solutions/operations-dashboard' },
      { id: 'process-documentation', label: 'Process Documentation', href: '/solutions/process-documentation' },
    ],
  },
];

export const headerConfig = {
  logo: {
    alt: 'NextSaaS',
    mainLogoPath: '@public/images/shared/main-logo.svg',
    logoPath: '@public/images/shared/logo.svg',
    logoDarkPath: '@public/images/shared/logo-dark.svg',
  },
  cta: {
    label: 'Get started',
    href: '/signup-01',
  },
};
