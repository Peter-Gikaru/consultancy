import Link from 'next/link';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { siteData } from '@/config/siteData';

export const metadata = {
  title: "Privacy Policy | DERAP Consult Limited",
  description: "Privacy Policy and data protection disclosures for DERAP Consult Limited in compliance with Kenya's Data Protection Act (2019)."
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section style={{
        padding: '24px 24px 40px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <h1 style={{ fontSize: '2.6rem', marginTop: '8px', marginBottom: '16px' }}>
              Data Governance &amp; Privacy Standards. <span style={{ color: 'var(--accent-amber-hover)' }}>ODPC &amp; GDPR Compliance.</span>
            </h1>
            <p className="lead" style={{ color: 'var(--slate-700)', fontSize: '1.15rem', lineHeight: '1.65' }}>
              DERAP Consult Limited enforces strict end-to-end PII data encryption, informed consent protocols, and zero-leakage security in accordance with Kenya’s Data Protection Act (2019) and international standards.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="card" style={{ padding: '40px' }}>
            
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
                1. Data Controller Information
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                DERAP Consult Limited is a registered research and evaluation firm in Kenya (P.O. Box 42254 - 00100, Nairobi; Email: info@derapconsult.co.ke; Tel: +254 726 108 001). DERAP acts as Data Controller for web contact enquiries and Data Processor/Controller for survey assignments commissioned by client organisations.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
                2. Information Collected
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '1rem', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Website Contact Enquiries:</strong> Name, organisation name, email address, phone number, and message text submitted via our contact forms.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Research &amp; Survey Data:</strong> Consented respondent telephone data, demographic information, and survey responses collected under specific study protocols with explicit prior consent.</span>
                </li>
              </ul>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
                3. Purpose &amp; Lawful Basis of Processing
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                All processing is conducted under lawful bases specified under Section 28 of the Data Protection Act (2019):
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.975rem', color: 'var(--text-muted)' }}>
                <li>• Responding to client evaluation and proposal requests.</li>
                <li>• Executing contractually agreed research, monitoring, and evaluation studies.</li>
                <li>• Methodological quality assurance and audit trail verifications.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
                4. Data Protection Standards &amp; Security
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                We employ zero-tolerance protocols against unauthorized data sharing or data fabrication. All survey data collected in field and computer-assisted telephone interviewing (CATI) operations are encrypted in transit and at rest, anonymized prior to statistical analysis in STATA/R, and destroyed following contractually agreed retention periods.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '12px' }}>
                5. Data Subject Rights
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                Under Kenya’s Data Protection Act, individuals have the right to request access to, correction of, or erasure of their personal data, or to withdraw consent at any time. Requests may be sent directly to <strong>info@derapconsult.co.ke</strong>.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px', fontSize: '0.875rem', color: 'var(--text-subtle)' }}>
              Last updated: August 2026 · DERAP Consult Limited Compliance Office
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
