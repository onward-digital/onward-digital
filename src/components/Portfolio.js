'use client';

import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, Code } from 'lucide-react';

export default function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      name: t('project_1_name'),
      type: t('project_1_type'),
      desc: t('project_1_desc'),
      highlight: t('project_1_highlight'),
      color: '#22d3ee',
      gradient: 'linear-gradient(135deg, #0e4a5c, #0c2d3a)',
      mockupText: 'M&A',
      url: 'https://martinez-asociados.vercel.app/',
    },
    {
      name: t('project_2_name'),
      type: t('project_2_type'),
      desc: t('project_2_desc'),
      highlight: t('project_2_highlight'),
      color: '#818cf8',
      gradient: 'linear-gradient(135deg, #3730a3, #1e1b4b)',
      mockupText: 'ALMA',
      url: 'https://alma-store-pink.vercel.app/',
    },
    {
      name: t('project_3_name'),
      type: t('project_3_type'),
      desc: t('project_3_desc'),
      highlight: t('project_3_highlight'),
      color: '#34d399',
      gradient: 'linear-gradient(135deg, #065f46, #022c22)',
      mockupText: 'NV',
      url: 'https://nutrivida-iota.vercel.app/',
    },
  ];

  return (
    <section id="portfolio" className="section-padding">
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
            {t('portfolio_tag')}
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem',
            }}
          >
            {t('portfolio_title')}
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
            {t('portfolio_subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                background: 'var(--color-bg-card)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              }}
            >
              {/* Mockup Preview */}
              <div
                style={{
                  background: project.gradient,
                  padding: '3rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '280px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative circles */}
                <div style={{
                  position: 'absolute',
                  top: '-20%',
                  right: '-10%',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  border: `1px solid ${project.color}22`,
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '-15%',
                  left: '-5%',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  border: `1px solid ${project.color}22`,
                }} />

                {/* Browser Mockup */}
                <div
                  style={{
                    width: '90%',
                    maxWidth: '380px',
                    background: 'rgba(0,0,0,0.4)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${project.color}15`,
                  }}
                >
                  {/* Browser bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 14px', background: 'rgba(0,0,0,0.3)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#eab308' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                    <div style={{
                      flex: 1,
                      marginLeft: '8px',
                      height: '20px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      color: 'rgba(255,255,255,0.3)',
                    }}>
                      {project.name.toLowerCase().replace(/[^a-z]/g, '')}.vercel.app
                    </div>
                  </div>
                  {/* Content placeholder */}
                  <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '2rem',
                      color: project.color,
                      letterSpacing: '0.1em',
                    }}>
                      {project.mockupText}
                    </div>
                    <div style={{ width: '80%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }} />
                    <div style={{ width: '60%', height: '6px', background: 'rgba(255,255,255,0.07)', borderRadius: '3px' }} />
                    <div style={{ width: '70%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px' }} />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: project.color,
                    letterSpacing: '0.15em',
                    marginBottom: '0.75rem',
                  }}
                >
                  {project.type}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem',
                  }}
                >
                  {project.desc}
                </p>

                {/* Tech Highlight */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: `${project.color}08`,
                    borderRadius: '8px',
                    border: '1px solid var(--color-border)',
                    marginBottom: '1.5rem',
                  }}
                >
                  <Code size={18} style={{ color: project.color }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-text-secondary)', letterSpacing: '0.1em' }}>
                      {t('project_highlight')}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem', color: project.color }}>
                      {project.highlight}
                    </div>
                  </div>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: 'var(--color-accent)',
                    textDecoration: 'none',
                    transition: 'gap 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.gap = '0.75rem')}
                  onMouseLeave={(e) => (e.currentTarget.style.gap = '0.5rem')}
                >
                  {t('project_cta')} <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
