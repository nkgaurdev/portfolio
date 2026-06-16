import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Neeraj Kumar Gaur · Built with React + TypeScript
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a aria-label="Email" href="mailto:neeraj@example.com" className="transition-colors hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}