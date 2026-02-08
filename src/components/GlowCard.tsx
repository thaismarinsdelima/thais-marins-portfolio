import { useRef, ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  const glowX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const glowY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const glowLeft = useTransform(glowX, [-0.5, 0.5], ["0%", "100%"]);
  const glowTop = useTransform(glowY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
    >
      {/* Dynamic glow that follows cursor */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
        style={{
          left: glowLeft,
          top: glowTop,
          background: `radial-gradient(300px circle, hsl(var(--neon-glow) / 0.2), transparent 60%)`,
        }}
      />

      {/* Border glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/5 group-hover:to-primary/20 transition-all duration-700 -z-10" />

      {children}
    </motion.div>
  );
};

export default GlowCard;
