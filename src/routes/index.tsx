import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Stats } from "@/components/portfolio/stats";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { GithubSection } from "@/components/portfolio/github-section";
import { DSA } from "@/components/portfolio/dsa";
import { Certifications } from "@/components/portfolio/certifications";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { useReveal } from "@/hooks/use-theme";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neeraj Kumar Gaur — Software Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Neeraj Kumar Gaur — Aspiring Software Engineer, Python Developer, and Full-Stack & AI Enthusiast. Projects in AI, web, and systems.",
      },
      { name: "keywords", content: "Neeraj Kumar Gaur, Software Engineer, Python Developer, Full Stack, React, AI, Portfolio" },
      { property: "og:title", content: "Neeraj Kumar Gaur — Software Engineer Portfolio" },
      { property: "og:description", content: "Aspiring Software Engineer · Python · Full-Stack · AI. Projects, experience and contact." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Neeraj Kumar Gaur — Software Engineer" },
      { name: "twitter:description", content: "Portfolio · Projects · Experience · Contact" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Neeraj Kumar Gaur",
          jobTitle: "Software Engineer",
          description:
            "Aspiring Software Engineer, Python Developer, and Full-Stack & AI Enthusiast.",
          knowsAbout: [
            "Python", "Java", "JavaScript", "React", "TypeScript",
            "Artificial Intelligence", "Cybersecurity", "Databases",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <DSA />
        <GithubSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}
