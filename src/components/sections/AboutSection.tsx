import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TiltCard } from '../ui/TiltCard';
import { AnimatedLine } from '../ui/AnimatedText';
import { Code, Palette, Layers, Zap } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Projects Completed', value: '6+' },
    { label: 'Technologies Mastered', value: '15+' },
    { label: 'Years Learning', value: '3+' },
    { label: 'CGPA', value: '6.0' },
  ];

  const highlights = [
    { icon: Code, title: 'Clean Architecture', desc: 'Structured, scalable application design' },
    { icon: Palette, title: 'User-Centric', desc: 'Focus on real-world usability' },
    { icon: Layers, title: 'Full Stack', desc: 'Frontend, backend & mobile development' },
    { icon: Zap, title: 'Secure Systems', desc: 'Role-based access & authentication' },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">01 — About</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Crafting Digital <span className="gradient-text">Excellence</span>
          </h2>
          <AnimatedLine delay={0.3} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center">
          {/* Left - About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground text-readable"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I am a Computer Science undergraduate at Mahindra University, currently pursuing a 
              Bachelor of Technology in Computer Science and Engineering.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground text-readable"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I have hands-on experience in web and mobile application development, working across 
              frontend, backend, and system design. My work focuses on structured architecture, 
              secure authentication, and scalable application flows.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground text-readable"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I enjoy building applications that solve real-world problems, especially systems involving 
              role-based access, usability for non-technical users, and clean UI/UX backed by solid 
              engineering principles.
            </motion.p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -4,
                    transition: { duration: 0.3 }
                  }}
                  className="text-center hover-3d-subtle p-4 sm:p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1.5">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-6 perspective-2000">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, rotateX: 20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.3 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  y: -8,
                  rotateX: -2,
                  transition: { duration: 0.3 }
                }}
                className="group preserve-3d"
              >
                <TiltCard className="h-full hover-3d">
                  <div className="flex flex-col items-start">
                    <motion.div 
                      className="p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:shadow-glow-sm transition-all duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <item.icon size={24} />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm text-readable">{item.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
