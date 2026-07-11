import styles from './page.module.css';
import HeroSection from '@/components/sections/HeroSection';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { jobOpenings, benefits, cultureValues } from '@/data/careers';

export const metadata = {
  title: 'Careers',
  description: 'Join FinacX Consulting Services — explore exciting career opportunities in strategy, finance, operations, technology, and compliance consulting.',
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Build Your Career with FinacX"
        subtitle="Join a team of passionate professionals driving impact for businesses worldwide. Grow your expertise, expand your horizons, and make a difference."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Careers' },
        ]}
        ctas={[
          { label: 'View Open Positions', href: '#positions' },
        ]}
      />

      {/* Benefits */}
      <section className={styles.benefitsSection}>
        <SectionHeading
          title="Why Work With Us"
          subtitle="At FinacX, we invest in our people because their success drives ours."
        />
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit) => (
            <div key={benefit.title} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Icon name={benefit.icon} />
              </div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDesc}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className={styles.jobsSection} id="positions">
        <SectionHeading
          title="Open Positions"
          subtitle="Explore current opportunities and find the role that's right for you."
        />
        <div className={styles.jobsList} style={{ textAlign: 'center', padding: 'var(--space-10) 0' }}>
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <Icon name="search" />
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
            We are not currently hiring
          </h3>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
            Thank you for your interest in FinacX Consulting Services. While we don't have any open positions at the moment, we're always looking to connect with talented professionals. Please check back later or follow us on LinkedIn for future opportunities.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className={styles.cultureSection}>
        <div className={styles.cultureGrid}>
          <div className={styles.cultureImage}>
            Our Team Culture
          </div>
          <div className={styles.cultureContent}>
            <h2 className={styles.cultureTitle}>Our Culture</h2>
            <div className={styles.cultureList}>
              {cultureValues.map((value) => (
                <div key={value} className={styles.cultureItem}>
                  <span className={styles.cultureCheck}><Icon name="check" /></span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div>
              <Button href="/about" variant="ghost">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Make an Impact?"
        subtitle="Join our team and help businesses solve their most complex challenges."
        buttonText="Get in Touch"
      />
    </>
  );
}
