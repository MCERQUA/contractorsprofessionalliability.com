// Centralized site data — used across nav, footer, schema, CTAs
// Contractors Professional Liability Insurance — E&O for design-build & professional contractors

export const SITE = {
  name: "Contractors Professional Liability Insurance",
  legalName: "Contractors Professional Liability Insurance (by Contractors Choice Agency)",
  domain: "contractorsprofessionalliability.com",
  url: "https://contractorsprofessionalliability.com",
  tagline: "E&O and Professional Liability Insurance for Contractors",
  description:
    "Specialized professional liability insurance for contractors providing professional services — contractors E&O, design-build liability, architects who construct, engineers who manage construction, and all contractors with professional exposure. General liability, workers' comp, commercial auto, umbrella, and bonds. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Contractors E&O",
  brandSub: "Professional Liability",
  nicheShort: "professional contractor",
  nicheShortCap: "Professional Contractor",
  nichePlural: "professional contractors",
  nichePluralCap: "Professional Contractors",
  operator: "design-build firm",
  operatorCap: "Design-Build Firm",
  industry: "professional contracting",
  industryCap: "Professional Contracting",
  audience: "contractors with professional exposure",
  audienceCap: "Contractors with Professional Exposure",
  ownerTitle: "contractor",
  regionPill: "Arizona · Texas · National",
  serviceSuffix: "Professional Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "contractors-eo",
    title: "Contractors E&O Insurance",
    short: "Protect your firm from professional negligence claims",
    description:
      "The essential coverage for any contractor providing professional services. Contractors errors & omissions insurance protects your firm when a client alleges that your professional work — design recommendations, specifications, project management, or inspection services — caused them financial harm. Covers defense costs and settlements even when the claim is groundless.",
    icon: "FileSearch",
    keywords: ["contractors E&O insurance", "contractors errors and omissions", "contractor professional liability", "contractor E&O coverage"],
  },
  {
    slug: "design-build-liability",
    title: "Design-Build Liability Insurance",
    short: "Single-source liability for design + construction",
    description:
      "Design-build contractors carry a unique double exposure — professional liability for the design phase and general liability for the construction phase. Our design-build liability programs bridge both, ensuring no gap exists between your E&O and your GL policy when a client disputes whether a loss originated in design or execution.",
    icon: "Ruler",
    keywords: ["design-build insurance", "design-build liability", "design-build contractor insurance", "design build E&O"],
  },
  {
    slug: "professional-liability",
    title: "Professional Liability Insurance",
    short: "For contractors providing expert advisory services",
    description:
      "Contractors who inspect, consult, specify, or manage projects need standalone professional liability coverage. Whether you provide site assessments, value engineering, quality control inspection, or project management, professional liability protects your firm when a client claims your expert advice or service caused a financial or physical loss.",
    icon: "Shield",
    keywords: ["professional liability contractor", "contractor consulting insurance", "construction management E&O", "inspection contractor liability"],
  },
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Third-party bodily injury & property damage",
    description:
      "Commercial general liability for contractors with professional exposures — covering bodily injury, property damage, and personal injury arising from operations and completed work. Coordinates with your E&O to ensure the GL does not exclude professional services while the E&O does not exclude construction operations.",
    icon: "ShieldCheck",
    keywords: ["contractor general liability", "construction general liability", "GL insurance for contractors", "commercial liability contractor"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For project managers, engineers & field crews",
    description:
      "Workers' comp for firms with both office professionals and field personnel. Proper class codes for project managers, engineers, designers, and field superintendents — covering the real injury patterns of professional contracting from office ergonomic injuries to field construction accidents.",
    icon: "HardHat",
    keywords: ["contractor workers compensation", "construction workers comp", "design-build workers comp", "project manager workers comp"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "For project vehicles, work trucks & employee drivers",
    description:
      "Commercial auto coverage for the vehicles your professionals drive — project manager trucks, engineer field vehicles, and the hired and non-owned auto exposure when employees drive their own vehicles to job sites or client meetings. Coordinates with your GL and E&O program.",
    icon: "Truck",
    keywords: ["contractor commercial auto", "construction vehicle insurance", "contractor fleet insurance", "hired non-owned auto contractor"],
  },
  {
    slug: "umbrella",
    title: "Commercial Umbrella Insurance",
    short: "Excess liability for large-project contractors",
    description:
      "Large construction and design-build projects often require $5M to $25M in total liability limits. Our commercial umbrella policies layer over your GL, auto, and employers liability to meet contract requirements and protect your firm from catastrophic claims on high-value projects.",
    icon: "Umbrella",
    keywords: ["contractor umbrella insurance", "construction umbrella policy", "excess liability contractor", "design-build umbrella"],
  },
  {
    slug: "bonds",
    title: "Contractor License Bonds & Surety",
    short: "Performance, payment & license bonds",
    description:
      "Performance bonds, payment bonds, bid bonds, and contractor license bonds for professional contractors on public and private projects. We work with A-rated surety companies to get your bonding needs met — even for firms with professional liability exposures that standard bond markets avoid.",
    icon: "FileSignature",
    keywords: ["contractor bonds", "performance bond contractor", "contractor license bond", "surety bond professional contractor"],
  },
] as const;

