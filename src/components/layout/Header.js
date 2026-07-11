'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import { navLinks } from '@/data/navigation';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerInner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="FinacX Consulting Service - Home">
          <div className={styles.logoGrid}>
            <span className={styles.logoCell}>F</span>
            <span className={styles.logoCell}>C</span>
            <span className={styles.logoCell}>S</span>
            <span className={styles.logoCell}></span>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoTextMain}>FINACX</span>
            <span className={styles.logoTextMain}>CONSULTING</span>
            <span className={styles.logoTextMain}>SERVICE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaBtn}>
          <Button href="/contact" variant="outline" size="sm">
            Let&apos;s Connect
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
      </div>

      {/* Mobile Nav */}
      <nav className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.mobileNavLink} ${pathname === link.href ? styles.mobileNavLinkActive : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div className={styles.mobileCta}>
          <Button href="/contact" fullWidth>
            Let&apos;s Connect
          </Button>
        </div>
      </nav>
    </header>
  );
}
