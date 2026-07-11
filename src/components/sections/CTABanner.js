import styles from './CTABanner.module.css';
import Button from '@/components/ui/Button';

export default function CTABanner({
  label,
  title = "Your Industry. Our Expertise. Real Impact.",
  subtitle = "Let's work together to build a stronger, smarter, and more resilient business.",
  buttonText = "Let's Connect",
  buttonHref = '/contact',
}) {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <div className={styles.ctaIcon}>
          <svg className={styles.ctaIconSvg} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <div className={styles.ctaContent}>
          {label && <p className={styles.ctaLabel}>{label}</p>}
          <h3 className={styles.ctaTitle}>{title}</h3>
          {subtitle && <p className={styles.ctaSubtitle}>{subtitle}</p>}
        </div>
        <div className={styles.ctaAction}>
          <Button href={buttonHref} variant="whiteOutline">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
