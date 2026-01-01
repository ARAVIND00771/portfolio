import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedLine } from '../ui/AnimatedText';

const skills = [
  { name: 'React.js', level: 85, color: 'from-primary to-secondary' },
  { name: 'React Native', level: 80, color: 'from-secondary to-accent' },
  { name: 'Python', level: 75, color: 'from-primary to-accent' },
  { name: 'Java', level: 70, color: 'from-accent to-primary' },
  { name: 'Firebase', level: 80, color: 'from-secondary to-primary' },
  { name: 'SQL / Oracle', level: 75, color: 'from-primary to-secondary' },
];

const programmingLanguages = [
  'C', 'Python', 'Java', 'HTML', 'CSS', 'SQL', 'Oracle'
];

const frameworks = [
  'React.js', 'React Native', 'Firebase Authentication', 'Firestore', 'REST APIs'
];

const tools = [
  'Git & GitHub', 'VS Code', 'Figma', 'Canva', 'MS Office 365'
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">02 — Skills</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <AnimatedLine delay={0.3} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left - Skill bars */}
          <div className="space-y-6 sm:space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-foreground"
            >
              Core Expertise
            </motion.h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  x: 8,
                  transition: { duration: 0.3 }
                }}
                className="group hover-3d-subtle p-4 sm:p-5 rounded-xl bg-card/20 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-foreground text-sm sm:text-base">{skill.name}</span>
                  <span className="text-primary font-mono font-bold text-sm sm:text-base">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted/50 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.5 + index * 0.1, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-glow-sm group-hover:shadow-glow-md transition-shadow duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Technology tags */}
          <div className="space-y-6 sm:space-y-8 lg:pt-0">
            {/* Programming Languages */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-xl font-semibold mb-4 sm:mb-5 text-foreground"
              >
                Programming Languages
              </motion.h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {programmingLanguages.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.3 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      y: -4,
                      rotateY: 5,
                      boxShadow: '0 8px 25px hsl(185 100% 50% / 0.4)',
                      transition: { duration: 0.3 }
                    }}
                    className="px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm text-sm font-semibold cursor-default
                      hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 preserve-3d"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Frameworks & Technologies */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl font-semibold mb-4 sm:mb-5 text-foreground"
              >
                Frameworks & Technologies
              </motion.h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {frameworks.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      y: -4,
                      rotateY: 5,
                      boxShadow: '0 8px 25px hsl(185 100% 50% / 0.4)',
                      transition: { duration: 0.3 }
                    }}
                    className="px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm text-sm font-semibold cursor-default
                      hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 preserve-3d"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl font-semibold mb-4 sm:mb-5 text-foreground"
              >
                Tools
              </motion.h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {tools.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.7 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      y: -4,
                      rotateY: 5,
                      boxShadow: '0 8px 25px hsl(185 100% 50% / 0.4)',
                      transition: { duration: 0.3 }
                    }}
                    className="px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm text-sm font-semibold cursor-default
                      hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 preserve-3d"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
