"use client"

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'SDE Intern',
    company: 'Produktiv.ai',
    period: 'June 2025 – Present',
    description: 'Working on scalable backend systems and AI-powered features.',
    techStack: ['Go', 'Python', 'PostgreSQL', 'React', 'ElasticSearch', 'Kafka', 'Redis', 'Prometheus', 'Grafana', 'WebSockets'],
    current: true
  },
  {
    title: 'Associate Software Intern',
    company: 'Brudite Pvt. Ltd.',
    period: 'May 2024 – July 2024',
    description: 'Developed backend systems and integrated third-party APIs for business solutions.',
    techStack: ['Django', 'PostgreSQL', 'Third-party API Integrations'],
    current: false
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan to-violet mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-violet to-indigo hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-cyan to-violet hidden md:block">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan to-violet animate-ping opacity-30" />
              </div>

              <div className={`glass-card rounded-2xl p-6 md:p-8 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              } group hover:border-cyan/30 transition-all relative overflow-hidden`}>
                {/* Current indicator */}
                {exp.current && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 text-xs font-medium text-cyan">
                      <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                      Current
                    </span>
                  </div>
                )}

                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  {/* Company Icon */}
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-cyan" />
                    </div>
                    <div className={`${index % 2 === 0 ? 'md:order-first md:text-right' : ''}`}>
                      <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">
                        {exp.title}
                      </h3>
                      <p className="text-cyan font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Period */}
                  <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  {/* Tech Stack */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-cyan/10 text-cyan border border-cyan/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
