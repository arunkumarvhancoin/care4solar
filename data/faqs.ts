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
      "Rooftop panels turn sunlight into electricity. An inverter converts that power so your lights, appliances, and machinery can use it directly. Any extra electricity flows back to the utility grid to earn credits on your power bill.",
  },
  {
    id: "gen-2",
    category: "General",
    question: "How much shadow-free rooftop space is required?",
    answer:
      "About 80 to 100 square feet of open, shadow-free roof space is needed for every 1 kW of solar capacity. For example, a typical 5 kW home system needs around 400 to 500 square feet.",
  },
  {
    id: "gen-3",
    category: "General",
    question: "How does net metering work with the utility grid?",
    answer:
      "A bi-directional meter installed by your local power company tracks the electricity you pull from the grid and the solar power you send back. Extra daytime solar power rolls back your meter, lowering your nighttime bill.",
  },
  {
    id: "gen-4",
    category: "General",
    question: "What happens on rainy or cloudy days?",
    answer:
      "Solar panels work on daylight, not just direct sun. While output drops on heavily overcast or rainy days, your building stays connected to the electricity grid so your power never cuts out.",
  },
  {
    id: "gen-5",
    category: "General",
    question: "What is the expected lifespan and warranty of a solar installation?",
    answer:
      "Quality solar panels last 25+ years and come with a 25-year performance warranty. Inverters typically carry 5 to 10-year warranties with straightforward options to extend.",
  },
  {
    id: "gen-6",
    category: "General",
    question: "How long does the entire installation process take?",
    answer:
      "Home rooftop installation takes 2 to 4 days. Commercial sheds take 2 to 3 weeks. Power company approvals and net-meter connection usually take another 3 to 4 weeks.",
  },

  // Residential (Individual Homes + Housing Societies / Apartments)
  {
    id: "res-1",
    category: "Residential",
    question: "Can solar be installed on both individual homes and apartment complexes?",
    answer:
      "Yes. For villas and independent homes, solar offsets your family's electricity bills. For apartment communities, solar powers common areas—like lifts, water pumps, lighting, and clubhouses—slashing society maintenance bills.",
  },
  {
    id: "res-2",
    category: "Residential",
    question: "How does an apartment society (RWA) get started with solar?",
    answer:
      "We visit your terrace and review past common-area electricity bills. We then provide a clear, easy-to-read proposal with exact costs, savings, and payback that the management committee can present to residents.",
  },
  {
    id: "res-3",
    category: "Residential",
    question: "Will installing solar damage or void our roof waterproofing?",
    answer:
      "No. On flat concrete roofs, we use weighted mounting bases that do not drill into your roof slab. If anchoring is needed, we seal every point with waterproof protective coatings.",
  },
  {
    id: "res-4",
    category: "Residential",
    question: "What happens during a power cut with an on-grid system?",
    answer:
      "Standard grid-tied systems turn off automatically during a power cut to keep grid repair workers safe. If you need backup during outages, we can pair solar with a battery or integrate it safely with your backup generator.",
  },
  {
    id: "res-5",
    category: "Residential",
    question: "Can solar integrate with existing society diesel generators (DG)?",
    answer:
      "Yes. We install a controller that lets solar run alongside your backup generator without sending power back into the engine, saving significant diesel fuel during daytime outages.",
  },
  {
    id: "res-6",
    category: "Residential",
    question: "Can I monitor daily generation on my smartphone?",
    answer:
      "Yes. Every system connects to a phone app showing today's generation, total units saved, and monthly bill savings at a glance.",
  },

  // Commercial & Industrial
  {
    id: "com-1",
    category: "Commercial",
    question: "What tax benefits and depreciation apply to commercial solar?",
    answer:
      "Businesses can claim tax depreciation on solar equipment, which reduces taxable corporate income in the first years and helps recover the project cost in 3 to 4 years.",
  },
  {
    id: "com-2",
    category: "Commercial",
    question: "Can solar be mounted on metal sheet roofing without leaks?",
    answer:
      "Yes. For industrial sheds and warehouses, we use non-penetrating clamps that grip the sheet seams without drilling holes, keeping your roof completely leak-proof.",
  },
  {
    id: "com-3",
    category: "Commercial",
    question: "What are the CAPEX and OPEX/RESCO commercial models?",
    answer:
      "Under CAPEX, your company purchases the system upfront and keeps 100% of the bill savings. Under OPEX/RESCO, an investor finances the installation and you simply buy cheaper solar power with zero upfront cost.",
  },
  {
    id: "com-4",
    category: "Commercial",
    question: "How does solar handle High Tension (HT) connections and varying loads?",
    answer:
      "We handle the complete utility approvals, grid permissions, and electrical safety inspections for factory connections of any size.",
  },
  {
    id: "com-5",
    category: "Commercial",
    question: "What is the typical return on investment (ROI) for commercial solar?",
    answer:
      "Commercial solar typically pays for itself within 3 to 4 years, delivering substantial long-term electricity savings for decades.",
  },

  // Operations & Maintenance
  {
    id: "maint-1",
    category: "Maintenance",
    question: "How frequently should solar panels be cleaned?",
    answer:
      "Panels should be washed every 2 to 3 weeks. Dust and dirt can cut power generation by 15% to 25% if left uncleaned.",
  },
  {
    id: "maint-2",
    category: "Maintenance",
    question: "What does an Annual Maintenance Contract (AMC) cover?",
    answer:
      "Care4Solar AMCs take care of routine cleaning, regular electrical checks, inverter inspections, and fast technician support whenever needed.",
  },
  {
    id: "maint-3",
    category: "Maintenance",
    question: "What is thermal drone inspection and why is it necessary?",
    answer:
      "Thermal scans spot hidden panel damage, micro-cracks, or hot cells that can't be seen by eye, preventing power loss and fire risks.",
  },
  {
    id: "maint-4",
    category: "Maintenance",
    question: "What is your response time for inverter or system breakdowns?",
    answer:
      "We monitor systems remotely. If a fault occurs, our team investigates within 2 hours and dispatches an on-site technician within 24 to 48 hours.",
  },
  {
    id: "maint-5",
    category: "Maintenance",
    question: "Can Care4Solar maintain plants installed by other solar companies?",
    answer:
      "Yes. If your existing solar plant isn't performing well or the original installer is unavailable, we can inspect it, fix wiring or safety issues, and take over regular servicing.",
  },
];
