export interface FAQItem {
  id: string;
  category: "General" | "Residential" | "Apartments" | "Commercial" | "Maintenance" | "Technical & Grid";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  // General
  {
    id: "gen-1",
    category: "General",
    question: "How does rooftop solar work?",
    answer:
      "Rooftop solar panels convert sunlight into direct current (DC) electricity via photovoltaic semiconductor cells. A solar inverter then converts this DC energy into alternating current (AC) electricity at the exact voltage and frequency required by your building appliances and the municipal utility grid.",
  },
  {
    id: "gen-2",
    category: "General",
    question: "What is the difference between on-grid and hybrid solar systems?",
    answer:
      "An on-grid (grid-tied) system operates strictly in parallel with the utility grid; excess generation is fed back to the grid via net metering, and the inverter automatically disconnects during grid outages for grid worker safety. A hybrid system includes battery energy storage and specialized hybrid inverter controls, enabling critical loads to operate during grid power cuts while still benefiting from net metering.",
  },
  {
    id: "gen-3",
    category: "General",
    question: "How much rooftop space is needed for a solar system?",
    answer:
      "As a standard engineering rule of thumb, approximately 80 to 100 square feet of shadow-free rooftop space is required for every 1 kWp of solar capacity using modern high-efficiency mono PERC or TopCon panels. The exact area depends on module wattage, tilt angle, and inter-row spacing to prevent self-shading.",
  },
  {
    id: "gen-4",
    category: "General",
    question: "How long does a typical installation take?",
    answer:
      "Physical rooftop installation for a typical residential system generally requires 2 to 5 working days once materials arrive on site. However, the end-to-end timeline—including DISCOM feasibility approvals, net meter procurement, official testing, and grid synchronization—typically spans 3 to 6 weeks depending on local utility processing cycles.",
  },

  // Residential
  {
    id: "res-1",
    category: "Residential",
    question: "Is solar suitable for every home?",
    answer:
      "Solar suitability depends primarily on rooftop structural integrity, available shadow-free area during peak daylight hours (9:00 AM to 4:00 PM), and your monthly electricity consumption profile. A preliminary site assessment will determine whether trees, adjacent structures, or roof orientation create excessive shading.",
  },
  {
    id: "res-2",
    category: "Residential",
    question: "What happens during a power cut with an on-grid system?",
    answer:
      "By law and international safety regulations (anti-islanding standards IEEE 1547 / IEC 62116), standard grid-tied solar inverters must shut down immediately during a grid outage. This prevents electricity from feeding into external transmission wires where utility repair crews could be working. To power loads during outages, a hybrid inverter paired with battery storage or a micro-grid setup is required.",
  },
  {
    id: "res-3",
    category: "Residential",
    question: "How is the recommended system capacity determined?",
    answer:
      "System capacity is sized based on your average monthly electrical consumption (kWh units from your past 12 electricity bills), your sanctioned load from the utility provider, and the physical square footage of shadow-free roof space available.",
  },

  // Apartments
  {
    id: "apt-1",
    category: "Apartments",
    question: "Can solar power common-area electricity in housing societies?",
    answer:
      "Yes. Apartment associations and RWAs frequently deploy solar arrays to offset common-meter loads, including water filtration and pumping systems, stairwell and campus lighting, security systems, clubhouses, and elevator banks.",
  },
  {
    id: "apt-2",
    category: "Apartments",
    question: "How is an apartment solar project planned with multiple owners?",
    answer:
      "Planning starts with reviewing the society's common-area electricity accounts and terrace accessibility. The proposal is formulated for the Resident Welfare Association (RWA) or Management Committee, followed by an association resolution approval prior to DISCOM filing and technical installation.",
  },
  {
    id: "apt-3",
    category: "Apartments",
    question: "What structural factors should a housing society consider?",
    answer:
      "Key considerations include terrace waterproofing integrity, wind load resistance at higher building elevations, maintenance walkway access, fire escape clearances, and ensuring mounting structures do not penetrate waterproof membranes through the use of non-invasive ballasted designs or chemical anchoring.",
  },

