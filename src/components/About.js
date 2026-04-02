'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Lightbulb, Layers, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { slideInLeft, slideInRight, fadeInUp, staggerContainer } from '@/hooks/animations';

export default function About() {
  const { t } = useLanguage();
  const { ref: leftRef, isInView: leftInView } = useScrollAnimation();
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation();

  const features = [
    { icon: <Lightbulb size={24} />, title: t('about_f1_title'), desc: t('about_f1_desc') },
    { icon: <Layers size={24} />, title: t('about_f2_title'), desc: t('about_f2_desc') },
    { icon: <Target size={24} />, title: t('about_f3_title'), desc: t('about_f3_desc') },
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Text — slides in from left */}
          <motion.div
            ref={leftRef}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.span
              variants={slideInLeft}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                color: 'var(--color-accent)', letterSpacing: '0.15em',
                display: 'block', marginBottom: '1rem',
              }}
            >
              {t('about_tag')}
            </motion.span>
            <motion.h2
              variants={slideInLeft}
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.1,
              }}
            >
              {t('about_title')}
            </motion.h2>
            <motion.p
              variants={slideInLeft}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '1.05rem',
                color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '1rem',
              }}
            >
              {t('about_p1')}
            </motion.p>
            <motion.p
              variants={slideInLeft}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '1.05rem',
                color: 'var(--color-text-secondary)', lineHeight: 1.8,
              }}
            >
              {t('about_p2')}
            </motion.p>
          </motion.div>

          {/* Right: Feature Cards — stagger from right */}
          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={slideInRight}
                whileHover={{ x: -4, borderColor: 'var(--color-accent)' }}
                style={{
                  background: 'var(--color-bg-card)',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  border: '1px solid var(--color-border)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <motion.div
                  whileHover={{ rotate: 8 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: '48px', height: '48px', borderRadius: '10px',
                    background: 'var(--color-accent-glow)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--color-accent)', flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '1.1rem', marginBottom: '0.5rem',
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)', lineHeight: 1.6,
                  }}>
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
