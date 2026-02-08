import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Task Automator",
    description:
      "An intelligent automation platform that uses AI to streamline repetitive workflows, reducing manual effort by 70%.",
    tech: ["Lovable", "AI", "Automation", "React"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Quality Dashboard",
    description:
      "Real-time QA metrics dashboard with automated test reporting, defect tracking, and predictive quality analytics.",
    tech: ["Lovable", "Data Viz", "TypeScript", "API"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Smart Product Planner",
    description:
      "AI-assisted product planning tool that helps teams prioritize features, estimate effort, and track delivery with intelligent insights.",
    tech: ["Lovable", "AI", "Product", "Agile"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="inline-block text-xs font-heading font-medium tracking-widest uppercase text-primary/60 mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
            Built with <span className="gradient-text">Lovable</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mb-16">
            A selection of projects exploring AI, automation, and modern web development.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.15}>
              <div className="group relative glass-card-hover rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                {/* Glow effect behind card */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:neon-text-subtle transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-heading font-medium rounded-full border border-primary/20 text-primary/70 bg-primary/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="neon" size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="neon-outline" size="sm" className="flex-1" asChild>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
