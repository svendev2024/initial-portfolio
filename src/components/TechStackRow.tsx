"use client";

import { useState } from "react";
import { techSkillIcons } from "@/data/content";

const CDN = "https://cdn.simpleicons.org";
const ICON_SIZE = 32;

/* Inline SVGs for icons that often fail from CDN (Java, CI/CD) */
function JavaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.851 18.56s.969.799 1.876.799c.907 0 2.855-.229 2.855-2.333 0-2.105-1.211-2.834-2.478-3.438-.385-.184-.784-.354-1.134-.586-.265-.176-.265-.352 0-.528 1.211-.586 2.721-1.409 2.721-3.222 0-2.105-1.492-2.721-2.478-2.721-.615 0-1.077.141-1.47.352.352-1.057.635-2.233.635-3.457 0-.176-.088-.352-.265-.352H7.392c-.176 0-.265.176-.265.352.176 1.586.441 3.086.794 4.41-.794.528-1.586 1.234-1.586 2.478 0 1.586 1.322 2.333 2.478 2.938 1.322.616 2.105 1.057 2.105 2.105 0 .969-1.057 1.586-2.105 1.586-1.586 0-2.478-.969-2.721-1.586-.088-.176 0-.352.176-.44.177-.088.354-.088.53.088zM9.466 6.174c-.617 0-1.057-.528-1.057-1.234 0-.705.44-1.234 1.057-1.234.616 0 1.057.529 1.057 1.234 0 .706-.441 1.234-1.057 1.234zm8.073 6.879s.617.616.969 1.409c-2.586 1.322-5.964.88-5.964.88s.353 1.057 1.586 1.586c2.105.793 4.914.617 6.763-1.057.44 1.057.617 1.85.617 1.85s-2.105 1.322-4.916 1.322c-2.81 0-5.084-.969-5.084-.969s.969.617 2.721 1.057c2.105.528 5.258.352 7.363-1.234-.176 1.409-.793 2.633-1.763 3.604-2.105 2.105-5.258 2.721-8.146 2.721-2.105 0-4.387-.44-5.964-1.322-.176-.088-.265 0-.265.176s.088.264.265.352c1.85 1.057 4.387 1.586 6.763 1.586 3.348 0 6.939-.969 9.203-3.348 1.586-1.85 2.457-4.123 2.721-6.484 0 0 .265 1.322-.44 2.633-.793 1.409-2.633 2.281-5.084 2.281-2.105 0-4.034-.616-5.084-1.586-.088-.088-.176-.088-.265-.088s-.176.088-.176.265c0 .088.088.176.176.264 1.234 1.057 3.52 1.763 5.621 1.763 2.938 0 5.258-1.057 6.232-2.81.881-1.586.793-3.348.793-3.348z" />
    </svg>
  );
}

function CICDIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5a7 7 0 017 7M12 19a7 7 0 01-7-7" />
    </svg>
  );
}

export default function TechStackRow({ techs }: { techs: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {techs.map((name) => (
        <TechItem key={name} name={name} />
      ))}
    </div>
  );
}

function TechItem({ name }: { name: string }) {
  const [imgError, setImgError] = useState(false);
  const slug = techSkillIcons[name];
  const useInlineIcon = name === "Java" || name === "CI/CD";

  if (useInlineIcon) {
    return (
      <span className="flex flex-col items-center gap-2">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] p-2 text-[var(--foreground)]">
          {name === "Java" && <JavaIcon className="h-8 w-8" />}
          {name === "CI/CD" && <CICDIcon className="h-8 w-8" />}
        </span>
        <span className="text-sm text-[var(--foreground)]">{name}</span>
      </span>
    );
  }

  if (!slug || imgError) {
    return (
      <span className="flex flex-col items-center gap-2">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--card)] text-sm font-medium text-[var(--foreground)]">
          {name.slice(0, 2)}
        </span>
        <span className="text-sm text-[var(--foreground)]">{name}</span>
      </span>
    );
  }

  return (
    <span className="flex flex-col items-center gap-2">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] p-2">
        <img
          src={`${CDN}/${slug}`}
          alt=""
          width={ICON_SIZE}
          height={ICON_SIZE}
          className="h-8 w-8 object-contain"
          onError={() => setImgError(true)}
        />
      </span>
      <span className="text-sm text-[var(--foreground)]">{name}</span>
    </span>
  );
}
