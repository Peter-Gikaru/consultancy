'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, ShieldCheck, CheckCircle2, User, Award, BookOpen, Building2 } from 'lucide-react';
import { siteData } from '@/config/siteData';
import { siteSettingsStore } from '@/utils/siteSettingsStore';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
  const [settings, setSettings] = useState(siteSettingsStore.getSettings());
  const { aboutConfig } = siteData;

  useEffect(() => {
    const handleUpdate = () => {
      setSettings(siteSettingsStore.getSettings());
    };
    window.addEventListener('derap_settings_updated', handleUpdate);
    return () => window.removeEventListener('derap_settings_updated', handleUpdate);
  }, []);

  return (
    <div>
      
      <section style={{
        padding: '24px 24px 48px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div style={{ maxWidth: '840px' }}>
              <h1 style={{ fontSize: '2.8rem', marginTop: '8px', marginBottom: '16px' }}>
                Senior Evaluation Leadership <span style={{ color: 'var(--accent-amber-hover)' }}>On Every Mandate.</span>
              </h1>
              <p className="lead" style={{ color: 'var(--slate-700)', fontSize: '1.15rem', lineHeight: '1.65' }}>
                Led by John Ngotho Kinyua, MA (ex-OECD Paris &amp; Equity Group Foundation M&amp;E Head), backed by 250+ trained, bilingual field enumerators delivering empirical proof across East, Central, and West Africa.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '48px' }}>
            
            <ScrollReveal direction="up" delay={100}>
              <div className="card">
                <div style={{ display: 'inline-flex', padding: '8px 14px', borderRadius: '8px', backgroundColor: 'var(--bg-subtle)', color: 'var(--text-main)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '16px' }}>
                  <Building2 size={16} style={{ marginRight: '6px' }} /> Who We Are
                </div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
                  Generating credible evidence where it matters most.
                </h2>
                {aboutConfig.whoWeAre.map((p, idx) => (
                  <p key={idx} style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="card">
                <div style={{ display: 'inline-flex', padding: '8px 14px', borderRadius: '8px', backgroundColor: 'var(--bg-subtle)', color: 'var(--text-main)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '16px' }}>
                  <Award size={16} style={{ marginRight: '6px' }} /> How We Work
                </div>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
                  Lean structure, tight quality control.
                </h2>
                {aboutConfig.howWeWork.map((p, idx) => (
                  <p key={idx} style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={100}>
            <div style={{ maxWidth: '860px' }}>
              <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', color: 'var(--accent-amber-hover)' }}>
                Leadership
              </span>
              <h2 style={{ fontSize: '2.4rem', marginTop: '6px', marginBottom: '8px' }}>
                Our Lead Consultant
              </h2>
              <div style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-main)', marginBottom: '4px' }}>
                {aboutConfig.leadConsultant.name}
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-subtle)', marginBottom: '28px', fontWeight: '500' }}>
                {aboutConfig.leadConsultant.title}
              </div>

              <div style={{ borderLeft: '3px solid var(--accent-amber)', paddingLeft: '24px', marginBottom: '32px' }}>
                {aboutConfig.leadConsultant.bio.map((paragraph, idx) => (
                  <p key={idx} style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '16px' }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div>
                <a
                  href={settings.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ gap: '10px' }}
                >
                  <Download size={18} /> Download Full CV (PDF)
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div style={{ marginBottom: '40px' }}>
              <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', color: 'var(--accent-amber-hover)' }}>
                Principles
              </span>
              <h2 style={{ fontSize: '2.2rem', marginTop: '6px' }}>
                What We Stand For
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {aboutConfig.values.map((val, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className="card" style={{ padding: '24px 32px' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <ShieldCheck size={26} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '6px' }}>
                        {val.title}
                      </h3>
                      <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                        {val.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <ScrollReveal direction="zoom" delay={0}>
            <h2 style={{ color: '#FFFFFF', fontSize: '2.2rem', marginBottom: '16px' }}>
              Ready to discuss your evaluation assignment?
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: '28px' }}>
              Contact our lead consultant directly to explore designs, methods, and timelines.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Get in touch →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
