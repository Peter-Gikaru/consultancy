export const siteData = {
  siteInfo: {
    brandName: "Meridian Evaluation & Advisory",
    tagline: "Project Evaluation & Consultancy That Brings Clarity to Complexity.",
    shortName: "Meridian",
    contactEmail: "advisor@meridianadvisory.com",
    contactPhone: "+1 (800) 555-0199",
    mainOffice: "Boston & London Hubs",
    copyright: `© ${new Date().getFullYear()} Meridian Evaluation & Advisory LLC. All rights reserved.`
  },

  heroConfig: {
    badgeText: "",
    headline: "Project Evaluation & Consultancy That Brings Clarity to Complexity.",
    subheadline: "We help organisations assess their projects, identify risks, and make confident strategic decisions with complete independence.",
    ctaPrimaryText: "Book a consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondaryText: "Explore our services",
    ctaSecondaryLink: "/services",
    reassuranceText: ""
  },

  spotlightCarousel: [
    {
      id: "spotlight-1",
      badge: "Team & Morale",
      headline: "Team & Morale",
      subheadline: "Eliminating Friction & Re-Energizing Burned-Out Teams",
      metric: "4.8/5 Team Health Index",
      description: "Re-aligning leadership and engineering around clear, human-sized goals that restore psychological safety and speed.",
      tag: "Active Focus Case",
      image: "/images/contact-hero.jpg",
      alt: "Team members engaging in collaborative alignment session",
      linkText: "Explore Framework →",
      spotlightButtonText: "Spotlight ↑"
    },
    {
      id: "spotlight-2",
      badge: "Vendor Accountability",
      headline: "Vendor Accountability",
      subheadline: "Honest Technical Audits of Third-Party Partners",
      metric: "100% UNBIASED INDEPENDENCE",
      description: "Unbiased technical verification of vendor claims, ensuring you only pay for true progress and verifiable code or infrastructure.",
      tag: "Vendor Audit Case",
      image: "/images/policy-meeting.jpg",
      alt: "Reviewing vendor documentation and metrics",
      linkText: "Explore Framework →",
      spotlightButtonText: "Spotlight ↑"
    },
    {
      id: "spotlight-3",
      badge: "Project Rescue",
      headline: "Project Rescue",
      subheadline: "Turning Stalled Projects Into Predictable Deliveries",
      metric: "94% ON-TIME RECOVERY RATE",
      description: "We diagnose root causes of delay within 14 days, restructuring team workflows and vendor agreements to restore momentum.",
      tag: "Rescue Case",
      image: "/images/team-meeting.jpg",
      alt: "Advisors reviewing project roadmap around wooden table",
      linkText: "Explore Framework →",
      spotlightButtonText: "Spotlight ↑"
    },
    {
      id: "spotlight-4",
      badge: "Risk & Governance",
      headline: "Risk & Governance",
      subheadline: "Exposing Blindspots Before They Become Crises",
      metric: "$12M AVERAGE CAPITAL SAVED",
      description: "Independent audit of technical architectures, budget allocations, and compliance gaps to shield your organization from sudden shocks.",
      tag: "Governance Case",
      image: "/images/expertise-collage.jpg",
      alt: "Strategic risk assessment session",
      linkText: "Explore Framework →",
      spotlightButtonText: "Spotlight ↑"
    }
  ],

  spotlightControlText: "Auto-rotating every 5 seconds • Hover to pause • Click or swipe vertically to focus.",

  homeIntro: {
    badge: "",
    title: "We Are The Advisor We Wished We Had When Things Got Tough.",
    leadText: "Most consultancies sell manpower hours or thick 200-page slide decks that gather dust. We offer relief from anxiety.",
    paragraphs: [
      "When a critical project is on the line, you don't need buzzwords or high-pressure sales pitches. You need a seasoned partner who sits across the table, listens quietly, asks the right questions, and gives you raw, honest clarity.",
      "We've spent decades in the field—rescuing derailed software launches, auditing public sector infrastructure, and recalibrating enterprise transformations. We bring grounded warmth, calm authority, and zero drama."
    ],
    pillars: [
      { title: "Quiet Independence", description: "We have no vendor kickbacks or hidden agendas. Our only allegiance is to your peace of mind." },
      { title: "Human-First Diagnostics", description: "Projects don't fail because of Gantt charts; they fail because people are scared to speak truth to power." },
      { title: "Actionable Simplicity", description: "You get clear 5-page action blueprints, not bloated reports designed to extend our contract." }
    ]
  },

  servicesConfig: {
    overviewTitle: "Services Built Around Your Realities, Not Industry Jargon",
    overviewSubtitle: "Select how you are feeling right now to see the exact support framework designed for your situation.",
    
    emotionalPains: [
      {
        id: "pain-stalled",
        buttonLabel: "My project is off track or stalled",
        title: "When deadlines keep slipping and no one can explain why...",
        diagnosisNote: "You are experiencing execution fatigue. You need an independent, rapid diagnostic that isolates bottlenecks without assigning corporate blame.",
        recommendedServiceId: "service-rescue"
      },
      {
        id: "pain-risk",
        buttonLabel: "I am worried about hidden risks",
        title: "When you suspect critical flaws are being swept under the rug...",
        diagnosisNote: "You are feeling accountability anxiety. You need a discreet 'gloves-off' risk audit to inspect code, finances, or compliance before launch.",
        recommendedServiceId: "service-audit"
      },
      {
        id: "pain-burnout",
        buttonLabel: "My team is burning out",
        title: "When your best people are exhausted and demoralized...",
        diagnosisNote: "You have structural friction. Over-engineered processes and unclear scope are killing morale. You need scope rationalization and human realignment.",
        recommendedServiceId: "service-alignment"
      },
      {
        id: "pain-vendor",
        buttonLabel: "I don't trust our vendor's progress reports",
        title: "When progress updates sound green, but deliverables feel red...",
        diagnosisNote: "You suffer from information asymmetry. You need independent technical verification to validate what has actually been built.",
        recommendedServiceId: "service-vendor"
      }
    ],

    serviceList: [
      {
        id: "service-alignment",
        iconName: "Users",
        title: "Team & Morale",
        tagline: "Eliminating Friction & Re-Energizing Burned-Out Teams",
        description: "Re-aligning leadership and engineering around clear, human-sized goals that restore psychological safety and speed.",
        deliverables: [
          "Role clarity & decision rights map",
          "Process simplification workshop",
          "90-day team morale & throughput index"
        ],
        idealFor: "Teams experiencing high turnover, conflict, or chronic burnout."
      },
      {
        id: "service-vendor",
        iconName: "FileCheck",
        title: "Vendor Accountability",
        tagline: "Honest Technical Audits of Third-Party Partners",
        description: "Unbiased technical verification of vendor claims, ensuring you only pay for true progress and verifiable code or infrastructure.",
        deliverables: [
          "Independent code & delivery review",
          "SLA compliance scoring",
          "Vendor renegotiation advisory"
        ],
        idealFor: "Organizations managing external software agencies or general contractors."
      },
      {
        id: "service-rescue",
        iconName: "LifeBuoy",
        title: "Project Rescue",
        tagline: "Turning Stalled Projects Into Predictable Deliveries",
        description: "We diagnose root causes of delay within 14 days, restructuring team workflows and vendor agreements to restore momentum.",
        deliverables: [
          "Root cause friction matrix",
          "Simplified 30-day recovery blueprint",
          "Executive briefing for board & key stakeholders"
        ],
        idealFor: "Projects 3+ months behind schedule or exceeding budget thresholds."
      },
      {
        id: "service-audit",
        iconName: "ShieldAlert",
        title: "Risk & Governance",
        tagline: "Exposing Blindspots Before They Become Crises",
        description: "Independent audit of technical architectures, budget allocations, and compliance gaps to shield your organization from sudden shocks.",
        deliverables: [
          "Discreet vulnerability audit",
          "Vendor compliance verification",
          "Risk mitigation playbook"
        ],
        idealFor: "M&A integrations, new platform rollouts, and infrastructure investments."
      }
    ],

    methodology: {
      title: "Our Evaluation Methodology: Simple, Transparent, Human",
      subtitle: "No mysterious black boxes or jargon. Here is exactly how we work with you.",
      steps: [
        {
          number: "01",
          name: "Listen & Observe",
          description: "We start by listening to your team in confidential 1-on-1 conversations, understanding the human context behind the numbers."
        },
        {
          number: "02",
          name: "Verify & Diagnose",
          description: "We review raw data, technical artifacts, and workflows to separate true systemic issues from temporary friction."
        },
        {
          number: "03",
          name: "Co-Design & Stabilize",
          description: "We craft simple, realistic recommendations alongside your team, ensuring immediate buy-in and zero friction."
        },
        {
          number: "04",
          name: "Embed & Transfer",
          description: "We stay by your side during rollout, transferring skills so your team remains strong long after we depart."
        }
      ]
    }
  },

  scarsStories: [
    {
      id: "scar-1",
      title: "The $14M Platform Redesign That Ran Into a Wall",
      clientType: "Enterprise Fintech • 18-Month Recovery",
      impactMetric: "Launched 3 Months Early After Pivot",
      image: "/images/kenya-health-case.jpg",
      alt: "Project evaluation team reviewing software architecture blueprints",
      failureScenario: "Where we started: The client was 9 months behind on a core platform overhaul. Morale was rock-bottom, and third-party vendors were blaming internal IT leadership.",
      scaryMoment: "The scary pivot: Two weeks into our audit, we discovered the underlying architecture was completely sound—the bottleneck was an overly complex 14-step approval hierarchy that paralyzed developers.",
      outcome: "How we fixed it together: We convinced leadership to strip away 10 approval gates, establishing a delegated sign-off protocol. The team delivered the full platform in 6 months with zero staff turnover."
    },
    {
      id: "scar-2",
      title: "The Multi-County Logistics Overhaul Near Collapse",
      clientType: "Public Health Infrastructure • 12-Month Engagement",
      impactMetric: "40% Reduction in Stock-Outs",
      image: "/images/climate-project.jpg",
      alt: "Field operations team inspecting distribution warehouse",
      failureScenario: "Where we started: A critical medical distribution program across 12 counties was suffering severe inventory stock-outs, despite heavy financial investment.",
      scaryMoment: "The scary pivot: Standard reports blamed bad roads, but our on-the-ground interviews revealed field officers were afraid to report real inventory numbers due to punitive audit policies.",
      outcome: "How we fixed it together: We co-designed a zero-penalty reporting system and real-time mobile tracking dashboard. Stock-outs dropped 40% within 90 days."
    }
  ],

  aboutConfig: {
    title: "We Built Meridian Because Consultancy Needed More Heart and Less Hype.",
    subtitle: "A boutique firm founded by former enterprise leaders who believed that high-trust guidance matters more than billable hours.",
    philosophyTitle: "Our Purpose & Philosophy",
    philosophyParagraphs: [
      "In a world of fast-talking agencies and corporate buzzwords, Meridian was established to provide a sanctuary of calm, quiet competence.",
      "We believe that every complex project is fundamentally a human endeavor. When a project slips, it isn't just a financial metric—it represents stress for leaders, burnout for teams, and anxiety for stakeholders.",
      "Our team is composed exclusively of senior advisors who have run major business units, managed multi-million dollar budgets, and lived through the hard lessons of complex execution. We don't send junior analysts to do a senior expert's job."
    ],
    values: [
      {
        title: "Empathy Before Execution",
        description: "We seek first to understand the human pressures before recommending structural changes."
      },
      {
        title: "Relentless Truth-Telling",
        description: "We tell you what you need to hear, kindly and clearly, even when it is uncomfortable."
      },
      {
        title: "Radical Simplicity",
        description: "If a solution cannot be explained in two sentences on a whiteboard, it is too complex to succeed."
      },
      {
        title: "Quiet Stewardship",
        description: "We measure our success by your team's independence, not by how long we stay on retainer."
      }
    ],
    teamMembers: [
      {
        name: "Elena Rostova",
        role: "Managing Partner & Lead Evaluator",
        bio: "Former VP of Operations with 18+ years leading complex systems transformations in health and infrastructure. Elena brings calm clarity to volatile project environments.",
        image: "/images/team-meeting.jpg",
        personalQuote: "The greatest risk in any project is the truth that nobody dares to say aloud."
      },
      {
        name: "Marcus Vance",
        role: "Partner, Risk & Governance",
        bio: "Senior advisor specializing in technical architecture and vendor accountability. Over 15 years advising public and private sector boards on capital allocation.",
        image: "/images/contact-hero.jpg",
        personalQuote: "Good governance isn't red tape—it's the guardrail that lets you drive fast with confidence."
      },
      {
        name: "Dr. Samira Khan",
        role: "Director of Organizational Alignment",
        bio: "Organizational psychologist turned management consultant. Samira focuses on human dynamics, team morale, and friction reduction in multi-disciplinary teams.",
        image: "/images/policy-meeting.jpg",
        personalQuote: "When people feel safe to flag mistakes early, project speed doubles naturally."
      }
    ]
  },

  unaskedQuestions: [
    {
      question: "Do I have to fire or replace my current team or vendors?",
      answer: "Almost never. In 90% of our evaluations, the issue isn't team competence—it is unclear priorities, conflicting incentives, or broken decision rights. We help your existing team succeed."
    },
    {
      question: "What if I hate your recommendations or think they're unrealistic?",
      answer: "We co-design every recommendation with you in real time. There are no sudden 200-page reveal decks. If a proposal doesn't fit your practical reality, we adjust it immediately."
    },
    {
      question: "Can I afford your advisory services if our Q4 budget is tight?",
      answer: "Our engagements are scoped tightly around specific outcomes, not endless open-ended retainers. We frequently identify immediate cost savings in our first fortnight that offset our fee."
    },
    {
      question: "Will your presence make my leadership team feel defensive or threatened?",
      answer: "We enter every organization as supportive partners, not external inquisitors. Our warm, confidential 1-on-1 process builds trust quickly and creates a safe space for honest dialogue."
    }
  ],

  brainAuditConfig: {
    badge: "15-Minute Diagnosis",
    title: "Send Us Your Biggest Headache. We'll Record a Video Blueprint.",
    subtitle: "Zero sales fluff, zero high-pressure pitches. Just 15 minutes of raw, expert insight on how a partner would tackle your specific challenge. You keep the video forever.",
    ctaButtonText: "Request My 15-Minute Video Audit",
    privacyNote: "Privacy & Security Guaranteed: Your submission is encrypted and strictly protected under our strict non-disclosure promise."
  },

  pricingAnchorConfig: {
    widgetLabel: "Transparent & Fair Advisory",
    badge: "No-BS Commitment",
    headline: "We don't do hidden fees. We don't do 12-month lock-ins.",
    subtext: "We believe trust starts with complete clarity. Ask us anything about pricing, timeline, or scope before signing a single paper.",
    liveCtaText: "Scared of high consultant fees? Just ask. We're nice, we promise.",
    bullets: [
      "Fixed-fee project health diagnostics (No billing surprises)",
      "Cancel anytime agreements with 7-day notice",
      "Direct access to senior partners—no junior hand-offs"
    ]
  },

  calendarConfig: {
    badge: "Direct Partner Availability",
    title: "Pick a Time That Works for You",
    subtitle: "Select a 30-minute confidential window to speak directly with one of our senior partners. No junior gatekeepers.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    availableTimeSlots: ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"],
    embedNote: "Prefer email first? Send us a quick note below and we'll reply within 4 hours."
  }
};
