'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What evaluation methodologies do you specialize in?",
      answer: "We specialize in both quantitative and qualitative methods including Randomized Control Trials (RCTs), Quasi-Experimental designs (Difference-in-Differences, Propensity Score Matching), OECD-DAC evaluation criteria assessments, and high-frequency digital survey audits."
    },
    {
      question: "How do you handle field data security & compliance (ODPC/GDPR)?",
      answer: "All field data is encrypted end-to-end using AES-256 protocols. Personal identifiable information (PII) is automatically anonymized at the point of ingestion in compliance with Kenya&apos;s Office of the Data Protection Commissioner (ODPC) and international GDPR standards."
    },
    {
      question: "What is your typical turnaround time for baseline or endline surveys?",
      answer: "Our field mobilization protocol enables deployment within 14 days of contract execution. Standard field data collection for 1,000–3,000 households typically spans 3 to 4 weeks, with clean dataset delivery within 5 working days post-fieldwork."
    },
    {
      question: "Do you provide custom data analytics dashboards for steering committees?",
      answer: "Yes, we construct interactive Power BI, R Shiny, and web dashboards that allow program managers and donors to filter evaluation indicators, geographical breakdowns, and demographic cross-tabulations dynamically."
    },
    {
      question: "Can your team operate across multiple Sub-Saharan African countries?",
      answer: "Absolutey. DERAP Consult has delivered mandates across 12 countries in East, Central, and West Africa, partnering with local field supervisors and native-language enumerators to ensure cultural context and data precision."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: '6rem 1.5rem', backgroundColor: 'var(--bg-canvas)', borderBottom: '1px solid var(--slate-200)' }}>
      <div className="container" style={{ maxWidth: '1140px' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '50px'
        }}>
          
          <div>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', margin: '8px 0 16px', fontFamily: 'var(--font-lora)' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--slate-600)', lineHeight: '1.6', marginBottom: '24px' }}>
              Everything you need to know about DERAP&apos;s field execution protocols, data protection standards, and evaluation methodologies.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-amber-hover)', fontWeight: '700' }}>
              <HelpCircle size={20} /> Have a custom research requirement?
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="faq-accordion-item"
                  style={{
                    boxShadow: isOpen ? '0 10px 25px rgba(15, 23, 42, 0.06)' : 'none'
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      color: 'var(--text-main)'
                    }}
                  >
                    <span>{faq.question}</span>
                    <span style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--primary)' : 'var(--slate-100)',
                      color: isOpen ? '#FFFFFF' : 'var(--text-main)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s ease'
                    }}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 24px 24px',
                      fontSize: '0.975rem',
                      color: 'var(--slate-600)',
                      lineHeight: '1.65',
                      borderTop: '1px solid var(--slate-100)',
                      paddingTop: '16px'
                    }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
