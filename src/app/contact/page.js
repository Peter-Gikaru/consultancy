'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  CheckCircle,
  Send,
  Briefcase,
  Globe,
  Clock
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    country: 'Kenya',
    subject: 'Project Collaboration',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="section" style={{ backgroundColor: '#1E1E1E', color: '#FFFFFF', padding: '80px 24px 60px' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span style={{ color: '#E6A817', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                Nairobi Regional Hub
              </span>
              <h1 style={{ color: '#FFFFFF', fontSize: '3rem', margin: '12px 0 20px', fontFamily: 'var(--font-lora)' }}>
                Let's Build Something That Lasts.
              </h1>
              <p className="lead" style={{ color: '#E2E8F0', fontSize: '1.2rem', marginBottom: '28px' }}>
                We're ready to partner with you. Fill out the form below or reach out directly to our Nairobi office.
              </p>
              <div style={{ display: 'flex', gap: '20px', fontSize: '0.95rem', color: '#E6A817' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={18} /> Response within 24 hours
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Globe size={18} /> Serving all 54 African nations
                </span>
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '360px', boxShadow: '0 12px 24px rgba(0,0,0,0.3)' }}>
              <Image
                src="/images/contact-hero.jpg"
                alt="Partnership handshake in Nairobi consultancy office"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="section" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container">
          <div className="grid-12" style={{ gap: '48px' }}>
            {/* Contact Form Column */}
            <div style={{ gridColumn: 'span 7' }}>
              <div className="card" style={{ padding: '40px' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', color: '#1E1E1E' }}>
                  Send Us a Message
                </h2>
                <p style={{ color: '#718096', marginBottom: '32px', fontSize: '0.975rem' }}>
                  Please share a few details about your technical assistance or evaluation needs.
                </p>

                {submitted ? (
                  <div style={{
                    backgroundColor: '#F0FFF4',
                    border: '1px solid #C6F6D5',
                    borderRadius: '8px',
                    padding: '36px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: '#1E7B4A',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px'
                    }}>
                      <CheckCircle size={32} />
                    </div>
                    <h3 style={{ color: '#1E7B4A', fontSize: '1.5rem', marginBottom: '12px' }}>
                      Message Received!
                    </h3>
                    <p style={{ color: '#276749', fontSize: '1.05rem', margin: 0 }}>
                      Thank you for reaching out! We'll be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-outline btn-sm"
                      style={{ marginTop: '24px' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#1E1E1E', fontSize: '0.95rem' }}>
                        Full Name <span style={{ color: '#D95A2B' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Amina Odhiambo"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '6px',
                          border: '1px solid #CBD5E1',
                          fontSize: '1rem',
                          fontFamily: 'var(--font-inter)',
                          outline: 'none'
                        }}
                      />
                    </div>

                    {/* Email & Organization Row */}
                    <div className="grid-2" style={{ gap: '20px' }}>
                      <div>
                        <label htmlFor="email" style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#1E1E1E', fontSize: '0.95rem' }}>
                          Email Address <span style={{ color: '#D95A2B' }}>*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="amina@ministry.go.ke"
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '6px',
                            border: '1px solid #CBD5E1',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-inter)',
                            outline: 'none'
                          }}
                        />
                      </div>

                      <div>
                        <label htmlFor="organization" style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#1E1E1E', fontSize: '0.95rem' }}>
                          Organization / Ministry
                        </label>
                        <input
                          type="text"
                          id="organization"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Ministry of Health Kenya"
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '6px',
                            border: '1px solid #CBD5E1',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-inter)',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    {/* Country & Subject Row */}
                    <div className="grid-2" style={{ gap: '20px' }}>
                      <div>
                        <label htmlFor="country" style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#1E1E1E', fontSize: '0.95rem' }}>
                          Country / Location
                        </label>
                        <select
                          id="country"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '6px',
                            border: '1px solid #CBD5E1',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-inter)',
                            outline: 'none',
                            backgroundColor: '#FFFFFF'
                          }}
                        >
                          <option value="Kenya">Kenya</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Uganda">Uganda</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="Other African country">Other African country</option>
                          <option value="International">International</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="subject" style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#1E1E1E', fontSize: '0.95rem' }}>
                          Subject
                        </label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            borderRadius: '6px',
                            border: '1px solid #CBD5E1',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-inter)',
                            outline: 'none',
                            backgroundColor: '#FFFFFF'
                          }}
                        >
                          <option value="Project Collaboration">Project Collaboration</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Technical Advisory">Technical Advisory</option>
                          <option value="Media">Media Inquiry</option>
                          <option value="Partnership">Partnership Proposal</option>
                          <option value="Careers">Careers / Recruitment</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#1E1E1E', fontSize: '0.95rem' }}>
                        Message <span style={{ color: '#D95A2B' }}>*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your project background, scope, or questions..."
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '6px',
                          border: '1px solid #CBD5E1',
                          fontSize: '1rem',
                          fontFamily: 'var(--font-inter)',
                          outline: 'none',
                          resize: 'vertical'
                        }}
                      ></textarea>
                    </div>

                    {/* Submit Button & Privacy Note */}
                    <div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary"
                        style={{ width: '100%', padding: '16px', fontSize: '1.05rem' }}
                      >
                        {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
                      </button>
                      <p style={{ fontSize: '0.85rem', color: '#718096', marginTop: '12px', textAlign: 'center', margin: '12px 0 0' }}>
                        🔒 We respect your privacy. Your information will never be shared.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info & Stylized Map Column */}
            <div style={{ gridColumn: 'span 5' }}>
              {/* Office Details Card */}
              <div className="card" style={{ padding: '36px', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: '#1E1E1E' }}>
                  Nairobi Headquarters
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(230, 168, 23, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E6A817', shrink: 0 }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#1E1E1E' }}>Office Address:</strong>
                      <span style={{ color: '#4A5568' }}>Upper Hill Financial District, Nairobi, Kenya</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(30, 123, 74, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E7B4A', shrink: 0 }}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#1E1E1E' }}>Email Direct:</strong>
                      <a href="mailto:info@builton.site" style={{ color: '#1E7B4A', fontWeight: '500' }}>info@builton.site</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(217, 90, 43, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D95A2B', shrink: 0 }}>
                      <Phone size={20} />
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#1E1E1E' }}>Phone / WhatsApp:</strong>
                      <a href="tel:+254700000000" style={{ color: '#D95A2B', fontWeight: '500' }}>+254 (0) 700 000 000</a>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Connect on Socials
                  </span>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '10px 16px',
                        borderRadius: '6px',
                        backgroundColor: '#0A66C2',
                        color: '#FFFFFF',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}
                    >
                      <Linkedin size={18} /> LinkedIn
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '10px 16px',
                        borderRadius: '6px',
                        backgroundColor: '#000000',
                        color: '#FFFFFF',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}
                    >
                      <Twitter size={18} /> Twitter/X
                    </a>
                  </div>
                </div>
              </div>

              {/* Stylized Interactive Map Representation Card */}
              <div className="card" style={{ padding: 0, overflow: 'hidden', height: '240px', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #1E7B4A, #2A5C7A)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  padding: '24px'
                }}>
                  <MapPin size={48} color="#E6A817" style={{ marginBottom: '12px' }} />
                  <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '4px' }}>
                    Nairobi, Kenya Regional Hub
                  </h4>
                  <p style={{ color: '#E2E8F0', fontSize: '0.9rem', margin: 0 }}>
                    Serving Ministries across East, West, and Southern Africa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Call-out Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="card" style={{ backgroundColor: '#EBF3F8', border: '1px solid #BEE3F8', padding: '40px' }}>
            <div className="grid-2" style={{ alignItems: 'center' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#2A5C7A', fontWeight: '600', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <Briefcase size={18} /> Careers at Built on Site
                </div>
                <h2 style={{ fontSize: '2rem', margin: '0 0 12px', color: '#1E1E1E' }}>Join Our Team</h2>
                <p style={{ color: '#2D3748', fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>
                  We are always looking for passionate policy experts, public health strategists, and evaluators to join our embedded teams across Africa. If you are committed to making a tangible reform difference, we want to hear from you.
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <a href="mailto:careers@builton.site" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
                  View Open Positions <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
