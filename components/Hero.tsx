'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-950 via-primary-950 to-dark-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Rivaldo Alexander
              <span className="block text-gradient mt-2">Tojín Ixcotoyac</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-dark-300 mb-8 font-light"
          >
            Ingeniero de Desarrollo | DevOps Engineer | Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-dark-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Especializado en desarrollo de software, integración de sistemas y automatización DevOps.
            Experiencia en arquitecturas cloud, CI/CD y desarrollo full stack con tecnologías modernas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="mailto:rival.alex7@gmail.com"
              className="btn-primary flex items-center gap-2"
            >
              <Mail size={20} />
              Contáctame
            </a>
            <a
              href="#projects"
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={20} />
              Ver Proyectos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6 text-dark-400"
          >
            <a
              href="https://github.com/rivalTj7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-400 transition-colors"
            >
              <Github size={24} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rivaldo-tojín-54286b307"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-400 transition-colors"
            >
              <Linkedin size={24} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="tel:+50236073068"
              className="flex items-center gap-2 hover:text-primary-400 transition-colors"
            >
              <Phone size={24} />
              <span className="hidden sm:inline">(+502) 3607 3068</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={24} />
              <span className="hidden sm:inline">Guatemala</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-dark-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
