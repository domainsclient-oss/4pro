export const site = {
  name: "4pro",
  tagline: "Projects | Products | Programs | Promotions",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.4pro.global",
  description:
    "4pro helps organizations grow, operate efficiently and create lasting impact — globally. Digital growth, BPO, staffing, training, software solutions and branded merchandise from Chennai, India.",
  legalName: "4Pro Consulting LLP",
  gstin: "33AABFZ8179L1ZI",
  email: "info@4proconsulting.com",
  // TODO: replace with the real phone number
  phone: "+91 44 0000 0000",
  // TODO: replace with the real profile URLs
  social: {
    facebook: "https://www.facebook.com/",
    twitter: "https://x.com/",
    instagram: "https://www.instagram.com/",
  },
  address: {
    lines: [
      "No: 158(131), 156(132) & 154(133),",
      "3rd Floor, YMCA Royapuram,",
      "PAN Rajarathinam Salai,",
      "Chennai 600021, India",
    ],
    street: "No: 158(131), 156(132) & 154(133), 3rd Floor, YMCA Royapuram, PAN Rajarathinam Salai",
    city: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600021",
    country: "IN",
    mapQuery: "YMCA Royapuram, PAN Rajarathinam Salai, Chennai 600021",
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
