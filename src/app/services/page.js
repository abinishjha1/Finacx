import styles from './page.module.css';
import HeroSection from '@/components/sections/HeroSection';
import CTABanner from '@/components/sections/CTABanner';
import Testimonials from '@/components/sections/Testimonials';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { services, approach } from '@/data/services';
import { testimonials, caseStudy, featuredTestimonial } from '@/data/testimonials';

export const metadata = {
  title: 'Our Services',
  description: 'Explore FinacX Consulting Services — Strategy, Financial Advisory, Operations, Risk & Compliance, and Technology Advisory.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Our Services"
        subtitle="Tailored solutions. Measurable impact. Sustainable growth. Explore our comprehensive range of consulting services designed to help your business thrive."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Services Grid */}
      <section className="section">
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

      {/* Our Approach */}
      <section className={styles.approachSection}>
        <SectionHeading
          title="Our Approach"
          subtitle="A proven methodology to deliver results that matter."
        />
        <div className={styles.approachSteps}>
          {approach.map((step) => (
            <div key={step.step} className={styles.approachStep}>
              <div className={styles.approachIcon}>
                <Icon name={step.icon} />
              </div>
              <span className={styles.approachNumber}>{step.step}.</span>
              <h4 className={styles.approachTitle}>{step.title}</h4>
              <p className={styles.approachDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study */}
      <section className={styles.caseSection}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding)' }}>
          <span className={styles.caseSectionLabel}>Success in Action</span>
        </div>
        <div className={styles.caseGrid}>
          <div>
            <span className={styles.caseLabel}>{caseStudy.label}</span>
            <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
            <p className={styles.caseDesc}>{caseStudy.description}</p>
            <div className={styles.caseResults}>
              {caseStudy.results.map((result) => (
                <div key={result} className={styles.caseResultItem}>
                  <span className={styles.caseResultCheck}><Icon name="check" /></span>
                  <span>{result}</span>
                </div>
              ))}
            </div>
            <Button href="#" variant="outline">View Case Study</Button>
          </div>
          <div className={styles.caseQuote}>
            <div className={styles.caseQuoteIcon}>
              <Icon name="quote" />
            </div>
            <p className={styles.caseQuoteText}>{featuredTestimonial.quote}</p>
            <div className={styles.caseQuoteAuthor}>
              <div className={styles.caseQuoteAvatar}>
                {featuredTestimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className={styles.caseQuoteName}>{featuredTestimonial.name}</div>
                <div className={styles.caseQuoteRole}>{featuredTestimonial.title}</div>
                <div className={styles.caseQuoteRole}>{featuredTestimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials data={testimonials} />

      {/* CTA */}
      <CTABanner
        label="LET'S WORK TOGETHER"
        title="Ready to Transform Your Business?"
        subtitle="Connect with our experts to explore how we can help you achieve your goals."
      />
    </>
  );
}