export const LOCATIONS = [
  { slug: "arizona", name: "Arizona", region: "Phoenix · Tucson · Chandler", blurb: "Home state for Contractors Choice Agency. We serve Arizona design-build firms, licensed contractors with E&O exposure, and professional contractors operating in Phoenix, Tucson, Scottsdale, and across the state — with admitted and surplus lines markets for professional liability." },
  { slug: "texas", name: "Texas", region: "Dallas · Houston · Austin · San Antonio", blurb: "Texas is one of the most active construction markets in the U.S. We cover Texas design-build contractors, engineering firms that build, and professional contractors with complex multi-party project structures — from residential design-build to large commercial." },
  { slug: "california", name: "California", region: "Los Angeles · San Francisco · San Diego", blurb: "California's contractor licensing and professional liability requirements are among the most stringent in the country. We place E&O and design-build programs for California contractors that satisfy CSLB requirements and meet large-project owner contract demands." },
  { slug: "florida", name: "Florida", region: "Miami · Orlando · Tampa · Jacksonville", blurb: "Florida's fast-growing construction market generates significant professional liability exposure. We serve Florida design-build contractors, licensed architect-contractors, and engineering firms providing construction management with admitted and E&S market solutions." },
  { slug: "new-york", name: "New York", region: "New York City · Albany · Buffalo", blurb: "New York City's complex construction environment and demanding owner contracts require sophisticated professional liability programs. We place contractors E&O and design-build coverage for New York firms working on private development, municipal, and infrastructure projects." },
  { slug: "illinois", name: "Illinois", region: "Chicago · Springfield · Rockford", blurb: "Illinois professional contractors face significant E&O exposure on complex commercial and institutional projects. We cover Chicago-area design-build firms, licensed professional contractors, and engineering firms providing construction management throughout Illinois." },
  { slug: "colorado", name: "Colorado", region: "Denver · Boulder · Colorado Springs", blurb: "Colorado's booming construction market and high-value residential and commercial projects create professional liability exposure for design-build contractors, licensed professional engineers, and contractors with specification or advisory responsibilities." },
  { slug: "southeast", name: "Southeast U.S.", region: "Georgia · North Carolina · Tennessee", blurb: "The Southeast's growing construction market is attracting sophisticated design-build contractors from across the country. We serve contractors operating in Georgia, North Carolina, and Tennessee — placing E&O and professional liability programs that meet regional owner contract requirements." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "E&O & design-build specialists", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 1200, suffix: "+", label: "Professional contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years placing contractor E&O programs", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "We are a design-build firm and could not find a carrier that understood where the design exposure ends and the construction exposure begins. These guys placed a coordinated E&O and GL program that actually works together. No more gap between policies.", name: "Marcus T.", role: "Principal, Design-Build Contractor", location: "Phoenix, AZ" },
  { quote: "A client sued us claiming our project management services caused cost overruns. Our contractors E&O covered the defense and settlement — without it we would have been paying out of pocket. The policy was worth every dollar.", name: "Sandra L.", role: "Project Manager, Construction Firm", location: "Dallas, TX" },
  { quote: "We do design-build commercial work and needed $10M in limits for a hospital project. They got us the umbrella stack and coordinated E&O within a week. Nobody else could move that fast with our exposure profile.", name: "David R.", role: "Owner, Commercial Design-Build", location: "Denver, CO" },
] as const;
