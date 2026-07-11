import Link from 'next/link';
import styles from './Footer.module.css';
import { footerQuickLinks, footerServices, socialLinks, contactInfo } from '@/data/navigation';
import Icon from '@/components/ui/Icon';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoGrid}>
                <span className={styles.logoCell}>F</span>
                <span className={styles.logoCell}>C</span>
                <span className={styles.logoCell}>S</span>
                <span className={styles.logoCell}></span>
              </div>
              <div className={styles.logoText}>
                <span>FINACX</span>
                <span>CONSULTING</span>
                <span>SERVICE</span>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              Empowering businesses to solve complex challenges, optimize performance, and unlock sustainable growth.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  className={styles.socialLink}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkColTitle}>Quick Links</h4>
            <div className={styles.linkColList}>
              {footerQuickLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.linkColItem}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkColTitle}>Our Services</h4>
            <div className={styles.linkColList}>
              {footerServices.map((link) => (
                <Link key={link.href} href={link.href} className={styles.linkColItem}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className={styles.linkCol}>
            <h4 className={styles.linkColTitle}>Contact Us</h4>
            <div className={styles.linkColList}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><Icon name="location" /></span>
                <span>{contactInfo.company}<br />{contactInfo.address}</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><Icon name="phone" /></span>
                <span>{contactInfo.phone}</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><Icon name="email" /></span>
                <span>{contactInfo.email}</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}><Icon name="website" /></span>
                <span>{contactInfo.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <span>© {new Date().getFullYear()} FinacX Consulting Services. All Rights Reserved.</span>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
            <span className={styles.separator}>|</span>
            <Link href="/terms" className={styles.bottomLink}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
