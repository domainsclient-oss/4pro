import { ContactProvider } from "@/components/site/contact-dialog";
import { Header } from "@/components/site/header";
import { BackToTop } from "@/components/site/back-to-top";
import {
  BpoStaffing,
  Clients,
  Contact,
  Cta,
  DigitalGrowth,
  Footer,
  Hero,
  Highlights,
  Merchandise,
  Software,
  Solutions,
  WhyUs,
} from "@/components/site/sections";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "4pro",
  url: site.url,
  logo: `${site.url}/brand/logo-full.png`,
  slogan: "Projects | Products | Programs | Promotions",
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressCountry: "SG" },
  areaServed: "Worldwide",
};

export default function Home() {
  return (
    <ContactProvider>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-brand px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Highlights />
        <Solutions />
        <DigitalGrowth />
        <BpoStaffing />
        <Software />
        <Merchandise />
        <Clients />
        <WhyUs />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </ContactProvider>
  );
}
