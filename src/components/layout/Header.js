'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
          <Image src="/finacx-logo.png" alt="FinacX Consulting Service" width={240} height={75} style={{ objectFit: 'contain', width: 'auto', height: '40px' }} priority />
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
