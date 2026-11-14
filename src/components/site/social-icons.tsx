import { site } from "@/lib/site";

type IconProps = { className?: string };

function Facebook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 21.95V14h2.7l.4-3.15h-3.1V8.84c0-.91.25-1.53 1.56-1.53h1.66V4.5a22 22 0 0 0-2.42-.12c-2.4 0-4.04 1.46-4.04 4.15v2.32H7.53V14h2.73v7.95A10 10 0 1 1 13.5 21.95Z" />
    </svg>
  );
}

function XTwitter({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.46 21H2.39l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.18h1.7L7.4 4.73H5.58l11.09 14.45Z" />
    </svg>
  );
}

function Instagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const links = [
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
  { label: "Twitter (X)", href: site.social.twitter, Icon: XTwitter },
  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className ?? ""}`} aria-label="Social media">
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`4pro on ${label}`}
            className="grid size-11 place-items-center rounded-full bg-white text-brand ring-1 ring-border transition duration-300 hover:-translate-y-0.5 hover:bg-brand hover:text-white hover:ring-brand focus-visible:ring-3 focus-visible:ring-gold/60 focus-visible:outline-none"
          >
            <Icon className="size-[1.15rem]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
