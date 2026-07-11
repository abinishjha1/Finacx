import styles from './HeroSection.module.css';
import Breadcrumb from '@/components/layout/Breadcrumb';
import Button from '@/components/ui/Button';

export default function HeroSection({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
  variant = 'compact',
  ctas,
  children,
}) {
  return (
    <section className={`${styles.hero} ${variant === 'home' ? styles.homeHero : styles.compact}`}>
      {backgroundImage && (
        <div
          className={styles.heroBg}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        {ctas && (
          <div className={styles.heroCtas}>
            {ctas.map((cta, i) => (
              <Button key={i} href={cta.href} variant={cta.variant || (i === 0 ? 'primary' : 'whiteOutline')}>
                {cta.label}
              </Button>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
