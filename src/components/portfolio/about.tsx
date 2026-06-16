import { GraduationCap, Sparkles, Target } from "lucide-react";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer with a builder's mindset" description="A glimpse into who I am, what drives me, and what I'm working toward.">
      <div className="grid gap-6 md:grid-cols-3">
        <div data-reveal className="glass rounded-2xl p-6 md:col-span-2">
          <p className="text-balance text-base leading-relaxed text-muted-foreground">
            I'm a final-year <span className="text-foreground">B.Tech Computer Science</span> student passionate about software development, problem solving, web development, artificial intelligence, and cybersecurity. I enjoy building practical solutions that solve real-world problems and continuously sharpen my craft through projects, internships, and competitive programming.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Target, label: "Problem-first thinking" },
              { icon: Sparkles, label: "Polished, shipped UX" },
              { icon: GraduationCap, label: "Always learning" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-lg border border-border bg-card/40 px-3 py-2 text-sm text-foreground">
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="glass rounded-2xl p-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Education</span>
          <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
            B.Tech, Computer Science & Technology
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">Final year · Graduating 2026</p>
          <div className="mt-5 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">CGPA</p>
              <p className="font-display text-4xl font-bold text-gradient">8.11</p>
            </div>
            <div className="h-16 w-16 rounded-full border border-border bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>
        </div>
      </div>
    </Section>
  );
}