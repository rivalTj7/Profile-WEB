'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-container bg-gradient-to-br from-primary-950 to-dark-950 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-white text-center"
        >
          Contacto
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-dark-300 mb-12 text-lg"
        >
          ¿Interesado en trabajar juntos? No dudes en contactarme
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

            <div className="space-y-4">
              <a
                href="mailto:rival.alex7@gmail.com"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <div className="p-3 bg-primary-500 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-dark-400">Email</p>
                  <p className="font-semibold">rival.alex7@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+50236073068"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <div className="p-3 bg-primary-500 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-dark-400">Teléfono</p>
                  <p className="font-semibold">(+502) 3607 3068</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="p-3 bg-primary-500 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-dark-400">Ubicación</p>
                  <p className="font-semibold">Guatemala, Guatemala</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4">Redes Sociales</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/rivalTj7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rivaldo-tojín-54286b307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
