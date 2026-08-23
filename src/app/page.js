import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Award, BarChart3, Users } from 'lucide-react';
import { siteData } from '@/config/siteData';
import { getImageUrl } from '@/utils/getImageUrl';

import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import TypewriterHeadline from '@/components/TypewriterHeadline';
import AbstractDataVisual from '@/components/AbstractDataVisual';
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

  const trustLogos = [
    { name: "USAID", src: "/images/partners/usaid.svg" },
    { name: "World Bank", src: "/images/partners/worldbank.svg" },
    { name: "UNICEF", src: "/images/partners/unicef.svg" },
    { name: "AfDB", src: "/images/partners/afdb.svg" }
  ];

  return (
    <div>
      
      {/* Redesigned Hero Section */}
      <section style={{
        padding: '1.5rem 1.5rem 4rem',
        backgroundColor: 'var(--bg-canvas)',
        borderBottom: '1px solid var(--slate-200)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        <div className="ambient-mesh-glow" style={{
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(245, 166, 35, 0.12) 0%, rgba(10, 37, 64, 0.06) 50%, rgba(255,255,255,0) 80%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Left (60%) / Right (40%) SaaS / Consultancy Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            
            {/* Left Column: Left-Aligned Content */}
            <div style={{ maxWidth: '680px' }}>
              
              <ScrollReveal direction="up" delay={0}>
                {/* Subtle Thin Anchor Line */}
                <hr className="hero-anchor-line" />

                {/* Micro-Animation Typewriter Headline */}
                <TypewriterHeadline />
              </ScrollReveal>

              <ScrollReveal direction="up" delay={150}>
                {/* 3 Bullet Points replacing dense block */}
                <div className="hero-bullet-list">
                  <div className="hero-bullet-item">
                    <span className="hero-bullet-icon">✓</span>
                    <span>Quasi-experimental impact evaluations</span>
                  </div>
                  <div className="hero-bullet-item">
                    <span className="hero-bullet-icon">✓</span>
                    <span>Econometric models &amp; real-time field data audits</span>
                  </div>
                  <div className="hero-bullet-item">
                    <span className="hero-bullet-icon">✓</span>
                    <span>Engineered to survive international donor audit</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={250}>
                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  {/* Solid Yellow Primary Button */}
                  <Link href={heroConfig.ctaPrimaryLink} className="btn btn-gold-primary" style={{ padding: '12px 26px', fontSize: '0.95rem', borderRadius: '8px' }}>
                    Request a Proposal <ArrowRight size={18} />
                  </Link>
                  
                  {/* Ghost Navy Border Button */}
                  <Link href={heroConfig.ctaSecondaryLink} className="btn btn-navy-ghost" style={{ padding: '12px 24px', fontSize: '0.95rem', borderRadius: '8px' }}>
                    See our track record
                  </Link>

                  {/* Online Partner Availability Dot */}
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', textDecoration: 'none' }}>
                    <span style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                      display: 'inline-block',
                      boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.25)'
                    }} />
                    <span>Speak with a partner</span>
                  </Link>
                </div>
              </ScrollReveal>

            </div>

            {/* Right Column: Abstract Data Visualization SVG */}
            <ScrollReveal direction="up" delay={200}>
              <AbstractDataVisual />
            </ScrollReveal>

          </div>

          {/* Stats Counters in Floating White Cards */}
          <ScrollReveal direction="up" delay={350}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem',
              marginTop: '4rem'
            }}>
              {metrics.map((m, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '1.5rem 1.25rem',
                  borderRadius: '16px',
                  border: '1px solid var(--slate-200)',
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                  transition: 'transform 0.3s ease'
                }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--accent-gold)', fontFamily: 'var(--font-inter)' }}>
                    <AnimatedCounter end={m.value} suffix={m.suffix} duration={1800} />
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--primary)', marginTop: '4px' }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--slate-600)', marginTop: '2px' }}>
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

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
