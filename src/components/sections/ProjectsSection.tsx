import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { AnimatedLine } from '../ui/AnimatedText';
import { ExternalLink, Github, ArrowUpRight, Calendar, Code } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

const featuredProjects = [
  {
    id: 1,
    title: 'Mobile Application for Mahindra University',
    category: 'Android Mobile Application',
    description: 'Built an Android mobile application for Mahindra University enabling secure login and role-based access for Students, Faculty, and Parents.',
    tech: ['React Native', 'TypeScript', 'Firebase Authentication', 'Firestore', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    video: '/mahindra-app-video.MP4',
    color: 'from-primary to-secondary',
    time: '2023 - 2024',
    github: 'https://github.com/ARAVIND00771/MU-MOBILE-APPLICATION',
    highlights: [
      'Implemented Firebase Authentication',
      'Designed role-based navigation architecture',
      'Built student dashboards with announcements',
      'Converted Figma designs into functional UI',
      'Designed scalable structure for future backend expansion'
    ],
  },
  {
    id: 2,
    title: 'KISANSETU — Farmer Support Application',
    category: 'Hybrid Mobile Application',
    description: 'KisanSetu is a farmer-focused hybrid application designed to provide digital access to agricultural services with a strong emphasis on simplicity and usability for rural users.',
    tech: ['Flutter', 'Dart', 'Python', 'Firebase', 'Firestore', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    color: 'from-secondary to-accent',
    time: '2023 - 2024',
    github: 'https://github.com/ARAVIND00771/KISANSETU',
    highlights: [
      'Built frontend using Flutter framework',
      'Developed backend with Python',
      'Integrated Firebase and Firestore for data management',
      'Designed farmer-centric application flow',
      'Developed structured frontend components',
      'Focused on accessibility and real-world deployment constraints'
    ],
  },
  {
    id: 3,
    title: 'DEVOTE — Smart Utility & Assistance Platform',
    category: 'Application Project',
    description: 'DEVOTE is a modular application designed around clean UI flow, scalable architecture, and future extensibility.',
    tech: ['React', 'TypeScript', 'Firebase', 'Figma'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    video: '/devote-video.mov',
    color: 'from-accent to-primary',
    time: '2024',
    github: 'https://github.com/ARAVIND00771/DEVOTE',
    highlights: [
      'Designed modular frontend structure',
      'Planned system flow and navigation',
      'Focused on maintainable, scalable design',
      'Prepared architecture for future feature expansion'
    ],
  },
];

const otherProjects = [
  {
    id: 4,
    title: 'Object Tracking System',
    category: 'Computer Vision',
    description: 'Built a multi-object tracking system using YOLOv8 and Deep SORT for real-time object detection and tracking.',
    tech: ['Python', 'YOLOv8', 'Deep SORT', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    color: 'from-primary to-accent',
    github: '', // Add GitHub link here
  },
  {
    id: 5,
    title: 'Currency Converter (Java Swing)',
    category: 'Desktop Application',
    description: 'Desktop-based currency converter with real-time conversion support and event-driven programming.',
    tech: ['Java', 'Swing'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    color: 'from-secondary to-primary',
    github: '', // Add GitHub link here
  },
  {
    id: 6,
    title: 'Dogs vs Cats Image Classification',
    category: 'Machine Learning',
    description: 'CNN-based image classification model for distinguishing between dogs and cats with image preprocessing and augmentation.',
    tech: ['Python', 'TensorFlow', 'Keras'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
    color: 'from-accent to-secondary',
    github: '', // Add GitHub link here
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<(typeof featuredProjects[0] | typeof otherProjects[0]) | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play video when project is selected
  useEffect(() => {
    if (selectedProject && videoRef.current && 'video' in selectedProject && selectedProject.video) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error);
      });
    }
    
    // Pause video when modal closes
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">03 — Projects</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <AnimatedLine delay={0.3} />
        </motion.div>

        {/* Featured Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
              whileHover={{ 
                y: -12,
                rotateX: -3,
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer preserve-3d hover-3d shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                
                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <motion.div
                  animate={{
                    y: hoveredId === project.id ? 0 : 20,
                    opacity: hoveredId === project.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-primary font-mono text-sm mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 flex items-center gap-2">
                    {project.title}
                    <motion.span
                      animate={{
                        x: hoveredId === project.id ? 5 : 0,
                        opacity: hoveredId === project.id ? 1 : 0,
                      }}
                    >
                      <ArrowUpRight className="text-primary" size={24} />
                    </motion.span>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-readable">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        className="text-xs px-3 py-1 rounded-full bg-card/90 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/20 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredId === project.id ? 1 : 0,
                    y: hoveredId === project.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute top-6 right-6 z-10"
                >
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-card/90 backdrop-blur-md border border-border hover:border-primary hover:bg-primary/20 transition-all duration-300 shadow-glow-sm"
                    aria-label="View project details"
                  >
                    <ExternalLink size={18} />
                  </motion.button>
                </motion.div>
              </div>

              {/* Glow effect on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 pointer-events-none`}
                animate={{ opacity: hoveredId === project.id ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </div>

        {/* Other Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-20"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
            Other <span className="gradient-text">Projects</span>
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.8 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
                whileHover={{ 
                  y: -8,
                  rotateX: -2,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer preserve-3d hover-3d shadow-md hover:shadow-xl transition-all duration-500"
              >
                {/* Image container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    animate={{
                      y: hoveredId === project.id ? 0 : 20,
                      opacity: hoveredId === project.id ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-primary font-mono text-xs mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {project.title}
                      <motion.span
                        animate={{
                          x: hoveredId === project.id ? 5 : 0,
                          opacity: hoveredId === project.id ? 1 : 0,
                        }}
                      >
                        <ArrowUpRight className="text-primary" size={18} />
                      </motion.span>
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-card/80 border border-border backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 pointer-events-none`}
                  animate={{ opacity: hoveredId === project.id ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Project Details Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto glass-card border-border rounded-2xl p-0">
            {selectedProject && (
              <div className="p-8 space-y-6">
                <DialogHeader className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-primary font-mono text-sm block">
                      {selectedProject.category}
                    </span>
                    <DialogTitle className="text-3xl font-bold">
                      {selectedProject.title}
                    </DialogTitle>
                    {'time' in selectedProject && selectedProject.time && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>{selectedProject.time}</span>
                      </div>
                    )}
                  </div>
                </DialogHeader>
                
                <DialogDescription className="text-base text-foreground/90 leading-relaxed">
                  {selectedProject.description}
                </DialogDescription>

                {/* Project Video/Image */}
                <div className={`relative w-full rounded-xl overflow-hidden ${
                  'video' in selectedProject && selectedProject.video && selectedProject.id === 1 
                    ? 'aspect-[9/16] max-w-sm mx-auto' 
                    : 'aspect-video'
                }`}>
                  {'video' in selectedProject && selectedProject.video ? (
                    <video
                      key={selectedProject.id}
                      ref={videoRef}
                      src={selectedProject.video}
                      className={`w-full h-full ${
                        selectedProject.id === 1 ? 'object-contain' : 'object-cover'
                      }`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  ) : (
                    <>
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-40`} />
                    </>
                  )}
                </div>

                {/* Key Highlights */}
                {'highlights' in selectedProject && selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold flex items-center gap-2">
                      <Code size={20} className="text-primary" />
                      Key Work
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                {selectedProject.github && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-4 border-t border-border"
                  >
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300 font-semibold"
                    >
                      <Github size={20} />
                      View on GitHub
                      <ExternalLink size={16} />
                    </motion.a>
                  </motion.div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
