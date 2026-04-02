'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/hooks/animations';

export default function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Parallax transforms for background blobs
  const blob1Y = useTransform(scrollY, [0, 600], [0, -180]);
  const blob2Y = useTransform(scrollY, [0, 600], [0, 120]);

  const stats = [
    { num: t('hero_stat_1_num'), label: t('hero_stat_1_label') },
    { num: t('hero_stat_2_num'), label: t('hero_stat_2_label') },
    { num: t('hero_stat_3_num'), label: t('hero_stat_3_label') },
  ];

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '8rem 1.5rem 4rem',
      }}
    >
      {/* Background Blobs — parallax */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          y: blob1Y,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '30%',
          height: '30%',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          y: blob2Y,
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        {/* Stagger container for all hero content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Tag */}
          <motion.div
            variants={fadeInUp}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              border: '1px solid var(--color-border)',
              borderRadius: '100px',
              marginBottom: '2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-accent)',
              letterSpacing: '0.1em',
            }}
          >
            <motion.span
              animate={{
                boxShadow: [
                  '0 0 0px rgba(34,211,238,0)',
                  '0 0 12px rgba(34,211,238,0.6)',
                  '0 0 0px rgba(34,211,238,0)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', display: 'block' }}
            />
            {t('hero_tag')}
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              lineHeight: 1.05,
              marginBottom: '1.5rem',
            }}
          >
            {t('hero_title_1')}<br />
            <span className="gradient-text">{t('hero_title_2')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
            }}
          >
            {t('hero_subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}
          >
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('hero_cta')} <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#portfolio"
              className="btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('hero_cta2')}
            </motion.a>
          </motion.div>

          {/* Stats — stagger each one */}
          <motion.div
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, auto)',
              gap: '3rem',
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                style={{
                  borderLeft: i > 0 ? '1px solid var(--color-border)' : 'none',
                  paddingLeft: i > 0 ? '3rem' : '0',
                }}
              >
                <motion.div
                  initial={{ filter: 'blur(8px)', opacity: 0 }}
                  animate={{ filter: 'blur(0px)', opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.15, ease: 'easeOut' }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {stat.num}
                </motion.div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--color-text-secondary)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
