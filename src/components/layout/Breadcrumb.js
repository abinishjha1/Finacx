import Link from 'next/link';
import styles from './Breadcrumb.module.css';
import Icon from '@/components/ui/Icon';

export default function Breadcrumb({ items, variant = 'light' }) {
  return (
    <nav className={`${styles.breadcrumb} ${variant === 'dark' ? styles.breadcrumbDark : ''}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {index > 0 && <Icon name="chevronRight" className={styles.separator} />}
          {item.href ? (
            <Link href={item.href} className={styles.breadcrumbLink}>
              {item.label}
            </Link>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
