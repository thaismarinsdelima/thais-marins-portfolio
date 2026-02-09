import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const languages: { code: Language; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-xs font-heading font-medium">
      {languages.map((lang, index) => (
        <span key={lang.code} className="inline-flex items-center">
          <motion.button
            onClick={() => setLanguage(lang.code)}
            className={`relative px-2 py-1 rounded transition-all duration-300 cursor-pointer ${
              language === lang.code
                ? "text-primary"
                : "text-muted-foreground hover:text-primary/80"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {lang.label}
            {language === lang.code && (
              <motion.div
                layoutId="lang-indicator"
                className="absolute inset-0 rounded border border-primary/30 bg-primary/10 shadow-[0_0_12px_hsl(var(--neon-glow)/0.2)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{""}</span>
          </motion.button>
          {index < languages.length - 1 && (
            <span className="text-muted-foreground/30 select-none">|</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSelector;
