export interface FAQItem {
  id: string;
  category: "General" | "Residential" | "Commercial" | "Maintenance";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  // General / Sitewide
  {
    id: "gen-1",
    category: "General",
    question: "How does rooftop solar power work?",
    answer:
      "Rooftop solar panels convert sunlight into direct current (DC) electricity through photovoltaic semiconductor cells. A solar inverter converts this DC power into alternating current (AC) electricity at the exact voltage and frequency required by your building appliances and the utility grid.",
  },
  {
    id: "gen-2",
    category: "General",
    question: "How much shadow-free rooftop space is required?",
    answer:
      "As a standard engineering benchmark, approximately 80 to 100 square feet of shadow-free rooftop space is required for every 1 kWp of solar capacity using high-efficiency mono PERC or TopCon modules.",
  },
  {
    id: "gen-3",
    category: "General",
    question: "How does net metering work with the utility grid?",
    answer:
      "A bi-directional net meter installed by your DISCOM tracks units imported from the grid and units exported by your solar plant. Surplus daytime energy rolls back your meter, crediting units directly against your nighttime consumption.",
  },
  {
    id: "gen-4",
    category: "General",
    question: "What happens on rainy or cloudy days?",
    answer:
      "Solar modules generate power from daylight irradiance rather than direct heat. While generation typically drops to 25–40% on heavily overcast or rainy days, your system remains synchronized with the electrical grid to draw supplementary power automatically.",
  },
  {
    id: "gen-5",
    category: "General",
    question: "What is the expected lifespan and warranty of a solar installation?",
    answer:
      "Tier-1 solar modules come with a 25-year linear performance warranty (guaranteeing >80% output after 25 years) and a 10 to 12-year product warranty. Inverters typically carry 5 to 10-year manufacturer warranties with optional extensions.",
  },
  {
    id: "gen-6",
    category: "General",
    question: "How long does the entire installation process take?",
    answer:
      "On-site mounting and electrical wiring take 2 to 5 days for residential systems and 2 to 3 weeks for commercial plants. End-to-end DISCOM approvals, net metering sanction, and grid synchronization usually take 3 to 5 weeks.",
  },

  // Residential (Individual Homes + Housing Societies / Apartments)
  {
    id: "res-1",
    category: "Residential",
    question: "Can solar be installed on both individual homes and apartment complexes?",
    answer:
      "Yes. For independent homes and villas, systems are sized to offset entire domestic loads (lighting, ACs, water heaters, EV chargers). For apartments and housing societies, arrays power common-area meters (lifts, water treatment plants, clubhouses, common lighting), reducing maintenance bills for all residents.",
  },
  {
    id: "res-2",
    category: "Residential",
    question: "How does an apartment society (RWA) get started with solar?",
    answer:
      "Care4Solar conducts a complimentary technical survey of the common terrace and analyzes past 12-month common-meter electricity bills. We prepare a detailed techno-commercial feasibility proposal that the Management Committee or RWA can present at general body meetings for quick consensus.",
  },
  {
    id: "res-3",
    category: "Residential",
    question: "Will installing solar damage or void our roof waterproofing?",
    answer:
      "No. We prioritize non-penetrative ballasted mounting systems on flat concrete roofs that require zero rooftop puncturing. Where chemical anchors are necessary, we apply multi-layered industrial waterproofing membranes and elastomeric sealants.",
  },
  {
    id: "res-4",
    category: "Residential",
    question: "What happens during a power cut with an on-grid system?",
    answer:
      "Under international safety standards (anti-islanding IEC 62116), grid-tied inverters immediately shut down during grid outages to protect line workers. For uninterrupted backup during outages, we offer hybrid solar systems paired with lithium battery storage or automated diesel-generator synchronizers.",
  },
  {
    id: "res-5",
    category: "Residential",
    question: "Can solar integrate with existing society diesel generators (DG)?",
    answer:
      "Yes. For apartments and communities with DG backup, we install smart DG-PV controllers (reverse power protection). When the grid fails and the DG turns on, the controller modulates solar output so surplus power never back-feeds into the generator, saving costly diesel fuel.",
  },
  {
    id: "res-6",
    category: "Residential",
    question: "Can I monitor daily generation on my smartphone?",
    answer:
      "Yes. Every installation includes Wi-Fi or 4G cloud telemetry. Property owners and society facility managers receive access to a dedicated mobile app showing real-time generation, lifetime energy savings, grid feed-in units, and automated fault alerts.",
  },

