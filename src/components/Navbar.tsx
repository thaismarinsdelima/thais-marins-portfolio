import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-heading font-bold text-lg neon-text-subtle hover:neon-text transition-all duration-300"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          T.
        </a>

        <div className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-heading text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile: minimal dots menu */}
        <div className="sm:hidden flex gap-1.5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-primary transition-colors duration-300"
              aria-label={item.label}
            />
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
