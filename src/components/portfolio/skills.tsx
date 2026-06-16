import { Section } from "./section";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  BookOpen,
} from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "Java", "C", "JavaScript"],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Python", "REST APIs", "Node"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Docker"],
  },
  {
    icon: BookOpen,
    title: "Core Concepts",
    items: ["DSA", "OOP", "DBMS", "OS", "Networks"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I use to ship"
      description="A focused stack — favoring depth over breadth — across the modern web and data stack."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, items }) => (
          <div
            key={title}
            data-reveal
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/70"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="font-display font-semibold text-foreground">{title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((it) => (
                <span
                  key={it}
                  className="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}