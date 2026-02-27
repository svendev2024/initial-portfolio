import Link from "next/link";
import { projects } from "@/data/content";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";
import TechStackRow from "@/components/TechStackRow";
import AnimateSection from "@/components/AnimateSection";

const SECTION_CLASS = "mx-auto max-w-4xl px-6 py-10 sm:py-12";

function PeopleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
function PersonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>
  );
}
function GearIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 15a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M19.4 15a1.65 1.65 0 00.33-1.82v-.06a1.65 1.65 0 00-1.51-1.27h-2.47a1.65 1.65 0 00-1.14.46l-.91.9a7.65 7.65 0 01-2.24 0l-.92-.9a1.65 1.65 0 00-1.14-.46H6.28a1.65 1.65 0 00-1.51 1.27v.06a1.65 1.65 0 00.33 1.82l.79.78a7.65 7.65 0 010 2.24l-.79.78a1.65 1.65 0 00-.33 1.82v.06a1.65 1.65 0 001.51 1.27h2.47a1.65 1.65 0 001.14-.46l.91-.9a7.65 7.65 0 012.24 0l.92.9c.3.3.67.46 1.14.46h2.47a1.65 1.65 0 001.51-1.27v-.06a1.65 1.65 0 00-.33-1.82l-.79-.78a7.65 7.65 0 010-2.24l.79-.78z" clipRule="evenodd" />
    </svg>
  );
}
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
    </svg>
  );
}
function FrameIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
function LightBulbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}
function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function ChartBarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const hasMeta = project.teamSize != null || project.role || project.duration;
  const hasGallery = project.gallery && project.gallery.length > 0;

  return (
    <div className="min-h-full">
      <div className={SECTION_CLASS}>
        <AnimateSection delay={0}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </AnimateSection>

        <AnimateSection delay={0.1}>
          <div className="mt-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-3 text-lg text-[var(--muted-foreground)]">
              {project.description}
            </p>
          </div>
        </AnimateSection>

        {hasMeta && (
          <AnimateSection delay={0.2}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {project.teamSize != null && (
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--foreground)]">
                <PeopleIcon className="h-4 w-4 text-blue-500" />
                Team Size: {project.teamSize}
              </span>
            )}
            {project.role && (
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--foreground)]">
                <PersonIcon className="h-4 w-4 text-emerald-500" />
                Role: {project.role}
              </span>
            )}
            {project.duration && (
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--foreground)]">
                <ClockIcon className="h-4 w-4 text-violet-500" />
                Duration: {project.duration}
              </span>
            )}
          </div>
          </AnimateSection>
        )}

        {project.techStack && project.techStack.length > 0 && (
          <AnimateSection delay={0.3}>
          <section className="mt-14">
            <h2 className="flex items-center justify-center gap-2  text-xl font-semibold text-[var(--foreground)]">
              <GearIcon className="h-5 w-5 text-[var(--muted-foreground)]" />
              Tech Stack
            </h2>
            <div className="mt-6">
              <TechStackRow techs={project.techStack} />
            </div>
          </section>
          </AnimateSection>
        )}

        {hasGallery && (
          <AnimateSection delay={0.4}>
          <section className="mt-14">
            <h2 className="flex items-center justify-center gap-2  text-xl font-semibold text-[var(--foreground)]">
              <FrameIcon className="h-5 w-5 text-[var(--muted-foreground)]" />
              Project Gallery
            </h2>
            <div className="mt-6">
              <ProjectGallery items={project.gallery!} />
            </div>
          </section>
          </AnimateSection>
        )}

        {project.introduction && (
          <AnimateSection delay={0.5}>
          <section className="mt-14 text-left">
            <h2 className=" text-xl font-semibold text-[var(--foreground)]">
              Introduction
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--muted-foreground)]">
              {project.introduction}
            </p>
          </section>
          </AnimateSection>
        )}

        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <AnimateSection delay={0.6}>
          <section className="mt-14 text-left">
            <h2 className=" text-xl font-semibold text-[var(--foreground)]">
              Key Features
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted-foreground)]">
              {project.keyFeatures.map((feature, i) => (
                <li key={i} className="leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>
          </section>
          </AnimateSection>
        )}

        {project.technicalInsights && project.technicalInsights.length > 0 && (
          <AnimateSection delay={0.65}>
          <section className="mt-14 text-left">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-[var(--foreground)]">
              <LightBulbIcon className="h-5 w-5 text-[var(--muted-foreground)]" />
              Technical Insights
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted-foreground)]">
              {project.technicalInsights.map((insight, i) => (
                <li key={i} className="leading-relaxed">
                  {insight}
                </li>
              ))}
            </ul>
          </section>
          </AnimateSection>
        )}

        {project.challengesSolutions && project.challengesSolutions.length > 0 && (
          <AnimateSection delay={0.7}>
          <section className="mt-14 text-left">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-[var(--foreground)]">
              <WrenchIcon className="h-5 w-5 text-[var(--muted-foreground)]" />
              Challenges & Solutions
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted-foreground)]">
              {project.challengesSolutions.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          </AnimateSection>
        )}

        {project.outcome && project.outcome.length > 0 && (
          <AnimateSection delay={0.75}>
          <section className="mt-14 text-left">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-[var(--foreground)]">
              <ChartBarIcon className="h-5 w-5 text-[var(--muted-foreground)]" />
              Outcome
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted-foreground)]">
              {project.outcome.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          </AnimateSection>
        )}

        <AnimateSection delay={0.8}>
        <div className="pb-16 pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            ← Back to Projects
          </Link>
        </div>
        </AnimateSection>
      </div>
    </div>
  );
}
