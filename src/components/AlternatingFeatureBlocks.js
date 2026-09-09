import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, BarChart3, Database, ShieldCheck, MapPin, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { getImageUrl } from '@/utils/getImageUrl';

export default function AlternatingFeatureBlocks() {
  return (
    <section style={{ padding: '6rem 1.5rem', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--slate-200)' }}>
      <div className="container" style={{ maxWidth: '1140px' }}>
        
        {/* Row 1: Rigorous Evaluation & Field Enumeration Photo Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px',
          alignItems: 'center',
          marginBottom: '6rem'
        }}>
          <ScrollReveal direction="right" delay={0}>
            <div>
              <h2 style={{ fontSize: '2.25rem', color: 'var(--text-main)', margin: '0 0 16px', fontFamily: 'var(--font-lora)', lineHeight: '1.25' }}>
                Designed for Rigour. Built for High-Stakes Policy.
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', marginBottom: '28px', lineHeight: '1.6' }}>
                We combine randomized control trials (RCTs), quasi-experimental designs, and high-frequency data audits to deliver empirical proof that survives international audit.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                <div className="feature-pill-tag"><CheckCircle2 size={16} color="var(--accent-amber)" /> Quasi-Experimental Designs</div>
                <div className="feature-pill-tag"><CheckCircle2 size={16} color="var(--accent-amber)" /> Baseline &amp; Endline Evaluation</div>
                <div className="feature-pill-tag"><CheckCircle2 size={16} color="var(--accent-amber)" /> OECD-DAC Standard Assessment</div>
              </div>

              <Link href="/services" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                Explore Evaluation Methods <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={150}>
            <div className="glass-card-hover" style={{ padding: 0, overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--slate-200)' }}>
              {/* Authentic Field Enumerator Photo */}
              <div style={{ height: '230px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={getImageUrl('/images/field-enumerator-survey.jpg')}
                  alt="Real-time mobile CAPI survey enumerator interviewing respondent in field evaluation"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Impact Scorecard Engine Metrics */}
              <div style={{ padding: '24px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                  <div className="gradient-icon-badge" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)', color: '#FFF' }}>
                    <BarChart3 size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Impact Scorecard Engine</h3>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>Real-Time Verification Architecture</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ padding: '10px 14px', backgroundColor: 'var(--bg-subtle)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-main)' }}>Sampling Margin of Error</span>
                    <span style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--accent-amber-hover)' }}>&lt; 2.5%</span>
                  </div>
                  <div style={{ padding: '10px 14px', backgroundColor: 'var(--bg-subtle)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-main)' }}>GPS Verification Rate</span>
                    <span style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--accent-emerald)' }}>100% Audit Tracked</span>
                  </div>
                  <div style={{ padding: '10px 14px', backgroundColor: 'var(--bg-subtle)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-main)' }}>Field Team Deployment</span>
                    <span style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--primary)' }}>Agile Pan-African</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Row 2: Data Architecture & Stata Econometrics Photo Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px',
          alignItems: 'center'
        }}>
          <ScrollReveal direction="right" delay={150}>
            <div className="glass-card-hover" style={{ padding: 0, overflow: 'hidden', borderRadius: '16px', border: '1px solid var(--slate-200)' }}>
              {/* Authentic Stata Regression Visual */}
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden', backgroundColor: '#F8FAFC', borderBottom: '1px solid var(--slate-200)' }}>
                <img
                  src={getImageUrl('/images/stata-econometric-regression.png')}
                  alt="Authentic Stata econometric regression discontinuity and counterfactual estimation plot"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Advanced Quantitative Suite Badges */}
              <div style={{ padding: '24px 28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                  <div className="gradient-icon-badge" style={{ background: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)', color: '#FFF' }}>
                    <Database size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Advanced Quantitative Suite</h3>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-subtle)' }}>Peer-Reviewed Econometric Analysis</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ padding: '10px 14px', backgroundColor: 'rgba(30, 58, 138, 0.05)', borderRadius: '10px', flex: '1 1 45%', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={16} color="var(--primary)" /> ODPC / GDPR Security
                  </div>
                  <div style={{ padding: '10px 14px', backgroundColor: 'rgba(30, 58, 138, 0.05)', borderRadius: '10px', flex: '1 1 45%', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Zap size={16} color="var(--accent-amber)" /> Instant Data Sync
                  </div>
                  <div style={{ padding: '10px 14px', backgroundColor: 'rgba(30, 58, 138, 0.05)', borderRadius: '10px', flex: '1 1 45%', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} color="var(--primary)" /> GIS Spatial Mapping
                  </div>
                  <div style={{ padding: '10px 14px', backgroundColor: 'rgba(30, 58, 138, 0.05)', borderRadius: '10px', flex: '1 1 45%', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <BarChart3 size={16} color="var(--accent-amber)" /> Open Science Reproducibility
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0}>
            <div>
              <h2 style={{ fontSize: '2.25rem', color: 'var(--text-main)', margin: '0 0 16px', fontFamily: 'var(--font-lora)', lineHeight: '1.25' }}>
                Data Architecture Built for Sustainable Impact.
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', marginBottom: '28px', lineHeight: '1.6' }}>
                Whether you are preparing a multi-million-dollar donor evaluation or monitoring agricultural resilience across regional counties, our analytical pipeline adapts seamlessly.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                <div className="feature-pill-tag"><CheckCircle2 size={16} color="var(--accent-amber)" /> Role-Based Access</div>
                <div className="feature-pill-tag"><CheckCircle2 size={16} color="var(--accent-amber)" /> Instant Sync</div>
                <div className="feature-pill-tag"><CheckCircle2 size={16} color="var(--accent-amber)" /> Secure Sharing</div>
                <div className="feature-pill-tag"><CheckCircle2 size={16} color="var(--accent-amber)" /> Multi-County Networks</div>
              </div>

              <Link href="/contact" className="btn btn-secondary" style={{ padding: '12px 28px' }}>
                Request Analytical Consult <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
