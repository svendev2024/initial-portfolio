"use client";

import { useState } from "react";
import { techIconFile, techSkillIcons } from "@/data/content";

const ICON_SIZE = 20; // template: w-5 h-5
const CDN = "https://cdn.simpleicons.org";

function FallbackIcon({ name, size = ICON_SIZE }: { name: string; size?: number }) {
  if (name === "Java") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden>
        <rect width="24" height="24" rx="4" fill="#ED8B00" fillOpacity="0.15" />
        <text x="12" y="17" textAnchor="middle" fill="#ED8B00" fontSize="14" fontWeight="bold" fontFamily="system-ui,sans-serif">
          J
        </text>
      </svg>
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center rounded bg-[var(--border)] text-[var(--foreground)] text-xs font-semibold"
      style={{ width: size, height: size }}
    >
      {name.charAt(0)}
    </span>
  );
}

type Props = { name: string; className?: string; vertical?: boolean };

export default function TechSkillIcon({ name, className = "", vertical }: Props) {
  const localFile = techIconFile[name];
  const cdnSlug = techSkillIcons[name];
  const [imgError, setImgError] = useState(false);
  const src = localFile ? `/icons/tech/${localFile}` : (cdnSlug ? `${CDN}/${cdnSlug}` : null);
  const useFallback = !src || imgError;

  if (vertical) {
    return (
      <span
        className={`flex flex-col items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-center transition-colors hover:bg-[var(--card-hover)] hover:border-[var(--accent)]/30 ${className}`}
      >
        {useFallback ? (
          <FallbackIcon name={name} size={ICON_SIZE + 8} />
        ) : (
          <img
            src={src}
            alt=""
            width={ICON_SIZE + 8}
            height={ICON_SIZE + 8}
            className="shrink-0 w-5 h-5"
            onError={() => setImgError(true)}
          />
        )}
        <span className="text-sm font-medium">{name}</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {useFallback ? (
        <FallbackIcon name={name} size={ICON_SIZE} />
      ) : (
        <img
          src={src}
          alt=""
          width={ICON_SIZE}
          height={ICON_SIZE}
          className="shrink-0 w-5 h-5"
          onError={() => setImgError(true)}
        />
      )}
      <span>{name}</span>
    </span>
  );
}
