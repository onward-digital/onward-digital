'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Send, Mail, Clock, MapPin, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { scaleIn, slideInRight, fadeInUp, staggerContainer } from '@/hooks/animations';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = { name: '', email: '', projectType: '', message: '' };

export default function Contact() {
  const { t } = useLanguage();
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: formRef, isInView: formInView } = useScrollAnimation();
  const { ref: infoRef, isInView: infoInView } = useScrollAnimation();

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, projectType, message } = form;

    if (!name.trim() || !email.trim() || !projectType.trim() || !message.trim()) {
      setStatus('error');
      setStatusMessage(t('contact_validation_required'));
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setStatus('error');
      setStatusMessage(t('contact_validation_email'));
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, projectType, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setStatusMessage(t('contact_success'));
      setForm(initialForm);
    } catch {
      setStatus('error');
      setStatusMessage(t('contact_error'));
    }
  };

  return (
    <section id="contact" className="section-padding">
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
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
              color: 'var(--color-accent)', letterSpacing: '0.15em',
              display: 'block', marginBottom: '1rem',
            }}
          >
            {t('contact_tag')}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem',
            }}
          >
            {t('contact_title')}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '1.05rem',
              color: 'var(--color-text-secondary)', maxWidth: '500px',
              margin: '0 auto', lineHeight: 1.7,
            }}
          >
            {t('contact_subtitle')}
          </motion.p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Form — scale up + fade in */}
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={formInView ? 'visible' : 'hidden'}
            variants={scaleIn}
            style={{
              background: 'var(--color-bg-card)',
              borderRadius: '16px',
              padding: '2.5rem',
              border: '1px solid var(--color-border)',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.5rem',
                }}>
                  {t('contact_name')}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange('name')}
                  maxLength={100}
                  style={{
                    width: '100%', padding: '0.875rem 1rem',
                    background: 'var(--color-bg)', border: '1px solid var(--color-border)',
                    borderRadius: '8px', color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                    outline: 'none', transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                />
              </div>

              <div>
                <label style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.5rem',
                }}>
                  {t('contact_email')}
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  maxLength={150}
                  style={{
                    width: '100%', padding: '0.875rem 1rem',
                    background: 'var(--color-bg)', border: '1px solid var(--color-border)',
                    borderRadius: '8px', color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                    outline: 'none', transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                />
              </div>

              <div>
                <label style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.5rem',
                }}>
                  {t('contact_project')}
                </label>
                <select
                  value={form.projectType}
                  onChange={handleChange('projectType')}
                  style={{
                    width: '100%', padding: '0.875rem 1rem',
                    background: 'var(--color-bg)', border: '1px solid var(--color-border)',
                    borderRadius: '8px', color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                    outline: 'none', cursor: 'pointer',
                  }}
                >
                  <option value="">{t('contact_project_option1')}</option>
                  <option value={t('contact_project_option2')}>{t('contact_project_option2')}</option>
                  <option value={t('contact_project_option3')}>{t('contact_project_option3')}</option>
                  <option value={t('contact_project_option4')}>{t('contact_project_option4')}</option>
                  <option value={t('contact_project_option5')}>{t('contact_project_option5')}</option>
                  <option value={t('contact_project_option6')}>{t('contact_project_option6')}</option>
                </select>
              </div>

              <div>
                <label style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.5rem',
                }}>
                  {t('contact_message')}
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={handleChange('message')}
                  maxLength={2000}
                  style={{
                    width: '100%', padding: '0.875rem 1rem',
                    background: 'var(--color-bg)', border: '1px solid var(--color-border)',
                    borderRadius: '8px', color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                    outline: 'none', resize: 'vertical', transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary"
                style={{
                  justifyContent: 'center', width: '100%', marginTop: '0.5rem',
                  opacity: status === 'loading' ? 0.7 : 1,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                }}
                whileHover={status === 'loading' ? {} : { scale: 1.03 }}
                whileTap={status === 'loading' ? {} : { scale: 0.97 }}
              >
                {status === 'loading' ? (
                  <>
                    {t('contact_sending')}
                    <Loader2 size={16} className="spin" />
                  </>
                ) : (
                  <>
                    {t('contact_send')} <Send size={16} />
                  </>
                )}
              </motion.button>

              {(status === 'success' || status === 'error') && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                    textAlign: 'center', margin: 0,
                    color: status === 'success' ? '#4ade80' : '#f87171',
                  }}
                >
                  {statusMessage}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info — slides from right */}
          <motion.div
            ref={infoRef}
            initial="hidden"
            animate={infoInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}
          >
            <motion.h3
              variants={slideInRight}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem' }}
            >
              {t('contact_info_title')}
            </motion.h3>

            {[
              { icon: <Mail size={20} />, label: t('contact_email_label'), value: t('contact_email_value') },
              { icon: <Clock size={20} />, label: t('contact_response'), value: t('contact_response_value') },
              { icon: <MapPin size={20} />, label: t('contact_location'), value: t('contact_location_value') },
            ].map((item, i) => (
              <motion.div key={i} variants={slideInRight} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px',
                  background: 'var(--color-accent-glow)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-accent)', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.25rem' }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem' }}>
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