  // Commercial & Industrial
  {
    id: "com-1",
    category: "Commercial",
    question: "What tax benefits and depreciation apply to commercial solar?",
    answer:
      "Commercial enterprises and manufacturing units can claim Accelerated Depreciation (AD) under Section 32 of the Income Tax Act (up to 40% write-off in Year 1). This significantly reduces taxable corporate income and accelerates the project payback period to 2.5–3.5 years.",
  },
  {
    id: "com-2",
    category: "Commercial",
    question: "Can solar be mounted on metal sheet roofing without leaks?",
    answer:
      "Yes. For industrial PEB warehouses and factory sheds (trapezoidal, standing seam, or sandwich panels), we use specialized non-piercing aluminum clamps or EPDM-sealed structural rivets. This guarantees zero sheet puncturing and zero water ingress.",
  },
  {
    id: "com-3",
    category: "Commercial",
    question: "What are the CAPEX and OPEX/RESCO commercial models?",
    answer:
      "Under CAPEX, your business owns the system upfront, claims full tax depreciation benefits, and enjoys 100% of the ongoing electricity savings. Under OPEX/RESCO (for qualified multi-hundred kWp installations), an investor funds the plant and you purchase electricity at a tariff 20–40% lower than grid rates under a long-term PPA with zero upfront capital.",
  },
  {
    id: "com-4",
    category: "Commercial",
    question: "How does solar handle High Tension (HT) connections and varying loads?",
    answer:
      "Our engineering team coordinates with DISCOM and electrical inspectorate (CEIG) authorities for HT grid interconnection. We deploy multi-MPPT high-capacity string or central inverters with built-in power factor correction and harmonic distortion suppression.",
  },
  {
    id: "com-5",
    category: "Commercial",
    question: "What is the typical return on investment (ROI) for commercial solar?",
    answer:
      "Given commercial and industrial grid tariffs of ₹8 to ₹12+ per unit, most commercial installations deliver a 25% to 35% internal rate of return (IRR) with full capital payback achieved within 3 to 4 years.",
  },

  // Operations & Maintenance
  {
    id: "maint-1",
    category: "Maintenance",
    question: "How frequently should solar panels be cleaned?",
    answer:
      "Depending on your site's dust environment and rainfall, panels should ideally be washed every 15 to 21 days using demineralized or low-TDS water. Accumulated dust, industrial soot, or bird droppings can decrease energy output by 15% to 30%.",
  },
  {
    id: "maint-2",
    category: "Maintenance",
    question: "What does an Annual Maintenance Contract (AMC) cover?",
    answer:
      "Care4Solar AMCs cover scheduled periodic cleaning, quarterly electrical health audits, string voltage and combiner box torque testing, inverter diagnostics, earthing pit resistance measurement, and 24/7 cloud monitoring with priority breakdown response.",
  },
  {
    id: "maint-3",
    category: "Maintenance",
    question: "What is thermal drone inspection and why is it necessary?",
    answer:
      "Calibrated thermographic inspection identifies micro-cracks, damaged bypass diodes, and hotspot cells invisible to the naked eye. Left unaddressed, localized hotspots can degrade nearby modules or cause fire hazards.",
  },
  {
    id: "maint-4",
    category: "Maintenance",
    question: "What is your response time for inverter or system breakdowns?",
    answer:
      "Our monitoring desk detects inverter anomalies automatically. For active AMC clients, our engineers triage faults remotely within 2 hours, and field technicians dispatch for on-site hardware inspection within 24 to 48 business hours.",
  },
  {
    id: "maint-5",
    category: "Maintenance",
    question: "Can Care4Solar maintain plants installed by other solar companies?",
    answer:
      "Yes. We frequently take over underperforming or orphaned solar systems. Our team conducts an initial comprehensive plant audit, rectifies cabling, safety, or earthing defects, and integrates telemetry onto our monitoring platform.",
  },
];