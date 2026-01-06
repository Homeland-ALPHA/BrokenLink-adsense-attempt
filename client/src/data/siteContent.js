/* File: client/src/data/siteContent.js - Centralized marketing content for BrokenLink AI */
export const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Resources', path: '/resources' },
  { label: 'Support', path: '/support' },
  { label: 'Policies', path: '/policies' },
];

export const featureHighlights = [
  {
    title: 'Deep link coverage',
    description:
      'Crawl up to one hundred internal pages per scan, with smart throttling that respects robots.txt and keeps your SEO footprint clean.',
  },
  {
    title: 'Rich media validation',
    description:
      'Monitor images, video streams, favicons, and downloadable assets. BrokenLink AI flags missing files and content-type mismatches in real time.',
  },
  {
    title: 'Accessibility friendly',
    description:
      'Surface missing alt text, empty anchor tags, and ARIA role gaps so you can uplift accessibility scores while fixing dead links.',
  },
  {
    title: 'Shareable intelligence',
    description:
      'Export branded PDF or CSV reports for clients, including prioritized fixes, supporting evidence, and change history.',
  },
];

export const workflowSteps = [
  {
    title: 'Enter a URL',
    copy:
      'Provide the page where your audit should begin. We automatically scope the crawl to the same domain unless you enable external exploration.',
  },
  {
    title: 'Let the crawler work',
    copy:
      'BrokenLink AI fans out requests and follows internal links while respecting timeouts and retry rules, mirroring how real users experience the site.',
  },
  {
    title: 'Review prioritized fixes',
    copy:
      'Failed requests, redirect loops, and content-type mismatches are grouped by severity so you can resolve the riskiest issues first.',
  },
];

export const testimonials = [
  {
    quote:
      'We embedded BrokenLink AI into our client onboarding checklist and reclaimed hours that used to disappear into manual QA.',
    author: 'Sanjana Patel, Founder at Northbridge Studio',
  },
  {
    quote:
      'The accessibility insights are a bonus. We caught mislabeled CTAs that were holding back our Lighthouse score before shipping a redesign.',
    author: 'Devon Miller, Growth Engineer at Switchboard',
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'per month',
    cta: 'Launch for free',
    perks: ['1,000 crawled pages', 'Email notifications', 'Manual CSV export', 'Community support'],
  },
  {
    name: 'Growth',
    price: '$79',
    cadence: 'per month',
    cta: 'Start a trial',
    perks: ['10,000 crawled pages', 'Weekly scheduling', 'White-label PDF reports', 'Priority chat support'],
  },
  {
    name: 'Enterprise',
    price: "Let's chat",
    cadence: '',
    cta: 'Book a demo',
    perks: ['Unlimited domains', 'Dedicated success manager', 'Custom export integrations', 'SLA + security review'],
  },
];

export const faqItems = [
  {
    question: 'How many pages can I scan per month?',
    answer:
      'The free plan includes 1,000 crawled pages every 30 days. Growth and Enterprise tiers expand that quota and unlock historical reporting.',
  },
  {
    question: 'Does BrokenLink AI impact my SEO?',
    answer:
      'No. We respect robots directives, throttle requests, cache results, and identify ourselves with a friendly user agent so your analytics remain trustworthy.',
  },
  {
    question: 'Can I schedule recurring scans?',
    answer:
      'Yes. Growth plans support weekly scheduling and Enterprise customers can configure custom cadences via the API or our Zapier integration.',
  },
  {
    question: 'Is my scan data private?',
    answer:
      'Absolutely. We store scan results in an encrypted database, purge raw payloads after 30 days, and never share your data with advertisers.',
  },
];

export const resourceGuides = [
  {
    title: 'Technical SEO checklist for scale-ups',
    description: 'A 12-point audit to keep search crawlers happy while you iterate on product pages.',
    href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
  },
  {
    title: 'Designing accessible navigation that converts',
    description: 'Practical tips to combine WCAG guidelines with high-performing marketing layouts.',
    href: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
  },
  {
    title: 'How dead links impact paid media performance',
    description: 'See why QA matters before you invest in campaigns and how BrokenLink AI fits the workflow.',
    href: 'https://ads.google.com/home/resources/marketing-objectives/site-quality-checklist/',
  },
];

export const privacyPolicy = [
  'BrokenLink AI collects only the information required to deliver our link monitoring service. When you create an account we store your name, email address, and password hash. We never collect payment details directly; all billing is handled securely by trusted third parties.',
  'Scan results include the URLs you provide, HTTP response metadata, and diagnostic details needed to highlight broken assets. This data is encrypted at rest, accessible only to the account that initiated the scan, and purged automatically after thirty days unless you opt into historical archiving.',
  'We rely on a short list of sub-processors, including reputable cloud hosting providers, analytics platforms, and payment processors. Each partner is reviewed for GDPR and CCPA alignment, and we sign data-protection agreements to ensure your information stays safe.',
  'You always remain in control of your data. You can export or delete your account from the dashboard, and you retain the right to request access, rectification, or erasure at any time by emailing privacy@brokenlink.ai. We respond to all requests within thirty days.',
  'Cookies are limited to essential session tokens and optional analytics. We display a consent banner for visitors from regions that require it, and no advertising cookies are dropped until you provide consent.',
  'If we make material updates to this policy we will notify you by email and post the revision date prominently on this page. Continued use of BrokenLink AI after changes take effect constitutes acceptance of the updated policy.',
];

export const termsOfService = [
  'By accessing BrokenLink AI you agree to abide by these Terms of Service and all applicable laws. If you disagree with any part of the terms you must discontinue use of the platform.',
  'You may only use BrokenLink AI to scan websites you own or have explicit permission to audit. Automated scraping of unrelated third-party properties violates these terms and will lead to immediate suspension.',
  'Plans that include paid features renew automatically each billing cycle until cancelled. You can downgrade or cancel at any time in the billing portal. Fees are non-refundable once the billing period has begun, except where required by law.',
  'BrokenLink AI is provided on an "as is" basis. We strive for high availability but do not guarantee uninterrupted access. Scheduled maintenance windows and urgent patches will be announced in advance whenever possible.',
  'To the maximum extent permitted by law, BrokenLink AI and its affiliates are not liable for any indirect, incidental, or consequential damages arising from your use of the service. Our aggregate liability is limited to the fees you paid in the twelve months preceding the claim.',
  'These terms may be updated periodically to reflect product changes or legal requirements. We will announce updates on the dashboard and via email. Your continued use of the service following updates signifies acceptance.',
];

export const officeDetails = {
  email: 'hello@brokenlink.ai',
  hours: 'Monday to Sunday - 12:00 AM-12:00 AM EST',
  address: '60 East 42nd Street, Suite 1201, New York, NY 10165',
};
