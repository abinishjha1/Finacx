'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';

export default function Testimonials({ data, title = 'What Our Clients Say', subtitle }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        <SectionHeading title={title} subtitle={subtitle} />

        <div className={styles.slider}>
          <div className={styles.track}>
            <div className={styles.slide}>
              {data.map((testimonial) => (
                <div key={testimonial.id} className={styles.card}>
                  <div className={styles.quoteIcon}>
                    <Icon name="quote" />
                  </div>
                  <p className={styles.quoteText}>{testimonial.quote}</p>
                  <div className={styles.author}>
                    <div className={styles.authorAvatar}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>{testimonial.name}</span>
                      <span className={styles.authorTitle}>{testimonial.title}</span>
                    </div>
                    <span className={styles.companyLogo}>{testimonial.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.dots}>
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
