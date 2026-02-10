import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  const links = [
    { icon: Github, label: t.contact.links.github, href: "https://github.com/thaismarinsdelima", description: t.contact.links.githubDesc },
    { icon: Linkedin, label: t.contact.links.linkedin, href: "https://www.linkedin.com/in/thaismarins/", description: t.contact.links.linkedinDesc },
    { icon: Mail, label: t.contact.links.email, href: "mailto:thais@presencadigitaltp.com", description: t.contact.links.emailDesc },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-24" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/4 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <AnimatedSection type="blur">
          <span className="inline-block text-xs font-heading font-medium tracking-widest uppercase text-primary/60 mb-4">
            {t.contact.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
            {t.contact.title}<span className="gradient-text">{t.contact.titleHighlight}</span>{t.contact.titleEnd}
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-12">{t.contact.subtitle}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} type="fade-up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {links.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button variant="neon-outline" size="lg" className="group w-full sm:w-auto" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <motion.span
                      className="inline-flex"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <link.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                    </motion.span>
                    {link.label}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} type="fade-up">
          <div className="section-divider mb-8" />
          <motion.p
            className="text-sm text-muted-foreground/50 font-heading"
            whileHover={{ color: "hsl(var(--muted-foreground) / 0.7)" }}
            transition={{ duration: 0.3 }}
          >
            © {new Date().getFullYear()} Thais — {t.contact.footer}{" "}
            <motion.span
              className="text-primary/50 inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ♥
            </motion.span>{" "}
            {t.contact.footerAnd}{" "}
            <a
              href="https://lovable.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/50 hover:text-primary hover:underline transition-colors"
            >
              Lovable
            </a>
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
