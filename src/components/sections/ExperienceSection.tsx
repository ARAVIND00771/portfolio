import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedLine } from '../ui/AnimatedText';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    institution: 'Mahindra University, Hyderabad',
    period: 'August 2022 – Present',
    description: 'Currently pursuing B.Tech in Computer Science and Engineering with focus on software development, system design, and modern technologies.',
    highlights: ['CGPA: 6.0 / 10.0', 'Active learning', 'Project-based coursework'],
  },
  {
    id: 2,
    degree: 'Intermediate',
    institution: 'Narayana Junior College, Hyderabad',
    period: 'June 2020 – May 2022',
    description: 'Completed intermediate education with focus on science and mathematics, preparing for engineering entrance examinations.',
    highlights: ['Science stream', 'Mathematics focus', 'Engineering preparation'],
  },
  {
    id: 3,
    degree: '10th Grade',
    institution: 'Narayana Concept School, Hyderabad',
    period: 'June 2019 – March 2020',
    description: 'Completed secondary education with strong foundation in core subjects and early interest in technology.',
    highlights: ['Foundation years', 'Core subjects', 'Academic excellence'],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">04 — Education</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <AnimatedLine delay={0.3} />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:w-px bg-gradient-to-b from-primary via-secondary to-accent origin-top"
            style={{ transform: 'translateX(-50%)' }}
          />

          {/* Timeline items */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                className="absolute left-4 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full shadow-glow-sm z-10"
                style={{ transform: 'translateX(-50%)' }}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute inset-0 bg-primary rounded-full opacity-30"
                />
              </motion.div>

              {/* Content card */}
              <div className={`w-full md:w-[calc(50%-2rem)] ml-12 sm:ml-14 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-6 lg:pr-8 md:text-right' : 'md:pl-6 lg:pl-8'
              }`}>
                <motion.div 
                  className="glass-card p-6 hover:shadow-glow-sm transition-all duration-300 group hover-3d-subtle"
                  whileHover={{ 
                    y: -6,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Period */}
                  <div className={`flex items-center gap-2 text-primary font-mono text-sm mb-3 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <Calendar size={14} />
                    {edu.period}
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <div className={`flex items-center gap-2 text-muted-foreground mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <GraduationCap size={14} />
                    {edu.institution}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 text-readable">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
