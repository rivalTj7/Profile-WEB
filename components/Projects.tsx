'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Award } from 'lucide-react';

const projects = [
  {
    title: "Sistema de Asistente Inteligente",
    type: "Tesis de Ingeniería",
    description: "Diseño e implementación de un asistente inteligente basado en procesamiento de lenguaje natural para evaluación automatizada de respuestas académicas.",
    technologies: ["Python", "NLP", "Machine Learning", "SVM", "Random Forest", "Google Colab"],
    highlights: [
      "Implementación de modelos de ML para análisis de texto",
      "Evaluación automatizada con precisión del 85%+",
      "Desarrollo de metodología COCOCYS para educación"
    ],
    category: "IA & ML"
  },
  {
    title: "UniAsigna",
    type: "Sistema Web",
    description: "Sistema web para automatizar la asignación de cursos universitarios en la USAC, optimizando la distribución de estudiantes según múltiples criterios.",
    technologies: ["React", "Node.js", "Algoritmos de Optimización", "PostgreSQL"],
    highlights: [
      "Algoritmos de optimización para asignación eficiente",
      "Reducción del tiempo de asignación en 70%",
      "Interfaz intuitiva para administradores"
    ],
    github: "https://github.com/rivalTj7",
    category: "Full Stack"
  },
  {
    title: "ChapinFlix",
    type: "Plataforma de Streaming",
    description: "Plataforma de contenido multimedia guatemalteco con arquitectura moderna, enfocada en promover contenido local.",
    technologies: ["Next.js", "Angular", "React", "TypeScript", "Cloud Storage", "CI/CD"],
    highlights: [
      "Arquitectura de microservicios escalable",
      "Sistema de autenticación seguro",
      "Diseño UX/UI moderno y responsivo"
    ],
    github: "https://github.com/rivalTj7",
    demo: "#",
    category: "Full Stack"
  },
  {
    title: "Sistema de Monitoreo con Grafana",
    type: "DevOps",
    description: "Sistema de monitoreo en tiempo real para infraestructura bancaria con integración de alertas automatizadas a Microsoft Teams.",
    technologies: ["Grafana", "Prometheus", "Microsoft Teams API", "Docker", "Kubernetes"],
    highlights: [
      "Monitoreo en tiempo real de +50 servicios",
      "Alertas automatizadas con priorización",
      "Dashboards personalizados por equipo"
    ],
    category: "DevOps"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-dark-50 dark:bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Proyectos Destacados
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6 flex flex-col hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="text-primary-600 dark:text-primary-400" size={20} />
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-dark-600 dark:text-dark-400">
                    {project.type}
                  </p>
                </div>
              </div>

              <p className="text-dark-700 dark:text-dark-300 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-2">
                  Aspectos Destacados:
                </h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-dark-700 dark:text-dark-300">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github size={18} />
                    Código
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
