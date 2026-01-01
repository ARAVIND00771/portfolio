import { motion, useScroll, useTransform } from 'framer-motion';
import { Scene3D } from '../three/Scene3D';
import { MagneticButton } from '../ui/MagneticButton';
import { AnimatedText, AnimatedLine } from '../ui/AnimatedText';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="container-custom relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          {/* Tagline - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 sm:mb-6"
          >
            <motion.span 
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-mono text-primary border border-primary/30 rounded-full backdrop-blur-sm hover:border-primary/50 hover:shadow-glow-sm transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span className="hidden sm:inline">Computer Science Engineering Undergraduate | Full-Stack & App Developer | Software Developer</span>
              <span className="sm:hidden">CS Undergrad | Full-Stack Developer</span>
            </motion.span>
          </motion.div>

          {/* Main heading - Responsive */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
            <AnimatedText delay={0.4}>
              <span className="block">Hi, I'm</span>
            </AnimatedText>
            <AnimatedText delay={0.6}>
              <motion.span 
                className="block gradient-text text-glow"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                Kasoju Aravind
              </motion.span>
            </AnimatedText>
          </h1>

          <AnimatedLine delay={1.0} />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-foreground/90 mt-6 sm:mt-8 mb-8 sm:mb-12 max-w-2xl mx-auto text-readable-lg px-4"
          >
            Building <span className="text-primary font-semibold">scalable applications</span> with clean architecture 
            and real-world usability.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <MagneticButton variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </MagneticButton>
            <MagneticButton variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="flex gap-4 sm:gap-6 justify-center mt-8 sm:mt-12"
          >
            {[
              { icon: Github, href: 'https://github.com/aravind00771', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/aravindkasoju', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:kasojuaravind662@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm font-mono">Scroll</span>
          <ArrowDown size={20} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
