'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { lang, t, toggleLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const sectionIds = ['services', 'portfolio', 'about', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const navLinks = [
    { href: '#services', label: t('nav_services'), id: 'services' },
    { href: '#portfolio', label: t('nav_portfolio'), id: 'portfolio' },
    { href: '#about', label: t('nav_about'), id: 'about' },
    { href: '#contact', label: t('nav_contact'), id: 'contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '0.75rem 1.5rem' : '1.25rem 1.5rem',
        background: scrolled ? 'rgba(10, 10, 11, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <motion.a
          href="#"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <div style={{
            width: '36px', height: '36px',
            background: 'linear-gradient(135deg, var(--color-accent), #818cf8)',
            borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--color-bg)',
          }}>
            O
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--color-text)' }}>
            Onward<span style={{ color: 'var(--color-accent)' }}>.</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  textDecoration: 'none',
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  position: 'relative',
                  paddingBottom: '2px',
                  transition: 'color 0.3s ease',
                }}
                className="nav-link"
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)')}
              >
                {link.label}
                {/* Animated underline */}
                <motion.span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    height: '1px',
                    background: 'var(--color-accent)',
                    transform: 'translateX(-50%)',
                  }}
                  animate={{ width: isActive ? '100%' : '0%' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </a>
            );
          })}

          {/* Language Toggle */}
          <motion.button
            onClick={toggleLang}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.35rem',
              background: 'transparent', border: '1px solid var(--color-border)',
              borderRadius: '6px', padding: '0.4rem 0.75rem',
              color: 'var(--color-text-secondary)', cursor: 'pointer',
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
              overflow: 'hidden',
            }}
            whileHover={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Globe size={14} />
            <AnimatePresence mode="wait">
              <motion.span
                key={lang}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {lang === 'en' ? 'ES' : 'EN'}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <motion.a
            href="#contact"
            className="btn-primary"
            style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            {t('nav_cta')}
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{ background: 'none', border: 'none', color: 'var(--color-text)', cursor: 'pointer' }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'rgba(10, 10, 11, 0.98)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--color-border)',
              padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem',
            }}
            className="md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  textDecoration: 'none',
                  color: activeSection === link.id ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)', fontSize: '1rem', padding: '0.5rem 0',
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { toggleLang(); setIsOpen(false); }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: 'transparent', border: 'none', color: 'var(--color-accent)',
                cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', padding: '0.5rem 0',
              }}
            >
              <Globe size={16} />
              {lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
