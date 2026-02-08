import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    description: "Check out my code",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    description: "Let's connect",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@thais.dev",
    description: "Get in touch",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6">
      <div className="section-divider mb-24" />

      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <span className="inline-block text-xs font-heading font-medium tracking-widest uppercase text-primary/60 mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
            Let's <span className="gradient-text">build something</span> together
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-12">
            I'm always open to new opportunities, collaborations, and conversations about AI, automation, and tech.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {links.map((link) => (
              <Button
                key={link.label}
                variant="neon-outline"
                size="lg"
                className="group"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="section-divider mb-8" />
          <p className="text-sm text-muted-foreground/50 font-heading">
            © {new Date().getFullYear()} Thais — Built with{" "}
            <span className="text-primary/50">♥</span> and{" "}
            <a
              href="https://lovable.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/50 hover:text-primary transition-colors"
            >
              Lovable
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
