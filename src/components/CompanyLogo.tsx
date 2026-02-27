"use client";

import { useState } from "react";

const LOGO_SIZE = 25; // template: 25x25

type Props = { domain: string; company: string; logoUrl?: string; className?: string };

export default function CompanyLogo({ domain, company, logoUrl, className = "" }: Props) {
  const [error, setError] = useState(false);
  const src = logoUrl ?? `https://logo.clearbit.com/${domain}`;

  if (error) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-full bg-[var(--card-hover)] text-lg font-semibold text-[var(--muted-foreground)] ${className}`}
        style={{ width: LOGO_SIZE, height: LOGO_SIZE }}
      >
        {company.charAt(0)}
      </div>
    );
  }

  /* Native img so browser loads directly; avoids Next/Image server fetch (timeout/DNS) */
  return (
    <img
      src={src}
      alt={`${company} logo`}
      width={LOGO_SIZE}
      height={LOGO_SIZE}
      className={`shrink-0 rounded-full object-contain image-brightness-hover ${className}`}
      onError={() => setError(true)}
    />
  );
}
