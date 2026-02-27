import Link from "next/link";
import {
  hero,
  funFacts,
  techSkills,
  workExperience,
  projects,
} from "@/data/content";
import TechSkillIcon from "@/components/TechSkillIcon";
import CompanyLogo from "@/components/CompanyLogo";
import FunFactIcon from "@/components/FunFactIcon";
import { CalendarIcon, MapPinIcon } from "@/components/icons";
import ProjectCardImage from "@/components/ProjectCardImage";
import AnimateSection from "@/components/AnimateSection";

const SECTION_CLASS = "mx-auto max-w-4xl px-4 py-5 sm:py-6";

export default function Home() {
  return (
    <div className="min-h-full">
      {/* Hero - template: text-center, H1 text-3xl sm:text-4xl, paragraphs gray-600 max-w-3xl */}
      <AnimateSection delay={0}>
      <section className={`${SECTION_CLASS} text-center mt-2 hero-section`}>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white hero-title">
          {hero.title}
        </h1>
        <div className="max-w-3xl mx-auto space-y-4 text-base sm:text-lg dark:text-white leading-relaxed text-left text-justify">
          {hero.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
      </AnimateSection>

      {/* Quick & Fun Facts - template: bg-gray-50 pills, rounded-full, border-gray-300, hover:border-blue-400 */}
      <AnimateSection delay={0.12}>
      <section className={`${SECTION_CLASS} fun-facts-section`}>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white text-center section-title">
          Quick & Fun Facts
        </h2>
        <ul className="flex flex-wrap gap-3 justify-center">
          {funFacts.map((fact, i) => (
            <li
              key={i}
              data-section-button
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 px-4 py-2.5 text-sm font-medium text-gray-700 transition-all shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500"
            >
              <FunFactIcon name={fact.icon} />
              <span>{fact.text}</span>
            </li>
          ))}
        </ul>
      </section>
      </AnimateSection>

      {/* Tech Skills - template: rounded-lg pills, icon + text horizontal, bg-gray-50 */}
      <AnimateSection delay={0.24}>
      <section className={`${SECTION_CLASS} tech-skills-section`}>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white text-center section-title">
          Tech Skills
        </h2>
        <ul className="flex flex-wrap gap-3 justify-center">
          {techSkills.map((skill, i) => (
            <li
              key={i}
              data-section-button
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors shadow-sm hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-400/50"
            >
                <TechSkillIcon name={skill} />
              </li>
          ))}
        </ul>
      </section>
      </AnimateSection>

      {/* Work Experience - template: View all with count badge, cards bg-gray-100, date | location */}
      <AnimateSection delay={0.36}>
      <section className={`${SECTION_CLASS} work-experience-section`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white work-experience-title">
            Work Experience
          </h2>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] dark:text-white hover:text-[var(--accent-hover)] dark:hover:text-gray-200 transition-colors"
          >
            View all
            <span className="inline-flex items-center justify-center min-w-[1.5rem] h-6 px-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-[var(--accent)] font-semibold text-xs">
              {workExperience.length}
            </span>
            <span aria-hidden>→</span>
          </Link>
        </div>
        <ul className="space-y-4">
          {workExperience.slice(0, 4).map((job, i) => (
            <li
              key={i}
              data-section-button
              className="rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-100 p-4 flex gap-4 shadow-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-1"
            >
              <CompanyLogo
                domain={job.logoDomain}
                company={job.company}
                logoUrl={"logoUrl" in job ? job.logoUrl : undefined}
                className="mt-0.5"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">
                    {job.role} @ {job.company}
                  </span>
                </div>
                <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[var(--muted-foreground)] dark:text-white">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarIcon className="h-4 w-4 shrink-0" />
                    {job.period}
                  </span>
                  <span className="text-gray-400 dark:text-white/70" aria-hidden>|</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPinIcon className="h-4 w-4 shrink-0" />
                    {job.location}
                  </span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)] dark:text-white">
                  {job.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      </AnimateSection>

      {/* Recent Projects - template style links and cards */}
      <AnimateSection delay={0.48}>
      <section className={`${SECTION_CLASS} pb-20 recent-projects-section`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white recent-projects-title">
            Recent Projects
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            View all
            <span className="inline-flex items-center justify-center min-w-[1.5rem] h-6 px-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-[var(--accent)] font-semibold text-xs">
              {projects.length}
            </span>
            <span aria-hidden>→</span>
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <li key={i}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-[var(--color-gray-900)] shadow-sm transition-all hover:border-blue-500 hover:shadow-md"
              >
                <div className="relative">
                  <ProjectCardImage image={project.image} title={project.title} />
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100 rounded-t-xl"
                    aria-hidden
                  >
                    <div
                      className="absolute inset-0 rounded-t-xl bg-gradient-to-b from-white/40 to-blue-800/70 transition-[backdrop-filter] duration-300 ease-out"
                      aria-hidden
                    />
                    <span className="relative z-10 inline-flex items-center gap-2 text-xl font-bold text-white opacity-100">
                      Explore Project
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h4>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                    {project.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      </AnimateSection>
    </div>
  );
}
