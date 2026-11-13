"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/site";
import { highlights } from "@/lib/highlights";
import { useContact } from "./contact-dialog";
import logo from "../../../public/brand/logo-mark.png";

export function Header() {
  const { open } = useContact();
  const [scrolled, setScrolled] = React.useState(false);
  const [menu, setMenu] = React.useState(false);
  const [active, setActive] = React.useState("#home");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const ids = nav.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
  }, [menu]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "bg-white/85 shadow-[0_1px_0_0_var(--border),0_12px_30px_-20px_rgb(22_17_12/0.35)] backdrop-blur-xl"
          : "bg-white",
      )}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#home" className="shrink-0" aria-label="4pro — back to top">
          <Image src={logo} alt="4pro" className="h-9 w-auto sm:h-10" preload sizes="140px" />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  aria-current={active === n.href ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    active === n.href ? "text-brand" : "text-ink/70 hover:text-ink",
                  )}
                >
                  {n.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-brand to-gold transition-transform duration-300",
                      active === n.href ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => open()}
            className="group hidden h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white transition hover:bg-brand focus-visible:ring-3 focus-visible:ring-gold/60 focus-visible:outline-none sm:inline-flex"
          >
            Let&apos;s Connect
            <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </button>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-ink ring-1 ring-border lg:hidden"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            aria-controls="mobile-menu"
            onClick={() => setMenu((m) => !m)}
          >
            {menu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto bg-white transition-[opacity,visibility] duration-200 lg:hidden",
          menu ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="container-x py-6">
          <ul className="divide-y divide-border">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setMenu(false)}
                  className="flex items-center justify-between py-4 font-heading text-2xl font-semibold text-ink"
                >
                  {n.label}
                  <ArrowUpRight className="size-5 text-brand" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              setMenu(false);
              open();
            }}
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand font-semibold text-white"
          >
            Let&apos;s Connect <ArrowUpRight className="size-4" aria-hidden />
          </button>
          <ul className="mt-8 grid gap-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cream text-brand">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink">{title}</span>
                  <span className="block text-sm text-muted-foreground">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
