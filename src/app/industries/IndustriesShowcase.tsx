import { industriesMenuItems } from '@/data/header';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const industriesData = [
  {
    id: 'nonprofit-religious',
    title: 'Nonprofit & Religious',
    description: 'Streamline operations, manage donations, and engage communities with purpose-built solutions.',
    icon: 'ns-shape-8',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Secure patient data management, compliance tracking, and operational efficiency for healthcare providers.',
    icon: 'ns-shape-9',
  },
  {
    id: 'insurance',
    title: 'Insurance',
    description: 'Claims processing, risk assessment, and customer management solutions for insurance companies.',
    icon: 'ns-shape-12',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    description: 'Inventory management, customer analytics, and sales optimization for online retailers.',
    icon: 'ns-shape-21',
  },
  {
    id: 'credit-unions-banks-fintechs',
    title: 'Credit Unions, Banks, & Fintechs',
    description: 'Compliance management, customer onboarding, and financial analytics for financial institutions.',
    icon: 'ns-shape-35',
  },
  {
    id: 'startups',
    title: 'Startups',
    description: 'Scalable solutions for rapid growth, from MVP development to enterprise-ready platforms.',
    icon: 'ns-shape-17',
  },
  {
    id: 'manufacturing-logistics',
    title: 'Manufacturing & Logistics',
    description: 'Supply chain optimization, inventory tracking, and operational efficiency solutions.',
    icon: 'ns-shape-25',
  },
  {
    id: 'small-businesses',
    title: 'Small Businesses',
    description: 'Affordable, easy-to-use tools for customer management, accounting, and growth.',
    icon: 'ns-shape-38',
  },
  {
    id: 'media-entertainment',
    title: 'Media & Entertainment',
    description: 'Content management, audience analytics, and monetization solutions for media companies.',
    icon: 'ns-shape-34',
  },
];

const IndustriesShowcase = () => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan">Industries We Serve</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2 className="max-w-[878px] mx-auto">Tailored solutions for every industry</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[700px] mx-auto">
                From healthcare to fintech, we understand the unique challenges and opportunities in your industry. 
                Our solutions are designed to meet specific regulatory requirements and business needs.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 xl:gap-8 md:gap-8 gap-y-8">
          {industriesData.map((industry, index) => (
            <RevealAnimation key={industry.id} delay={0.5 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="px-6 py-8 rounded-[20px] bg-background-3 dark:bg-background-7 space-y-6 text-center grid items-center justify-center hover:translate-y-[-10px] transition-transform duration-500 ease-in-out h-full">
                  <div className="flex items-center justify-center">
                    <span className={`${industry.icon} text-[52px] text-secondary dark:text-accent`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{industry.title}</h3>
                    <p className="max-w-[361px] mx-auto line-clamp-3">{industry.description}</p>
                  </div>
                  <div>
                    <LinkButton
                      href={`/industries/${industry.id}`}
                      className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md">
                      Learn more
                    </LinkButton>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesShowcase;