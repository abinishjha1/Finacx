import Link from 'next/link';
import styles from './Card.module.css';
import Icon from './Icon';

export default function Card({ icon, title, description, link, linkText = 'Learn More', highlighted = false, className = '' }) {
  return (
    <div className={`${styles.card} ${highlighted ? styles.highlighted : ''} ${className}`}>
      {icon && (
        <div className={styles.iconWrap}>
          <Icon name={icon} />
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {link && (
        <Link href={link} className={styles.link}>
          {linkText} <Icon name="arrowRight" />
        </Link>
      )}
    </div>
  );
}
