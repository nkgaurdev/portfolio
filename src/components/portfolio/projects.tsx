import { Section } from "./section";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Hybrid AI-Powered Explainable Medical Diagnosis",
    description:
      "AI-powered medical diagnosis platform integrating explainable AI techniques (Grad-CAM) to improve transparency and trust in predictions.",
    stack: ["Python", "TensorFlow", "Streamlit", "Grad-CAM"],
    tag: "AI / ML",
  },
  {
    title: "Predictive Maintenance Monitoring System",
    description:
      "Monitoring platform concept for industrial equipment — real-time health tracking and maintenance prediction dashboards.",
    stack: ["HTML", "CSS", "JavaScript"],
    tag: "Industrial Web",
  },
  {
    title: "Student Mark Processing System",
    description:
      "Web-based academic management system for student marks processing and record management with role-based access.",
    stack: ["Java", "Servlet", "JDBC", "MySQL"],
    tag: "Full-Stack",
  },
  {
    title: "University Course Registration System",
    description:
      "Database-driven course registration platform supporting CRUD operations and student enrollment workflows.",
    stack: ["PHP", "MySQL"],
    tag: "Backend",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="A selection of projects across AI, full-stack and systems — each one shipped end-to-end."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            data-reveal
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-elegant"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "var(--gradient-radial)" }}
            />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-wider text-primary">
                  {String(i + 1).padStart(2, "0")} · {p.tag}
                </span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <a aria-label="Repo" href="https://github.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
                    <Github className="h-4 w-4" />
                  </a>
                  <a aria-label="Open" href="#" className="transition-colors hover:text-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}