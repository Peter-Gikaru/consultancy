import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import CalendarEmbed from '@/components/CalendarEmbed';
import UnaskedQuestionsAccordion from '@/components/UnaskedQuestionsAccordion';
import BrainAuditForm from '@/components/BrainAuditForm';
import ScrollReveal from '@/components/ScrollReveal';
import { siteData } from '@/config/siteData';

export const metadata = {
  title: `Book a Conversation - ${siteData.siteInfo.brandName}`,
  description: siteData.calendarConfig.subtitle,
};

export default function ContactPage() {
  const info = siteData.siteInfo;

  return (
    <>
      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)', padding: '80px 24px 40px' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <h1 style={{ fontSize: '3.25rem', marginBottom: '20px', fontFamily: 'var(--font-lora)' }}>
                Let's Talk About What's Really Going On.
              </h1>
              <p className="lead" style={{ margin: '0 auto 32px' }}>
                No gatekeepers, no sales pitches. Select a time slot to speak directly with a senior partner, or submit your specific challenge for a video audit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ padding: '0 24px 80px' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '48px' }}>
            <ScrollReveal>
              <CalendarEmbed />
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <BrainAuditForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="container">
          <ScrollReveal>
            <UnaskedQuestionsAccordion />
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <div className="card" style={{ textAlign: 'center', padding: '44px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-blush)',
                color: 'var(--accent-forest)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <ShieldCheck size={24} />
              </div>

              <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                Our Strict Confidentiality Promise
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: '0 auto 24px', lineHeight: 1.6 }}>
                Every piece of information shared through this site, calendar booking, or diagnosis form is strictly encrypted and protected under our non-disclosure standards. We never share, sell, or publicize your operational details.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', flexWrap: 'wrap', fontSize: '0.95rem', color: 'var(--text-subtle)', fontWeight: '500' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={16} color="var(--accent-terracotta)" /> {info.contactEmail}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Phone size={16} color="var(--accent-terracotta)" /> {info.contactPhone}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={16} color="var(--accent-terracotta)" /> {info.mainOffice}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
