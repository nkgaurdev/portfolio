import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Section } from "./section";

export function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message ready to send", {
        description: "Connect your email service to deliver this to your inbox.",
      });
      (e.target as HTMLFormElement).reset();
    }, 700);
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      description="Open to full-time roles, internships and freelance collaborations. The fastest way to reach me is email."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div data-reveal className="glass rounded-2xl p-6 lg:col-span-2">
          <h3 className="font-display text-lg font-semibold text-foreground">Get in touch</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            I usually reply within 24 hours.
          </p>
          <div className="mt-6 space-y-4">
            <a href="mailto:neeraj@example.com" className="flex items-center gap-3 rounded-lg border border-border bg-background/50 p-3 transition-colors hover:bg-muted">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">neeraj@example.com</span>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-background/50 p-3 transition-colors hover:bg-muted">
              <Linkedin className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">linkedin.com/in/neeraj</span>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg border border-border bg-background/50 p-3 transition-colors hover:bg-muted">
              <Github className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">github.com/neeraj-kumar-gaur</span>
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-background/50 p-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">India · Open to relocate</span>
            </div>
          </div>
        </div>

        <form data-reveal onSubmit={onSubmit} className="glass rounded-2xl p-6 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-muted-foreground">Name</label>
              <input
                id="name"
                required
                className="mt-1.5 w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-muted-foreground">Email</label>
              <input
                id="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="subject" className="block text-xs font-medium text-muted-foreground">Subject</label>
            <input
              id="subject"
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Opportunity, collaboration, or hello"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-xs font-medium text-muted-foreground">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              className="mt-1.5 w-full resize-none rounded-lg border border-border bg-background/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="Tell me about the role or project..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}