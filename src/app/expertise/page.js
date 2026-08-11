import Image from 'next/image';
import Link from 'next/link';
import {
  FileCheck2,
  HeartPulse,
  TreePine,
  Users2,
  BrainCircuit,
  Database,
  ArrowRight,
  CheckCircle2,
  XCircle
} from 'lucide-react';

export const metadata = {
  title: "Our Consultancy Expertise - Policy, Health, Climate & Evaluation | Built on Site",
  description: "We provide smart technical assistance in public policy, health systems, social protection, and climate resilience. Built for the African context.",
};

export default function ExpertisePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="section" style={{ backgroundColor: '#1E1E1E', color: '#FFFFFF', padding: '80px 24px 60px' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span style={{ color: '#E6A817', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                Practice & Sectors
              </span>
              <h1 style={{ color: '#FFFFFF', fontSize: '3rem', margin: '12px 0 20px', fontFamily: 'var(--font-lora)' }}>
                The Right Expertise for Africa's Challenges.
              </h1>
              <p className="lead" style={{ color: '#E2E8F0', fontSize: '1.2rem', marginBottom: '28px' }}>
                We work across sectors, bringing deep technical knowledge, political economy insights, and local understanding to every project.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Discuss Your Requirements <ArrowRight size={18} />
              </Link>
            </div>
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '360px', boxShadow: '0 12px 24px rgba(0,0,0,0.3)' }}>
              <Image
                src="/images/expertise-collage.jpg"
                alt="Expertise in health, education, and agriculture across Africa"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
            <span style={{ color: '#1E7B4A', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
              Core Technical Offerings
            </span>
            <h2 style={{ fontSize: '2.25rem', marginTop: '8px' }}>
              Deep Domain Knowledge, Locally Applied
            </h2>
            <p style={{ color: '#4A5568', fontSize: '1.05rem' }}>
              Our work spans three critical pillars of African governance and public administration.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {/* Sector 1: Policy & Governance */}
            <div id="policy" className="card" style={{ padding: '40px' }}>
              <div className="grid-2" style={{ alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'rgba(230, 168, 23, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E6A817' }}>
                      <FileCheck2 size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', margin: 0, color: '#1E1E1E' }}>
                      Policy & Governance Reform
                    </h3>
                  </div>
                  <p style={{ fontSize: '1.05rem', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>
                    We work directly with parliaments, ministries, and sub-national governments to design, implement, and evaluate policies. Our approach is politically savvy and data-driven, ensuring public sector reforms are legally sound and administratively actionable.
                  </p>
                  <div style={{ backgroundColor: '#F9F9F9', borderLeft: '4px solid #E6A817', padding: '16px 20px', borderRadius: '0 8px 8px 0', marginBottom: '24px' }}>
                    <strong style={{ color: '#1E1E1E', display: 'block', marginBottom: '4px' }}>Featured Milestone:</strong>
                    <span style={{ color: '#4A5568', fontSize: '0.95rem' }}>
                      Supported the co-design and legislative drafting of Kenya's National Social Protection Policy alongside civil society and ministry technical working groups.
                    </span>
                  </div>
                  <Link href="/impact#case1" className="btn btn-secondary btn-sm">
                    View Policy Impact Case Study →
                  </Link>
                </div>
                <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: '300px' }}>
                  <Image
                    src="/images/policy-meeting.jpg"
                    alt="High-level policy reform meeting in Nairobi boardroom"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>

            {/* Sector 2: Health Systems Strengthening */}
            <div id="health" className="card" style={{ padding: '40px' }}>
              <div className="grid-2" style={{ alignItems: 'center' }}>
                <div style={{ order: 1 }}>
                  <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: '300px' }}>
                    <Image
                      src="/images/health-clinic.jpg"
                      alt="Health clinic workers and family receiving care in East Africa"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div style={{ order: 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'rgba(30, 123, 74, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E7B4A' }}>
                      <HeartPulse size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', margin: 0, color: '#1E1E1E' }}>
                      Health Systems Strengthening
                    </h3>
                  </div>
                  <p style={{ fontSize: '1.05rem', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>
                    From strengthening pharmaceutical supply chains to improving maternal health financing and immunization coverage, we support public health leaders to build resilient, shock-responsive health systems.
                  </p>
                  <div style={{ backgroundColor: '#F9F9F9', borderLeft: '4px solid #1E7B4A', padding: '16px 20px', borderRadius: '0 8px 8px 0', marginBottom: '24px' }}>
                    <strong style={{ color: '#1E1E1E', display: 'block', marginBottom: '4px' }}>Featured Milestone:</strong>
                    <span style={{ color: '#4A5568', fontSize: '0.95rem' }}>
                      Supported vaccine distribution rollout in underserved and conflict-affected regions of Ethiopia, reaching zero-dose children with essential life-saving immunizations.
                    </span>
                  </div>
                  <Link href="/impact#case2" className="btn btn-secondary btn-sm">
                    View Immunization Case Study →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sector 3: Climate Resilience & Adaptation */}
            <div id="climate" className="card" style={{ padding: '40px' }}>
              <div className="grid-2" style={{ alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: 'rgba(217, 90, 43, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D95A2B' }}>
                      <TreePine size={28} />
                    </div>
                    <h3 style={{ fontSize: '1.75rem', margin: 0, color: '#1E1E1E' }}>
                      Climate Resilience & Adaptation
                    </h3>
                  </div>
                  <p style={{ fontSize: '1.05rem', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>
                    We advise national and county governments on climate-smart policy frameworks, disaster risk financing mechanisms, and community-led adaptation initiatives. We help ensure international climate finance reaches local frontline actors.
                  </p>
                  <div style={{ backgroundColor: '#F9F9F9', borderLeft: '4px solid #D95A2B', padding: '16px 20px', borderRadius: '0 8px 8px 0', marginBottom: '24px' }}>
                    <strong style={{ color: '#1E1E1E', display: 'block', marginBottom: '4px' }}>Featured Milestone:</strong>
                    <span style={{ color: '#4A5568', fontSize: '0.95rem' }}>
                      Developing sub-national climate adaptation investment plans for coastal and arid counties in Kenya to unlock international loss-and-damage climate funds.
                    </span>
                  </div>
                  <Link href="/contact" className="btn btn-secondary btn-sm">
                    Request Climate Advisory Brief →
                  </Link>
                </div>
                <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: '300px' }}>
                  <Image
                    src="/images/climate-project.jpg"
                    alt="Community climate adaptation project in rural Kenya"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="section" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
            <span style={{ color: '#D95A2B', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
              The Built on Site Distinction
            </span>
            <h2 style={{ fontSize: '2.25rem', marginTop: '8px' }}>Why Work With Us?</h2>
            <p style={{ color: '#4A5568', fontSize: '1.05rem' }}>
              Traditional advisory often fails because it isolates strategy from implementation context. We do the exact opposite.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '64px' }}>
            {/* Pillar 1 */}
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(30, 123, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E7B4A', marginBottom: '20px' }}>
                <Users2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Embedded Teams</h3>
              <p style={{ color: '#4A5568', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                We live where we work. Our consultants are physically based in your country, working shoulder-to-shoulder inside ministry offices to build internal capacity.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(230, 168, 23, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E6A817', marginBottom: '20px' }}>
                <BrainCircuit size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Political Smarts</h3>
              <p style={{ color: '#4A5568', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                We understand the local political economy. We navigate bureaucratic landscapes, power dynamics, and stakeholder incentives to unlock progress.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(42, 92, 122, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2A5C7A', marginBottom: '20px' }}>
                <Database size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Evidence-Based</h3>
              <p style={{ color: '#4A5568', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                Everything we do is grounded in empirical research, rigorous evaluations, and reliable local data, ensuring recommendations stand up to audit and scrutiny.
              </p>
            </div>
          </div>

          {/* Embedded vs Fly-In Model Comparative Visual */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '40px', border: '1px solid #E2E8F0', boxShadow: '0 8px 16px rgba(0,0,0,0.04)' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '32px', fontFamily: 'var(--font-lora)', fontSize: '1.6rem' }}>
              Model Comparison: Embedded TA vs. Traditional Consulting
            </h3>

            <div className="grid-2">
              {/* Fly-in Fly-out column */}
              <div style={{ backgroundColor: '#FFF5F5', borderRadius: '8px', padding: '24px', border: '1px solid #FED7D7' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#C53030' }}>
                  <XCircle size={22} />
                  <h4 style={{ margin: 0, color: '#C53030', fontSize: '1.15rem' }}>Traditional "Fly-In, Fly-Out" Model</h4>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: '#742A2A', fontSize: '0.95rem' }}>
                  <li>❌ Short 2-week mission trips with high travel overhead</li>
                  <li>❌ One-size-fits-all global templates with minimal local adaptation</li>
                  <li>❌ Heavy 100-page reports left on shelves after contract end</li>
                  <li>❌ Zero skill transfer to resident ministry staff</li>
                </ul>
              </div>

              {/* Built on Site Embedded Column */}
              <div style={{ backgroundColor: '#F0FFF4', borderRadius: '8px', padding: '24px', border: '1px solid #C6F6D5' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#276749' }}>
                  <CheckCircle2 size={22} />
                  <h4 style={{ margin: 0, color: '#276749', fontSize: '1.15rem' }}>"Built on Site" Embedded Model</h4>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: '#22543D', fontSize: '0.95rem' }}>
                  <li>✓ Resident local experts physically stationed inside partner offices</li>
                  <li>✓ Context-specific policies co-designed with civil servants</li>
                  <li>✓ Hands-on implementation support, monitoring, and iteration</li>
                  <li>✓ Sustainable institutional knowledge transfer that lasts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#1E7B4A', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: '2.5rem', marginBottom: '16px' }}>
            Ready to Partner?
          </h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.95, marginBottom: '32px' }}>
            Let's discuss how our smart technical assistance and evaluation expertise can support your government reform goals.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
            Contact Our Nairobi Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
