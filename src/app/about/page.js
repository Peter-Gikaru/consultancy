import Image from 'next/image';
import Link from 'next/link';
import { Quote, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { siteData } from '@/config/siteData';

export const metadata = {
  title: `About Our Story & Philosophy - ${siteData.siteInfo.brandName}`,
  description: siteData.aboutConfig.subtitle,
};

export default function AboutPage() {
  const { title, subtitle, philosophyTitle, philosophyParagraphs, values, teamMembers } = siteData.aboutConfig;

  return (
    <>
      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)', padding: '80px 24px 60px' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '56px' }}>
            <ScrollReveal>
              <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontFamily: 'var(--font-lora)' }}>
                {title}
              </h1>
              <p className="lead" style={{ marginBottom: '24px' }}>
                {subtitle}
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Link href="/contact" className="btn btn-primary">
                  Speak With Our Senior Partners <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div style={{ position: 'relative', height: '420px', borderRadius: 'var(--radius-card)', overflow: 'hidden', boxShadow: '0 16px 36px rgba(0,0,0,0.08)' }}>
                <Image
                  src="/images/team-meeting.jpg"
                  alt="Meridian senior advisors engaging in quiet evaluation strategy"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '800px', margin: '0 auto 48px' }}>
              <h2 style={{ fontSize: '2.4rem', marginBottom: '20px', textAlign: 'center', fontFamily: 'var(--font-lora)' }}>
                {philosophyTitle}
              </h2>
              {philosophyParagraphs.map((para, idx) => (
                <p key={idx} style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '16px' }}>
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid-2" style={{ gap: '28px' }}>
            {values.map((val, idx) => (
              <ScrollReveal key={idx} delay={idx * 120}>
                <div className="card">
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--accent-terracotta)', marginBottom: '8px' }}>
                    {val.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '1.025rem', lineHeight: 1.6 }}>
                    {val.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 56px' }}>
              <h2 style={{ fontSize: '2.4rem', marginTop: '8px', marginBottom: '16px' }}>
                Meet The People Who Will Sit Across From You
              </h2>
              <p style={{ margin: '0 auto', fontSize: '1.1rem' }}>
                No junior hand-offs. You work directly with former executives who have navigated high-stakes project environments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {teamMembers.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: '260px', width: '100%' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div style={{ padding: '32px' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '4px', color: 'var(--text-main)', fontFamily: 'var(--font-inter)', fontWeight: '700' }}>
                      {member.name}
                    </h3>

                    <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--accent-forest)', marginBottom: '16px' }}>
                      {member.role}
                    </div>

                    <p style={{ fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '20px' }}>
                      {member.bio}
                    </p>

                    <div style={{
                      backgroundColor: 'var(--bg-blush)',
                      padding: '14px',
                      borderRadius: '12px',
                      borderLeft: '3px solid var(--accent-terracotta)',
                      fontSize: '0.875rem',
                      fontStyle: 'italic',
                      color: 'var(--text-main)'
                    }}>
                      <Quote size={14} color="var(--accent-terracotta)" style={{ marginRight: '4px' }} />
                      "{member.personalQuote}"
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
