import styles from './page.module.css';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { team } from '@/data/team';
import { aboutStats } from '@/data/stats';
import { timeline, values } from '@/data/about';

export const metadata = {
  title: 'About Us',
  description: 'Learn about FinacX Consulting Services — our story, mission, vision, values, and the leadership team driving impact for our clients.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="About FinacX Consulting Services"
        subtitle="We are a team of dedicated professionals helping businesses navigate complexity, seize opportunities, and achieve sustainable growth."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* Our Story */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyVideo}>
            <div className={styles.playBtn}>
              <Icon name="play" />
            </div>
            <div className={styles.storyVideoOverlay}>
              <p className={styles.storyVideoLabel}>Building Trust.<br />Delivering Results.</p>
              <div className={styles.storyVideoLine} />
            </div>
          </div>
          <div className={styles.storyContent}>
            <span className={styles.storyLabel}>OUR STORY</span>
            <h2 className={styles.storyTitle}>Your Partner in Progress</h2>
            <p className={styles.storyDesc}>
              FinacX Consulting Services was founded with a simple belief – great businesses deserve the right advice.
            </p>
            <p className={styles.storyDesc}>
              Since our inception, we have partnered with organizations across industries to solve complex challenges, optimize performance, and unlock new opportunities. Our client-first approach, deep expertise, and commitment to excellence drive everything we do.
            </p>
            <div>
              <Button href="/contact">Let&apos;s Connect</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className={styles.mvvSection}>
        <SectionHeading title="Our Mission, Vision & Values" />
        <div className={styles.mvvGrid}>
          <div className={styles.mvvCard}>
            <div className={styles.mvvIcon}>
              <Icon name="discover" />
            </div>
            <h3 className={styles.mvvTitle}>Our Mission</h3>
            <p className={styles.mvvDesc}>
              To deliver innovative and practical consulting solutions that empower businesses to grow, compete, and lead in a dynamic world.
            </p>
          </div>
          <div className={styles.mvvCard}>
            <div className={styles.mvvIcon}>
              <Icon name="impact" />
            </div>
            <h3 className={styles.mvvTitle}>Our Vision</h3>
            <p className={styles.mvvDesc}>
              To be the most trusted consulting partner, recognized for creating lasting impact and driving sustainable progress for our clients.
            </p>
          </div>
          <div className={styles.mvvCard}>
            <div className={styles.mvvIcon}>
              <Icon name="deliver" />
            </div>
            <h3 className={styles.mvvTitle}>Our Values</h3>
            <div className={styles.valuesList}>
              {values.map((value) => (
                <div key={value} className={styles.valueItem}>
                  <span className={styles.valueCheck}><Icon name="check" /></span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar data={aboutStats} />

      {/* Leadership Team */}
      <section className={styles.teamSection}>
        <SectionHeading
          title="Meet Our Leadership"
          subtitle="Experienced leaders. Proven expertise. Shared commitment to your success."
        />
        <div className={styles.teamGrid}>
          {team.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.teamPhoto}>
                <div className={styles.teamPhotoInitials}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className={styles.teamBadge}>
                  <Icon name="linkedin" />
                </div>
              </div>
              <h4 className={styles.teamName}>{member.name}</h4>
              <p className={styles.teamTitle}>{member.title}</p>
              <p className={styles.teamDesc}>{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className={styles.journeySection}>
        <SectionHeading title="Our Journey" />
        <div className={styles.timeline}>
          {timeline.map((item) => (
            <div key={item.year} className={styles.timelineItem}>
              <div className={styles.timelineDot}>
                <div className={styles.timelineDotInner} />
              </div>
              <div>
                <div className={styles.timelineYear}>{item.year}</div>
                <p className={styles.timelineDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Let's build the future together."
        subtitle="Partner with FinacX and accelerate your growth journey."
      />
    </>
  );
}
