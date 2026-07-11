'use client';

import { useState } from 'react';
import styles from './page.module.css';
import HeroSection from '@/components/sections/HeroSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { offices } from '@/data/offices';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', company: '', phone: '', subject: '', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ fullName: '', email: '', company: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <HeroSection
        title={<>Let&apos;s Connect.<br />Let&apos;s Create Impact.</>}
        subtitle="Have a question, a project in mind, or just want to explore how we can help? We'd love to hear from you."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
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

      {/* Contact Form + Sidebar */}
      <div className={styles.contactLayout}>
        {/* Form */}
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Full Name <span className={styles.required}>*</span></label>
                <input type="text" name="fullName" className={styles.formInput} value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Work Email <span className={styles.required}>*</span></label>
                <input type="email" name="email" className={styles.formInput} value={formData.email} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Company Name</label>
                <input type="text" name="company" className={styles.formInput} value={formData.company} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Phone Number</label>
                <input type="tel" name="phone" className={styles.formInput} value={formData.phone} onChange={handleChange} />
              </div>
              <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                <label className={styles.formLabel}>Subject <span className={styles.required}>*</span></label>
                <input type="text" name="subject" className={styles.formInput} value={formData.subject} onChange={handleChange} required />
              </div>
              <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                <label className={styles.formLabel}>How can we help you? <span className={styles.required}>*</span></label>
                <textarea name="message" className={`${styles.formInput} ${styles.formTextarea}`} placeholder="Tell us more about your inquiry..." value={formData.message} onChange={handleChange} required />
              </div>
            </div>
            <div className={styles.formPrivacy}>
              <span className={styles.formPrivacyIcon}><Icon name="check" /></span>
              <span>We respect your privacy. Your information will never be shared.</span>
            </div>
            <div className={styles.formSubmit}>
              <Button type="submit" showIcon>Send Message</Button>
            </div>
          </form>
        </div>

        {/* Other Ways to Reach Us */}
        <div className={styles.otherWays}>
          <h2 className={styles.otherWaysTitle}>Other Ways to Reach Us</h2>
          <div className={styles.contactMethod}>
            <div className={styles.contactMethodIcon}><Icon name="email" /></div>
            <div>
              <div className={styles.contactMethodTitle}>Email Us</div>
              <div className={styles.contactMethodValue}>info@finacx.com</div>
              <div className={styles.contactMethodNote}>We typically respond within 24 hours.</div>
            </div>
          </div>
          <div className={styles.contactMethod}>
            <div className={styles.contactMethodIcon}><Icon name="phone" /></div>
            <div>
              <div className={styles.contactMethodTitle}>Call Us</div>
              <div className={styles.contactMethodValue}>+977 9855045774</div>
              <div className={styles.contactMethodNote}>Mon – Fri | 9:00 AM – 6:00 PM IST</div>
            </div>
          </div>
          <div className={styles.contactMethod}>
            <div className={styles.contactMethodIcon}><Icon name="linkedinContact" /></div>
            <div>
              <div className={styles.contactMethodTitle}>Connect on LinkedIn</div>
              <div className={styles.contactMethodValue}>linkedin.com/company/finacx-consulting</div>
              <div className={styles.contactMethodNote}>Stay updated with our latest insights.</div>
            </div>
          </div>
          <div className={styles.contactMethod}>
            <div className={styles.contactMethodIcon}><Icon name="website" /></div>
            <div>
              <div className={styles.contactMethodTitle}>Visit Our Website</div>
              <div className={styles.contactMethodValue}>www.finacx.com</div>
              <div className={styles.contactMethodNote}>Explore our services and expertise.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Offices */}
      <section className={styles.officesSection}>
        <SectionHeading title="Our Offices" align="left" />
        <div className={styles.officesGrid}>
          {offices.map((office) => (
            <div key={office.id} className={styles.officeCard}>
              {office.mapLink ? (
                <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className={styles.officeMap} style={{ textDecoration: 'none' }}>
                  Open Map - {office.city}
                </a>
              ) : (
                <div className={styles.officeMap}>Map - {office.city}</div>
              )}
              <div className={styles.officeInfo}>
                <h4 className={styles.officeCity}>
                  <span className={styles.officeCityDot} />
                  {office.city}, {office.country}
                </h4>
                <p className={styles.officeAddress}>{office.address}</p>
                <div className={styles.officeContact}>
                  <div className={styles.officeContactItem}>
                    <Icon name="phone" /> {office.phone}
                  </div>
                  <div className={styles.officeContactItem}>
                    <Icon name="email" /> {office.email}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Career CTA */}
      <div className={styles.careerCta}>
        <div className={styles.careerCtaInner}>
          <div className={styles.careerCtaContent}>
            <div className={styles.careerCtaIcon}>
              <Icon name="growth" />
            </div>
            <div>
              <h4 className={styles.careerCtaTitle}>Looking for a Career Opportunity?</h4>
              <p className={styles.careerCtaSubtitle}>Explore exciting career opportunities and grow with a team that makes a difference.</p>
            </div>
          </div>
          <Button href="/careers" variant="outline">View Careers</Button>
        </div>
      </div>
    </>
  );
}
