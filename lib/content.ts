export interface NavLink {
  label: string;
  href: string;
}

export interface PipelineNode {
  id: string;
  num: string;
  label: string;
  desc: string;
  colorType: "violet" | "coral" | "sun" | "lime";
  delayMs: number;
}

export interface StatItem {
  num: string;
  colorType: "lime" | "coral" | "sun" | "violet";
  label: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  colorType: "violet" | "coral" | "green" | "amber";
  desc: string;
  tags: string[];
}

export interface BlogPost {
  title: string;
  url: string;
  pubDate: string;
}

export const FEATURED_POSTS: BlogPost[] = [
  {
    title: "Mastering Multi-File C++ Projects: Organize, Guard, and Compile",
    url: "https://mangalam0015k.medium.com/mastering-multi-file-c-projects-organize-guard-and-compile-f43fb9efa553",
    pubDate: "Apr 26, 2025",
  },
  {
    title: "Integrating Hermes Agent with Discord: A Step-by-Step Guide (Two-Way and One-Way)",
    url: "https://mangalam0015k.medium.com/integrating-hermes-agent-with-discord-a-step-by-step-guide-two-way-and-one-way-ae99ea4cae12",
    pubDate: "Jul 11, 2026",
  },
  {
    title: "Lessons from Building an Expense Tracker: File I/O, Error Handling & Circular Imports in Python",
    url: "https://medium.com/@mangalam0015k/lessons-from-building-an-expense-tracker-file-i-o-error-handling-circular-imports-in-python-d4d3c0849105",
    pubDate: "May 25, 2025",
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
];

export const HERO_CONTENT = {
  eyebrow: "Technical Mentor · System Architect",
  headlinePrefix: "I turn manual work into ",
  headlineAccent: "systems that run themselves.",
  subhead:
    "Mangalam Kumar builds multi-agent pipelines and automation systems — from scheduling thousands of interviews to generating full websites with AI agents that hand off work to each other.",
  primaryCta: { label: "See the work", href: "#work" },
  secondaryCta: { label: "GitHub ↗", href: "https://github.com/Abhi0049k" },
};

export const PIPELINE_NODES: PipelineNode[] = [
  {
    id: "01",
    num: "01",
    label: "Gather",
    desc: "Pull signal from job boards, forums, calendars, inboxes.",
    colorType: "violet",
    delayMs: 100,
  },
  {
    id: "02",
    num: "02",
    label: "Reason",
    desc: "Agents classify, rank, and decide what matters.",
    colorType: "coral",
    delayMs: 500,
  },
  {
    id: "03",
    num: "03",
    label: "Automate",
    desc: "Scheduling, routing, and generation run without hands on it.",
    colorType: "sun",
    delayMs: 900,
  },
  {
    id: "04",
    num: "04",
    label: "Ship",
    desc: "Results land in Discord, inboxes, or a live preview.",
    colorType: "lime",
    delayMs: 1300,
  },
];

export const STATS_DATA: StatItem[] = [
  {
    num: "7,500+",
    colorType: "lime",
    label: "candidates scheduled automatically across R1, R2, and HR rounds",
  },
  {
    num: "93%",
    colorType: "coral",
    label: "cut in scheduling time — 15 minutes down to about 1 per candidate",
  },
  {
    num: "3",
    colorType: "sun",
    label: "end-to-end pipelines built for Kalvium — hiring, CGPA, and placements",
  },
  {
    num: "150+",
    colorType: "violet",
    label: "students mentored across Kalvium's program",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "01",
    title: "Hiring Automation System",
    colorType: "violet",
    desc: "End-to-end interview scheduling automation built on Google Apps Script — manages panel availability, books slots, generates Google Meet links, and sends templated emails across R1, R2, and HR rounds for ~8,000 candidates.",
    tags: ["Apps Script", "JavaScript", "HTML", "CSS", "Google Sheets API", "Google Calendar API", "Google Meet API", "Gmail API"],
  },
  {
    id: "02",
    title: "Student Progress & CGPA Pipeline",
    colorType: "coral",
    desc: "Automated a Google Sheets-based student progress tracking system using Google Apps Script, enabling centralized progress management, automated reporting, and personalized email updates while reducing repetitive manual work.",
    tags: ["Apps Script", "Reporting", "Data Management", "Email Automation", "Google Apps Script", "Google Sheets"],
  },
  {
    id: "03",
    title: "Placement Dashboard",
    colorType: "green",
    desc: "A Google Workspace Studio flow that reads placement and internship emails as they arrive, extracts company, role, and offer details plus any attached documents, and appends them straight to a live sheet students use directly. It also keeps listings current — updating a role to 'selected' or removing it entirely once a company closes hiring.",
    tags: ["Google Workspace Studio", "Google Sheets", "Workflow Automation", "Email Parsing", "Dashboard"],
  },
  {
    id: "04",
    title: "Fabricate",
    colorType: "amber",
    desc: "Fabricate is an agentic AI system designed to generate complete, high-quality React websites from natural language prompts in real-time. It employs a multi-agent architecture with Human-in-the-Loop (HITL) refinement and a secure E2B sandbox to validate, build, and deploy the generated applications instantly.",
    tags: ["Multi-agent", "React + FastAPI", "Google ADK", "E2B Sandbox", "Ollama", "Human-in-the-loop"],
  },
  {
    id: "05",
    title: "WhatsApp Notification Router",
    colorType: "green",
    desc: "Built for HackerRank Orchestrate. A resumable batch pipeline that reads text, images, and voice notes and routes each message to the right recipient, with cached user profiles precomputed ahead of time.",
    tags: ["Agentic Pipeline", "Multimodal", "Caching"],
  },
  {
    id: "06",
    title: "Hermes Automations",
    colorType: "violet",
    desc: "Daily bots that scrape job boards and trending-product feeds, reason over what's worth surfacing, and deliver a clean digest to Discord every morning — no cron babysitting required.",
    tags: ["Workflow Automation", "Discord", "Cron"],
  },
  {
    id: "07",
    title: "Synapse",
    colorType: "coral",
    desc: "A retrieval system pairing Gemini with ChromaDB and an active learning loop, so it gets sharper with every correction instead of staying static after launch.",
    tags: ["RAG", "Active Learning"],
  },
];

export const STACK_ITEMS: string[] = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "NumPy",
  "Pandas",
  "Scikit-Learn",
  "Google Apps Script",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "ChromaDB",
  "LangChain",
  "Gemini",
  "Docker",
  "AWS",
  "Cloudflare",
  "Discord API",
  "E2B Sandboxes",
  "Zustand",
  "n8n",
  "Kestra",
  "Postman",
  "Git",
];

