import Image, { type StaticImageData } from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  Clock3,
  Code2,
  Gift,
  Globe2,
  GraduationCap,
  Handshake,
  HeartPulse,
  Layers,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Phone,
  PiggyBank,
  Rocket,
  Search,
  Shirt,
  ShoppingBag,
  Sparkles,
  Target,
  Users,
  UsersRound,
  Workflow,
  Earth,
  HandHeart,
  Headset,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { site, nav } from "@/lib/site";
import { ContactButton } from "./contact-dialog";
import { highlights } from "@/lib/highlights";
import { SectionHeading, btn } from "./ui";

import heroImg from "../../../public/images/hero.webp";
import digitalImg from "../../../public/images/digital.webp";
import bpoImg from "../../../public/images/bpo.webp";
import staffingImg from "../../../public/images/staffing.webp";
import trainingImg from "../../../public/images/training.webp";
import softwareImg from "../../../public/images/software.webp";
import erpImg from "../../../public/images/erp.webp";
import crmImg from "../../../public/images/crm.webp";
import lmsImg from "../../../public/images/lms.webp";
import merchImg from "../../../public/images/merch.webp";
import accessoriesImg from "../../../public/images/accessories.webp";
import souvenirsImg from "../../../public/images/souvenirs.webp";
import ctaImg from "../../../public/images/cta.webp";
import startupsImg from "../../../public/images/clients/startups.webp";
import educationImg from "../../../public/images/clients/education.webp";
import healthcareImg from "../../../public/images/clients/healthcare.webp";
import corporatesImg from "../../../public/images/clients/corporates.webp";
import nonprofitsImg from "../../../public/images/clients/nonprofits.webp";
import globalImg from "../../../public/images/clients/global.webp";
import logoFull from "../../../public/brand/logo-full.png";

