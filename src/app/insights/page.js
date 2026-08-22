'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, Tag, ArrowRight, X, ShieldCheck, User, Calendar, CheckCircle2 } from 'lucide-react';
import { siteData } from '@/config/siteData';
import ScrollReveal from '@/components/ScrollReveal';

export default function InsightsPage() {
  const { insightsConfig } = siteData;
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articleDetails = {
    'psm-did-rdd': {
      title: "When you cannot randomise: choosing between PSM, DiD and Regression Discontinuity.",
      author: "John Ngotho Kinyua, Lead Consultant",
      category: "Evaluation Methods",
      date: "August 2026",
      readTime: "6 min read",
      content: [
        {
          heading: "The Challenge of Non-Experimental Counterfactuals",
          text: "In many international development interventions, randomized assignment is ethically, politically, or logistically infeasible. When evaluating ongoing government programs or donor initiatives without a randomized baseline, program managers must construct a credible quasi-experimental counterfactual."
        },
        {
          heading: "1. Propensity Score Matching (PSM)",
          text: "PSM pairs program beneficiaries with non-beneficiaries based on observed baseline characteristics (e.g., household size, land acreage, baseline income). It controls for selection bias on observables. However, PSM cannot control for unobserved selection bias such as farmer motivation or entrepreneurial drive."
        },
        {
          heading: "2. Difference-in-Differences (DiD)",
          text: "DiD compares the change in outcomes over time between a treatment group and a comparison group. Its fundamental assumption is the 'Parallel Trends Assumption' — that in the absence of treatment, both groups would have followed the same trend over time. DiD effectively controls for time-invariant unobserved confounders."
        },
        {
          heading: "3. Regression Discontinuity Design (RDD)",
          text: "When program eligibility is determined by a continuous rating variable with a strict cut-off score (e.g., poverty score below 40, or farm size below 2 hectares), RDD compares households just above and just below the threshold. RDD provides near-experimental causal estimates at the cut-off point."
        },
        {
          heading: "Key Takeaways for Evaluation Commissioners",
          takeaways: [
            "Use PSM when rich baseline covariate data is available and unobserved selection bias is minimal.",
            "Use DiD when multi-wave panel data (baseline and endline) exists for both groups.",
            "Use RDD whenever clear administrative threshold scores dictate project eligibility."
          ]
        }
      ]
    },
    'data-quality-audit': {
      title: "What a data quality audit actually looks for.",
      author: "John Ngotho Kinyua, Lead Consultant",
      category: "Data Integrity",
      date: "August 2026",
      readTime: "5 min read",
      content: [
        {
          heading: "Beyond Basic Cleaning: High-Frequency Data Auditing",
          text: "In large-scale multi-country field surveys across Sub-Saharan Africa, standard data cleaning after fieldwork is finished comes too late. Real-time data quality audits inspect data flow, GPS coordinates, and response patterns while enumerators are still active in the field."
        },
        {
          heading: "Core Inspection Protocols",
          text: "Our data audit pipeline enforces automated statistical routines every 24 hours during active data collection:"
        },
        {
          heading: "1. Spatial Geo-Stamping & Timestamp Analysis",
          text: "Verifying exact interview duration and GPS location accuracy. Short interview completion times (e.g., 8 minutes for a 45-minute survey) or clustering of GPS coordinates inside hotels indicate enumerator shortcuts."
        },
        {
          heading: "2. Statistical Anomaly & Digit Tests",
          text: "Applying Benford's Law and digit preference tests on numerical variables (crop yields, income estimates) to detect artificial pattern generation or rounded estimates."
        },
        {
          heading: "3. Independent Field Back-Checking",
          text: "Supervisors re-visit 10% to 15% of randomly sampled households to re-administer core outcome questions, calculating concordant correlation coefficients."
        },
        {
          heading: "Key Takeaways for Donors & Program Managers",
          takeaways: [
            "High-frequency automated checks catch enumerator error within 24 hours.",
            "GPS geo-fencing eliminates off-site interview fabrication entirely.",
            "Transparent audit logs build confidence among steering committee stakeholders."
          ]
        }
      ]
    },
    'phone-surveys-weighting': {
      title: "Why phone surveys in Kenya need weighting — and what happens when they don’t.",
      author: "John Ngotho Kinyua, Lead Consultant",
      category: "Public Opinion",
      date: "August 2026",
      readTime: "7 min read",
      content: [
        {
          heading: "Telephone Survey Sampling Dynamics in East Africa",
          text: "Computer-Assisted Telephone Interviewing (CATI) and Random Digit Dialling (RDD) have become standard for rapid governance, public opinion, and market assessments across Kenya. However, raw phone survey samples are inherently biased."
        },
        {
          heading: "Biases in Unweighted CATI Samples",
          text: "Unweighted phone samples over-represent urban, male, educated, and higher-income demographics with multiple active SIM cards. Older rural women in lower socio-economic quintiles are consistently under-represented."
        },
        {
          heading: "Methodological Correction Protocols",
          text: "To produce policy-valid population estimates, DERAP Consult applies two essential statistical adjustments:"
        },
        {
          heading: "1. Multi-SIM & Selection Probability Weighting",
          text: "Adjusting individual inclusion probabilities based on the number of active mobile SIM cards owned by the respondent."
        },
        {
          heading: "2. Post-Stratification Iterative Proportional Fitting (Raking)",
          text: "Aligning sample distributions across age, gender, education, and county geographical blocks against official Kenya National Bureau of Statistics (KNBS) 2019 Census benchmarks."
        },
        {
          heading: "Key Takeaways for Public Policy Evaluators",
          takeaways: [
            "Unweighted phone survey results misrepresent rural and low-income voices.",
            "Raking against official census benchmarks restores national population accuracy.",
            "ODPC & GDPR compliance ensures privacy rights during phone interviewing."
          ]
        }
      ]
    }
  };

  const handleOpenArticle = (articleId) => {
    if (articleDetails[articleId]) {
      setSelectedArticle(articleDetails[articleId]);
    }
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
      
      <section style={{
        padding: '24px 24px 48px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div style={{ maxWidth: '840px' }}>
              <h1 style={{ fontSize: '2.8rem', marginTop: '8px', marginBottom: '16px' }}>
                Open-Science Evaluation Blueprints <span style={{ color: 'var(--accent-amber-hover)' }}>&amp; Econometric Guides.</span>
              </h1>
              <p className="lead" style={{ color: 'var(--slate-700)', fontSize: '1.15rem', lineHeight: '1.65' }}>
                Field-tested methods notes on PSM, DiD, RDD, and census-weighted telephone research — written for program directors, commissioners, and M&amp;E leads across Africa.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <div className="grid-3" style={{ gap: '28px' }}>
            {insightsConfig.articles.map((article, index) => (
              <ScrollReveal key={article.id} direction="up" delay={index * 120}>
                <div
                  className="card glass-card-hover"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '32px',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleOpenArticle(article.id)}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <span className="badge badge-amber">
                        <Tag size={12} /> {article.category}
                      </span>
                      <span style={{ fontSize: '0.825rem', color: 'var(--text-subtle)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} /> {article.readTime}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.35rem', marginBottom: '12px', lineHeight: '1.35' }}>
                      {article.title}
                    </h2>

                    <p style={{ fontSize: '0.975rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
                      {article.summary}
                    </p>
                  </div>

                  <div style={{
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.85rem',
                    color: 'var(--text-subtle)'
                  }}>
                    <span>{article.date}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenArticle(article.id);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        fontWeight: '700',
                        color: 'var(--accent-amber-hover)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.875rem'
                      }}
                    >
                      Read article <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {selectedArticle && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '24px'
        }}
        onClick={handleCloseArticle}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '840px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '40px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              animation: 'fadeUpStagger 0.3s ease forwards'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            
            <button
              onClick={handleCloseArticle}
              aria-label="Close Article"
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-subtle)',
                border: 'none',
                color: 'var(--slate-700)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <X size={20} />
            </button>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span className="badge badge-amber">
                  <Tag size={12} /> {selectedArticle.category}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={12} /> {selectedArticle.readTime}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={12} /> {selectedArticle.date}
                </span>
              </div>

              <h1 style={{ fontSize: '2.2rem', color: 'var(--slate-900)', margin: '8px 0 16px', lineHeight: '1.25' }}>
                {selectedArticle.title}
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--accent-amber-hover)', fontWeight: '600' }}>
                <User size={16} /> {selectedArticle.author}
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--slate-200)', margin: '24px 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--slate-700)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              {selectedArticle.content.map((section, idx) => (
                <div key={idx}>
                  {section.heading && (
                    <h3 style={{ fontSize: '1.35rem', color: 'var(--slate-900)', margin: '0 0 12px', fontFamily: 'var(--font-lora)' }}>
                      {section.heading}
                    </h3>
                  )}
                  {section.text && <p style={{ marginBottom: 0 }}>{section.text}</p>}
                  {section.takeaways && (
                    <div style={{
                      backgroundColor: 'rgba(217, 119, 6, 0.08)',
                      padding: '24px',
                      borderRadius: '16px',
                      border: '1px solid rgba(217, 119, 6, 0.2)',
                      marginTop: '12px'
                    }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {section.takeaways.map((point, pIdx) => (
                          <li key={pIdx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.975rem', color: 'var(--slate-900)', fontWeight: '600' }}>
                            <CheckCircle2 size={18} color="var(--accent-amber-hover)" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--slate-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-subtle)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="var(--accent-amber)" /> DERAP Consult Methods Memorandum
              </div>

              <button
                onClick={handleCloseArticle}
                className="btn btn-primary"
                style={{ padding: '10px 24px' }}
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

      <section className="section section-dark" style={{ textAlign: 'center', padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <ScrollReveal direction="zoom" delay={0}>
            <h2 style={{ color: '#FFFFFF', fontSize: '2.2rem', marginBottom: '16px' }}>
              Need a tailored methods brief for your programme?
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginBottom: '28px' }}>
              We write custom sampling and evaluation design memos prior to study commissioning.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Contact our lead consultant →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
