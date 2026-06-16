import { useEffect, useRef, useState } from "react";
import { Briefcase, Code, Layers } from "lucide-react";

const stats = [
  { icon: Code, value: 4, suffix: "+", label: "Projects Completed" },
  { icon: Layers, value: 15, suffix: "+", label: "Technologies Used" },
  { icon: Briefcase, value: 2, suffix: "", label: "Internships" },
];

function useCount(target: number, run: boolean, ms = 1200) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, ms]);
  return n;
}

function StatCard({ stat }: { stat: typeof stats[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCount(stat.value, visible);
  const Icon = stat.icon;
  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center">
      <Icon className="mx-auto h-5 w-5 text-primary" />
      <p className="mt-3 font-display text-4xl font-bold text-gradient sm:text-5xl">
        {n}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}