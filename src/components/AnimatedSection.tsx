import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "scale" | "blur";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  type?: AnimationType;
}

const hiddenVariants: Record<AnimationType, Variant> = {
  "fade-up": { opacity: 0, y: 50 },
  "fade-left": { opacity: 0, x: -60 },
  "fade-right": { opacity: 0, x: 60 },
  scale: { opacity: 0, scale: 0.85 },
  blur: { opacity: 0, filter: "blur(10px)" },
};

const visibleBase: Variant = {
  opacity: 1,
  y: 0,
  x: 0,
  scale: 1,
  filter: "blur(0px)",
};

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  type = "fade-up",
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: hiddenVariants[type],
        visible: {
          ...visibleBase,
          transition: {
            duration: 0.8,
            delay,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
