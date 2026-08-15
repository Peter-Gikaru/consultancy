'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  LifeBuoy,
  ShieldAlert,
  Users,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import VerticalSpotlightCarousel from '@/components/VerticalSpotlightCarousel';
import InteractiveHeroScorecard from '@/components/InteractiveHeroScorecard';
import RotatingHeroHeadline from '@/components/RotatingHeroHeadline';
import RadialGaugeMetric from '@/components/RadialGaugeMetric';
import ScrollReveal from '@/components/ScrollReveal';
import { siteData } from '@/config/siteData';
import { mediaStore, getImageUrl } from '@/utils/mediaStore';

export default function HomePage() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const loadStories = async () => {
      let serverPosts = [];
      try {
        const res = await fetch('/api/posts');
        const data = await res.json();
        if (data.success) serverPosts = data.posts;
      } catch (e) {
        // static fallback
      }

      const custom = mediaStore.getCustomPosts();
      const combinedServerCustom = [...custom, ...serverPosts];

      const formattedPosts = combinedServerCustom.map((post) => ({
        id: post.id,
        title: post.title,
        clientType: `${post.category} • ${post.author}`,
        impactMetric: post.impactMetric || 'Verified Outcome',
        image: post.mediaUrl || post.image || '/images/policy-meeting.jpg',
        alt: post.title,
        failureScenario: post.summary,
        scaryMoment: post.content ? post.content.substring(0, 140) + '...' : post.summary,
        outcome: post.highlights && post.highlights[0] ? post.highlights[0] : post.summary
      }));

      const defaultStories = siteData.scarsStories || [];
      const allStories = [...formattedPosts, ...defaultStories];
      const activeStories = mediaStore.filterActiveItems(allStories, 'id', 'image');
      setStories(activeStories);
    };

    loadStories();
    if (typeof window !== 'undefined') {
      window.addEventListener('meridian_store_change', loadStories);
      return () => window.removeEventListener('meridian_store_change', loadStories);
    }
  }, []);

  const iconMap = {
    LifeBuoy: LifeBuoy,
    ShieldAlert: ShieldAlert,
    Users: Users,
    FileCheck: FileCheck
  };

  return (
    <>
      <section
        className="section"
        style={{
          position: 'relative',
          padding: '24px 24px 40px',
          backgroundColor: 'var(--bg-canvas)',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: '1%',
            width: '140px',
            pointerEvents: 'none',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="desktop-only"
        >
          <svg
            viewBox="0 0 140 1000"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '100%', opacity: 0.35 }}
          >
            <path
              d="M 10,0 C 130,330 130,670 10,1000"
              fill="none"
              stroke="var(--accent-terracotta)"
              strokeWidth="4"
              strokeDasharray="8 4"
            />
            <path
              d="M 25,0 C 145,330 145,670 25,1000"
              fill="none"
              stroke="var(--accent-terracotta)"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div className="animate-fade-up">
              <RotatingHeroHeadline />

              <p className="lead" style={{ marginBottom: '32px', color: 'var(--text-muted)' }}>
                {siteData.heroConfig.subheadline}
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <Link href={siteData.heroConfig.ctaPrimaryLink} className="btn btn-primary" style={{ padding: '16px 32px' }}>
                  {siteData.heroConfig.ctaPrimaryText} <ArrowRight size={18} />
                </Link>
                <Link href={siteData.heroConfig.ctaSecondaryLink} className="btn btn-outline" style={{ padding: '16px 28px' }}>
                  {siteData.heroConfig.ctaSecondaryText}
                </Link>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-light)'
              }}>
                <RadialGaugeMetric
                  percentage={100}
                  label="Unbiased Advisory"
                  color="var(--accent-terracotta)"
                />
                <RadialGaugeMetric
                  percentage={94}
                  label="On-Time Recovery"
                  color="var(--accent-forest)"
                />
              </div>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <VerticalSpotlightCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: '2.5rem', marginTop: '8px', marginBottom: '20px', fontFamily: 'var(--font-lora)' }}>
                {siteData.homeIntro.title}
              </h2>
              <p className="lead" style={{ margin: '0 0 24px' }}>
                {siteData.homeIntro.leadText}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {siteData.homeIntro.pillars.map((pillar, idx) => (
                  <ScrollReveal key={idx} delay={idx * 100}>
                    <div className="card" style={{ padding: '20px 24px' }}>
                      <h3 style={{ fontSize: '1.15rem', marginBottom: '6px', color: 'var(--accent-terracotta)' }}>
                        {pillar.title}
                      </h3>
                      <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>
                        {pillar.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <InteractiveHeroScorecard />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 56px' }}>
              <h2 style={{ fontSize: '2.4rem', marginTop: '8px', marginBottom: '16px' }}>
                {siteData.servicesConfig.overviewTitle}
              </h2>
              <p style={{ margin: '0 auto', fontSize: '1.1rem' }}>
                We evaluate, stabilize, and optimize high-stakes projects across construction, tech, and enterprise change.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-2">
            {siteData.servicesConfig.serviceList.map((service, idx) => {
              const IconComp = iconMap[service.iconName] || LifeBuoy;
              return (
                <ScrollReveal key={service.id} delay={idx * 120}>
                  <div className="card">
                    <div className="card-icon-wrapper" style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--bg-blush)',
                      color: 'var(--accent-terracotta)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <IconComp size={24} />
                    </div>

                    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--text-main)' }}>
                      {service.title}
                    </h3>

                    <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--accent-forest)', marginBottom: '14px' }}>
                      {service.tagline}
                    </div>

                    <p style={{ fontSize: '1.025rem', marginBottom: '24px', lineHeight: 1.6 }}>
                      {service.description}
                    </p>

                    <Link href={`/services#${service.id}`} className="btn btn-outline btn-sm">
                      View Full Scope <ArrowRight size={14} />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '750px', margin: '0 auto 56px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.4rem', marginTop: '8px', marginBottom: '16px' }}>
                The Pivot Point: How We Fixed Derailed Projects
              </h2>
              <p style={{ margin: '0 auto', fontSize: '1.1rem' }}>
                Here is how real project recovery happens.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-2">
            {stories.map((story, idx) => (
              <ScrollReveal key={story.id} delay={idx * 150}>
                <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                    <Image
                      src={getImageUrl(story.image)}
                      alt={story.alt || story.title || 'Project image'}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: 'rgba(38, 35, 34, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#FDF8F5',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '700'
                    }}>
                      {story.clientType}
                    </div>
                  </div>

                  <div style={{ padding: '32px' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--text-main)', fontFamily: 'var(--font-lora)' }}>
                      {story.title}
                    </h3>

                    <div style={{ marginBottom: '14px', fontSize: '0.975rem', color: 'var(--accent-terracotta)', fontWeight: '600' }}>
                      {story.failureScenario}
                    </div>

                    <div style={{ marginBottom: '20px', fontSize: '0.975rem', color: 'var(--text-muted)' }}>
                      {story.scaryMoment}
                    </div>

                    <div style={{
                      backgroundColor: 'var(--bg-canvas)',
                      padding: '16px',
                      borderRadius: '12px',
                      borderLeft: '4px solid var(--accent-forest)',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: 'var(--accent-forest)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <CheckCircle2 size={18} color="var(--accent-forest)" style={{ flexShrink: 0 }} />
                      <span>{story.impactMetric}: {story.outcome}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <ScrollReveal>
            <h2 style={{ color: '#FDF8F5', fontSize: '2.75rem', marginTop: '12px', marginBottom: '20px', fontFamily: 'var(--font-lora)' }}>
              Let's Talk About Your Project Realities
            </h2>
            <p style={{ color: '#D6D3D1', fontSize: '1.2rem', margin: '0 auto 36px', lineHeight: 1.7 }}>
              Select a 30-minute window with a senior partner. We will listen, give you honest guidance, and answer every question without expectation.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: '18px 36px', fontSize: '1.1rem' }}>
                <Calendar size={18} /> {siteData.heroConfig.ctaPrimaryText}
              </Link>
              <Link href="/about" className="btn btn-outline" style={{ color: '#FDF8F5', borderColor: '#78716C' }}>
                Learn About Our Firm
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
