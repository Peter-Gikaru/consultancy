'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { siteData } from '@/config/siteData';

export default function UnaskedQuestionsAccordion() {
  const questions = siteData.unaskedQuestions || [];
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  if (questions.length === 0) return null;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.25rem', marginTop: '8px', color: 'var(--text-main)' }}>
          Things You're Too Polite to Ask Out Loud
        </h2>
        <p style={{ margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          We address the elephants in the room upfront so you can make decisions without doubt or hesitation.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {questions.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '16px',
                border: isOpen ? '1.5px solid var(--accent-terracotta)' : '1px solid var(--border-light)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  padding: '22px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-inter)'
                }}
              >
                <span>{item.question}</span>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: isOpen ? 'var(--bg-blush)' : 'var(--bg-canvas)',
                  color: isOpen ? 'var(--accent-terracotta)' : 'var(--text-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: '0 28px 24px',
                    color: 'var(--text-muted)',
                    fontSize: '1.05rem',
                    lineHeight: 1.65,
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '16px',
                    animation: 'fadeUpStagger 0.3s ease forwards'
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
