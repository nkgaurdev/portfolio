import { Section } from "./section";
import { Code2, Trophy, Zap, Target, ExternalLink, Flame } from "lucide-react";

const platforms = [
  {
    name: "LeetCode",
    handle: "@neerajgaur",
    solved: 350,
    rating: 1750,
    badge: "Knight",
    color: "from-amber-500/20 to-orange-500/10",
    accent: "text-amber-400",
    href: "https://leetcode.com/",
  },
  {
    name: "GeeksforGeeks",
    handle: "@neerajgaur",
    solved: 220,
    rating: 1480,
    badge: "3★ Coder",
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "text-emerald-400",
    href: "https://geeksforgeeks.org/",
  },
  {
    name: "CodeChef",
    handle: "@neerajgaur",
    solved: 120,
    rating: 1620,
    badge: "3★",
    color: "from-violet-500/20 to-fuchsia-500/10",
    accent: "text-violet-400",
    href: "https://codechef.com/",
  },
];

const topics = [
  { label: "Arrays & Strings", value: 92 },
  { label: "Dynamic Programming", value: 78 },
  { label: "Graphs & Trees", value: 84 },
  { label: "System Design", value: 65 },
];

export function DSA() {
  const total = platforms.reduce((a, p) => a + p.solved, 0);

  return (
    <Section
      id="dsa"
      eyebrow="Problem Solving"
      title="DSA & Competitive Programming"
      description="Consistent practice across platforms — building intuition for clean, optimal solutions."
    >
      {/* Top metric strip */}
      <div className="grid gap-4 sm:grid-cols-3" data-reveal>
        <div className="glass relative overflow-hidden rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">{total}+</div>
              <div className="text-xs text-muted-foreground">Problems Solved</div>
            </div>
          </div>
        </div>
        <div className="glass relative overflow-hidden rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">120<span className="text-muted-foreground text-base"> days</span></div>
              <div className="text-xs text-muted-foreground">Active Streak</div>
            </div>
          </div>
        </div>
        <div className="glass relative overflow-hidden rounded-2xl p-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-foreground">Top 8%</div>
              <div className="text-xs text-muted-foreground">Contest Percentile</div>
            </div>
          </div>
        </div>
      </div>

      {/* Platforms */}
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {platforms.map((p, i) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            data-reveal
            style={{ transitionDelay: `${i * 60}ms` }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
          >
            <div
              aria-hidden
              className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.color} blur-2xl opacity-60 transition-opacity group-hover:opacity-100`}
            />
            <div className="relative flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Code2 className={`h-4 w-4 ${p.accent}`} />
                  <span className="font-display text-base font-semibold">{p.name}</span>
                </div>
                <div className="mt-0.5 font-mono text-[11px] text-muted-foreground">{p.handle}</div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
            </div>

            <div className="relative mt-5 flex items-end justify-between">
              <div>
                <div className="font-display text-3xl font-bold tracking-tight text-foreground">
                  {p.solved}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">solved</div>
              </div>
              <div className="text-right">
                <div className={`font-mono text-sm font-semibold ${p.accent}`}>{p.rating}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{p.badge}</div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Topic mastery */}
      <div className="mt-6 rounded-2xl border border-border bg-card/40 p-6" data-reveal>
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Topic Mastery
          </span>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {topics.map((t) => (
            <div key={t.label}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground">{t.label}</span>
                <span className="font-mono text-xs text-muted-foreground">{t.value}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: `${t.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}