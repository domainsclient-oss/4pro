export const site = {
  name: "4pro",
  tagline: "Projects | Products | Programs | Promotions",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.4pro.global",
  description:
    "4pro helps organizations grow, operate efficiently and create lasting impact — globally. Digital growth, BPO, staffing, training, software solutions and branded merchandise from Singapore and India.",
  // TODO: replace with real contact details
  email: "info@4pro.org",
  phone: "+65 6000 0000",
  address: {
    line1: "Singapore (Headquarters)",
    line2: "Delivery Centre — India",
    mapQuery: "Singapore",
  },
} as const;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  "Digital Growth",
  "BPO",
  "Staffing",
  "Training",
  "Software Solutions (ERP / CRM / LMS)",
  "Merchandise",
  "Something else",
] as const;