export const ABOUT_CONTENT = {
  eyebrow: "About",
  headline: "Mentoring by day, building agents by night.",
  paragraphs: [
    "I mentor students inside Kalvium's work-integrated B.Tech CSE program, where the job is part teaching and part making sure the systems around teaching actually work.",
    'Outside of that, I build agentic pipelines for fun — things that gather information, reason about it, and act, with as little manual glue as possible. Most of what\'s on this page started as "I\'m tired of doing this by hand."',
    "Based in Coimbatore, Tamil Nadu.",
  ],
  cardRole: "Technical Mentor",
  cardOrg: "Kalvium",
  bullets: [
    "Mentors students across a work-integrated CSE program with 20+ university partners",
    "Worked as product manager on a workstream spanning 4 concurrent projects",
    "Builds internal tools for hiring, scheduling, and content operations",
    "Writes evaluator-facing documentation for Kalvium's assessment tooling",
    "Ships automations that run without daily supervision",
  ],
};

export const CONTACT_CONTENT = {
  headline: "Let's build\nsomething that runs itself.",
  paragraph:
    "Open to conversations about mentoring, automation, or agentic systems.",
  linkedinUrl: "https://linkedin.com/in/mangalam-kumar/",
  githubUrl: "https://github.com/Abhi0049k",
};

export const FOOTER_CONTENT = {
  copyright: "© 2026 Mangalam Kumar",
  tagline: "Built with agents, edited by hand",
};

export interface MentorshipItem {
  id: string;
  name: string;
  initials: string;
  subtitle: string;
  colorType: "violet" | "coral" | "green" | "amber";
  desc: string;
  reactions: number;
  comments: number;
  linkedinUrl: string;
}

export const MENTORSHIP_CONTENT = {
  eyebrow: "Mentorship",
  headline: "Guided them through Hacktoberfest — they shipped.",
  note: "Two students I mentored through Hacktoberfest 2025, from first PR to completion.",
};

export const MENTORSHIP_DATA: MentorshipItem[] = [
  {
    id: "01",
    name: "Rahul R R",
    initials: "RR",
    subtitle: "Hacktoberfest 2025 · Open Source",
    colorType: "violet",
    desc: `🌟 Hacktoberfest 2025: Completed with all badges + Super Contributor! 🌟\n\nThis October, I decided to step into open source a bit late, but definitely worth it! Despite the late start, I managed to dedicate time consistently and contribute meaningfully to multiple projects, earning all Hacktoberfest badges and the Super Contributor tier.\n\nA huge shoutout to my mentor Mangalam Kumar for guiding me throughout this journey — your support made all the difference.`,
    reactions: 30,
    comments: 2,
    linkedinUrl:
      "https://www.linkedin.com/posts/rahul-r-r_hacktoberfest2025-opensource-developercommunity-ugcPost-7391717986639851521-dvbv/",
  },
  {
    id: "02",
    name: "Vishal Muthukumar",
    initials: "VM",
    subtitle: "Hacktoberfest 2025 · Open Source",
    colorType: "coral",
    desc: `Finally jumped into Hacktoberfest '25 – and what a ride it was! I'll be honest, I started late — just before the last week of Hacktoberfest 2025. But something clicked, and I decided to give open source a proper shot.\n\nNone of this would've happened without Rahul RR and Mangalam Kumar, who kept pushing me to actually do it instead of procrastinating. That support made the difference.\n\nStarting late turned out to be fine. You don't need the whole month. You just need to start.`,
    reactions: 25,
    comments: 2,
    linkedinUrl:
      "https://www.linkedin.com/posts/vishal-muthukumar_hacktoberfest2025-opensource-devjourney-ugcPost-7392931237222305792-S8QH/",
  },
];
