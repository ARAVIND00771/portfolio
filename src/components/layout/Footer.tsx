import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/aravind00771', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/aravindkasoju', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kasojuaravind662@gmail.com', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text inline-block mb-2"
            >
              Kasoju Aravind
            </motion.a>
            <p className="text-sm text-muted-foreground">
              © 2026 Kasoju Aravind
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Designed and built with a focus on clarity, structure, and usability.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};
