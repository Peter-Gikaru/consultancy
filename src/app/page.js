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
    { name: "OECD", src: "/images/partners/oecd.svg" },
    { name: "African Union", src: "/images/partners/au.png" },
    { name: "World Bank", src: "/images/partners/worldbank.svg" },
    { name: "Equity Group", src: "/images/partners/equity-group.png" },
    { name: "USAID", src: "/images/partners/usaid.png" }
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

      {/* Home Page Authentic Field & Policy Showcase */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--slate-200)' }}>
        <div className="container" style={{ maxWidth: '1140px' }}>
          <ScrollReveal direction="up" delay={0}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '3rem' }}>
              <div>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', color: 'var(--accent-amber-hover)' }}>
                  Empirical Evidence in Action
                </span>
                <h2 style={{ fontSize: '2.25rem', color: 'var(--text-main)', margin: '6px 0 0', fontFamily: 'var(--font-lora)' }}>
                  Sector Engagements Across Africa
                </h2>
              </div>
              <Link href="/track-record" className="btn btn-navy-ghost" style={{ padding: '10px 22px', fontSize: '0.9rem', borderRadius: '8px' }}>
                View Full Track Record <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}>
            {/* Card 1: Horn of Africa Climate & Pastoralism */}
            <ScrollReveal direction="up" delay={100}>
              <div className="card" style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '14px', border: '1px solid var(--slate-200)' }}>
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={getImageUrl('/images/climate-project.jpg')}
                    alt="Pastoralist communities and livestock resilience in the Horn of Africa"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '8px', fontFamily: 'var(--font-lora)' }}>
                    Pastoralist Risk Transfer &amp; Climate Resilience
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--slate-600)', lineHeight: '1.6', margin: 0 }}>
                    Monitoring livestock drought risk financing, water infrastructure points, and de-risking mechanisms across Northern Kenya and cross-border pastoralist corridors.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Turkana Health & Nutrition MEAL */}
            <ScrollReveal direction="up" delay={200}>
              <div className="card" style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '14px', border: '1px solid var(--slate-200)' }}>
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={getImageUrl('/images/kenya-health-case.jpg')}
                    alt="Maternal and community nutrition evaluation in Lodwar, Turkana County, Kenya"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '8px', fontFamily: 'var(--font-lora)' }}>
                    Maternal Health &amp; Community Nutrition MEAL
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--slate-600)', lineHeight: '1.6', margin: 0 }}>
                    Quasi-experimental evaluations of nutritional support groups, cash assistance transfers, and facility-level health delivery across arid and semi-arid counties.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: High-Level Policy & Multilateral Advisory */}
            <ScrollReveal direction="up" delay={300}>
              <div className="card" style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '14px', border: '1px solid var(--slate-200)' }}>
                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={getImageUrl('/images/policy-meeting.jpg')}
                    alt="African Union high-level diplomatic policy advisory boardroom summit"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '8px', fontFamily: 'var(--font-lora)' }}>
                    Pan-African Evidence-Based Policy Advisory
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--slate-600)', lineHeight: '1.6', margin: 0 }}>
                    Translating empirical survey findings, counterfactual econometric models, and institutional evaluations into high-level policy papers and ministerial roadmaps.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

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
