import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export default function PartnerTrustGrid() {
  const partners = [
    {
      name: "UNICEF Africa",
      role: "Child Rights & Education",
      logoSrc: "/images/partners/unicef.png",
      alt: "UNICEF Logo"
    },
    {
      name: "The World Bank",
      role: "Agricultural Policy & Surveys",
      logoSrc: "/images/partners/worldbank.svg",
      alt: "The World Bank Logo"
    },
    {
      name: "USAID Kenya",
      role: "Public Health & Resilience",
      logoSrc: "/images/partners/usaid.png",
      alt: "USAID Logo"
    },
    {
      name: "African Union",
      role: "Governance & Economic Policy",
      logoSrc: "/images/partners/au.png",
      alt: "African Union Logo"
    },
    {
      name: "AfDB Group",
      role: "Infrastructure & Climate",
      logoSrc: "/images/partners/afdb.png",
      alt: "African Development Bank Logo"
    },
    {
      name: "Mastercard Foundation",
      role: "Youth Employment & Skills",
      logoSrc: "/images/partners/mastercard.png",
      alt: "Mastercard Foundation Logo"
    }
  ];

  const tickerPartners = [...partners, ...partners];

  return (
    <section style={{
      padding: '4rem 1.5rem',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid var(--slate-200)'
    }}>
      <div className="container">
        
        <ScrollReveal direction="up" delay={0}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--text-main)', margin: '2px 0 0', fontFamily: 'var(--font-lora)' }}>
                Institutional Governance &amp; Research Leadership Across Africa
              </h2>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              backgroundColor: 'var(--bg-canvas)',
              borderRadius: '9999px',
              border: '1px solid var(--slate-200)',
              boxShadow: 'var(--shadow-soft)'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--slate-800)' }}>
                <strong style={{ color: 'var(--accent-amber-hover)' }}>250+</strong> Verified Field Surveys &amp; Evaluation Mandates
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <div className="logo-ticker-wrap" style={{
            padding: '24px 0',
            backgroundColor: 'var(--bg-canvas)',
            borderRadius: '16px',
            border: '1px solid var(--slate-200)'
          }}>
            <div className="logo-ticker-track" style={{ gap: '2.5rem' }}>
              {tickerPartners.map((partner, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '12px 24px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid var(--slate-200)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                >
                  <div style={{
                    position: 'relative',
                    height: '42px',
                    minWidth: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img
                      src={partner.logoSrc}
                      alt={partner.alt}
                      style={{
                        maxHeight: '40px',
                        maxWidth: '130px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--slate-900)' }}>
                      {partner.name}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-subtle)' }}>
                      {partner.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
