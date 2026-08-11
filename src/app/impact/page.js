import Image from 'next/image';
import Link from 'next/link';
import {
  Quote,
  CheckCircle,
  TrendingUp,
  Award,
  Users,
  Building,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: "Our Impact - Measurable Results in Government Reform | Built on Site",
  description: "See the real-world impact of our work. Case studies from Kenya, Ethiopia, and beyond showing sustainable change in public policy.",
};

export default function ImpactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="section" style={{ backgroundColor: '#1E1E1E', color: '#FFFFFF', padding: '80px 24px 60px' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span style={{ color: '#D95A2B', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                Measurable Policy Outcomes
              </span>
              <h1 style={{ color: '#FFFFFF', fontSize: '3rem', margin: '12px 0 20px', fontFamily: 'var(--font-lora)' }}>
                Real Change. Measured Results.
              </h1>
              <p className="lead" style={{ color: '#E2E8F0', fontSize: '1.2rem', marginBottom: '28px' }}>
                We don't just deliver reports. We deliver measurable administrative and policy changes that improve lives across Africa.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Partner With Us <ArrowRight size={18} />
              </Link>
            </div>
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '360px', boxShadow: '0 12px 24px rgba(0,0,0,0.3)' }}>
              <Image
                src="/images/impact-banner.jpg"
                alt="Children walking home from a newly built school in Kenya"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact by the Numbers Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
            <span style={{ color: '#1E7B4A', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
              Track Record
            </span>
            <h2 style={{ fontSize: '2.25rem', marginTop: '8px', marginBottom: '16px' }}>
              Our Work in Numbers
            </h2>
            <p style={{ color: '#4A5568', fontSize: '1.1rem' }}>
              These numbers represent real people and real communities whose lives have been improved by better government policy.
            </p>
          </div>

          <div className="grid-3" style={{ textAlign: 'center' }}>
            {/* Stat Block 1 */}
            <div className="card" style={{ padding: '40px 24px' }}>
              <div style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '3.5rem',
                fontWeight: '700',
                color: '#D95A2B',
                lineHeight: 1,
                marginBottom: '12px'
              }}>
                500+
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#1E1E1E', marginBottom: '8px', fontFamily: 'var(--font-inter)', fontWeight: '600' }}>
                Projects Delivered
              </h3>
              <p style={{ color: '#4A5568', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
                Delivered across Africa in the last decade, supporting national and sub-national ministries.
              </p>
            </div>

            {/* Stat Block 2 */}
            <div className="card" style={{ padding: '40px 24px' }}>
              <div style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '3.5rem',
                fontWeight: '700',
                color: '#D95A2B',
                lineHeight: 1,
                marginBottom: '12px'
              }}>
                80%
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#1E1E1E', marginBottom: '8px', fontFamily: 'var(--font-inter)', fontWeight: '600' }}>
                Policy Adoption Rate
              </h3>
              <p style={{ color: '#4A5568', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
                Of project recommendations formally adopted into national legislation and operational guidelines.
              </p>
            </div>

            {/* Stat Block 3 */}
            <div className="card" style={{ padding: '40px 24px' }}>
              <div style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '3.5rem',
                fontWeight: '700',
                color: '#D95A2B',
                lineHeight: 1,
                marginBottom: '12px'
              }}>
                2M+
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#1E1E1E', marginBottom: '8px', fontFamily: 'var(--font-inter)', fontWeight: '600' }}>
                Citizens Impacted
              </h3>
              <p style={{ color: '#4A5568', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
                People directly reached through improved healthcare, social protection, and climate programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Case Studies */}
      <section className="section" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <span style={{ color: '#1E7B4A', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
              Field Case Studies
            </span>
            <h2 style={{ fontSize: '2.25rem', marginTop: '8px' }}>Evidence of Transformation</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {/* Case Study 1: Kenya */}
            <div id="case1" className="card" style={{ padding: '40px', overflow: 'hidden' }}>
              <div className="grid-2" style={{ alignItems: 'center' }}>
                <div>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(30, 123, 74, 0.1)',
                    color: '#1E7B4A',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    KENYA CASE STUDY • HEALTH SUPPLY CHAINS
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: '#1E1E1E', marginBottom: '16px' }}>
                    Strengthening Health Supply Chains in Kenya
                  </h3>

                  <div style={{ marginBottom: '16px' }}>
                    <h4 style={{ fontSize: '1.05rem', color: '#D95A2B', marginBottom: '4px', fontFamily: 'var(--font-inter)', fontWeight: '600' }}>
                      The Challenge:
                    </h4>
                    <p style={{ color: '#4A5568', fontSize: '0.975rem', lineHeight: 1.6 }}>
                      Kenya faced persistent stock-outs of essential medicines in county public health facilities, severely impacting maternal care and emergency medical responses for millions of rural residents.
                    </p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '1.05rem', color: '#2A5C7A', marginBottom: '4px', fontFamily: 'var(--font-inter)', fontWeight: '600' }}>
                      Our Approach:
                    </h4>
                    <p style={{ color: '#4A5568', fontSize: '0.975rem', lineHeight: 1.6 }}>
                      We embedded a team within the Ministry of Health to redesign the supply chain management system, working directly with county health directors, warehouse managers, and local logistics partners.
                    </p>
                  </div>

                  <div style={{
                    backgroundColor: '#F0FFF4',
                    border: '1px solid #C6F6D5',
                    borderRadius: '8px',
                    padding: '20px'
                  }}>
                    <h4 style={{ fontSize: '1rem', color: '#1E7B4A', margin: '0 0 6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={18} /> Verified Result:
                    </h4>
                    <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#1E7B4A' }}>
                      Reduced stock-outs by 40% in pilot counties. The system is now being scaled nationally across all 47 counties.
                    </p>
                  </div>
                </div>

                <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: '360px' }}>
                  <Image
                    src="/images/kenya-health-case.jpg"
                    alt="Kenya health logistics supply chain center"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            {/* Case Study 2: Ethiopia */}
            <div id="case2" className="card" style={{ padding: '40px', overflow: 'hidden' }}>
              <div className="grid-2" style={{ alignItems: 'center' }}>
                <div style={{ order: 1 }}>
                  <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: '360px' }}>
                    <Image
                      src="/images/ethiopia-health-case.jpg"
                      alt="Ethiopia community health worker vaccine drive"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <div style={{ order: 2 }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(217, 90, 43, 0.1)',
                    color: '#D95A2B',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>
                    ETHIOPIA CASE STUDY • ZERO-DOSE IMMUNIZATION
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: '#1E1E1E', marginBottom: '16px' }}>
                    Ethiopia's Zero-Dose Immunization Campaign
                  </h3>

                  <div style={{ marginBottom: '16px' }}>
                    <h4 style={{ fontSize: '1.05rem', color: '#D95A2B', marginBottom: '4px', fontFamily: 'var(--font-inter)', fontWeight: '600' }}>
                      The Challenge:
                    </h4>
                    <p style={{ color: '#4A5568', fontSize: '0.975rem', lineHeight: 1.6 }}>
                      Reaching zero-dose children (infants who have never received a single vaccine) in remote, pastoralist, and conflict-affected regions of Ethiopia.
                    </p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '1.05rem', color: '#2A5C7A', marginBottom: '4px', fontFamily: 'var(--font-inter)', fontWeight: '600' }}>
                      Our Approach:
                    </h4>
                    <p style={{ color: '#4A5568', fontSize: '0.975rem', lineHeight: 1.6 }}>
                      Partnered with national and local health officials to deploy mobile vaccination teams, cold-chain solar equipment, and community health extension workers tailored to migratory pastoral paths.
                    </p>
                  </div>

                  <div style={{
                    backgroundColor: '#F0FFF4',
                    border: '1px solid #C6F6D5',
                    borderRadius: '8px',
                    padding: '20px'
                  }}>
                    <h4 style={{ fontSize: '1rem', color: '#1E7B4A', margin: '0 0 6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={18} /> Verified Result:
                    </h4>
                    <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#1E7B4A' }}>
                      Reached over 150,000 zero-dose children with life-saving vaccines, establishing a permanent mobile health tracking framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
            <span style={{ color: '#E6A817', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
              Partner Endorsements
            </span>
            <h2 style={{ fontSize: '2.25rem', marginTop: '8px' }}>What Our Partners Say</h2>
          </div>

          <div className="grid-2">
            {/* Testimonial 1 */}
            <div className="card" style={{ borderLeft: '4px solid #E6A817', position: 'relative', padding: '36px' }}>
              <Quote size={40} color="#E6A817" style={{ opacity: 0.25, position: 'absolute', top: '24px', right: '24px' }} />
              <p style={{
                fontFamily: 'var(--font-lora)',
                fontSize: '1.15rem',
                fontStyle: 'italic',
                color: '#1E1E1E',
                lineHeight: 1.7,
                marginBottom: '24px'
              }}>
                "Built on Site has been a game-changer for our ministry. Their deep local knowledge, resident teams, and genuine commitment to partnership made all the difference in delivering national health reforms."
              </p>
              <div>
                <strong style={{ color: '#1E1E1E', display: 'block', fontSize: '1rem' }}>Director of Health Policy & Planning</strong>
                <span style={{ color: '#1E7B4A', fontSize: '0.9rem', fontWeight: '500' }}>Ministry of Health, Kenya</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card" style={{ borderLeft: '4px solid #1E7B4A', position: 'relative', padding: '36px' }}>
              <Quote size={40} color="#1E7B4A" style={{ opacity: 0.25, position: 'absolute', top: '24px', right: '24px' }} />
              <p style={{
                fontFamily: 'var(--font-lora)',
                fontSize: '1.15rem',
                fontStyle: 'italic',
                color: '#1E1E1E',
                lineHeight: 1.7,
                marginBottom: '24px'
              }}>
                "Their approach is unlike any other international consultancy. They don't just advise from afar; they are part of the internal team, navigating political nuances alongside us."
              </p>
              <div>
                <strong style={{ color: '#1E1E1E', display: 'block', fontSize: '1rem' }}>Permanent Secretary</strong>
                <span style={{ color: '#1E7B4A', fontSize: '0.9rem', fontWeight: '500' }}>Ministry of Finance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#1E1E1E', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: '2.5rem', marginBottom: '16px' }}>
            Let's Create Impact Together
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#E2E8F0', marginBottom: '32px' }}>
            Contact our Nairobi office to discuss how we can support your next project or evaluation effort.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
            Work With Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
