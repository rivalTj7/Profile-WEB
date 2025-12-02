'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Banco G&T Continental",
    position: "Ingeniero de Desarrollo e Integración",
    period: "Enero 2025 - Actualidad",
    location: "Guatemala",
    description: [
      "Revisión de código y documentación técnica para proyectos de desarrollo interno",
      "Gestión de CI/CD con Azure DevOps y automatización con PowerShell",
      "Desarrollo de herramientas con Vite + React",
      "Implementación de sistemas de monitoreo con Prometheus y Grafana",
      "Automatización de despliegues con Terraform"
    ],
    technologies: ["Azure DevOps", "PowerShell", "React", "Vite", "Terraform", "Prometheus", "Grafana"]
  },
  {
    company: "CIMESA",
    position: "Programador - Departamento de IT",
    period: "Octubre 2024 - Enero 2025",
    location: "Guatemala",
    description: [
      "Desarrollo de sistema ERP propio con arquitectura MVT",
      "Implementación de sistema de facturación electrónica FEL",
      "Gestión de archivos XML y despliegue en LINODE Cloud",
      "Trabajo bajo metodología ágil SCRUM"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "XML", "LINODE", "SCRUM"]
  },
  {
    company: "Tostaduría de Café León",
    position: "Programador - Departamento de IT",
    period: "Marzo 2023 - Octubre 2024",
    location: "Guatemala",
    description: [
      "Desarrollo de módulos ERP con Angular y React Native (frontend)",
      "Backend con Java Spring Boot siguiendo patrón MVC",
      "Implementación de facturación electrónica FEL",
      "Migración del sistema a Google Cloud Platform (GCP)",
      "Mantenimiento de equipos y servidores, gestión de dominios"
    ],
    technologies: ["Angular", "React Native", "Java", "Spring Boot", "SQL Server", "GCP"]
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

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-dark-50 dark:bg-dark-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Experiencia Profesional
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="mt-1">
                      <Briefcase className="text-primary-600 dark:text-primary-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-sm text-dark-600 dark:text-dark-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <span className="text-dark-500 dark:text-dark-500">{exp.location}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-dark-700 dark:text-dark-300">
                    <span className="text-primary-600 dark:text-primary-400 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