/* ───────────────────────── HERO ───────────────────────── */

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink text-white">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]" />
      <div className="absolute -top-40 -left-40 -z-10 size-[36rem] rounded-full bg-brand/30 blur-[120px]" />
      <div className="absolute right-0 bottom-0 -z-10 size-[30rem] rounded-full bg-gold/15 blur-[120px]" />

      <div className="container-x grid items-center gap-14 pt-16 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-24 lg:pb-28">
        <div>
          <p className="hero-in inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
            <Sparkles className="size-3.5" aria-hidden />
            Technology. People. Creativity. Purpose.
          </p>
          <h1 className="hero-in hero-in-2 mt-7 text-[2.6rem] leading-[1.05] font-semibold sm:text-6xl lg:text-[4.5rem]">
            Accelerate Growth.
            <br />
            <span className="text-gradient">Extend Impact.</span>
          </h1>
          <p className="hero-in hero-in-3 mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            We help organizations grow, operate efficiently and create lasting impact — globally.
          </p>
          <div className="hero-in hero-in-4 mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className={btn.gold}>
              Explore Our Solutions
              <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
            </a>
            <ContactButton className={btn.ghostDark}>Contact Us</ContactButton>
          </div>

          <dl className="hero-in hero-in-4 mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              ["4", "Practice areas"],
              ["2", "Delivery hubs"],
              ["Global", "Client reach"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-heading text-2xl font-semibold text-white sm:text-3xl">{v}</dd>
                <dd className="mt-1 text-sm text-white/55">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-in hero-in-3 relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/40 via-brand/20 to-transparent blur-xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-white/15">
            <Image
              src={heroImg}
              alt="A diverse team collaborating around laptops in a bright modern office"
              placeholder="blur"
              preload
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="aspect-[4/3.6] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>

          <div className="float-slow absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-4 pr-6 text-ink shadow-2xl sm:-left-8">
            <span className="grid size-11 place-items-center rounded-xl bg-brand text-white">
              <Globe2 className="size-5" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">Singapore HQ</span>
              <span className="block text-xs text-muted-foreground">India delivery · Worldwide</span>
            </span>
          </div>
          <div
            className="float-slow absolute top-6 -right-2 hidden items-center gap-3 rounded-2xl border border-white/15 bg-ink/70 p-4 pr-6 backdrop-blur-md sm:flex lg:-right-6"
            style={{ animationDelay: "1.5s" }}
          >
            <span className="grid size-11 place-items-center rounded-xl bg-gold text-ink">
              <LineChart className="size-5" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">Measurable growth</span>
              <span className="block text-xs text-white/60">Data-driven delivery</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── HIGHLIGHTS STRIP ───────────────────────── */

export function Highlights() {
  return (
    <section aria-label="Highlights" className="border-b border-border/70 bg-cream">
      <ul className="container-x grid grid-cols-1 divide-y divide-border/80 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {highlights.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex items-center gap-3 py-5 sm:px-5 lg:first:pl-0 lg:last:pr-0">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-brand ring-1 ring-border">
              <Icon className="size-4" aria-hidden />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block text-sm font-bold text-ink">{title}</span>
              <span className="mt-0.5 block text-xs text-muted-foreground">{text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ───────────────────────── SOLUTIONS ───────────────────────── */

const solutions: { icon: LucideIcon; title: string; text: string; href: string }[] = [
  {
    icon: Megaphone,
    title: "Digital Growth",
    text: "Build your brand, reach the right audience and drive measurable results.",
    href: "#digital-growth",
  },
  {
    icon: Users,
    title: "BPO, Staffing and Training",
    text: "Reliable support and the right talent to keep you moving.",
    href: "#bpo-staffing",
  },
  {
    icon: Code2,
    title: "Software Solutions",
    text: "ERP, CRM, LMS and custom solutions to simplify and scale.",
    href: "#products",
  },
  {
    icon: ShoppingBag,
    title: "Merchandise",
    text: "Branded products that make an impact.",
    href: "#merchandise",
  },
];

export function Solutions() {
  return (
    <section id="services" className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Solutions"
            title="One Partner. Multiple Ways to Grow."
            text="From digital growth to people solutions, from software to branded merchandise — we bring the right mix of technology, talent and creativity to help you move forward."
          />
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ icon: Icon, title, text, href }, i) => (
            <a
              key={title}
              href={href}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_30px_60px_-30px_rgb(22_17_12/0.35)]"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-gold transition-transform duration-500 group-hover:scale-x-100" />
              <span className="font-heading text-sm font-semibold text-brand/50">0{i + 1}</span>
              <span className="mt-6 grid size-14 place-items-center rounded-2xl bg-cream text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{text}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Learn more
                <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── DIGITAL GROWTH ───────────────────────── */

const digital: { icon: LucideIcon; label: string }[] = [
  { icon: Target, label: "Digital Strategy & Consulting" },
  { icon: Megaphone, label: "Social Media Marketing & Content Creation" },
  { icon: Search, label: "SEO & Search Marketing" },
  { icon: Rocket, label: "Paid Campaigns (Google, Meta, YouTube etc.)" },
  { icon: MonitorSmartphone, label: "Website Design & Development" },
  { icon: BarChart3, label: "Analytics & Performance Tracking" },
];

export function DigitalGrowth() {
  return (
    <section id="digital-growth" className="bg-cream py-24 lg:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative order-last lg:order-first">
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src={digitalImg}
              alt="Strategist presenting a digital growth plan to a team in a modern office"
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="aspect-[5/5.2] w-full object-cover"
            />
          </div>
          <div className="absolute -right-3 -bottom-8 w-56 rounded-2xl bg-white p-5 shadow-[0_30px_60px_-25px_rgb(22_17_12/0.4)] sm:-right-8">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Campaign performance</p>
            <div className="mt-4 flex h-20 items-end gap-1.5" aria-hidden>
              {[35, 50, 42, 64, 58, 78, 92].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-brand to-gold"
                  style={{ height: `${h}%`, opacity: 0.45 + i * 0.08 }}
                />
              ))}
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-sm font-bold text-ink">
              <LineChart className="size-4 text-brand" aria-hidden /> Visibility → Results
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Digital Growth"
            title="From Visibility to Real Results."
            text="We create data-driven digital strategies that help organizations build their brand, reach the right audience and achieve measurable growth."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {digital.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="reveal flex items-start gap-3 rounded-2xl border border-border/80 bg-white p-4 transition hover:border-brand/40"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="pt-1.5 text-[0.95rem] leading-snug font-semibold text-ink">{label}</span>
              </li>
            ))}
          </ul>
          <ContactButton service="Digital Growth" className={`${btn.primary} reveal mt-10`}>
            Grow With Us
            <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
          </ContactButton>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── BPO & STAFFING ───────────────────────── */

const people = [
  {
    icon: Headset,
    tag: "BPO",
    title: "Business Process Outsourcing",
    img: bpoImg,
    alt: "Operations professionals working at their desks in a bright office",
    items: [
      "Customer Support (Phone, Email, Chat)",
      "Back Office Processing & Data Management",
      "Inside Sales & Lead Generation",
      "CRM & Account Management",
      "Virtual Assistance & Administrative Support",
    ],
  },
  {
    icon: UsersRound,
    tag: "Staffing",
    title: "The right talent for your business",
    img: staffingImg,
    alt: "Smiling colleagues gathered around a laptop in a collaborative workspace",
    items: [
      "Staff Augmentation (Short & Long Term)",
      "Recruitment & Talent Sourcing",
      "Dedicated Teams (Onsite / Offshore / Hybrid)",
    ],
  },
  {
    icon: GraduationCap,
    tag: "Training",
    title: "Developing people and organizations for a stronger tomorrow.",
    img: trainingImg,
    alt: "Participants attending a professional training workshop",
    items: [
      "Soft Skills Training & Development for SMEs, FMCG and Educational institutions",
      "Management Training & Development (Leadership Development)",
      "CSR Project Planning and Implementation for Industries and Corporations",
    ],
  },
];

export function BpoStaffing() {
  return (
    <section id="bpo-staffing" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="BPO, Staffing & Training"
          title="People who keep your business moving."
          text="Reliable operations support, the right talent at the right time and training that builds stronger teams and communities."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {people.map(({ icon: Icon, tag, title, img, alt, items }) => (
            <article
              key={tag}
              className="reveal group flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition duration-300 hover:shadow-[0_30px_60px_-30px_rgb(22_17_12/0.35)]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={img}
                  alt={alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 30vw, 92vw"
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2.5 text-white">
                  <span className="grid size-10 place-items-center rounded-xl bg-gold text-ink">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-heading text-xl font-semibold">{tag}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-lg leading-snug font-semibold text-ink">{title}</h3>
                <ul className="mt-5 flex-1 space-y-3">
                  {items.map((it) => (
                    <li key={it} className="flex gap-3 text-[0.95rem] leading-snug text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>
                <ContactButton
                  service={tag}
                  className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  Talk to our team <ArrowUpRight className="size-4" aria-hidden />
                </ContactButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SOFTWARE ───────────────────────── */

const software = [
  {
    name: "ERP",
    icon: Workflow,
    text: "Manage operations, resources and finance efficiently.",
    img: erpImg,
    alt: "Laptop showing an ERP dashboard",
  },
  {
    name: "CRM",
    icon: Handshake,
    text: "Build stronger relationships and drive revenue.",
    img: crmImg,
    alt: "Team member assisting a customer with a tablet at a service desk",
  },
  {
    name: "LMS",
    icon: BookOpen,
    text: "Deliver, manage and track learning effortlessly.",
    img: lmsImg,
    alt: "Laptop and notebook set up for an online learning session",
  },
];

export function Software() {
  return (
    <section id="products" className="relative isolate overflow-hidden bg-ink py-24 text-white lg:py-32">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute top-1/3 -right-40 -z-10 size-[32rem] rounded-full bg-brand/25 blur-[120px]" />
      <div className="container-x">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <SectionHeading
            dark
            eyebrow="Software Solutions"
            title="Technology that simplifies, connects and scales."
            text="We develop and implement practical software solutions to help organizations manage operations, people and growth efficiently."
          />
          <div className="reveal lg:justify-self-end">
            <ContactButton service="Software Solutions (ERP / CRM / LMS)" className={btn.gold}>
              Learn More
              <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
            </ContactButton>
          </div>
        </div>

        <div className="reveal relative mt-14 overflow-hidden rounded-[2rem] ring-1 ring-white/10">
          <Image
            src={softwareImg}
            alt="Business intelligence dashboard with charts and KPIs on a screen"
            placeholder="blur"
            sizes="(min-width: 1280px) 1216px, 94vw"
            className="aspect-[21/9] min-h-56 w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/10" />
          <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center p-6 sm:p-10">
            <p className="font-heading text-2xl font-semibold sm:text-3xl">Custom-built. Ready to scale.</p>
            <p className="mt-3 hidden text-white/70 sm:block">
              From off-the-shelf implementation to fully custom platforms — designed around how your teams actually work.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {software.map(({ name, icon: Icon, text, img, alt }) => (
            <article
              key={name}
              className="reveal group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition duration-300 hover:border-gold/50 hover:bg-white/[0.07]"
            >
              <div className="overflow-hidden">
                <Image
                  src={img}
                  alt={alt}
                  placeholder="blur"
                  sizes="(min-width: 768px) 30vw, 92vw"
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-gold/15 text-gold">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="text-2xl font-semibold">{name}</h3>
                </div>
                <p className="mt-4 leading-relaxed text-white/65">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── MERCHANDISE ───────────────────────── */

const merch = [
  { icon: Shirt, name: "T-Shirts", text: "Custom designs for teams, events and ministries.", img: merchImg, alt: "Person wearing a plain white t-shirt ready for custom printing" },
  { icon: ShoppingBag, name: "Accessories", text: "Caps, bags, bottles, lanyards and more.", img: accessoriesImg, alt: "Branded backpack and accessories" },
  { icon: Gift, name: "Souvenirs", text: "Meaningful gifts for conferences, events and special occasions.", img: souvenirsImg, alt: "Gift box wrapped with a ribbon" },
];

export function Merchandise() {
  return (
    <section id="merchandise" className="bg-cream py-24 lg:py-32">
      <div className="container-x">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <SectionHeading
            eyebrow="Merchandise"
            title="Branded products that make an impact."
            text="High-quality, customized merchandise for organizations, events, ministries, conferences and corporate needs."
          />
          <div className="reveal lg:justify-self-end">
            <ContactButton service="Merchandise" className={btn.primary}>
              Learn More
              <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
            </ContactButton>
          </div>
        </div>

        <p className="reveal mt-10 flex flex-wrap gap-2" aria-label="Product range">
          {["T-shirts", "Hoodies", "Caps", "Mugs", "Bottles", "Tote bags", "Notebooks", "Lanyards"].map((p) => (
            <span key={p} className="rounded-full border border-brand/20 bg-white px-4 py-1.5 text-sm font-semibold text-ink/80">
              {p}
            </span>
          ))}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {merch.map(({ icon: Icon, name, text, img, alt }) => (
            <article
              key={name}
              className="reveal group relative overflow-hidden rounded-3xl bg-ink text-white"
            >
              <Image
                src={img}
                alt={alt}
                placeholder="blur"
                sizes="(min-width: 768px) 30vw, 92vw"
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="grid size-11 place-items-center rounded-xl bg-gold text-ink">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-2xl font-semibold">{name}</h3>
                <p className="mt-2 leading-relaxed text-white/75">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CLIENTS ───────────────────────── */

const clients: {
  icon: LucideIcon;
  name: string;
  text: string;
  img: StaticImageData;
  alt: string;
  span: string;
}[] = [
  {
    icon: Rocket,
    name: "Start Ups",
    text: "Launch faster with lean teams, digital growth and technology that scales with you.",
    img: startupsImg,
    alt: "Open-plan start-up office with people working at desks",
    span: "sm:col-span-2",
  },
  {
    icon: GraduationCap,
    name: "Education",
    text: "Learning platforms, training and outreach for schools and institutions.",
    img: educationImg,
    alt: "Student walking between library bookshelves",
    span: "",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    text: "Patient support, operations and digital engagement for care providers.",
    img: healthcareImg,
    alt: "Doctor with a stethoscope using a smartphone",
    span: "",
  },
  {
    icon: Building2,
    name: "Businesses & Corporates",
    text: "Operations, people and brand solutions for growing enterprises.",
    img: corporatesImg,
    alt: "Glass corporate office towers seen from below",
    span: "",
  },
  {
    icon: HandHeart,
    name: "Non-Profits",
    text: "Purpose-led campaigns, programs and merchandise that amplify impact.",
    img: nonprofitsImg,
    alt: "Volunteer in a branded shirt at a community event",
    span: "",
  },
  {
    icon: Earth,
    name: "Global Clients",
    text: "Serving organizations worldwide from our hubs in Singapore and India.",
    img: globalImg,
    alt: "World map carved into a wooden wall",
    span: "sm:col-span-2",
  },
];

export function Clients() {
  return (
    <section id="clients" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
          <SectionHeading eyebrow="Our Clients" title="Trusted by organizations across industries." />
          <p className="reveal text-base leading-relaxed text-muted-foreground sm:text-lg">
            From early-stage start ups to global organizations, we partner with teams that want to grow
            — and make a difference while they do.
          </p>
        </div>

        <ul className="mt-14 grid auto-rows-[16rem] grid-cols-1 sm:auto-rows-[18rem] gap-5 sm:grid-cols-2 lg:auto-rows-[19rem] lg:grid-cols-4">
          {clients.map(({ icon: Icon, name, text, img, alt, span }, i) => (
            <li
              key={name}
              className={`reveal group relative isolate overflow-hidden rounded-3xl bg-ink text-white ${span}`}
            >
              <Image
                src={img}
                alt={alt}
                fill
                placeholder="blur"
                sizes={span ? "(min-width: 1024px) 50vw, (min-width: 640px) 92vw, 92vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 46vw, 92vw"}
                className="-z-20 object-cover transition duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/5 transition duration-500 group-hover:via-ink/70" />
              <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-ink/60 to-transparent" />
              <div className="absolute inset-0 -z-10 bg-brand/0 mix-blend-multiply transition duration-500 group-hover:bg-brand/25" />

              <div className="flex h-full flex-col justify-between p-6 sm:p-7">
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-ink/60 text-gold ring-1 ring-white/25 backdrop-blur-md transition duration-300 group-hover:bg-gold group-hover:text-ink">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-heading text-sm font-semibold text-white/80">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">{name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">{text}</p>
                  <span className="mt-4 block h-0.5 w-10 rounded-full bg-gradient-to-r from-gold to-brand transition-all duration-500 group-hover:w-24" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── WHY 4PRO ───────────────────────── */

const why: { icon: LucideIcon; title: string; text: string; featured?: boolean }[] = [
  {
    icon: Globe2,
    title: "Global Delivery Model",
    text: "Headquartered in Singapore with delivery teams in India, serving clients across the world.",
    featured: true,
  },
  { icon: PiggyBank, title: "Cost Effective", text: "High quality at competitive pricing." },
  { icon: BadgeCheck, title: "Quality Focus", text: "Proven processes and consistent delivery." },
  { icon: Clock3, title: "Faster Turnaround", text: "Agile teams and streamlined workflows." },
  { icon: Layers, title: "Flexible Engagement", text: "Project-based, dedicated teams or end-to-end delivery." },
];

export function WhyUs() {
  return (
    <section id="why" className="bg-cream py-24 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Why 4pro?"
            title={
              <>
                Global capability. <span className="text-brand">Real value.</span>
              </>
            }
            text="A single, accountable partner that combines the reach of a global team with the care of a local one."
          />
          <ContactButton className={`${btn.primary} reveal mt-10`}>
            Start a Conversation
            <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
          </ContactButton>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {why.map(({ icon: Icon, title, text, featured }) => (
            <li
              key={title}
              className={`reveal group relative overflow-hidden rounded-3xl p-7 transition duration-300 ${
                featured
                  ? "bg-ink text-white sm:col-span-2"
                  : "border border-border bg-white hover:shadow-[0_30px_60px_-30px_rgb(22_17_12/0.3)]"
              }`}
            >
              {featured && (
                <div className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full bg-gold/25 blur-3xl" />
              )}
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                <span
                  className={`grid size-14 shrink-0 place-items-center rounded-2xl ${
                    featured ? "bg-gold text-ink" : "bg-cream text-brand"
                  }`}
                >
                  <Icon className="size-6" aria-hidden />
                </span>
                <div>
                  <h3 className={`text-xl font-semibold ${featured ? "text-white" : "text-ink"}`}>{title}</h3>
                  <p className={`mt-2 leading-relaxed ${featured ? "text-white/70" : "text-muted-foreground"}`}>{text}</p>
                  {featured && (
                    <p className="mt-5 flex flex-wrap items-center gap-2 text-sm font-semibold">
                      {["Singapore", "India", "Worldwide"].map((c, j) => (
                        <span key={c} className="flex items-center gap-2">
                          {j > 0 && <ArrowRight className="size-3.5 text-gold" aria-hidden />}
                          <span className="rounded-full bg-white/10 px-3 py-1">{c}</span>
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */

export function Cta() {
  return (
    <section className="bg-cream pb-24 lg:pb-32">
      <div className="container-x">
        <div className="reveal relative isolate overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-center text-white sm:px-12 lg:py-28">
          <Image
            src={ctaImg}
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 94vw"
            className="-z-20 object-cover opacity-45"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />
          <span className="eyebrow text-gold before:bg-gold">Let&apos;s Create What&apos;s Next</span>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
            Business growth. More opportunities.{" "}
            <span className="text-gradient">A wider impact.</span>
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ContactButton className={btn.gold}>
              Get in Touch
              <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
            </ContactButton>
            <a href={`mailto:${site.email}`} className={btn.ghostDark}>
              <Mail className="size-4" aria-hidden /> {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CONTACT + MAP ───────────────────────── */

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your next move."
            text="Headquartered in Singapore with delivery teams in India — working with clients worldwide."
          />
          <ul className="reveal mt-10 space-y-4">
            <ContactItem icon={MapPin} label="Offices">
              {site.address.line1}
              <br />
              {site.address.line2}
            </ContactItem>
            <ContactItem icon={Mail} label="Email">
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </ContactItem>
            <ContactItem icon={Phone} label="Phone">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brand">
                {site.phone}
              </a>
            </ContactItem>
          </ul>
          <ContactButton className={`${btn.primary} reveal mt-8`}>
            Let&apos;s Connect <ArrowUpRight className="size-4" aria-hidden />
          </ContactButton>
        </div>

        <div className="reveal relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-border bg-sand lg:min-h-full">
          <iframe
            title="4pro location on Google Maps"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address.mapQuery)}&z=12&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0 grayscale-[0.35] sepia-[0.15]"
          />
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4 rounded-2xl border border-border p-5">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cream text-brand">
        <Icon className="size-5" aria-hidden />
      </span>
      <span>
        <span className="block text-xs font-semibold tracking-wider text-muted-foreground uppercase">{label}</span>
        <span className="mt-1 block font-semibold text-ink">{children}</span>
      </span>
    </li>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */

const footerServices = [
  ["Digital Growth", "#digital-growth"],
  ["BPO & Staffing", "#bpo-staffing"],
  ["Training", "#bpo-staffing"],
  ["Software Solutions", "#products"],
  ["Merchandise", "#merchandise"],
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
        <div>
          <Image src={logoFull} alt="4pro — Projects, Products, Programs, Promotions" className="h-auto w-56" sizes="224px" />
          <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
            Technology. People. Creativity. Purpose. Helping organizations grow, operate efficiently and create lasting impact — globally.
          </p>
        </div>
        <FooterCol title="Company">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="hover:text-brand">
                {n.label}
              </a>
            </li>
          ))}
        </FooterCol>
        <FooterCol title="Solutions">
          {footerServices.map(([l, h]) => (
            <li key={l}>
              <a href={h} className="hover:text-brand">
                {l}
              </a>
            </li>
          ))}
        </FooterCol>
        <FooterCol title="Get in touch">
          <li>{site.address.line1}</li>
          <li>{site.address.line2}</li>
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-brand">
              {site.email}
            </a>
          </li>
          <li>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brand">
              {site.phone}
            </a>
          </li>
        </FooterCol>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © <Year /> 4pro. All rights reserved.
          </p>
          <p className="tracking-[0.15em] uppercase">Projects · Products · Programs · Promotions</p>
        </div>
      </div>
    </footer>
  );
}

async function Year() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold tracking-wider text-ink uppercase">{title}</h3>
      <ul className="mt-5 space-y-3 text-[0.95rem] text-muted-foreground">{children}</ul>
    </div>
  );
}
