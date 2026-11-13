import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "4pro — Accelerate Growth. Extend Impact.",
    template: "%s | 4pro",
  },
  description: site.description,
  keywords: [
    "digital marketing",
    "BPO",
    "staffing",
    "corporate training",
    "ERP",
    "CRM",
    "LMS",
    "branded merchandise",
    "Singapore",
    "India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "4pro",
    title: "4pro — Accelerate Growth. Extend Impact.",
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "4pro — Accelerate Growth. Extend Impact.",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#996734",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} antialiased`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
