'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: "Ingeniería en Ciencias y Sistemas",
    institution: "Universidad de San Carlos de Guatemala (USAC)",
    period: "2019 - Actualidad (Cierre de pensum)",
    location: "Guatemala",
    description: "Formación integral en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos."
  },
  {
    degree: "Bachillerato en Computación con Orientación Científica",
    institution: "IMB-PC Colegio Bilingüe",
    period: "2016 - 2018",
    location: "Guatemala"
  }
];

const certifications = [
  {
    title: "Servicios en la Nube - Azure",
    issuer: "USAC",
    level: "Nivel Medio",
    date: "2023"
  },
  {
    title: "Amazon Web Services (AWS)",
    issuer: "USAC",
    level: "Nivel Básico",
    date: "2023"
  },
  {
    title: "Python Básico y Medio",
    issuer: "USAC - SAESAP 2020",
    date: "2020"
  },
  {
    title: "Microsoft Office 365",
    issuer: "Microsoft",
    date: "2020"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Education() {
  return (
    <section id="education" className="section-container">
      <div className="max-w-5xl mx-auto">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Educación</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <GraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-dark-600 dark:text-dark-400 mb-2">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                    {edu.description && (
                      <p className="text-dark-700 dark:text-dark-300 mt-3">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Certificaciones</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-4 hover:scale-105 transition-transform"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Award className="text-primary-600 dark:text-primary-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-dark-900 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-dark-600 dark:text-dark-400">
                      {cert.level && <span className="skill-badge text-xs">{cert.level}</span>}
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
