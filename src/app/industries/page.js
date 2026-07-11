import styles from './page.module.css';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { industries } from '@/data/industries';
import { stats } from '@/data/stats';

export const metadata = {
  title: 'Industries We Serve',
  description: 'FinacX Consulting serves Banking, Healthcare, Retail, Manufacturing, Technology, Energy, Education, and Government sectors with deep domain expertise.',
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Industries We Serve"
        subtitle="We partner with organizations across diverse industries, understanding their unique challenges and delivering tailored solutions that drive growth, efficiency, and long-term value."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries' },
        ]}
      />

      {/* Industries Grid */}
      <section className={styles.industriesIntro}>
        <SectionHeading
          title="Deep Industry Expertise. Measurable Impact."
          subtitle="Practical insights. Proven methodologies. Industry-specific solutions."
        />
        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <Card
              key={industry.id}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              link={`/industries#${industry.id}`}
              highlighted={index === 2}
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section-alt">
        <SectionHeading
          title="Why Clients Trust Us Across Industries"
        />
        <StatsBar data={stats} variant="light" />
      </section>

      {/* CTA */}
      <CTABanner
        title="Your Industry. Our Expertise. Real Impact."
        subtitle="Let's work together to build a stronger, smarter, and more resilient business."
      />
    </>
  );
}
