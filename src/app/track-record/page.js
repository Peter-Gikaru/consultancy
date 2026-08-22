import Link from 'next/link';
import { ShieldAlert, Globe2, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteData } from '@/config/siteData';
import ScrollReveal from '@/components/ScrollReveal';
import RadialGaugeMetric from '@/components/RadialGaugeMetric';

export const metadata = {
  title: siteData.trackRecordConfig.seoTitle,
  description: siteData.trackRecordConfig.seoDescription
};

export default function TrackRecordPage() {
  const { trackRecordConfig } = siteData;

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
                12 Sub-Saharan Nations. <span style={{ color: 'var(--accent-amber-hover)' }}>250+ Verified Field Surveys.</span>
              </h1>
              <p className="lead" style={{ color: 'var(--slate-700)', fontSize: '1.15rem', lineHeight: '1.65' }}>
                A 12-year track record leading complex evaluation mandates for the OECD, African Union, World Bank-financed programs, and international development agencies across Africa and Europe.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ backgroundColor: '#F8FAFC', padding: '32px 24px', borderBottom: '1px solid var(--slate-200)' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={100}>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
              <RadialGaugeMetric percentage={100} label="GPS Verification Rate" color="var(--accent-amber)" />
              <RadialGaugeMetric percentage={98} label="Data Quality Score" color="var(--primary)" />
              <RadialGaugeMetric percentage={100} label="OECD-DAC Compliance" color="var(--accent-emerald)" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div style={{ marginBottom: '32px' }}>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', color: 'var(--text-subtle)' }}>
                Direct Corporate Engagement
              </span>
              <h2 style={{ fontSize: '2.2rem', marginTop: '4px' }}>
                DERAP Corporate Assignments
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {trackRecordConfig.corporateAssignments.map((corp, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <div className="card" style={{ padding: '32px', borderColor: 'var(--border-accent)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '1.4rem', margin: 0 }}>
                      {corp.title}
                    </h3>
                    <span className="badge badge-amber">
                      {corp.client} · {corp.country}
                    </span>
                  </div>
                  <p style={{ fontSize: '1.025rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.65' }}>
                    {corp.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div style={{ marginBottom: '32px' }}>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', color: 'var(--text-subtle)' }}>
                Technical Leadership Portfolio
              </span>
              <h2 style={{ fontSize: '2.2rem', marginTop: '4px', marginBottom: '16px' }}>
                Assignments Led by Our Lead Consultant
              </h2>
              
              <div style={{
                padding: '16px 20px',
                borderRadius: '10px',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-light)',
                fontSize: '0.925rem',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                maxWidth: '900px'
              }}>
                <ShieldAlert size={20} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  {trackRecordConfig.leadConsultantDisclosure}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th style={{ width: '45%' }}>Assignment</th>
                    <th style={{ width: '25%' }}>Client / Funder</th>
                    <th style={{ width: '18%' }}>Country</th>
                    <th style={{ width: '12%' }}>Period</th>
                  </tr>
                </thead>
                <tbody>
                  {trackRecordConfig.leadAssignments.map((row, idx) => (
                    <tr key={idx}>
                      <td>
                        <strong style={{ color: 'var(--text-main)', display: 'block' }}>
                          {row.assignment}
                        </strong>
                      </td>
                      <td style={{ fontWeight: '500' }}>{row.client}</td>
                      <td>{row.country}</td>
                      <td><span className="badge">{row.period}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '40px' }}>
            
            <ScrollReveal direction="up" delay={100}>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <Layers size={24} color="var(--accent-amber)" />
                  <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Sectors</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {trackRecordConfig.sectors.map((sector, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.975rem', color: 'var(--text-muted)' }}>
                      <CheckCircle2 size={16} color="var(--accent-amber)" style={{ flexShrink: 0 }} />
                      <span>{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <Globe2 size={24} color="var(--accent-amber)" />
                  <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Countries Delivered</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {trackRecordConfig.countries.map((country, idx) => (
                    <span key={idx} className="badge" style={{ fontSize: '0.9rem', padding: '8px 16px', backgroundColor: '#FFFFFF' }}>
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <ScrollReveal direction="zoom" delay={0}>
            <h2 style={{ color: '#FFFFFF', fontSize: '2.2rem', marginBottom: '16px' }}>
              Commissioning an evaluation or data audit?
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: '28px' }}>
              Tell us about your project requirements and target countries.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Request a proposal <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
