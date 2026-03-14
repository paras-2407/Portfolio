"use client"

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award } from 'lucide-react'

const courses = [
  'Large Language Models',
  'Deep Learning',
  'NLP',
  'Machine Learning',
  'DSA',
  'AI'
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

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-cyan/30 transition-colors">
            {/* Gradient border on hover */}
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
                  <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] mb-2">
                    B.Tech in Computer Science
                  </h3>
                  <p className="text-lg text-cyan font-medium mb-2">
                    AI Specialization
                  </p>
                  <p className="text-muted-foreground mb-4">
                    JK Lakshmipat University, Jaipur
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Aug 2022 – Present</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-violet" />
                      <span className="font-semibold">CGPA: <span className="text-violet">9.44</span></span>
                    </div>
                  </div>

                  {/* Course Tags */}
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, index) => (
                      <motion.span
                        key={course}
                        className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-cyan/10 to-violet/10 border border-cyan/20 text-foreground"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
