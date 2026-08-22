import React from 'react';
import { Globe, ShieldCheck, Activity, Database, Target, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function WhyDerapGrid() {
  const pillars = [
    {
      icon: <Globe size={26} />,
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
      title: "Pan-African Field Operations",
      description: "Extensive network of trained bilingual field enumerators across East and West Africa with deep local language fluency."
    },
    {
      icon: <ShieldCheck size={26} />,
      gradient: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
      title: "OECD-DAC Standards",
      description: "Rigorous alignment with international evaluation criteria covering relevance, coherence, efficiency, impact, and sustainability."
    },
    {
      icon: <Activity size={26} />,
      gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
      title: "Real-Time Quality Audits",
      description: "High-frequency automated statistical checks and GPS geo-stamping to eliminate field enumerator bias and data anomalies."
    },
    {
      icon: <Database size={26} />,
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
      title: "Reproducible Analytics",
      description: "Open-science R, Python, and Stata scripting pipelines ensuring 100% audit-transparent statistical findings."
    },
    {
      icon: <Target size={26} />,
      gradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
      title: "Policy-Actionable Insights",
      description: "Translating complex econometrics into concise policy briefs and executive summaries designed for donor steering committees."
    },
    {
      icon: <Zap size={26} />,
      gradient: 'linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)',
      title: "Rapid Field Deployment",
      description: "Agile mobilization protocols allowing field data collection teams to deploy within 14 days of mandate confirmation."
    }
  ];

  return (
    <section style={{ padding: '6rem 1.5rem', backgroundColor: 'var(--bg-canvas)', borderBottom: '1px solid var(--slate-200)' }}>
      <div className="container" style={{ maxWidth: '1140px' }}>
        
        <ScrollReveal direction="up" delay={0}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-main)', margin: '8px 0 16px', fontFamily: 'var(--font-lora)' }}>
              Designed for Rigour. Built for High-Stakes Evaluation.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--slate-600)', lineHeight: '1.6' }}>
              A focused, empirical approach that helps international development leaders validate program impact and scale with confidence.
            </p>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {pillars.map((pillar, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <div
                className="glass-card-hover"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                  height: '100%'
                }}
              >
                <div className="gradient-icon-badge" style={{ background: pillar.gradient, color: '#FFFFFF' }}>
                  {pillar.icon}
                </div>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', margin: 0, fontFamily: 'var(--font-lora)' }}>
                  {pillar.title}
                </h3>

                <p style={{ fontSize: '0.975rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
