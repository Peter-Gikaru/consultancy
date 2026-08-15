import Image from 'next/image';
import Link from 'next/link';
import { LifeBuoy, ShieldAlert, Users, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import EmotionalStateFilter from '@/components/EmotionalStateFilter';
import ScrollReveal from '@/components/ScrollReveal';
import { siteData } from '@/config/siteData';
import { getImageUrl } from '@/utils/getImageUrl';

export const metadata = {
  title: `Practice Offerings & Methodology - ${siteData.siteInfo.brandName}`,
  description: siteData.servicesConfig.overviewSubtitle,
};

export default function ServicesPage() {
  const { overviewTitle, overviewSubtitle, serviceList, methodology } = siteData.servicesConfig;

  const iconMap = {
    LifeBuoy: LifeBuoy,
    ShieldAlert: ShieldAlert,
    Users: Users,
    FileCheck: FileCheck
  };

  return (
    <>
      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)', padding: '70px 24px 40px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.4rem', margin: '0 auto', fontFamily: 'var(--font-lora)', fontWeight: '500', lineHeight: 1.35 }}>
              {overviewSubtitle}
            </h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '0 24px 50px' }}>
        <div className="container">
          <EmotionalStateFilter />
        </div>
      </section>

      <section className="section section-blush">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <h2 style={{ fontSize: '1.75rem', margin: '0 auto', fontWeight: '500', fontFamily: 'var(--font-lora)' }}>
                Each offering is tailored to your specific organizational scale and technical complexity.
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {serviceList.map((service, idx) => {
              const IconComp = iconMap[service.iconName] || LifeBuoy;
              return (
                <ScrollReveal key={service.id} delay={idx * 100}>
                  <div id={service.id} className="card" style={{ padding: '36px', overflow: 'hidden' }}>
                    {service.image && (
                      <div style={{ position: 'relative', height: '240px', width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '28px' }}>
                        <Image
                          src={getImageUrl(service.image)}
                          alt={service.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    )}
                    <div className="grid-2" style={{ alignItems: 'flex-start', gap: '40px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                          <div className="card-icon-wrapper" style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '14px',
                            backgroundColor: 'var(--bg-blush)',
                            border: '1px solid var(--border-accent)',
                            color: 'var(--accent-terracotta)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <IconComp size={28} />
                          </div>
                          <div>
                            <h3 style={{ fontSize: '1.8rem', margin: 0, color: 'var(--text-main)' }}>
                              {service.title}
                            </h3>
                            <div style={{ fontSize: '0.9rem', color: 'var(--accent-forest)', fontWeight: '700' }}>
                              {service.tagline}
                            </div>
                          </div>
                        </div>

                        <p style={{ fontSize: '1.08rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '24px' }}>
                          {service.description}
                        </p>

                        <div style={{
                          backgroundColor: 'var(--bg-canvas)',
                          padding: '18px 24px',
                          borderRadius: '12px',
                          borderLeft: '4px solid var(--accent-terracotta)'
                        }}>
                          <strong style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '4px' }}>
                            Ideal For Your Situation:
                          </strong>
                          <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                            {service.idealFor}
                          </span>
                        </div>
                      </div>

                      <div style={{
                        backgroundColor: 'var(--bg-canvas)',
                        borderRadius: '16px',
                        padding: '28px',
                        border: '1px solid var(--border-light)'
                      }}>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '16px' }}>
                          Tangible Key Deliverables:
                        </h4>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                          {service.deliverables.map((item, dIdx) => (
                            <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.975rem', color: 'var(--text-main)' }}>
                              <CheckCircle2 size={18} color="var(--accent-terracotta)" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        <Link href="/contact" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                          Discuss This Offering <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <h2 style={{ fontSize: '1.75rem', margin: '0 auto', fontWeight: '500', fontFamily: 'var(--font-lora)' }}>
                {methodology.subtitle}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid-2" style={{ gap: '32px' }}>
            {methodology.steps.map((step, idx) => (
              <ScrollReveal key={step.number} delay={idx * 120}>
                <div className="card" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div style={{
                    fontSize: '2rem',
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: '700',
                    color: 'var(--accent-terracotta)',
                    lineHeight: 1
                  }}>
                    {step.number}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: 'var(--text-main)' }}>
                      {step.name}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.975rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                      {step.description}
                    </p>
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