  // Commercial & Industrial
  {
    id: "com-1",
    category: "Commercial",
    question: "Can factories and industrial units use rooftop solar?",
    answer:
      "Yes. Industrial facilities and commercial complexes with metal sheet roofing, RCC terraces, or parking canopies are prime candidates for solar. Solar generation closely coincides with daytime peak industrial operating hours, directly offsetting high commercial tariff rates.",
  },
  {
    id: "com-2",
    category: "Commercial",
    question: "What is the CAPEX model for commercial solar?",
    answer:
      "In the Capital Expenditure (CAPEX) model, the business client owns the solar power plant entirely. The client finances the engineering, procurement, and construction (EPC) upfront or via asset financing, claiming accelerated depreciation benefits and 100% of the long-term energy savings.",
  },
  {
    id: "com-3",
    category: "Commercial",
    question: "What is the RESCO model for commercial solar?",
    answer:
      "In the Renewable Energy Service Company (RESCO) or OPEX model, a third-party developer finances, designs, installs, and maintains the solar system on the client's roof. The client purchases the generated electricity at a mutually agreed per-unit tariff under a long-term Power Purchase Agreement (PPA) with zero upfront capital outlay.",
  },

  // Maintenance
  {
    id: "maint-1",
    category: "Maintenance",
    question: "Why do solar panels need regular cleaning?",
    answer:
      "Dust, environmental particulates, bird droppings, and industrial soot settle on the panel glass, forming an opaque barrier that blocks solar irradiance from reaching the photovoltaic silicon cells. Regular cleaning preserves optimal generation yield and prevents localized heat accumulation caused by persistent bird droppings.",
  },
  {
    id: "maint-2",
    category: "Maintenance",
    question: "How often should a solar system be inspected?",
    answer:
      "Routine panel cleaning is generally conducted every two to four weeks depending on local dust levels. Comprehensive electrical audits—including string voltage checks, junction box torque inspections, earthing resistance measurements, and inverter diagnostics—should be performed at least twice a year.",
  },
  {
    id: "maint-3",
    category: "Maintenance",
    question: "What is remote monitoring and why is it important?",
    answer:
      "Remote monitoring connects your inverter to a cloud telemetry system via Wi-Fi, 4G, or Ethernet. It tracks generation in real-time, monitors grid voltage, logs performance trends, and triggers automated alerts if inverter faults, under-voltage, or unexpected generation drops occur.",
  },
  {
    id: "maint-4",
    category: "Maintenance",
    question: "What is thermal inspection in solar systems?",
    answer:
      "Thermal inspection uses calibrated infrared thermography cameras (handheld or drone-mounted) to detect temperature differentials across solar cells and electrical combiners. Cells operating at abnormally elevated temperatures indicate internal resistance, bypass diode faults, or micro-cracks that require attention.",
  },
  {
    id: "maint-5",
    category: "Maintenance",
    question: "What does an Annual Maintenance Contract (AMC) cover?",
    answer:
      "An AMC provides structured, ongoing technical care for your solar assets, including scheduled preventive physical and electrical inspections, scheduled cleaning regimens, real-time alert triage, and priority dispatch for on-site troubleshooting.",
  },

  // Technical & Grid
  {
    id: "tg-1",
    category: "Technical & Grid",
    question: "How does net metering work with DISCOM?",
    answer:
      "A bi-directional net meter records units imported from and exported to the utility grid. During peak daylight hours, surplus power generated by your panels feeds into the grid, rolling back your meter. Care4Solar manages the entire technical sanction and meter commissioning with your local DISCOM.",
  },
  {
    id: "tg-2",
    category: "Technical & Grid",
    question: "What happens on cloudy or rainy days?",
    answer:
      "Solar panels produce electricity from daylight irradiance, not direct heat. While generation reduces to 25–40% on heavily overcast or monsoon days, your system remains synchronized with the electrical grid, drawing supplementary power automatically without interruption.",
  },
  {
    id: "tg-3",
    category: "Technical & Grid",
    question: "What safety protections are installed with the system?",
    answer:
      "Every installation includes dual chemical earthing pits for DC and AC sides, Class-II surge protection devices (SPDs), DC isolator switches, and automatic anti-islanding protection to guarantee complete safety for your home and utility workers.",
  },
];
