import AnimatedSection from "@/components/AnimatedSection";
import { Bot, Target, RefreshCw, Globe } from "lucide-react";

const skills = [
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Leveraging artificial intelligence and automation tools to build smarter workflows, reduce manual tasks, and create intelligent digital solutions.",
  },
  {
    icon: Target,
    title: "Product & Quality",
    description:
      "Ensuring product excellence through strategic QA, test automation, and a relentless focus on delivering reliable, user-centric experiences.",
  },
  {
    icon: RefreshCw,
    title: "Agile & Processes",
    description:
      "Driving efficient delivery through agile methodologies, continuous improvement, and lean processes that prioritize value and speed.",
  },
  {
    icon: Globe,
    title: "Web & Digital Solutions",
    description:
      "Building modern, responsive web applications using cutting-edge technologies and design systems that scale beautifully.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-heading font-medium tracking-widest uppercase text-primary/60 mb-4">
              Focus Areas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight">
              What I <span className="gradient-text">bring to the table</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.title} delay={index * 0.12}>
              <div className="group glass-card-hover rounded-2xl p-8 h-full relative overflow-hidden">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(var(--neon-glow)/0.15)] transition-all duration-300">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
