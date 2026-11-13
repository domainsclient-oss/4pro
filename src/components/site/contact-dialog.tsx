"use client";

import * as React from "react";
import { CheckCircle2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { site, services } from "@/lib/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Ctx = { open: (service?: string) => void };
const ContactCtx = React.createContext<Ctx | null>(null);

export function useContact() {
  const ctx = React.useContext(ContactCtx);
  if (!ctx) throw new Error("useContact must be used inside ContactProvider");
  return ctx;
}

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = React.useState(false);
  const [service, setService] = React.useState<string>("");
  const [sent, setSent] = React.useState(false);

  const open = React.useCallback((s?: string) => {
    setService(s ?? "");
    setSent(false);
    setOpen(true);
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const body = [
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone") || "-"}`,
      `Organization: ${d.get("company") || "-"}`,
      `Interested in: ${d.get("service") || "-"}`,
      "",
      `${d.get("message")}`,
    ].join("\n");
    // No backend/database: hand the enquiry to the visitor's mail client.
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `New enquiry from ${d.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <ContactCtx.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl p-0 sm:max-w-xl">
          <div className="relative overflow-hidden bg-ink px-6 pt-7 pb-6 text-white sm:px-8">
            <div className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-gold/25 blur-3xl" />
            <DialogHeader className="relative">
              <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                Let&apos;s Connect
              </span>
              <DialogTitle className="text-2xl font-semibold text-white">
                Tell us what you&apos;re building.
              </DialogTitle>
              <DialogDescription className="text-white/70">
                Share a few details and our team will get back to you within one business day.
              </DialogDescription>
            </DialogHeader>
          </div>

          {sent ? (
            <div className="flex flex-col items-center gap-3 px-6 py-12 text-center sm:px-8">
              <CheckCircle2 className="size-12 text-brand" aria-hidden />
              <h3 className="text-xl font-semibold">Thank you!</h3>
              <p className="max-w-sm text-muted-foreground">
                Your email app should have opened with your message. If it didn&apos;t, write to us at{" "}
                <a className="font-medium text-brand underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 px-6 pt-2 pb-7 sm:grid-cols-2 sm:px-8">
              <Field label="Full name" name="name" required autoComplete="name" />
              <Field label="Work email" name="email" type="email" required autoComplete="email" />
              <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
              <Field label="Organization" name="company" autoComplete="organization" />
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="service">I&apos;m interested in</Label>
                <select
                  id="service"
                  name="service"
                  defaultValue={service}
                  className="h-11 rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="A few lines about your goals, timeline or challenge…"
                  className="min-h-28 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="group mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 font-semibold text-white transition hover:bg-brand-dark focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:col-span-2"
              >
                Send Message
                <Send className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </ContactCtx.Provider>
  );
}

function Field({
  label,
  name,
  className,
  ...props
}: React.ComponentProps<"input"> & { label: string; name: string }) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label htmlFor={name}>
        {label}
        {props.required && <span className="text-brand">*</span>}
      </Label>
      <Input id={name} name={name} className="h-11 rounded-lg" {...props} />
    </div>
  );
}

export function ContactButton({
  children,
  service,
  className,
}: {
  children: React.ReactNode;
  service?: string;
  className?: string;
}) {
  const { open } = useContact();
  return (
    <button type="button" onClick={() => open(service)} className={className}>
      {children}
    </button>
  );
}
