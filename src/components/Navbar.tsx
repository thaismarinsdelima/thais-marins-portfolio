import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = ["contact", "skills", "projects", "about"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
      if (window.scrollY < 200) setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/60 backdrop-blur-2xl border-b border-primary/5 shadow-[0_4px_30px_hsl(var(--neon-glow)/0.03)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="font-heading font-bold text-xl neon-text-subtle transition-all duration-300 relative"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          whileHover={{
            textShadow: "0 0 20px hsl(var(--neon-glow) / 0.6), 0 0 40px hsl(var(--neon-glow) / 0.3)",
            scale: 1.1,
          }}
          whileTap={{ scale: 0.95 }}
        >
          T.
        </motion.a>

        <div className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.a
                key={item.label}
                href={item.href}
                className={`text-sm font-heading relative group transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                    isActive ? "w-full shadow-[0_0_8px_hsl(var(--neon-glow)/0.4)]" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Mobile navigation */}
        <div className="sm:hidden flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.a
                key={item.label}
                href={item.href}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-primary shadow-[0_0_8px_hsl(var(--neon-glow)/0.5)]"
                    : "bg-muted-foreground/30 hover:bg-primary/60"
                }`}
                aria-label={item.label}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.8 }}
              />
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
