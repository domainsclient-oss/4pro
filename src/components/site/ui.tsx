import { cn } from "@/lib/utils";

/** Shared button styles for links and buttons across the landing page. */
export const btn = {
  primary:
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-[0.95rem] font-semibold text-white shadow-[0_10px_30px_-10px_rgb(153_103_52/0.7)] transition hover:bg-brand-dark hover:shadow-[0_14px_34px_-10px_rgb(153_103_52/0.8)] focus-visible:ring-3 focus-visible:ring-gold/60 focus-visible:outline-none",
  gold:
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-[0.95rem] font-semibold text-ink transition hover:bg-[#d9a849] focus-visible:ring-3 focus-visible:ring-white/60 focus-visible:outline-none",
  ghostDark:
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-[0.95rem] font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10 focus-visible:ring-3 focus-visible:ring-white/50 focus-visible:outline-none",
  outline:
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-brand/30 px-6 text-[0.95rem] font-semibold text-brand transition hover:border-brand hover:bg-brand hover:text-white focus-visible:ring-3 focus-visible:ring-gold/50 focus-visible:outline-none",
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "reveal max-w-3xl",
        align === "center" && "mx-auto text-center [&_.eyebrow]:justify-center",
        className,
      )}
    >
      <span className={cn("eyebrow", dark && "text-gold")}>{eyebrow}</span>
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.12] font-semibold sm:text-4xl lg:text-[2.85rem]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {text && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}
