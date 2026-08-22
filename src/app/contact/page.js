'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteData } from '@/config/siteData';
import { siteSettingsStore } from '@/utils/siteSettingsStore';
import ScrollReveal from '@/components/ScrollReveal';

function LinkedInIcon({ size = 22, color = "currentColor", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactPage() {
  const [settings, setSettings] = useState(siteSettingsStore.getSettings());
  const { contactConfig } = siteData;

  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    enquiryType: contactConfig.enquiryTypes[0],
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    successMessage: '',
    errorMessage: ''
  });

  useEffect(() => {
    const handleUpdate = () => {
      setSettings(siteSettingsStore.getSettings());
    };
    window.addEventListener('derap_settings_updated', handleUpdate);
    return () => window.removeEventListener('derap_settings_updated', handleUpdate);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, successMessage: '', errorMessage: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          submitting: false,
          successMessage: result.message || 'Thank you for reaching out to DERAP Consult. We will respond within two working days.',
          errorMessage: ''
        });
        setFormData({
          name: '',
          organisation: '',
          email: '',
          phone: '',
          enquiryType: contactConfig.enquiryTypes[0],
          message: ''
        });
      } else {
        setStatus({
          submitting: false,
          successMessage: '',
          errorMessage: result.error || 'Failed to submit form. Please check your entries and try again.'
        });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        submitting: false,
        successMessage: '',
        errorMessage: 'Connection error. Please try emailing us directly.'
      });
    }
  };

  return (
    <div>
      
      <section style={{
        padding: '24px 24px 40px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div className="container">
          <ScrollReveal direction="up" delay={0}>
            <div style={{ maxWidth: '840px' }}>
              <h1 style={{ fontSize: '2.8rem', marginTop: '8px', marginBottom: '16px' }}>
                Commission an Evaluation. <span style={{ color: 'var(--accent-amber-hover)' }}>Talk Directly to Lead Researchers.</span>
              </h1>
              <p className="lead" style={{ maxWidth: '780px', color: 'var(--slate-700)', fontSize: '1.15rem', lineHeight: '1.65' }}>
                Tell us what evidence decision you need to make and your timeline. We respond within two working days with a clear design proposal and sampling memorandum.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'flex-start' }}>
            
            <ScrollReveal direction="up" delay={100}>
              <div className="card" style={{ padding: '40px' }}>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '24px' }}>
                  Send us an enquiry
                </h2>

                {status.successMessage && (
                  <div style={{
                    padding: '16px 20px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(20, 83, 45, 0.1)',
                    color: '#14532D',
                    fontWeight: '600',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <CheckCircle2 size={20} color="#14532D" />
                    <div>{status.successMessage}</div>
                  </div>
                )}

                {status.errorMessage && (
                  <div style={{
                    padding: '16px 20px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    color: '#DC2626',
                    fontWeight: '600',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <AlertCircle size={20} color="#DC2626" />
                    <div>{status.errorMessage}</div>
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Dr. Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-accent)',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                      Organisation / Funder
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      placeholder="e.g. Ministry / International NGO"
                      value={formData.organisation}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-accent)',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@organisation.org"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid var(--border-accent)',
                          fontSize: '1rem',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+254 700 000 000"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid var(--border-accent)',
                          fontSize: '1rem',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                      Type of Enquiry
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-accent)',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      {contactConfig.enquiryTypes.map((type, idx) => (
                        <option key={idx} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: '600', fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                      Your Message / Assignment Summary *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us what decision you need the evidence for, scope, and expected timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-accent)',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '14px', fontSize: '1.05rem', justifyContent: 'center' }}
                    >
                      {status.submitting ? 'Submitting Enquiry...' : 'Send Enquiry'} <Send size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div>
                <div className="card" style={{ padding: '36px', marginBottom: '28px' }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>
                    DERAP Consult Limited
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '1.025rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <MapPin size={22} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ color: 'var(--text-main)', display: 'block' }}>Postal Address</strong>
                        <span style={{ color: 'var(--text-muted)' }}>{settings.address}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <Mail size={22} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ color: 'var(--text-main)', display: 'block' }}>Email</strong>
                        <a href={`mailto:${settings.email}`} style={{ color: 'var(--text-muted)' }}>{settings.email}</a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <Phone size={22} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ color: 'var(--text-main)', display: 'block' }}>Telephone</strong>
                        <a href={`tel:${settings.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--text-muted)' }}>{settings.phone}</a>
                      </div>
                    </div>

                    {settings.linkedIn && (
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                        <LinkedInIcon size={22} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                          <strong style={{ color: 'var(--text-main)', display: 'block' }}>LinkedIn</strong>
                          <a href={settings.linkedIn} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-amber)' }}>
                            Company Profile →
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div style={{
                  padding: '24px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  fontSize: '0.925rem',
                  color: 'var(--text-muted)'
                }}>
                  <ShieldCheck size={24} color="var(--accent-amber)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>Regulatory Status</strong>
                    Registered in Kenya (2019). Tax compliance certificate and official registration documents are available upon request during RFP processes.
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}
