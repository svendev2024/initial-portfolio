"use client";

type Props = { children: React.ReactNode; delay?: number; className?: string };

export default function AnimateSection({ children, delay = 0, className = "" }: Props) {
  return (
    <div
      className={`animate-appear ${className}`.trim()}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
