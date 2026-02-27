"use client";

import Image from "next/image";

type Props = { image: string; title: string };

export default function ProjectCardImage({ image, title }: Props) {
  const base = "flex h-56 sm:h-64 w-full items-center justify-center overflow-hidden rounded-t-xl";

  /* Image path (e.g. /work/first-work.png) – render actual image */
  if (image.startsWith("/") || image.includes(".")) {
    return (
      <div className={`${base} relative bg-[var(--card-hover)]`}>
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
    );
  }

  switch (image) {
    case "oscilar":
      return (
        <div className={`${base} relative bg-gradient-to-br from-slate-700 to-slate-900 p-4`}>
          <div className="flex w-full items-center justify-between rounded-lg bg-white/10 px-3 py-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Winner</span>
            <span className="text-right text-xs text-white/90">Best Risk Decisioning Platform</span>
          </div>
          <div className="absolute right-4 top-4 h-10 w-10 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 opacity-90" />
        </div>
      );
    case "docker":
      return (
        <div className={`${base} bg-gradient-to-br from-blue-600 to-blue-800 p-4`}>
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-lg bg-white" />
            <span className="text-xs font-semibold text-white">Docker</span>
            <span className="text-[10px] text-blue-200">E2B</span>
          </div>
        </div>
      );
    case "octopus":
      return (
        <div className={`${base} bg-gradient-to-br from-slate-100 to-slate-200 p-4`}>
          <div className="flex items-end gap-1">
            <div className="h-8 w-10 rounded bg-blue-500" />
            <div className="h-10 w-10 rounded bg-blue-600" />
            <div className="h-6 w-10 rounded bg-blue-400" />
          </div>
          <span className="mt-2 text-xs text-slate-600">Deployment automation</span>
        </div>
      );
    case "unionbank":
      return (
        <div className={`${base} bg-gradient-to-br from-violet-500 via-amber-400 to-emerald-500 p-4`}>
          <div className="flex items-center gap-2 rounded-lg bg-white/20 px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-amber-300" />
            <div className="h-6 w-12 rounded bg-orange-400" />
          </div>
        </div>
      );
    default:
      return (
        <div className={`${base} bg-[var(--card-hover)]`}>
          <span className="text-sm text-[var(--muted-foreground)]">{title}</span>
        </div>
      );
  }
}
