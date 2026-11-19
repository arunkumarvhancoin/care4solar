export interface SubsidyTierConfig {
  capacitySlab: string;
  indicativeSubsidy: string;
  notes: string;
}

export const subsidyConfig = {
  schemeName: "PM Surya Ghar: Muft Bijli Yojana",
  governingBody: "Ministry of New and Renewable Energy (MNRE), Government of India",
  effectiveDate: "February 2024 (Subject to ongoing official notifications)",
  lastVerificationDate: "November 2024",
  officialPortalUrl: "https://pmsuryaghar.gov.in",
  disclaimer:
    "Subsidy eligibility, allocation criteria, and exact disbursement amounts are governed solely by active government directives, DISCOM regulations, and central MNRE guidelines. Care4Solar assists with technical compliance and documentation but does not guarantee subsidy approval.",
  tiers: [
    {
      capacitySlab: "Up to 1 kWp",
      indicativeSubsidy: "Up to ₹30,000",
      notes: "Applies to individual residential domestic grid-tied connections using DCR modules.",
    },
    {
      capacitySlab: "2 kWp System",
      indicativeSubsidy: "Up to ₹60,000",
      notes: "Benchmark incentive for standard two-kilowatt rooftop installations.",
    },
    {
      capacitySlab: "3 kWp and Above",
      indicativeSubsidy: "Up to ₹78,000",
      notes: "Maximum central financial assistance cap for individual single-residential domestic meters.",
    },
    {
      capacitySlab: "Group Housing Societies / RWA (Common Facilities)",
      indicativeSubsidy: "Up to ₹18,000 / kW (up to 500 kW ceiling)",
      notes: "Applicable to common facilities (EV charging, water pumping, common lighting).",
    },
  ],
};

export const subsidyEligibilityCriteria = [
  {
    title: "Domestic Residential Electricity Connection",
    detail:
      "The applicant must possess an active domestic low-tension (LT) consumer meter registered in their name with the local DISCOM.",
  },
  {
    title: "Approved Domestic Content Requirement (DCR)",
    detail:
      "To be eligible for central financial assistance, solar PV modules must be manufactured in India using domestically produced solar cells (DCR compliant).",
  },
  {
    title: "Registered Portal Application",
    detail:
      "The application must be registered on the National PM Surya Ghar portal prior to system procurement and installation.",
  },
  {
    title: "Empaneled Vendor Execution",
    detail:
      "Installation must be carried out in coordination with DISCOM empaneled technical vendors adhering to standardized safety parameters.",
  },
  {
    title: "Bi-directional Meter & DISCOM Inspection",
    detail:
      "The local power distribution company must inspect the plant, commission the bi-directional (net) meter, and generate the official commissioning certificate.",
  },
];

export const subsidyProcessSteps = [
  {
    step: "1",
    title: "Portal Registration & DISCOM Feasibility",
    description:
      "Register on the PM Surya Ghar National Portal with your consumer number, mobile number, and local DISCOM division to submit technical feasibility approval.",
  },
  {
    step: "2",
    title: "Technical System Design & Quotation",
    description:
      "Receive rooftop engineering assessment, equipment sizing, and DCR-compliant bill of materials aligned with approved scheme parameters.",
  },
  {
    step: "3",
    title: "System Installation & Safety Verification",
    description:
      "Installation of approved modules, grid-tied inverter, chemical earthing, and lightning protection according to MNRE technical specifications.",
  },
  {
    step: "4",
    title: "DISCOM Inspection & Net Meter Synchronization",
    description:
      "DISCOM field engineers inspect the electrical installation, install the net meter, and synchronize the installation with the utility grid.",
  },
  {
    step: "5",
    title: "Commissioning Certificate Upload",
    description:
      "The net-metering commissioning report is submitted and verified directly on the national portal alongside site photographs.",
  },
  {
    step: "6",
    title: "Direct Benefit Transfer (DBT) Disbursement",
    description:
      "Once approved by the nodal authorities, the subsidy amount is disbursed directly into the applicant's linked bank account via DBT.",
  },
];

export const documentChecklist = [
  "Latest electricity bill (matching applicant name and service connection number)",
  "Proof of rooftop ownership or registered property deed / tax receipt",
  "Aadhaar card of the electricity account holder",
  "Cancelled cheque or front page of bank passbook (Aadhaar linked)",
  "Site photographs showing unshaded rooftop area",
  "Approved DISCOM technical feasibility sanction letter",
  "DCR module serial numbers and test certificates from the manufacturer",
];

export const officialResources = [
  {
    name: "PM Surya Ghar Official Portal",
    url: "https://pmsuryaghar.gov.in",
    description: "The primary national portal for residential rooftop registrations, tracking, and DBT disbursement.",
  },
  {
    name: "Ministry of New and Renewable Energy (MNRE)",
    url: "https://mnre.gov.in",
    description: "Central government nodal ministry responsible for renewable energy policy and benchmark standards.",
  },
];
