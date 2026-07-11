import styles from './page.module.css';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import CTABanner from '@/components/sections/CTABanner';
import Testimonials from '@/components/sections/Testimonials';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { stats } from '@/data/stats';
import { testimonials } from '@/data/testimonials';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Empowering Businesses to Thrive in a Complex World."
        subtitle="FinacX Consulting Services partners with organizations to solve their toughest challenges, unlock growth, and build lasting value through expert consulting."
        variant="home"
        ctas={[
          { label: 'Explore Our Services', href: '/services' },
          { label: 'Let\'s Connect', href: '/contact', variant: 'whiteOutline' },
        ]}
      >
        <div className={styles.heroIcons}>
          <div className={styles.heroIconItem}>
            <Icon name="collaborate" />
            <span className={styles.heroIconLabel}>Collaborate<br />with confidence</span>
          </div>
          <div className={styles.heroIconItem}>
            <Icon name="solve" />
            <span className={styles.heroIconLabel}>Solve<br />complex challenges</span>
          </div>
          <div className={styles.heroIconItem}>
            <Icon name="results" />
            <span className={styles.heroIconLabel}>Drive<br />measurable results</span>
          </div>
          <div className={styles.heroIconItem}>
            <Icon name="partnerships" />
            <span className={styles.heroIconLabel}>Build lasting<br />partnerships</span>
          </div>
        </div>
      </HeroSection>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <SectionHeading
          title="How We Can Help"
          subtitle="Expertise across key areas to solve complex business challenges."
        />
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <Card
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className={styles.industriesSection}>
        <SectionHeading
          title="Industries We Serve"
          subtitle="Deep expertise across diverse sectors, delivering tailored solutions."
        />
        <div className={styles.industriesGrid}>
          {industries.slice(0, 4).map((industry) => (
            <Card
              key={industry.id}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              link="/industries"
            />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <Button href="/industries" variant="outline">
            View All Industries
          </Button>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar data={stats} />

      {/* Why Choose Us */}
      <section className={styles.whySection}>
        <SectionHeading
          title="Why Choose FinacX"
          subtitle="What sets us apart in delivering exceptional consulting outcomes."
        />
        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
              <Icon name="strategy" />
            </div>
            <h3 className={styles.whyTitle}>Deep Domain Expertise</h3>
            <p className={styles.whyDesc}>Our consultants bring decades of experience across industries, ensuring insights that are both practical and transformative.</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
              <Icon name="deliver" />
            </div>
            <h3 className={styles.whyTitle}>Proven Methodology</h3>
            <p className={styles.whyDesc}>Our structured 5-step approach ensures every engagement delivers measurable, sustainable results.</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
              <Icon name="global" />
            </div>
            <h3 className={styles.whyTitle}>Client-First Approach</h3>
            <p className={styles.whyDesc}>We build lasting partnerships by putting your success at the center of everything we do.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials data={testimonials} />

      {/* Featured Insight */}
      <section className={styles.insightSection}>
        <div className={styles.insightCard}>
          <div className={styles.insightImage}>
            <div className={styles.insightImageOverlay}>
              <span className={styles.insightImageLabel}>Building Trust.<br />Delivering Results.</span>
            </div>
          </div>
          <div className={styles.insightContentArea}>
            <span className={styles.insightLabel}>FEATURED INSIGHT</span>
            <h3 className={styles.insightTitle}>Future-Proofing Your Business: Trends to Watch</h3>
            <p className={styles.insightDesc}>
              From AI adoption to sustainable operations, explore the trends shaping the future of business and how to stay ahead.
            </p>
            <div>
              <Button href="/insights" variant="ghost">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        label="LET'S WORK TOGETHER"
        title="Ready to Transform Your Business?"
        subtitle="Connect with our experts to explore how we can help you achieve your goals."
      />
    </>
  );
}
