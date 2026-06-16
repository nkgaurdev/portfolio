import { Section } from "./section";
import { ArrowUpRight, Github, Star, GitFork, Sparkles } from "lucide-react";

type Project = {
  title: string;
  description: string;
  stack: string[];
  tag: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Hybrid AI-Powered Explainable Medical Diagnosis",
    description:
      "AI-powered medical diagnosis platform integrating explainable AI (Grad-CAM) to improve transparency and trust in clinical predictions across imaging modalities.",
    stack: ["Python", "TensorFlow", "Streamlit", "Grad-CAM"],
    tag: "AI / ML",
    featured: true,
    metrics: [
      { label: "Accuracy", value: "94.2%" },
      { label: "Models", value: "3" },
      { label: "Datasets", value: "5K+" },
    ],
    gradient: "from-violet-500/30 via-primary/20 to-accent/20",
  },
  {
    title: "Predictive Maintenance Monitoring System",
    description:
      "Monitoring platform for industrial equipment — real-time health tracking, anomaly detection and maintenance prediction dashboards.",
    stack: ["HTML", "CSS", "JavaScript"],
    tag: "Industrial Web",
    gradient: "from-cyan-500/25 to-blue-500/15",
  },
  {
    title: "Student Mark Processing System",
    description:
      "Web-based academic management system for marks processing and record management with role-based access control.",
    stack: ["Java", "Servlet", "JDBC", "MySQL"],
    tag: "Full-Stack",
    gradient: "from-emerald-500/25 to-teal-500/15",
  },
  {
    title: "University Course Registration System",
    description:
      "Database-driven course registration platform supporting CRUD operations and student enrollment workflows at scale.",
    stack: ["PHP", "MySQL"],
    tag: "Backend",
    gradient: "from-amber-500/25 to-orange-500/15",
  },
];

export function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="A selection of projects across AI, full-stack and systems — each one shipped end-to-end."
    >
      {/* Featured project */}
      <article
        data-reveal
        className="group relative mb-6 overflow-hidden rounded-2xl border border-border bg-card/40 transition-all duration-300 hover:border-primary/40 hover:shadow-elegant"
      >
        <div className="grid md:grid-cols-[1.1fr_1fr]">
          <div className={`relative min-h-[220px] overflow-hidden bg-gradient-to-br ${featured.gradient}`}>
            <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
            <div className="absolute inset-0 grid place-items-center p-8">
              <div className="glass-strong w-full max-w-sm rounded-xl p-4 font-mono text-[11px] leading-relaxed text-muted-foreground shadow-elegant">
                <div className="flex items-center gap-1.5 border-b border-border/60 pb-2">
                  <span className="h-2 w-2 rounded-full bg-destructive/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-[10px]">diagnose.py</span>
                </div>
                <pre className="mt-2">
{`> model.predict(scan)
>>> { class: "pneumonia",
      conf: 0.942,
      gradcam: "✓ generated" }`}
                </pre>
              </div>
            </div>
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary backdrop-blur">
              <Sparkles className="h-3 w-3" /> Featured
            </span>
          </div>
          <div className="relative p-6 sm:p-8">
            <span className="font-mono text-xs uppercase tracking-wider text-primary">
              01 · {featured.tag}
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-foreground sm:text-2xl">
              {featured.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {featured.description}
            </p>
            {featured.metrics && (
              <div className="mt-5 grid grid-cols-3 gap-3">
                {featured.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-background/40 p-3">
                    <div className="font-display text-lg font-bold text-foreground">{m.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.stack.map((s) => (
                <span key={s} className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-muted">
                <Github className="h-3.5 w-3.5" /> Code
              </a>
              <a href="#" className="group/btn inline-flex items-center gap-1.5 text-xs text-primary transition-colors hover:text-foreground">
                Live demo <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </article>

      <div className="grid gap-6 md:grid-cols-3">
        {rest.map((p, i) => (
          <article
            key={p.title}
            data-reveal
            style={{ transitionDelay: `${i * 60}ms` }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-elegant"
          >
            <div className={`relative h-28 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-wider text-foreground/80">
                {String(i + 2).padStart(2, "0")} · {p.tag}
              </div>
              <div className="absolute right-3 top-3 flex items-center gap-1.5 text-foreground/70">
                <span className="inline-flex items-center gap-0.5 rounded-md bg-background/50 px-1.5 py-0.5 font-mono text-[10px] backdrop-blur">
                  <Star className="h-3 w-3" /> {12 + i * 3}
                </span>
                <span className="inline-flex items-center gap-0.5 rounded-md bg-background/50 px-1.5 py-0.5 font-mono text-[10px] backdrop-blur">
                  <GitFork className="h-3 w-3" /> {2 + i}
                </span>
              </div>
            </div>
            <div className="relative p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-base font-semibold leading-snug text-foreground">
                  {p.title}
                </h3>
                <div className="flex shrink-0 items-center gap-2 text-muted-foreground">
                  <a aria-label="Repo" href="https://github.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
                    <Github className="h-4 w-4" />
                  </a>
                  <a aria-label="Open" href="#" className="transition-colors hover:text-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
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