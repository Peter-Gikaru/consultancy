'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, ShieldCheck, CheckCircle2, User, Award, BookOpen, Building2, MapPin, Globe, Check } from 'lucide-react';
import { siteData } from '@/config/siteData';
import { siteSettingsStore } from '@/utils/siteSettingsStore';
import { getImageUrl } from '@/utils/getImageUrl';
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
        padding: '1.5rem 1.5rem 3.5rem',
        backgroundColor: 'var(--bg-canvas)',
        borderBottom: '1px solid var(--slate-200)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="ambient-mesh-glow" style={{
          top: '-10%',
          right: '5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(245, 166, 35, 0.12) 0%, rgba(10, 37, 64, 0.06) 50%, rgba(255,255,255,0) 80%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal direction="up" delay={0}>
            <div style={{ maxWidth: '840px' }}>
              <hr className="hero-anchor-line" />
              <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', marginTop: '8px', marginBottom: '16px', color: 'var(--primary)' }}>
                Senior Evaluation Leadership <span style={{ color: 'var(--accent-gold)' }}>On Every Mandate.</span>
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
          <div className="grid-2" style={{ gap: '48px', alignItems: 'start' }}>
            
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
                
                {/* Authentic Kenyan Field Verification Photo */}
                <div style={{ marginTop: '20px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--slate-200)' }}>
                  <img
                    src={getImageUrl('/images/hero-kenya.jpg')}
                    alt="Kenyan agricultural development and field evaluation protocol in Gilgil, Kenya"
                    style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
            
            <ScrollReveal direction="up" delay={100}>
              <div>
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
                    className="btn btn-gold-primary"
                    style={{ gap: '10px' }}
                  >
                    <Download size={18} /> Download Full CV (PDF)
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Nairobi Headquarters & Credentials Card */}
            <ScrollReveal direction="up" delay={200}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--slate-200)',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.06)'
              }}>
                <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={getImageUrl('/images/contact-hero.jpg')}
                    alt="Nairobi Central Business District skyline from KICC"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '12px' }}>
                    Institutional Evaluation Track Record
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: 'var(--slate-600)' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <Check size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                      <span><strong>OECD / PARIS21:</strong> Pooled Time-Series Cross-Sectional Impact Design (Paris)</span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <Check size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                      <span><strong>African Union:</strong> 9-Country Ecological &amp; Organic Agriculture Evaluation</span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <Check size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                      <span><strong>World Bank DRIVE:</strong> Pastoralist De-Risking in Horn of Africa</span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <Check size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                      <span><strong>Equity Group Foundation:</strong> Former Head of M&amp;E (6 national programs)</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div style={{ marginBottom: '40px' }}>
              <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', color: 'var(--accent-gold-hover)' }}>
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
                <div className="card" style={{ padding: '24px 32px', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <ShieldCheck size={26} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
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

      <section className="section section-dark" style={{ textAlign: 'center', padding: '80px 24px', backgroundColor: '#0A2540' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <ScrollReveal direction="zoom" delay={0}>
            <h2 style={{ color: '#FFFFFF', fontSize: '2.2rem', marginBottom: '16px', fontFamily: 'var(--font-playfair)' }}>
              Ready to discuss your evaluation assignment?
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: '28px' }}>
              Contact our lead consultant directly to explore designs, methods, and timelines.
            </p>
            <Link href="/contact" className="btn btn-gold-primary" style={{ padding: '14px 32px' }}>
              Get in touch →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
