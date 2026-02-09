import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Zap } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Cpu, Sparkles, Zap];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-5xl mx-auto">
        <AnimatedSection type="fade-up">
          <span className="inline-block text-xs font-heading font-medium tracking-widest uppercase text-primary/60 mb-4">
            {t.about.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-8 tracking-tight">
            {t.about.title}<span className="gradient-text">{t.about.titleHighlight}</span>{t.about.titleEnd}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-5">
            <AnimatedSection delay={0.15} type="fade-left">
              <p className="text-lg text-secondary-foreground leading-relaxed">{t.about.p1}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.25} type="fade-left">
              <p className="text-base text-muted-foreground leading-relaxed">{t.about.p2}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.35} type="fade-left">
              <p className="text-base text-muted-foreground leading-relaxed">{t.about.p3}</p>
            </AnimatedSection>
          </div>

          <div className="md:col-span-2 space-y-4">
            {t.about.highlights.map((item, index) => {
              const Icon = icons[index];
              return (
                <AnimatedSection key={index} delay={0.2 + index * 0.15} type="fade-right">
                  <GlowCard className="rounded-xl">
                    <motion.div
                      className="glass-card rounded-xl p-5 group cursor-default"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300"
                          whileHover={{
                            boxShadow: "0 0 25px hsl(var(--neon-glow) / 0.3)",
                            scale: 1.1,
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.div>
                        <div>
                          <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:neon-text-subtle transition-all duration-300">
                            {item.label}
                          </h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </GlowCard>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
