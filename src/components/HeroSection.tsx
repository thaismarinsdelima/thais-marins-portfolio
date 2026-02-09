import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import { useLanguage } from "@/i18n/LanguageContext";
import thaisPhoto from "@/assets/thais-photo.png";

const HeroSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: 0.4 + i * 0.05,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  const nameLetters = "Thais".split("");

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-primary blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-neon-soft blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-primary blur-[130px]"
        />
      </div>

      <FloatingParticles />

      {/* Grid overlay */}
      <motion.div
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_75%)]" />

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative z-10 max-w-6xl mx-auto w-full"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="mb-8"
            >
              <motion.span
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(var(--neon-glow) / 0.2)" }}
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-heading font-medium tracking-widest uppercase border border-primary/20 rounded-full text-primary/80 bg-primary/5 cursor-default transition-all duration-300"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {t.hero.badge}
              </motion.span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t.hero.greeting}
              </motion.span>
              <span className="inline-flex" style={{ perspective: "500px" }}>
                {nameLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="gradient-text inline-block"
                    whileHover={{
                      scale: 1.15,
                      textShadow: "0 0 30px hsl(var(--neon-glow) / 0.5)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto md:mx-0 mb-4 leading-relaxed"
            >
              {t.hero.subtitle1}
              <motion.span className="neon-text-subtle font-medium" whileHover={{ textShadow: "0 0 20px hsl(var(--neon-glow) / 0.6)" }}>
                {t.hero.quality}
              </motion.span>,
              <motion.span className="neon-text-subtle font-medium" whileHover={{ textShadow: "0 0 20px hsl(var(--neon-glow) / 0.6)" }}>
                {t.hero.product}
              </motion.span>{t.hero.and}
              <motion.span className="neon-text-subtle font-medium" whileHover={{ textShadow: "0 0 20px hsl(var(--neon-glow) / 0.6)" }}>
                {t.hero.ai}
              </motion.span>{t.hero.subtitleEnd}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-base text-muted-foreground/70 max-w-xl mx-auto md:mx-0 mb-12 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="neon" size="xl" onClick={scrollToProjects}>
                  {t.hero.cta}
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="neon-outline"
                  size="xl"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t.hero.ctaAbout}
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative order-1 md:order-2 flex-shrink-0"
          >
            {/* Glow behind photo */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[-20px] rounded-full bg-primary/20 blur-[40px]"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute inset-[-30px] rounded-full bg-neon-soft/15 blur-[60px]"
            />

            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(var(--neon-glow) / 0.4)" }}
              transition={{ duration: 0.3 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_20px_hsl(var(--neon-glow)/0.2)]"
            >
              <img
                src={thaisPhoto}
                alt="Thais - Tech professional specializing in AI & Automation"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle overlay for blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer group"
            onClick={scrollToProjects}
          >
            <motion.div
              className="p-2 rounded-full border border-muted-foreground/20 text-muted-foreground/40 group-hover:border-primary/40 group-hover:text-primary/60 group-hover:shadow-[0_0_15px_hsl(var(--neon-glow)/0.2)] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
