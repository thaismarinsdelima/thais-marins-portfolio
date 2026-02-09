import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { motion } from "framer-motion";
import { Bot, Target, RefreshCw, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Bot, Target, RefreshCw, Globe];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-5xl mx-auto">
        <AnimatedSection type="blur">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-heading font-medium tracking-widest uppercase text-primary/60 mb-4">
              {t.skills.label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight">
              {t.skills.title}<span className="gradient-text">{t.skills.titleHighlight}</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {t.skills.items.map((skill, index) => {
            const Icon = icons[index];
            return (
              <AnimatedSection key={index} delay={index * 0.12} type="scale">
                <GlowCard className="rounded-2xl h-full">
                  <motion.div
                    className="glass-card rounded-2xl p-8 h-full relative overflow-hidden group cursor-default"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700 ease-out" />
                    <div className="absolute top-0 left-0 h-0 w-px bg-primary group-hover:h-full transition-all duration-700 ease-out delay-100" />

                    <div className="relative z-10">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300"
                        whileHover={{
                          scale: 1.15,
                          boxShadow: "0 0 30px hsl(var(--neon-glow) / 0.3)",
                          backgroundColor: "hsl(var(--primary) / 0.2)",
                        }}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:neon-text-subtle transition-all duration-300">
                        {skill.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                </GlowCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
