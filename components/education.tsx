"use client"

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award, Trophy } from 'lucide-react'

const courses = [
  'Large Language Models',
  'Deep Learning',
  'NLP',
  'Machine Learning',
  'AI',
  'DSA'
]

const education = [
  {
    degree: 'B.Tech in Computer Science',
    specialization: 'AI Specialization',
    institution: 'JK Lakshmipat University, Jaipur',
    period: 'Aug 2022 – Present',
    score: { label: 'CGPA', value: '9.44', color: 'text-violet' },
    tags: courses,
    achievement: null,
  },
  {
    degree: 'Senior Secondary Education (Class XII)',
    specialization: 'Physics, Chemistry & Mathematics (PCM)',
    institution: 'Candlewick Public School',
    period: '2022',
    score: { label: 'Score', value: '96.4%', color: 'text-cyan' },
    tags: ['Physics', 'Chemistry', 'Mathematics'],
    achievement: '2nd in Class',
  }
]

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan to-violet mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-cyan/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-violet/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/20 flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-cyan" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)]">
                          {edu.degree}
                        </h3>
                        {/* Achievement badge */}
                        {edu.achievement && (
                          <span className="flex items-center gap-1.5 text-xs font-medium text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full">
                            <Trophy className="w-3.5 h-3.5" />
                            {edu.achievement}
                          </span>
                        )}
                      </div>

                      <p className="text-lg text-cyan font-medium mb-2">
                        {edu.specialization}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Award className={`w-4 h-4 ${edu.score.color}`} />
                          <span className="font-semibold">
                            {edu.score.label}:{' '}
                            <span className={edu.score.color}>{edu.score.value}</span>
                          </span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {edu.tags.map((tag, i) => (
                          <motion.span
                            key={tag}
                            className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-cyan/10 to-violet/10 border border-cyan/20 text-foreground"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
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
