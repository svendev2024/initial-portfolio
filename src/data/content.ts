// Site branding (used in header, footer, metadata)
export const site = {
  name: "John Angelo Santos",
  initials: "JAS",
};

// Tech skill name -> local icon filename in /icons/tech/ (same as template)
export const techIconFile: Record<string, string> = {
  Java: "java.svg",
  "Spring Boot": "spring.svg",
  Python: "python.svg",
  Django: "django.svg",
  Flask: "flask-dark.svg",
  FastAPI: "fast-api.svg",
  JavaScript: "javascript.svg",
  TypeScript: "typescript.svg",
  React: "reactjs.svg",
  NextJS: "nextjs.svg",
  Vue: "vuejs.svg",
  Angular: "angular.svg",
  "Node.js": "nodejs.svg",
  MySQL: "mysql.svg",
  PostgreSQL: "postgresql.svg",
  MongoDB: "mongodb.svg",
  Docker: "docker.svg",
  AWS: "aws.svg",
  Kubernetes: "kubernetes.svg",
  Kafka: "kafka.svg",
  Git: "git.svg",
  GitHub: "github-dark.svg",
  "CI/CD": "ci-cd.svg",
};

// Fallback: Simple Icons slug (cdn.simpleicons.org/slug) when local file missing
export const techSkillIcons: Record<string, string> = {
  Java: "openjdk",
  "Spring Boot": "springboot",
  Python: "python",
  Django: "django",
  Flask: "flask",
  FastAPI: "fastapi",
  JavaScript: "javascript",
  TypeScript: "typescript",
  React: "react",
  NextJS: "nextdotjs",
  Vue: "vuedotjs",
  Angular: "angular",
  "Node.js": "nodedotjs",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Docker: "docker",
  AWS: "amazonaws",
  Kubernetes: "kubernetes",
  Kafka: "apachekafka",
  Git: "git",
  GitHub: "github",
  "CI/CD": "cicd",
  Jenkins: "jenkins",
  GitLab: "gitlab",
};

export const hero = {
  title: "Hi, I'm John Angelo 👋",
  paragraphs: [
    "Software Engineer with over 12 years of experience across full-stack development, backend services, and cloud-based solutions, specializing in building scalable, high-performance platforms. Expertise includes developing AI-driven applications, managing cross-functional teams, and delivering robust software solutions for financial institutions, enterprise clients, and ecommerce platforms.",
    "Proven track record in backend development with Java, Spring Boot, and Python, and frontend expertise in React.js, Next.js, Vue and Angular. Strong background in integrating microservices, event streaming with Apache Kafka, CI/CD pipelines, and maintaining system performance through optimization techniques. Passionate about mentoring junior engineers, collaborating with AI/ML teams, and improving user experience through real-time, data-driven features.",
  ],
};

export const funFacts: { text: string; icon: string }[] = [
  { text: "Oscilar", icon: "building" },
  { text: "B.S. in Computer Science — NTU (National Taiwan University)", icon: "graduation" },
  { text: "Philippines", icon: "mapPin" },
  { text: "EN", icon: "globe" },
  { text: "Senior Software Engineer", icon: "briefcase" },
  { text: "Book Reviewer", icon: "book" },
  { text: "Sci-fi Fan", icon: "glasses" },
  { text: "Skiing Enthusiast", icon: "skiing" },
];

export const techSkills = [
  "Java",
  "Spring Boot",
  "Python",
  "Django",
  "Flask",
  "FastAPI",
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "Vue",
  "Angular",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Kubernetes",
  "Kafka",
  "Git",
  "GitHub",
  "CI/CD",
];

