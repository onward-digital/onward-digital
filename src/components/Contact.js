'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Send, Mail, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Acá después conectamos con un servicio como Formspree, Resend, etc.
    alert('Message sent! (Demo)');
  };

  return (
    <section id="contact" className="section-padding">
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
            {t('contact_tag')}
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem',
            }}
          >
            {t('contact_title')}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {t('contact_subtitle')}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Form */}
          <div
            style={{
              background: 'var(--color-bg-card)',
              borderRadius: '16px',
              padding: '2.5rem',
              border: '1px solid var(--color-border)',
            }}
          >
            <div onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {t('contact_name')}
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                />
              </div>

              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {t('contact_email')}
                </label>
                <input
                  type="email"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                />
              </div>

              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {t('contact_project')}
                </label>
                <select
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option>{t('contact_project_option1')}</option>
                  <option>{t('contact_project_option2')}</option>
                  <option>{t('contact_project_option3')}</option>
                  <option>{t('contact_project_option4')}</option>
                  <option>{t('contact_project_option5')}</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {t('contact_message')}
                </label>
                <textarea
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                />
              </div>

              <button onClick={handleSubmit} className="btn-primary" style={{ justifyContent: 'center', width: '100%', marginTop: '0.5rem' }}>
                {t('contact_send')} <Send size={16} />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.5rem',
              }}
            >
              {t('contact_info_title')}
            </h3>

            {[
              { icon: <Mail size={20} />, label: t('contact_email_label'), value: 'hello@onward.digital' },
              { icon: <Clock size={20} />, label: t('contact_response'), value: t('contact_response_value') },
              { icon: <MapPin size={20} />, label: t('contact_location'), value: t('contact_location_value') },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'var(--color-accent-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                    flexShrink: 0,
                  }}
                >
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
