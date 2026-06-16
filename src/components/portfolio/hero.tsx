import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-32 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="animate-reveal inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for full-time roles • 2026 Batch
          </span>

          <h1
            className="animate-reveal mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            style={{ animationDelay: "60ms" }}
          >
            Neeraj Kumar Gaur
            <br />
            <span className="text-gradient">building software that ships.</span>
          </h1>

          <p
            className="animate-reveal mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            Aspiring Software Engineer · Python Developer · Full-Stack & AI Enthusiast.
            I craft practical, reliable solutions across web, AI and cybersecurity domains.
          </p>

          <div
            className="animate-reveal mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-border glass px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>

          <div
            className="animate-reveal mt-8 flex items-center gap-4 text-muted-foreground"
            style={{ animationDelay: "240ms" }}
          >
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="mailto:neeraj@example.com" className="transition-colors hover:text-foreground">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Floating code card */}
        <div
          className="animate-reveal relative mx-auto mt-16 max-w-3xl"
          style={{ animationDelay: "320ms" }}
        >
          <div className="glass-strong rounded-2xl p-5 shadow-elegant">
            <div className="flex items-center gap-1.5 border-b border-border/60 pb-3">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">~/neeraj.ts</span>
            </div>
            <pre className="mt-4 overflow-x-auto font-mono text-[12.5px] leading-relaxed text-muted-foreground">
{`const neeraj = {
  role:     "Software Engineer",
  stack:    ["Python", "React", "TypeScript", "Node"],
  focus:    ["Full-Stack", "AI/ML", "Cybersecurity"],
  cgpa:     8.11,
  status:   "open to work",
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}