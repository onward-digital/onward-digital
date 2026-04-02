'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      <main className="grain-overlay">
        <Navbar />
        <Hero />
        {/* Wave separator: hero → services */}
        <div style={{ marginTop: '-1px', lineHeight: 0 }}>
          <svg viewBox="0 0 1440 48" style={{ width: '100%', display: 'block' }} preserveAspectRatio="none">
            <path d="M0,24 C360,48 720,0 1080,24 C1260,36 1380,12 1440,24 L1440,48 L0,48Z" fill="var(--color-bg-secondary)" />
          </svg>
        </div>
        <Services />
        {/* Wave separator: services → portfolio */}
        <div style={{ marginTop: '-1px', lineHeight: 0 }}>
          <svg viewBox="0 0 1440 48" style={{ width: '100%', display: 'block' }} preserveAspectRatio="none">
            <path d="M0,24 C360,0 720,48 1080,24 C1260,12 1380,36 1440,24 L1440,48 L0,48Z" fill="var(--color-bg)" />
          </svg>
        </div>
        <Portfolio />
        {/* Wave separator: portfolio → about */}
        <div style={{ marginTop: '-1px', lineHeight: 0 }}>
          <svg viewBox="0 0 1440 48" style={{ width: '100%', display: 'block' }} preserveAspectRatio="none">
            <path d="M0,24 C360,48 720,0 1080,24 C1260,36 1380,12 1440,24 L1440,48 L0,48Z" fill="var(--color-bg-secondary)" />
          </svg>
        </div>
        <About />
        {/* Wave separator: about → contact */}
        <div style={{ marginTop: '-1px', lineHeight: 0 }}>
          <svg viewBox="0 0 1440 48" style={{ width: '100%', display: 'block' }} preserveAspectRatio="none">
            <path d="M0,24 C360,0 720,48 1080,24 C1260,12 1380,36 1440,24 L1440,48 L0,48Z" fill="var(--color-bg)" />
          </svg>
        </div>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
