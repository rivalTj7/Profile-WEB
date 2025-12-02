'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Activity, Brain, BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: "Lenguajes de Programación",
    icon: Code,
    skills: ["Java", "Python", "C#", "C++", "PHP", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Frameworks Web",
    icon: Code,
    skills: ["Angular", "React", "Django", "Spring Boot", ".NET", "Node.js", "Next.js"]
  },
  {
    title: "Bases de Datos",
    icon: Database,
    skills: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Azure", "Terraform", "Docker", "Kubernetes", "GCP", "AWS", "Azure DevOps"]
  },
  {
    title: "Monitoreo",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "ELK Stack"]
  },
  {
    title: "IA & Análisis",
    icon: Brain,
    skills: ["Machine Learning", "NLP", "Power BI", "Looker Studio"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Habilidades Técnicas
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <IconComponent className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-dark-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 card p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
              <BarChart3 className="text-primary-600 dark:text-primary-400" size={24} />
            </div>
            <h3 className="text-lg font-bold text-dark-900 dark:text-white">
              Habilidades Blandas
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Resolución de Problemas",
              "Trabajo en Equipo",
              "Comunicación Efectiva",
              "Adaptabilidad",
              "Pensamiento Analítico",
              "Aprendizaje Continuo",
              "Proactividad",
              "Gestión del Tiempo",
              "Resiliencia"
            ].map((skill, i) => (
              <span key={i} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
