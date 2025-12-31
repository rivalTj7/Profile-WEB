'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { cvData } from '@/data/cvData';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {cvData.personalInfo.name}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-semibold">
                {cvData.personalInfo.title}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {cvData.profile}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span>{cvData.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span>{cvData.personalInfo.phone}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-3 sm:gap-4 pt-4"
            >
              <a
                href={`mailto:${cvData.personalInfo.email}`}
                className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Contactar
              </a>
              <a
                href={cvData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-600 dark:hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href={cvData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-primary-600 dark:hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full opacity-20 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-9xl font-bold text-white opacity-20">
                  RT
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
