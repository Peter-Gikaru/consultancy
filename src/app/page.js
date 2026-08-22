import Link from 'next/link';
import { ArrowRight, ShieldCheck, BarChart3, Users, BookOpen, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteData } from '@/config/siteData';

import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import PartnerTrustGrid from '@/components/PartnerTrustGrid';
import AlternatingFeatureBlocks from '@/components/AlternatingFeatureBlocks';
import WhyDerapGrid from '@/components/WhyDerapGrid';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FaqAccordion from '@/components/FaqAccordion';
import CallToActionBanner from '@/components/CallToActionBanner';

export const metadata = {
  title: "DERAP Consult Limited | Evaluation, Research & Data Analytics — Nairobi, Kenya",
  description: "A Kenyan research and evaluation firm specialising in rigorous impact evaluation, advanced quantitative analysis and transparent public opinion research across Africa.",
};

export default function HomePage() {
  const { heroConfig } = siteData;

  const metrics = [
    { label: "Evaluation Experience", value: "12", suffix: "+ Years", sub: "Senior Lead Delivery" },
    { label: "Countries Covered", value: "12", suffix: " Countries", sub: "Across Africa & Europe" },
    { label: "Major Assignments", value: "11", suffix: "+ Mandates", sub: "OECD, AU, World Bank" },
    { label: "Data Quality Audit", value: "100", suffix: "%", sub: "Methodological Transparency" }
  ];

  return (
    <div>
      
      <section style={{
        padding: '1.75rem 1.5rem 4.5rem',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--slate-200)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        <div className="ambient-mesh-glow" style={{
          top: '-15%',
          right: '-5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(30, 58, 138, 0.08) 50%, rgba(255,255,255,0) 80%)'
        }} />

        <div className="container">
          <div style={{ maxWidth: '860px', position: 'relative', zIndex: 2 }}>
            
            <ScrollReveal direction="up" delay={0}>
              <h1 className="hero-headline" style={{ marginBottom: '1.25rem', lineHeight: '1.2' }}>
                Building <span className="hero-inline-badge">Methodological Rigour</span> in Impact Evaluation &amp; Policy Analytics.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <p className="lead" style={{ marginBottom: '2.25rem', maxWidth: '820px', color: 'var(--slate-700)', fontSize: '1.2rem', lineHeight: '1.65' }}>
                Empirical proof for high-stakes policy. We deliver quasi-experimental impact evaluations, econometric models, and real-time field data audits across Sub-Saharan Africa — engineered to survive international donor audit.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
                <Link href={heroConfig.ctaPrimaryLink} className="glow-cta-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  {heroConfig.ctaPrimaryText} <ArrowRight size={18} />
                </Link>
                <Link href={heroConfig.ctaSecondaryLink} className="btn btn-outline btn-lg">
                  {heroConfig.ctaSecondaryText}
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={350}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '1.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--slate-200)'
              }}>
                {metrics.map((m, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: '1.45rem', fontWeight: '800', color: 'var(--accent-amber-hover)', fontFamily: 'var(--font-inter)' }}>
                      <AnimatedCounter end={m.value} suffix={m.suffix} duration={1800} />
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--slate-900)' }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--slate-600)' }}>
                      {m.sub}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <ScrollReveal direction="up" delay={100}>
        <PartnerTrustGrid />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <AlternatingFeatureBlocks />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <WhyDerapGrid />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <TestimonialCarousel />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <FaqAccordion />
      </ScrollReveal>

      <ScrollReveal direction="zoom" delay={100}>
        <CallToActionBanner />
      </ScrollReveal>
    </div>
  );
}
