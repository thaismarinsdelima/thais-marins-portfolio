import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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

      {/* Section background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/3 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <AnimatedSection type="fade-up">
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
            <AnimatedSection key={project.title} delay={index * 0.15} type="scale">
              <GlowCard className="rounded-2xl h-full">
                <motion.div
                  className="glass-card rounded-2xl p-6 sm:p-8 h-full flex flex-col group relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-neon-soft/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />

                  {/* Animated line at top */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />

                  <div className="flex-1 relative z-10">
                    <motion.h3
                      className="text-xl font-heading font-semibold mb-3 text-foreground transition-all duration-300"
                      whileHover={{
                        textShadow: "0 0 20px hsl(var(--neon-glow) / 0.4)",
                      }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          whileHover={{
                            scale: 1.08,
                            borderColor: "hsl(var(--primary) / 0.5)",
                            boxShadow: "0 0 12px hsl(var(--neon-glow) / 0.15)",
                          }}
                          className="px-3 py-1 text-xs font-heading font-medium rounded-full border border-primary/20 text-primary/70 bg-primary/5 transition-all duration-200 cursor-default"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 relative z-10">
                    <motion.div className="flex-1" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button variant="neon" size="sm" className="w-full" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div className="flex-1" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Button variant="neon-outline" size="sm" className="w-full" asChild>
                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
