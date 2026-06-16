import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, MousePointer2 } from "lucide-react";

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Python Developer",
  "AI / ML Enthusiast",
];

function useTypewriter(words: string[], speed = 70, hold = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), hold);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(() => {
      setText((cur) =>
        deleting ? cur.slice(0, -1) : word.slice(0, cur.length + 1),
      );
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, hold]);

  return text;
}

export function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute -left-20 top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-20 top-60 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-32 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="animate-reveal inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to full-time SWE roles · 2026 Batch
          </span>

          <h1
            className="animate-reveal mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
            style={{ animationDelay: "60ms" }}
          >
            Neeraj Kumar Gaur
            <br />
            <span className="text-gradient">building software that ships.</span>
          </h1>

          <div
            className="animate-reveal mt-6 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground sm:text-base"
            style={{ animationDelay: "100ms" }}
          >
            <span className="text-primary">&gt;</span>
            <span className="text-foreground">{role}</span>
            <span className="inline-block h-4 w-[2px] translate-y-0.5 bg-primary animate-glow-pulse" />
          </div>

          <p
            className="animate-reveal mt-5 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            I craft practical, reliable software across web, AI and cybersecurity —
            from explainable ML systems to full-stack platforms shipped end-to-end.
          </p>

          {/* Quick facts strip */}
          <div
            className="animate-reveal mt-6 flex flex-wrap items-center justify-center gap-2 text-xs"
            style={{ animationDelay: "180ms" }}
          >
            {["CGPA 8.11", "B.Tech CSE · 2026", "2× Intern"].map((f) => (
              <span key={f} className="rounded-full border border-border bg-card/40 px-3 py-1 font-mono text-muted-foreground">
                {f}
              </span>
            ))}
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card/40 px-3 py-1 font-mono text-muted-foreground">
              <MapPin className="h-3 w-3" /> India · Remote
            </span>
          </div>

          <div
            className="animate-reveal mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "220ms" }}
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
            style={{ animationDelay: "280ms" }}
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
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 opacity-60 blur-md"
            />
            <div className="glass-strong relative rounded-2xl p-5 shadow-elegant">
              <div className="flex items-center gap-1.5 border-b border-border/60 pb-3">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">~/neeraj.ts</span>
                <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-muted-foreground">TypeScript</span>
              </div>
              <pre className="mt-4 overflow-x-auto font-mono text-[12.5px] leading-relaxed">
<code>
<span className="text-muted-foreground">{`// who am i`}</span>{"\n"}
<span className="text-primary">const</span> <span className="text-accent">neeraj</span> = {"{"}{"\n"}
{"  "}<span className="text-foreground">role</span>:{"     "}<span className="text-emerald-400">"Software Engineer"</span>,{"\n"}
{"  "}<span className="text-foreground">stack</span>:{"    "}[<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"TypeScript"</span>, <span className="text-emerald-400">"Node"</span>],{"\n"}
{"  "}<span className="text-foreground">focus</span>:{"    "}[<span className="text-emerald-400">"Full-Stack"</span>, <span className="text-emerald-400">"AI/ML"</span>, <span className="text-emerald-400">"Cybersecurity"</span>],{"\n"}
{"  "}<span className="text-foreground">cgpa</span>:{"     "}<span className="text-amber-400">8.11</span>,{"\n"}
{"  "}<span className="text-foreground">status</span>:{"   "}<span className="text-emerald-400">"open to work"</span> <span className="inline-block translate-y-0.5 ml-1 h-2 w-2 rounded-full bg-emerald-400 animate-glow-pulse" />,{"\n"}
{"}"};
</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-14 hidden justify-center sm:flex">
          <a href="#about" className="group inline-flex flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground">
            <MousePointer2 className="h-4 w-4 animate-float" />
            <span className="font-mono uppercase tracking-[0.2em]">Scroll</span>
          </a>
        </div>
      </div>
    </section>
  );
}