// Company slug and logo: logoUrl = local /work/ file (same as template), else Clearbit via logoDomain
export const workExperience = [
  {
    company: "Oscilar",
    role: "Senior Software Engineer",
    period: "Feb 2023 – Present",
    location: "Remote, US",
    description:
      "Led a small team building an AI-powered risk decisioning platform for real-time fraud detection and compliance, using Java/Spring Boot, Kafka, and React/Next.js.",
    slug: "oscilar",
    logoDomain: "oscilar.com",
    logoUrl: "/work/oscilar.svg",
  },
  {
    company: "Docker",
    role: "Full Stack Developer",
    period: "Apr 2020 – Dec 2022",
    location: "Remote, US",
    description:
      "Built and maintained Docker Hub features with React (TypeScript) and Python backend services, focusing on scalable APIs, RBAC, and high-traffic registry workflows.",
    slug: "docker",
    logoDomain: "docker.com",
    logoUrl: "/work/docker.svg",
  },
  {
    company: "Octopus Deploy",
    role: "Mid-Level Web Developer",
    period: "Feb 2018 – Feb 2020",
    location: "Remote, Australia",
    description:
      "Developed deployment and release management dashboards with Java and Vue.js, improving multi-tenancy, audit logging, and third-party CI/CD integrations.",
    slug: "octopus-deploy",
    logoDomain: "octopus.com",
    logoUrl: "/work/octopus.svg",
  },
  {
    company: "White CLoak Technologies",
    role: "Full Stack Developer",
    period: "Dec 2015 – Nov 2017",
    location: "Onsite, Philippines",
    description:
      "Assisted in developing web applications using PHP and MySQL. Helped deliver secure banking features for UnionBank Online by building React UI and Spring Boot APIs with real-time transaction-related functionality.",
    slug: "white-cloak",
    logoDomain: "whitecloak.com",
    logoUrl: "/work/white-cloak.webp",
  },
  {
    company: "Startechup Inc.",
    role: "Web Developer",
    period: "Dec 2013 – Oct 2015",
    location: "Onsite, Philippines",
    description:
      "Built an e-commerce web platform using Django and Angular with core features like payments, shopping cart, inventory, and order processing.",
    slug: "startechup",
    logoDomain: "startechup.com",
  },
];

export type ProjectGalleryItem = { title: string; date: string; image?: string; cardStyle?: "award" };
export type ProjectDetail = {
  title: string;
  description: string;
  slug: string;
  image: string;
  teamSize?: number;
  role?: string;
  duration?: string;
  techStack?: string[];
  gallery?: ProjectGalleryItem[];
  introduction?: string;
  keyFeatures?: string[];
  technicalInsights?: string[];
  challengesSolutions?: string[];
  outcome?: string[];
};

