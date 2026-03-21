'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Check, ArrowRight } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const packages = [
    {
      name: t('service_1_name'),
      price: t('service_1_price'),
      desc: t('service_1_desc'),
      features: [t('service_1_f1'), t('service_1_f2'), t('service_1_f3'), t('service_1_f4'), t('service_1_f5'), t('service_1_f6')],
      badge: null,
      highlighted: false,
    },
    {
      name: t('service_2_name'),
      price: t('service_2_price'),
      desc: t('service_2_desc'),
      features: [t('service_2_f1'), t('service_2_f2'), t('service_2_f3'), t('service_2_f4'), t('service_2_f5'), t('service_2_f6'), t('service_2_f7')],
      badge: t('service_2_badge'),
      highlighted: true,
    },
    {
      name: t('service_3_name'),
      price: t('service_3_price'),
      desc: t('service_3_desc'),
      features: [t('service_3_f1'), t('service_3_f2'), t('service_3_f3'), t('service_3_f4'), t('service_3_f5'), t('service_3_f6'), t('service_3_f7')],
      badge: null,
      highlighted: false,
    },
  ];

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            {t('services_tag')}
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem',
            }}
          >
            {t('services_title')}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {t('services_subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
        >
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: pkg.highlighted ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.05), rgba(129, 140, 248, 0.05))' : 'var(--color-bg-card)',
                borderRadius: '12px',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                border: pkg.highlighted ? '1px solid var(--color-accent)' : undefined,
              }}
            >
              {/* Badge */}
              {pkg.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    background: 'var(--color-accent)',
                    color: 'var(--color-bg)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '100px',
                    letterSpacing: '0.05em',
                  }}
                >
                  {pkg.badge}
                </div>
              )}

              {/* Package Name */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  marginBottom: '0.5rem',
                }}
              >
                {pkg.name}
              </h3>

              {/* Price */}
              <div style={{ marginBottom: '1rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '2.5rem',
                    color: pkg.highlighted ? 'var(--color-accent)' : 'var(--color-text)',
                  }}
                >
                  {pkg.price}
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginLeft: '0.25rem' }}>
                  USD
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                }}
              >
                {pkg.desc}
              </p>

              {/* Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', flex: 1 }}>
                {pkg.features.map((feature, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <Check size={16} style={{ color: 'var(--color-accent)', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={pkg.highlighted ? 'btn-primary' : 'btn-secondary'}
                style={{ justifyContent: 'center', width: '100%', textAlign: 'center' }}
              >
                {t('service_cta')} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
