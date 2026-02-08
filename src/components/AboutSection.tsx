import AnimatedSection from "@/components/AnimatedSection";
import { Cpu, Sparkles, Zap } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    label: "AI & Automation",
    description: "Building intelligent workflows and AI-powered tools",
  },
  {
    icon: Sparkles,
    label: "Quality & Product",
    description: "Driving product excellence through strategic QA",
  },
  {
    icon: Zap,
    label: "Agile & Innovation",
    description: "Fast iterations with a focus on real impact",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <span className="inline-block text-xs font-heading font-medium tracking-widest uppercase text-primary/60 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-8 tracking-tight">
            Where <span className="gradient-text">technology</span> meets purpose
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-5">
              <p className="text-lg text-secondary-foreground leading-relaxed">
                I'm a tech professional with deep roots in Quality Assurance, product development, and agile methodologies. 
                Over the years, I've worked across complex systems, ensuring that digital products not only function flawlessly 
                but also deliver meaningful experiences.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Today, my focus has shifted toward the future — AI, automation, and intelligent digital solutions. I believe 
                that the best products are built at the intersection of technical excellence and human-centered thinking. 
                I'm passionate about leveraging cutting-edge tools to solve real problems, streamline processes, and create 
                solutions that scale.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Whether it's building AI-powered prototypes with Lovable, designing automated testing pipelines, or shaping 
                product strategy — I bring a blend of analytical rigor and creative curiosity to everything I do.
              </p>
            </div>

            <div className="md:col-span-2 space-y-4">
              {highlights.map((item, index) => (
                <AnimatedSection key={item.label} delay={0.3 + index * 0.1}>
                  <div className="glass-card-hover rounded-xl p-5 group">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">{item.label}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
