import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedLine } from '../ui/AnimatedText';
import { BookOpen, Award, Heart } from 'lucide-react';

const coursework = [
  'Object-Oriented Programming',
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Discrete Mathematics',
  'Entrepreneurship',
];

const achievements = [
  'Awarded for academic excellence based on IIT entrance exam performance and early B.Tech academic results',
];

const interests = [
  'Cricket',
  'Chess',
];

export const AdditionalInfoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="additional" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">Additional Info</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            More <span className="gradient-text">About Me</span>
          </h2>
          <AnimatedLine delay={0.3} />
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ 
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ 
              y: -8,
              rotateX: -2,
              transition: { duration: 0.3 }
            }}
            className="glass-card p-5 sm:p-6 hover-3d preserve-3d h-full"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <BookOpen size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Coursework</h3>
            </div>
            <ul className="space-y-2">
              {coursework.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-muted-foreground text-sm flex items-start gap-2.5 text-readable hover:text-foreground transition-colors duration-300"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span className="flex-1">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ 
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ 
              y: -8,
              rotateX: -2,
              transition: { duration: 0.3 }
            }}
            className="glass-card p-5 sm:p-6 hover-3d preserve-3d h-full"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="p-2.5 sm:p-3 rounded-xl bg-secondary/10 text-secondary flex-shrink-0">
                <Award size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Achievements</h3>
            </div>
            <ul className="space-y-2">
              {achievements.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-muted-foreground text-sm flex items-start gap-2.5 text-readable hover:text-foreground transition-colors duration-300"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="flex-1">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ 
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ 
              y: -8,
              rotateX: -2,
              transition: { duration: 0.3 }
            }}
            className="glass-card p-5 sm:p-6 hover-3d preserve-3d h-full"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="p-2.5 sm:p-3 rounded-xl bg-accent/10 text-accent flex-shrink-0">
                <Heart size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -4,
                    rotateY: 5,
                    boxShadow: '0 8px 20px hsl(320 90% 60% / 0.3)',
                    transition: { duration: 0.3 }
                  }}
                  className="px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm text-sm font-semibold
                    hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300 preserve-3d cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