export const projects: ProjectDetail[] = [
  {
    title: "Oscilar's AI Risk Decisioning Platform",
    description: "A real-time fraud and risk decisioning system",
    slug: "project-a",
    image: "/work/first-work.png",
    teamSize: 4,
    role: "Senior Software Engineer",
    duration: "Feb 2023 - Jan 2026",
    techStack: ["Java", "Spring Boot", "React", "NextJS", "CI/CD", "Jenkins", "GitLab"],
    gallery: [
      {title: "", date: "Internal documentation", image: "/work/first-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/first-pro/2.webp" },
    ],
    introduction:
      "Oscilar's AI Risk Decisioning Platform is a real-time fraud and risk decisioning system that helps financial institutions detect anomalies, reduce false positives, and make faster, smarter approvals using ML-powered insights.",
    keyFeatures: [
      "Real-time fraud detection and risk scoring across multiple channels",
      "Event-driven decisioning workflows for instant alerts and automated actions",
      "ML-powered anomaly detection for fraud, account takeover, and credit risk signals",
      "Analyst dashboard (React + Next.js) for monitoring transactions, reviewing risk outcomes, and taking action",
      "REST API layer for seamless integration with financial systems and internal tools",
      "Compliance support + audit-ready risk decisions for regulated environments",
      "Reduced false positives to improve customer experience and approval rates",
    ],
    technicalInsights: [
      "Built scalable Java + Spring Boot microservices to process high-volume transactional traffic",
      "Implemented Apache Kafka pipelines for low-latency streaming, enrichment, and decision triggers",
      "Designed RESTful APIs optimized for high throughput and long-term maintainability",
      "Developed a responsive Next.js + React dashboard with SSR + code splitting for fast loading and smooth UX",
      "Automated delivery through CI/CD pipelines (Jenkins + GitLab) to speed up releases and reduce deployment effort",
      "Led sprint execution and delivery using Jira, plus cross-team coordination via Slack + Zoom",
    ],
    challengesSolutions: [
      "High-volume transaction load and low-latency requirements: Designed microservices for horizontal scaling and used Kafka streaming to process events fast with minimal delay.",
      "Slow processing and decision lag under peak traffic: Optimized event pipelines and backend performance to reduce end-to-end processing time significantly.Designed the backend with a microservices architecture to handle increasing user loads.",
      "Keeping fraud detection strong without excessive false positives: Worked closely with ML engineers to integrate better risk signals and model outputs into decisioning flows.",
      "UI performance issues with real-time monitoring data: Used Next.js SSR, code-splitting, and efficient API communication to keep the dashboard fast and responsive.",
      "Deployment overhead and release delays: Automated build/test/deploy workflows using Jenkins + GitLab CI/CD to reduce manual release effort.",
    ],
    outcome: [
      "Recognized as “Best Risk Decisioning Platform” in the 2025 FinTech Breakthrough Awards",
      "Improved real-time risk assessment speed by 25% and reduced processing time by 40%",
      "Increased fraud detection rates by 35% and boosted dashboard engagement by 20%",
      "Accelerated delivery by cutting deployment time by 50%, enabling faster releases and iteration",
    ],
  },
  {
    title: "Docker Hub",
    description: "A global container registry platform",
    slug: "project-b",
    image: "/work/second-work.png",
    teamSize: 8,
    role: "Full Stack Developer",
    duration: "Apr 2020 - Dec 2022",
    techStack: ["React", "TypeScript", "Python", "Docker", "Kubernetes"],
    gallery: [
      {title: "", date: "Internal documentation", image: "/work/sec-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/sec-pro/2.webp" },
    ],
    introduction:
      "Docker Hub is a global container registry platform that helps developers store, manage, and deliver container images reliably at massive scale for both public and private deployments.",
    keyFeatures: [
      "Container image storage and distribution",
      "Repository and tag management for container image storage and versioning",
      "Organization and team controls for managing users, permissions, and access",
      "Image metadata processing to enrich repository details and improve discoverability",
      "Webhook automation for triggering build, deploy, and workflow events",
      "Usage analytics dashboards to monitor pulls, activity, and registry usage trends",
      "Secure authentication + RBAC for fine-grained access control across accounts",
      "Rate limiting + quotas to protect platform stability and prevent abuse",
      "CI/CD integrations for automated builds and developer tooling workflows",
    ],
    technicalInsights: [
      "Built modern UI features using React + TypeScript, focusing on reusable components and clean UX",
      "Developed backend services with Python (Django/Flask) exposing stable, scalable REST APIs",
      "Implemented RBAC, authentication, rate limiting, quotas, and usage tracking for high-traffic workloads",
      "Created async workers/background jobs for metadata processing, webhook delivery, and automation tasks",
      "Ran services using Docker + Kubernetes and supported deployments through CI/CD pipelines",
      "Used **PostgreSQL **for persistence and Redis for caching and performance improvement",
      "Worked in a fully remote environment with global teams using code reviews and sprint planning",
    ],
    challengesSolutions: [
      "Supporting very high traffic across public and private registries: Enforced rate limiting, quotas, caching, and scalable API design to keep performance stable.",
      "Secure access control across teams and organizations: Implemented RBAC and authentication flows to ensure permissions were enforced consistently.",
      "Processing image metadata and automation without slowing user requests: Moved heavy tasks into background jobs/async workers to keep the main APIs fast.",
      "Reliable webhook delivery for integrations and workflows: Built async delivery pipelines with retries, monitoring, and failure-safe handling.",
      "Keeping the UI responsive while showing complex repo/tag data: Built optimized React components and clean data flows for fast browsing and navigation.",    ],
    outcome: [
      "Delivered new Docker Hub platform features for repository browsing, tags, org management, webhooks, and analytics",
      "Improved platform reliability through secure RBAC, rate limiting, quotas, and usage tracking",
      "Enabled scalable automation with async metadata processing and webhook workflows",
      "Supported global teams by shipping incremental improvements through remote sprint execution and code review workflows",
    ],
  },
  {
    title: "Octopus Deploy",
    description: "A deployment automation platform",
    slug: "project-c",
    image: "/work/third-work.png",
    teamSize: 5,
    role: "Mid-Level Web Developer",
    duration: "Feb 2018 - Feb 2020",
    techStack: ["Java", "Vue", "Node.js", "Git"],
    gallery: [
      {title: "", date: "Internal documentation", image: "/work/thi-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/thi-pro/2.webp" },
    ], introduction:
      "Octopus Deploy is a deployment automation platform that helps teams manage releases, deployments, and environments reliably, especially for complex enterprise CI/CD workflows.",
    keyFeatures: [
      "Deployment dashboards for visibility into releases, environments, and deployment history",
      "Release management workflows to create, track, and troubleshoot deployments faster",
      "Multi-tenancy support for managing multiple tenants and environments in one Octopus instance",
      "Audit logging to track deployment actions for compliance and traceability",
      "Integration configuration screens for tools like Jenkins, AWS, and Docker",
      "Consistent user experience across backend services and frontend UI features",
    ],
    technicalInsights: [
      "Built backend services using Java, designed for reliability and scalability",
      "Developed frontend features using Vue.js, focusing on clear workflows and usability",
      "Implemented multi-tenant architecture improvements to support enterprise scaling needs",
      "Added audit logging pipelines to capture deployment actions and support regulated customers",
      "Created configuration UIs to simplify third-party integrations and reduce setup friction",
      "Worked in a distributed team using Agile delivery, code reviews, and incremental releases",
    ],
    challengesSolutions: [
      "Deployment troubleshooting was slow for enterprise users: Built clearer dashboards and release flows that improved visibility into failures and root causes.",  
      "Customers needed to scale deployments across many tenants/environments: Enhanced multi-tenancy features so teams could manage complex setups in a single platform instance.",
      "Regulated clients required detailed traceability for changes and actions: Implemented audit logging to track deployment actions and improve accountability.",
      "Integration setup was too complex for common CI/CD tools: Built integration configuration screens that made connecting Jenkins, AWS, and Docker more straightforward.",
      "Keeping UI and backend changes aligned across a distributed team: Coordinated closely in Agile sprints and ensured stable API-to-UI contracts for consistent behavior.",
    ],
    outcome: [
      "Improved deployment visibility and troubleshooting speed through new dashboards and release workflows",
      "Enabled enterprise scaling through stronger multi-tenancy support",
      "Increased platform trust and compliance readiness with audit logging and traceable actions",
      "Simplified CI/CD adoption by delivering smoother integration configuration experiences for key tools,",
    ],
  },
  {
    title: "UnionBank Online",
    description: "A digital mobile banking app",
    slug: "project-d",
    image: "/work/fourth-work.png",
    teamSize: 6,
    role: "Full Stack Developer",
    duration: "Dec 2015 - Nov 2017",
    techStack: ["React", "Spring Boot", "MySQL", "Java"],
    gallery: [
      {title: "", date: "Internal documentation", image: "/work/for-pro/1.webp" },
      { title: "", date: "Internal documentation", image: "/work/for-pro/2.webp" },
    ],
    introduction:
      "UnionBank Online is a digital mobile banking app that lets customers manage accounts, send money, pay bills, and complete secure transactions with a fast, modern user experience.",
    keyFeatures: [
      "Integration with core banking APIs",
      "Account management (balances, account details, transaction history)",
      "Fund transfers (internal and external transfers)",
      "Bill payments with secure confirmation and tracking",
      "QR code payments for fast in-store and merchant transactions",
      "Real-time transaction monitoring for visibility and fraud awareness",
      "Secure API-driven banking workflows aligned with regulatory requirements",
    ],
    technicalInsights: [
      "Built frontend UI features using React.js for responsive, mobile-friendly banking screens",
      "Integrated backend services using Java + Spring Boot, connecting secure banking APIs to the app",
      "Supported transaction workflows including fund transfers, bill payments, and account actions",
      "Implemented real-time monitoring features to show transaction status updates accurately",
      "Worked closely with product, QA, and compliance teams to meet banking standards for security and performance",
    ],
    challengesSolutions: [
      "Handling sensitive financial transactions securely at scale: Ensured strong API integration patterns, validation, and secure request handling across key flows.",
      "Real-time transaction status needed to be accurate and fast: Integrated monitoring logic to reflect transaction updates quickly and reduce user confusion.",
      "QR code payments required smooth UX with low failure rates: Improved UI flow and backend integration to make QR payments stable and easy to complete.",
      "Banking compliance requirements can slow down delivery: Worked with compliance and engineering teams early to build features in a secure, standards-aligned way.",
    ],
    outcome: [
      "Delivered improvements to core mobile banking features used by millions of customers",
      "Strengthened the app’s digital payment experience through QR payments and real-time monitoring",
      "Helped maintain strong security, performance, and compliance across critical banking workflows",
      "Contributed to a more seamless and reliable end-to-end mobile banking experience",
    ],
  },
];
