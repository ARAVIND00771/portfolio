import { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const MagneticButton = ({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary' 
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:shadow-glow-md',
    secondary: 'bg-secondary text-secondary-foreground hover:shadow-glow-accent',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-glow-sm',
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      className={`
        relative px-8 py-4 rounded-full font-semibold text-lg
        transition-all duration-300 overflow-hidden
        ${variants[variant]}
        ${className}
      `}
    >
      <motion.span
        className="relative z-10 flex items-center gap-2"
        animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
        transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      >
        {children}
      </motion.span>
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0"
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};
