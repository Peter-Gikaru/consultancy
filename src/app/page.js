import Image from 'next/image';
import Link from 'next/link';
import {
  Handshake,
  BarChart3,
  MapPin,
  FileText,
  Heart,
  Trees,
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';

export const metadata = {
  title: 'Built on Site - Smart Technical Assistance for Government Reform in Africa',
  description: 'We embed local teams, deliver evidence-based policy, and drive sustainable impact across Africa. Explore our smart TA approach built for the Kenyan market and beyond.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(30, 30, 30, 0.78), rgba(30, 30, 30, 0.85)), url("/images/hero-kenya.jpg") center/cover no-repeat',
        color: '#FFFFFF',
        padding: '100px 24px 80px'
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }} className="animate-fade-in">
            {/* Tagline Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(230, 168, 23, 0.2)',
              border: '1px solid #E6A817',
              color: '#E6A817',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              <ShieldCheck size={16} /> Embedded Technical Assistance & Evaluation
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline" style={{ marginBottom: '24px' }}>
              Policy that Works Where It’s Built.
            </h1>

            {/* Subheadline */}
            <p className="lead" style={{ color: '#F9F9F9', opacity: 0.95, fontSize: '1.25rem', marginBottom: '36px', maxWidth: '720px' }}>
              Technical assistance that’s embedded, politically informed, and built in partnership with local communities. From Nairobi to the region, we deliver lasting government reform.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <Link href="/expertise" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
                Explore Smart TA <ArrowRight size={18} />
              </Link>
              <Link href="/impact" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.05rem' }}>
                View Our Impact
              </Link>
            </div>

            {/* Trust Indicator */}
            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              paddingTop: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#E2E8F0',
              fontSize: '0.95rem'
            }}>
              <Building2 size={20} color="#E6A817" />
              <span>
                <strong>Trusted Partner:</strong> Ministries of Health, Education, and Finance across 12 African countries.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
            <h2 style={{ color: '#1E1E1E', marginBottom: '16px' }}>
              Impact That Lasts. Stories That Matter.
            </h2>
            <p style={{ color: '#4A5568', fontSize: '1.1rem' }}>
              Over the past 20 years, we've helped transform public policy across Africa. Here's what that looks like on the ground.
            </p>
          </div>

          <div className="grid-3">
            {/* Card 1 */}
            <div className="card">
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: 'rgba(30, 123, 74, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: '#1E7B4A'
              }}>
                <Handshake size={28} />
              </div>
              <div className="stat-number">70%</div>
              <p style={{ fontWeight: '500', color: '#1E1E1E', fontSize: '1.05rem', lineHeight: 1.5, margin: 0 }}>
                70% of our projects are locally-led, ensuring solutions are owned by the communities they serve.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: 'rgba(217, 90, 43, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: '#D95A2B'
              }}>
                <BarChart3 size={28} />
              </div>
              <div className="stat-number">100+</div>
              <p style={{ fontWeight: '500', color: '#1E1E1E', fontSize: '1.05rem', lineHeight: 1.5, margin: 0 }}>
                100+ government reforms supported across East Africa, from social protection to climate resilience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: 'rgba(42, 92, 122, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: '#2A5C7A'
              }}>
                <MapPin size={28} />
              </div>
              <div className="stat-number">15</div>
              <p style={{ fontWeight: '500', color: '#1E1E1E', fontSize: '1.05rem', lineHeight: 1.5, margin: 0 }}>
                15 permanent field offices across the continent, including Nairobi, Accra, and Kigali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser Section */}
      <section className="section" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span style={{ color: '#1E7B4A', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                Practice Areas
              </span>
              <h2 style={{ marginTop: '8px', marginBottom: 0 }}>Our Expertise. Your Transformation.</h2>
            </div>
            <Link href="/expertise" className="btn btn-outline">
              See all our expertise <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {/* Block 1 */}
            <Link href="/expertise#policy" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#E6A817', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E1E1E', marginBottom: '20px' }}>
                    <FileText size={24} />
                  </div>
                  <h3 style={{ color: '#1E1E1E', fontSize: '1.35rem', marginBottom: '12px' }}>Policy & Governance</h3>
                  <p style={{ color: '#4A5568', fontSize: '0.975rem', lineHeight: 1.6 }}>
                    We co-design inclusive policies with ministries to ensure they are evidence-based, politically feasible, and administratively sustainable.
                  </p>
                </div>
                <div style={{ marginTop: '20px', color: '#1E7B4A', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Explore Sector <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Block 2 */}
            <Link href="/expertise#health" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#1E7B4A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', marginBottom: '20px' }}>
                    <Heart size={24} />
                  </div>
                  <h3 style={{ color: '#1E1E1E', fontSize: '1.35rem', marginBottom: '12px' }}>Health & Social Protection</h3>
                  <p style={{ color: '#4A5568', fontSize: '0.975rem', lineHeight: 1.6 }}>
                    From immunization campaigns to cash transfer programs, we strengthen delivery systems that reliably reach the most vulnerable populations.
                  </p>
                </div>
                <div style={{ marginTop: '20px', color: '#1E7B4A', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Explore Sector <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Block 3 */}
            <Link href="/expertise#climate" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#D95A2B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', marginBottom: '20px' }}>
                    <Trees size={24} />
                  </div>
                  <h3 style={{ color: '#1E1E1E', fontSize: '1.35rem', marginBottom: '12px' }}>Climate & Resilience</h3>
                  <p style={{ color: '#4A5568', fontSize: '0.975rem', lineHeight: 1.6 }}>
                    We help governments build climate-resilient infrastructure, structure adaptation finance, and protect vulnerable communities against shocks.
                  </p>
                </div>
                <div style={{ marginTop: '20px', color: '#1E7B4A', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Explore Sector <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span style={{ color: '#D95A2B', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                Our Methodology
              </span>
              <h2 style={{ marginTop: '8px', marginBottom: '24px', fontSize: '2.25rem' }}>
                Built on Site. Not Flown In.
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>
                We reject the "fly-in, fly-out" model of traditional international consulting. Our teams are embedded within partner ministries and local organizations, providing political, economic, and social context that off-the-shelf solutions miss.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#333333', lineHeight: 1.7, marginBottom: '32px' }}>
                We build enduring trust, transfer technical skills directly to civil servants, and ensure that policy reforms outlast project timelines and election cycles.
              </p>
              <Link href="/expertise" className="btn btn-primary">
                Learn about our Smart TA approach <ArrowRight size={18} />
              </Link>
            </div>

            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <Image
                src="/images/team-meeting.jpg"
                alt="Team meeting to develop a new health policy in Nairobi, Kenya"
                width={800}
                height={550}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(30,30,30,0.9))',
                padding: '24px',
                color: '#FFFFFF'
              }}>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#E6A817' }}>Embedded Teams in Action</span>
                <p style={{ margin: '4px 0 0', fontSize: '0.95rem', color: '#E2E8F0' }}>
                  Co-designing national health financing structures with local stakeholders in Nairobi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates / News Section */}
      <section className="section" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <h2 style={{ marginBottom: '12px' }}>From the Field</h2>
            <p style={{ color: '#4A5568' }}>Insights, project announcements, and policy briefs from our teams across Africa.</p>
          </div>

          <div className="grid-2">
            {/* Card 1 */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '240px', position: 'relative' }}>
                <Image
                  src="/images/kenya-health-case.jpg"
                  alt="County health supply chain project in Kenya"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#718096', fontSize: '0.85rem', marginBottom: '12px' }}>
                  <Calendar size={14} /> August 2026 • Kenya Policy Brief
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#1E1E1E' }}>
                  New Project: Strengthening County Health Systems in Kenya
                </h3>
                <p style={{ color: '#4A5568', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  We are partnering with the Ministry of Health to improve supply chain management across 10 counties, ensuring essential medicines reach rural clinics without delay.
                </p>
                <Link href="/impact" style={{ fontWeight: '600', color: '#1E7B4A' }}>
                  Read project details →
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '240px', position: 'relative' }}>
                <Image
                  src="/images/climate-project.jpg"
                  alt="Climate finance project for local communities"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#718096', fontSize: '0.85rem', marginBottom: '12px' }}>
                  <Calendar size={14} /> July 2026 • Research Brief
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: '#1E1E1E' }}>
                  Policy Brief: Climate Finance for Local Communities
                </h3>
                <p style={{ color: '#4A5568', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Our latest evaluation shows that directing international climate adaptation finance to local community actors increases long-term project resilience by 40%.
                </p>
                <Link href="/impact" style={{ fontWeight: '600', color: '#1E7B4A' }}>
                  Read policy brief →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
