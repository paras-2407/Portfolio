"use client"

import { motion } from 'framer-motion'
import { Code, Cpu, Database, Cloud, Wrench, Shield } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'Golang', 'C', 'SQL'],
    color: 'cyan'
  },
  {
    title: 'Frameworks & AI',
    icon: Cpu,
    skills: ['Django', 'TensorFlow', 'ReactJS', 'Ollama', 'RAG', 'Gemini', 'AI Agents'],
    color: 'violet'
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'Elasticsearch', 'Kafka', 'Redis'],
    color: 'indigo'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['Azure Web Services', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Vertex AI', 'Prometheus', 'Grafana'],
    color: 'cyan'
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'Postman', 'JIRA', 'Confluence', 'GitHub Actions'],
    color: 'violet'
  },
  {
    title: 'Code Security',
    icon: Shield,
    skills: ['Unit Testing', 'Staticcheck', 'Vulnerability Scan', 'SonarQube', 'Snyk', 'Gosec', 'pytest'],
    color: 'indigo'
  }
]

const colorClasses = {
  cyan: {
    bg: 'from-cyan/20 to-cyan/5',
    border: 'border-cyan/30',
    text: 'text-cyan',
    skillBg: 'bg-cyan/10',
    skillBorder: 'border-cyan/20'
  },
  violet: {
    bg: 'from-violet/20 to-violet/5',
    border: 'border-violet/30',
    text: 'text-violet',
    skillBg: 'bg-violet/10',
    skillBorder: 'border-violet/20'
  },
  indigo: {
    bg: 'from-indigo/20 to-indigo/5',
    border: 'border-indigo/30',
    text: 'text-indigo',
    skillBg: 'bg-indigo/10',
    skillBorder: 'border-indigo/20'
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan to-violet mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses]
            const Icon = category.icon

            return (
              <motion.div
                key={category.title}
                className="glass-card rounded-2xl p-6 group hover:border-cyan/30 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)]">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg ${colors.skillBg} border ${colors.skillBorder} ${colors.text}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
