import { Section } from "./section";
import { Github } from "lucide-react";

// Pseudo-random but deterministic contribution grid
function makeGrid(weeks = 26) {
  const cells: number[] = [];
  let seed = 7;
  for (let i = 0; i < weeks * 7; i++) {
    seed = (seed * 9301 + 49297) % 233280;
    const r = seed / 233280;
    cells.push(r < 0.45 ? 0 : r < 0.7 ? 1 : r < 0.88 ? 2 : r < 0.97 ? 3 : 4);
  }
  return cells;
}

const levels = [
  "bg-muted/40",
  "bg-primary/25",
  "bg-primary/50",
  "bg-primary/75",
  "bg-primary",
];

export function GithubSection() {
  const cells = makeGrid(26);
  return (
    <Section
      id="github"
      eyebrow="Open Source"
      title="Coding consistently"
      description="A snapshot of my GitHub activity — projects, contributions and experiments."
    >
      <div data-reveal className="glass rounded-2xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
              <Github className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display font-semibold text-foreground">@neeraj-kumar-gaur</h3>
              <p className="text-xs text-muted-foreground">Last 6 months of activity</p>
            </div>
          </div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border bg-background/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
          >
            View profile →
          </a>
        </div>

        <div className="mt-6 overflow-x-auto">
          <div className="grid grid-flow-col gap-[3px]" style={{ gridTemplateRows: "repeat(7, 12px)" }}>
            {cells.map((lvl, i) => (
              <div
                key={i}
                className={`h-3 w-3 rounded-[3px] ${levels[lvl]} transition-colors`}
                title={`Level ${lvl}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
          <span>Less</span>
          {levels.map((l, i) => (
            <span key={i} className={`h-3 w-3 rounded-[3px] ${l}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </Section>
  );
}