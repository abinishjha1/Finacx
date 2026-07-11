'use client';

import { useState } from 'react';
import styles from './page.module.css';
import HeroSection from '@/components/sections/HeroSection';
import CTABanner from '@/components/sections/CTABanner';
import Icon from '@/components/ui/Icon';
import { insights, insightCategories, popularTopics } from '@/data/insights';

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All Insights');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInsights = insights.filter((insight) => {
    const matchesCategory = activeCategory === 'All Insights' || insight.category === activeCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = insights.find(i => i.featured);

  return (
    <>
      {/* Hero */}
      <HeroSection
        title={<>Ideas. Insights. Impact.</>}
        subtitle="Stay informed with our expert perspectives on emerging trends, industry developments, and strategies that help businesses grow and stay ahead."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights' },
        ]}
      />

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterTabs}>
          {insightCategories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterTab} ${activeCategory === cat ? styles.filterTabActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat !== 'All Insights' && <Icon name={cat.toLowerCase().includes('strategy') ? 'strategy' : cat.toLowerCase().includes('finance') ? 'financial' : cat.toLowerCase().includes('operations') ? 'operations' : cat.toLowerCase().includes('technology') ? 'technology' : 'risk'} />}
              {cat}
            </button>
          ))}
        </div>
        <div className={styles.searchBox}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className={styles.searchIcon}><Icon name="search" /></span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.insightsLayout}>
        {/* Article List */}
        <div className={styles.articleList}>
          {filteredInsights.map((article) => (
            <article key={article.id} className={styles.articleCard}>
              <div className={styles.articleImage}>
                <div className={styles.articleImagePlaceholder}>
                  <Icon name={article.category.toLowerCase().includes('strategy') ? 'strategy' : article.category.toLowerCase().includes('finance') ? 'financial' : article.category.toLowerCase().includes('operations') ? 'operations' : article.category.toLowerCase().includes('technology') ? 'technology' : 'risk'} />
                </div>
              </div>
              <div className={styles.articleContent}>
                <span className={styles.articleCategory}>{article.category}</span>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <div className={styles.articleMeta}>
                  <div className={styles.articleAuthor}>
                    <div className={styles.articleAuthorAvatar}>
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className={styles.articleAuthorName}>{article.author}</div>
                      <div className={styles.articleDate}>{article.date} · {article.readTime}</div>
                    </div>
                  </div>
                  <span className={styles.articleReadMore}>
                    Read More <Icon name="arrowRight" />
                  </span>
                </div>
              </div>
            </article>
          ))}

          {/* Pagination */}
          <div className={styles.pagination}>
            <button className={styles.pageBtn}>←</button>
            <button className={`${styles.pageBtn} ${styles.pageBtnActive}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <span className={styles.pageEllipsis}>...</span>
            <button className={styles.pageBtn}>12</button>
            <button className={styles.pageBtn}>→</button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {/* Featured Insight */}
          {featured && (
            <div className={styles.sidebarCard}>
              <h4 className={styles.sidebarTitle}>Featured Insight</h4>
              <div className={styles.featuredImage} />
              <span className={styles.featuredCategory}>{featured.category}</span>
              <h5 className={styles.featuredTitle}>{featured.title}</h5>
              <div className={styles.featuredMeta}>
                <span>{featured.author}</span>
                <span>{featured.date} · {featured.readTime}</span>
              </div>
              <span className={styles.featuredReadMore}>Read More →</span>
            </div>
          )}

          {/* Subscribe */}
          <div className={styles.sidebarCard}>
            <h4 className={styles.sidebarTitle}>Subscribe to Insights</h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)', lineHeight: 1.6 }}>
              Get the latest insights, trends, and expert perspectives delivered to your inbox.
            </p>
            <div className={styles.subscribeForm}>
              <input type="email" className={styles.subscribeInput} placeholder="Enter your email" />
              <button className={styles.subscribeBtn}>Subscribe</button>
            </div>
            <p className={styles.subscribeNote}>We respect your privacy. Unsubscribe anytime.</p>
          </div>

          {/* Popular Topics */}
          <div className={styles.sidebarCard}>
            <h4 className={styles.sidebarTitle}>Popular Topics</h4>
            <div className={styles.topicList}>
              {popularTopics.map((topic) => (
                <div key={topic.name} className={styles.topicItem}>
                  <span className={styles.topicName}>
                    <span className={styles.topicDot} />
                    {topic.name}
                  </span>
                  <span className={styles.topicCount}>{topic.count} Articles</span>
                </div>
              ))}
            </div>
            <a className={styles.viewAllTopics}>View All Topics <Icon name="arrowRight" /></a>
          </div>
        </aside>
      </div>

      {/* CTA */}
      <CTABanner
        title="Stay Ahead with Expert Insights"
        subtitle="Thought leadership and practical perspectives to help you lead with confidence."
      />
    </>
  );
}
