// Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'About RICH', href: 'about' },
    { label: 'How to Buy', href: 'how-to-buy' },
    { label: 'Tokenomics', href: 'tokenomics' },
    { label: 'Socials', href: 'socials' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image 
            src="/sheep-hero.png" 
            alt="RICH Logo" 
            width={60} 
            height={60}
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.label} onClick={() => scrollToSection(link.href)}>
              <a href={`#${link.href}`}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuButton} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label} onClick={() => scrollToSection(link.href)}>
              <a href={`#${link.href}`} onClick={toggleMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

