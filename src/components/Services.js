'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { fadeInUp, slideInLeft, staggerContainer } from '@/hooks/animations';

export default function Services() {
  const { t } = useLanguage();
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation();

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
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.span
            variants={fadeInUp}
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
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem',
            }}
          >
            {t('services_title')}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
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
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          ref={cardsRef}
          initial="hidden"
          animate={cardsInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              variants={slideInLeft}
              custom={i}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                background: pkg.highlighted
                  ? 'linear-gradient(135deg, rgba(34, 211, 238, 0.05), rgba(129, 140, 248, 0.05))'
                  : 'var(--color-bg-card)',
                borderRadius: '12px',
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                border: pkg.highlighted ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              className="service-card"
            >
              {/* Badge */}
              {pkg.badge && (
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
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
                </motion.div>
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
              <motion.a
                href="#contact"
                className={pkg.highlighted ? 'btn-primary' : 'btn-secondary'}
                style={{ justifyContent: 'center', width: '100%', textAlign: 'center' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('service_cta')} <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
