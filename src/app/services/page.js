import Link from 'next/link';
import { Check, ShieldCheck, ArrowRight, FileCheck, BarChart2, Radio, GraduationCap } from 'lucide-react';
import { siteData } from '@/config/siteData';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: siteData.servicesConfig.seoTitle,
  description: siteData.servicesConfig.seoDescription
};

export default function ServicesPage() {
  const { servicesConfig } = siteData;

  const icons = [
    <FileCheck key="1" size={32} color="var(--accent-amber)" />,
    <BarChart2 key="2" size={32} color="var(--accent-amber)" />,
    <Radio key="3" size={32} color="var(--accent-amber)" />,
    <GraduationCap key="4" size={32} color="var(--accent-amber)" />
  ];

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
                Four Research Disciplines. <span style={{ color: 'var(--accent-amber-hover)' }}>Zero-Tolerance Audit Rigour.</span>
              </h1>
              <p className="lead" style={{ color: 'var(--slate-700)', fontSize: '1.15rem', lineHeight: '1.65' }}>
                From quasi-experimental RCT counterfactuals to high-frequency mobile polling — four specialized research disciplines built for donor steering committees and evidence-based governance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {servicesConfig.list.map((service, index) => (
              <ScrollReveal key={service.id} direction="up" delay={index * 120}>
                <div
                  id={service.id}
                  className="card"
                  style={{ padding: '40px' }}
                >
                  <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ padding: '12px', borderRadius: '12px', backgroundColor: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {icons[index]}
                    </div>
                    <h2 style={{ fontSize: '1.8rem', margin: 0 }}>
                      {service.title}
                    </h2>
                  </div>

                  <p style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-main)', marginBottom: '24px' }}>
                    {service.tagline}
                  </p>

                  <div style={{ marginBottom: '24px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {service.items.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '1rem', color: 'var(--text-muted)' }}>
                          <Check size={18} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '4px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.typicalClients && (
                    <div style={{
                      padding: '16px 20px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-subtle)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.925rem',
                      color: 'var(--text-muted)',
                      marginBottom: service.complianceNote ? '16px' : '0'
                    }}>
                      <strong style={{ color: 'var(--text-main)' }}>Typical clients:</strong> {service.typicalClients}
                    </div>
                  )}

                  {service.complianceNote && (
                    <div style={{
                      padding: '16px 20px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--bg-subtle)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.925rem',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px'
                    }}>
                      <ShieldCheck size={20} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ color: 'var(--text-main)' }}>Compliance &amp; Methodological Disclosure:</strong> {service.complianceNote}
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ textAlign: 'center', padding: '88px 24px' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <ScrollReveal direction="zoom" delay={0}>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '16px' }}>
              Not sure which of these you need?
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#94A3B8', marginBottom: '32px' }}>
              {servicesConfig.closingCta}
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              Contact Us <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
