import { Section } from "./section";
import { Award } from "lucide-react";

const certs = [
  { name: "Cisco Python Essentials", issuer: "Cisco Networking Academy" },
  { name: "Programming & Technology Certifications", issuer: "Various" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continuous learning"
      description="Investing in the fundamentals — language, systems, and security."
    >
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {certs.map((c) => (
          <div key={c.name} data-reveal className="flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-primary/40">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
              <Award className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="truncate font-display font-semibold text-foreground">{c.name}</h3>
              <p className="text-xs text-muted-foreground">{c.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}