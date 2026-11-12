// All editable website content lives in this file.
// To replace a placeholder image, put the file in /public (e.g. /public/works/ops.jpg)
// and set `image: "/works/ops.jpg"`. Anything without an `image` shows a placeholder.

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  /** Short handwritten note shown next to the project on the home page. */
  note?: string;
  /** "sticky" = yellow sticky note above the frame, "arrow" = handwritten note with an arrow below it. */
  noteStyle?: "sticky" | "arrow";
  summary: string;
  problem: string;
  role: string;
  outcome: string;
  image?: string;
};

export type Photo = {
  caption: string;
  image?: string;
  /** Gradient used while there is no image yet. */
  tint: [string, string];
};

export const site = {
  name: "Stephanie Lauwinsky",
  firstName: "Stephanie",
  role: "UI/UX Designer",
  location: "Jakarta",
  heroBackdrop: "ui/ux designer",
  greeting: "hello!!! have a nice day",
  tagline:
    "A UI/UX designer in Jakarta who turns complex dashboards and internal tools into clear, structured experiences.",
  bio: [
    "I'm a UI/UX designer focused on complex dashboards and internal tools.",
    "As the sole designer on my team, I work closely with stakeholders to turn fragmented processes into clear, structured experiences.",
    "I pay close attention to the details, making sure flows, edge cases and requirements are thoughtfully considered throughout the design process.",
  ],
  focus: ["Complex dashboards", "Internal tools", "Workflow & process design", "Edge cases & requirements"],
  portrait: undefined as string | undefined, // e.g. "/me.jpg"
  email: "slauwinsky@gmail.com",
  socials: [{ label: "linkedin", href: "https://www.linkedin.com/in/stephanie-lauwinsky" }],
  workHeading: "Selected work",
  workAside: "a little showcase of my work",
  cameraHeading: ["Things I pointed", "my camera at"],
  cameraNote: "I really love taking pictures",
  cameraAside: "shot on my phone",
  contactHeading: ["Let's", "make", "something"],
};

// PLACEHOLDER projects: replace with real case studies.
export const projects: Project[] = [
  {
    slug: "operations-dashboard",
    title: "Operations Dashboard",
    category: "dashboard",
    year: "2026",
    note: "this one was very challenging",
    noteStyle: "sticky",
    summary: "Placeholder: a one-line summary of the project.",
    problem: "Placeholder: what was broken or fragmented, and for whom.",
    role: "Placeholder: what you did as the sole designer, and who you worked with.",
    outcome: "Placeholder: what changed after launch (numbers if you have them).",
  },
  {
    slug: "approval-workflow",
    title: "Approval Workflow",
    category: "internal tool",
    year: "2025",
    note: "my most exciting project to date",
    noteStyle: "arrow",
    summary: "Placeholder: a one-line summary of the project.",
    problem: "Placeholder: what was broken or fragmented, and for whom.",
    role: "Placeholder: what you did as the sole designer, and who you worked with.",
    outcome: "Placeholder: what changed after launch (numbers if you have them).",
  },
  {
    slug: "reporting-revamp",
    title: "Reporting Revamp",
    category: "dashboard",
    year: "2025",
    note: "so many edge cases",
    noteStyle: "arrow",
    summary: "Placeholder: a one-line summary of the project.",
    problem: "Placeholder: what was broken or fragmented, and for whom.",
    role: "Placeholder: what you did as the sole designer, and who you worked with.",
    outcome: "Placeholder: what changed after launch (numbers if you have them).",
  },
  {
    slug: "inventory-console",
    title: "Inventory Console",
    category: "internal tool",
    year: "2025",
    note: "a fun experiment",
    noteStyle: "arrow",
    summary: "Placeholder: a one-line summary of the project.",
    problem: "Placeholder: what was broken or fragmented, and for whom.",
    role: "Placeholder: what you did as the sole designer, and who you worked with.",
    outcome: "Placeholder: what changed after launch (numbers if you have them).",
  },
  {
    slug: "design-system",
    title: "Design System",
    category: "system",
    year: "2024",
    note: "still my personal favourite",
    noteStyle: "sticky",
    summary: "Placeholder: a one-line summary of the project.",
    problem: "Placeholder: what was broken or fragmented, and for whom.",
    role: "Placeholder: what you did as the sole designer, and who you worked with.",
    outcome: "Placeholder: what changed after launch (numbers if you have them).",
  },
  {
    slug: "onboarding-flow",
    title: "Onboarding Flow",
    category: "flow",
    year: "2024",
    note: "a calm place to end on",
    noteStyle: "arrow",
    summary: "Placeholder: a one-line summary of the project.",
    problem: "Placeholder: what was broken or fragmented, and for whom.",
    role: "Placeholder: what you did as the sole designer, and who you worked with.",
    outcome: "Placeholder: what changed after launch (numbers if you have them).",
  },
];

// PLACEHOLDER photos for the camera section: add `image` paths when you have them.
export const photos: Photo[] = [
  { caption: "Photo 1", tint: ["#f6d365", "#fda085"] },
  { caption: "Photo 2", tint: ["#a1c4fd", "#c2e9fb"] },
  { caption: "Photo 3", tint: ["#d4fc79", "#96e6a1"] },
  { caption: "Photo 4", tint: ["#fbc2eb", "#a6c1ee"] },
  { caption: "Photo 5", tint: ["#ffecd2", "#fcb69f"] },
  { caption: "Photo 6", tint: ["#84fab0", "#8fd3f4"] },
  { caption: "Photo 7", tint: ["#e0c3fc", "#8ec5fc"] },
  { caption: "Photo 8", tint: ["#fddb92", "#d1fdff"] },
];
