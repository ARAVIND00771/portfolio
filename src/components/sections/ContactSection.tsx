import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { AnimatedLine } from '../ui/AnimatedText';
import { MagneticButton } from '../ui/MagneticButton';
import { Send, Mail, Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `Hello! I'm interested in connecting with you.

*Name:* ${formData.name}
*Email:* ${formData.email}

*Message:*
${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number (include country code, no + or spaces)
    const whatsappNumber = '919390666968';
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Opening WhatsApp...');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'kasojuaravind662@gmail.com', href: 'mailto:kasojuaravind662@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/aravind00771', href: 'https://github.com/aravind00771' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/aravindkasoju', href: 'https://linkedin.com/in/aravindkasoju' },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">05 — Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <AnimatedLine delay={0.3} />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl text-foreground/90 mt-4 sm:mt-6 max-w-2xl mx-auto text-readable-lg px-4"
          >
            Have a project in mind? I'd love to hear about it. Let's connect and build something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Name field */}
              <div className="relative">
                <motion.label
                  animate={{
                    y: focused === 'name' || formData.name ? -24 : 0,
                    scale: focused === 'name' || formData.name ? 0.85 : 1,
                    color: focused === 'name' ? 'hsl(185 100% 50%)' : 'hsl(220 15% 55%)',
                  }}
                  className="absolute left-4 top-4 origin-left pointer-events-none transition-colors"
                >
                  Your Name
                </motion.label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-4 bg-card border border-border rounded-xl focus:border-primary focus:shadow-glow-sm focus:bg-card/80 outline-none transition-all duration-300 hover:border-primary/50"
                  required
                />
              </div>

              {/* Email field */}
              <div className="relative">
                <motion.label
                  animate={{
                    y: focused === 'email' || formData.email ? -24 : 0,
                    scale: focused === 'email' || formData.email ? 0.85 : 1,
                    color: focused === 'email' ? 'hsl(185 100% 50%)' : 'hsl(220 15% 55%)',
                  }}
                  className="absolute left-4 top-4 origin-left pointer-events-none transition-colors"
                >
                  Your Email
                </motion.label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-4 bg-card border border-border rounded-xl focus:border-primary focus:shadow-glow-sm outline-none transition-all duration-300"
                  required
                />
              </div>

              {/* Message field */}
              <div className="relative">
                <motion.label
                  animate={{
                    y: focused === 'message' || formData.message ? -24 : 0,
                    scale: focused === 'message' || formData.message ? 0.85 : 1,
                    color: focused === 'message' ? 'hsl(185 100% 50%)' : 'hsl(220 15% 55%)',
                  }}
                  className="absolute left-4 top-4 origin-left pointer-events-none transition-colors"
                >
                  Your Message
                </motion.label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows={5}
                  className="w-full px-4 py-4 bg-card border border-border rounded-xl focus:border-primary focus:shadow-glow-sm focus:bg-card/80 outline-none transition-all duration-300 resize-none hover:border-primary/50 text-readable"
                  required
                />
              </div>

              <MagneticButton variant="primary" className="w-full">
                <Send size={18} />
                Let's Connect
              </MagneticButton>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card p-6 sm:p-8 space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Get in Touch</h3>
              <p className="text-foreground/90 text-readable text-sm sm:text-base">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat 
                about web development and design.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
                  >
                    <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary group-hover:shadow-glow-sm transition-all duration-300 flex-shrink-0">
                      <item.icon size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-foreground/70 font-medium">{item.label}</div>
                      <div className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="flex items-center gap-3 pt-4 border-t border-border"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                />
                <span className="text-sm text-foreground/90 font-medium">Available for new projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};
