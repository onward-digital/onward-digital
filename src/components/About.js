'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Lightbulb, Layers, Target } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

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
          {/* Left: Text */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-accent)',
                letterSpacing: '0.15em',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              {t('about_tag')}
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: '1.5rem',
                lineHeight: 1.1,
              }}
            >
              {t('about_title')}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}
            >
              {t('about_p1')}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8,
              }}
            >
              {t('about_p2')}
            </p>
          </div>

          {/* Right: Feature Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {features.map((feature, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: 'var(--color-bg-card)',
                  borderRadius: '12px',
                  padding: '1.75rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    background: 'var(--color-accent-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
