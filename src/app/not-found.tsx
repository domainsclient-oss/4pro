import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { btn } from "@/components/site/ui";
import logo from "../../public/brand/logo-mark.png";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-ink px-4 text-center text-white">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -z-10 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[120px]" />

      <Link href="/" aria-label="4pro home" className="rounded-2xl bg-white px-5 py-3">
        <Image src={logo} alt="4pro" className="h-8 w-auto" sizes="120px" />
      </Link>
      <p className="mt-14 font-heading text-[7rem] leading-none font-semibold sm:text-[10rem]">
        <span className="text-gradient">404</span>
      </p>
      <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">This page took a different route.</h1>
      <p className="mt-4 max-w-md text-white/65">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
      </p>
      <Link href="/" className={`${btn.gold} mt-10`}>
        <ArrowLeft className="size-4 transition group-hover:-translate-x-1" aria-hidden />
        Back to Home
      </Link>
    </main>
  );
}
