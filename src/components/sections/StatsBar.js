'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatsBar.module.css';
import Icon from '@/components/ui/Icon';

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsBar({ data, variant = 'default' }) {
  const variantClass = variant === 'dark' ? styles.statsBarDark : variant === 'light' ? styles.statsBarLight : '';

  return (
    <section className={`${styles.statsBar} ${variantClass}`}>
      <div className={styles.statsInner}>
        {data.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.statIcon}>
              <Icon name={stat.icon} />
            </div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <span className={styles.statLabel}>{stat.label}</span>
              {stat.sublabel && <span className={styles.statSublabel}>{stat.sublabel}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
