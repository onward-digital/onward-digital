'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

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
      {/* Background Gradient */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '30%',
          height: '30%',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        {/* Tag */}
        <div
          className="animate-fade-in-up"
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
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent)', animation: 'pulse-glow 2s infinite' }} />
          {t('hero_tag')}
        </div>

        {/* Title */}
        <h1
          className="animate-fade-in-up delay-100"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: 1.05,
            marginBottom: '1.5rem',
            opacity: 0,
          }}
        >
          {t('hero_title_1')}<br />
          <span className="gradient-text">{t('hero_title_2')}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up delay-200"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--color-text-secondary)',
            maxWidth: '600px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            opacity: 0,
          }}
        >
          {t('hero_subtitle')}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-in-up delay-300"
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem', opacity: 0 }}
        >
          <a href="#contact" className="btn-primary">
            {t('hero_cta')} <ArrowRight size={18} />
          </a>
          <a href="#portfolio" className="btn-secondary">
            {t('hero_cta2')}
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-in-up delay-400"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, auto)',
            gap: '3rem',
            opacity: 0,
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} style={{ borderLeft: i > 0 ? '1px solid var(--color-border)' : 'none', paddingLeft: i > 0 ? '3rem' : '0' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--color-accent)' }}>
                {stat.num}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="animate-fade-in delay-600"
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
          opacity: 0,
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>SCROLL</span>
        <ChevronDown size={16} style={{ animation: 'fadeInUp 1.5s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
