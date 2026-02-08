import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-soft/3 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-heading font-medium tracking-widest uppercase border border-primary/20 rounded-full text-primary/80 bg-primary/5">
            Quality · Product · AI · Automation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Thais</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Building intelligent solutions at the intersection of
          <span className="neon-text-subtle font-medium"> Quality</span>,
          <span className="neon-text-subtle font-medium"> Product</span>, and
          <span className="neon-text-subtle font-medium"> AI</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-base text-muted-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Tech professional with a strong background in QA, agile processes, and product development — 
          now focused on leveraging AI and automation to create smarter, faster, and more impactful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="neon" size="xl" onClick={scrollToProjects}>
            View My Projects
          </Button>
          <Button
            variant="neon-outline"
            size="xl"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            About Me
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground/40 cursor-pointer hover:text-primary/60 transition-colors"
            onClick={scrollToProjects}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
