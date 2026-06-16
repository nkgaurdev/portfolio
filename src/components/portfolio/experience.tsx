import { Section } from "./section";
import { Building2, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    company: "Bharat Electronics Limited (BEL)",
    location: "Bengaluru",
    role: "Network & Cyber Security Intern",
    bullets: [
      "Studied cybersecurity operations and network security concepts.",
      "Worked with threat intelligence methodologies.",
      "Learned malware analysis and incident response workflows.",
      "Explored security monitoring and cybersecurity best practices.",
    ],
  },
  {
    icon: Building2,
    company: "Rail Wheel Factory (RWF)",
    location: "Bengaluru",
    role: "Web Development Intern",
    bullets: [
      "Worked on a Predictive Maintenance Monitoring System concept.",
      "Studied web application architecture and frontend development.",
      "Built web-based interfaces for industrial applications.",
      "Worked with HTML, CSS, JavaScript, Git and GitHub.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've contributed"
      description="Internships that grounded my engineering instincts in real-world systems."
    >
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div
          aria-hidden
          className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-1/2"
        />

        <div className="space-y-10">
          {items.map((it, idx) => (
            <div
              key={it.company}
              data-reveal
              className={`relative flex flex-col gap-4 sm:flex-row ${
                idx % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Dot */}
              <span className="absolute left-4 top-3 -ml-[7px] grid h-3.5 w-3.5 place-items-center rounded-full bg-primary shadow-glow sm:left-1/2 sm:-ml-[7px]" />

              <div className={`pl-10 sm:w-1/2 sm:pl-0 ${idx % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                <div className="glass rounded-2xl p-5 text-left">
                  <div className="flex items-center gap-2 text-primary">
                    <it.icon className="h-4 w-4" />
                    <span className="font-mono text-xs uppercase tracking-wider">Internship</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                    {it.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {it.company} · {it.location}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}