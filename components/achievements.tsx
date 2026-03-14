"use client"

import { motion } from 'framer-motion'
import { Trophy, Award, Star, FileText, ExternalLink } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'Best Paper at IEEE CCPIS',
    description: 'Recognized for outstanding research contribution',
    color: 'yellow'
  },
  {
    icon: Star,
    title: '4-Star Python HackerRank',
    description: 'Top-tier problem solving skills',
    color: 'cyan'
  },
  {
    icon: FileText,
    title: 'LOR from Brudite',
    description: 'Letter of Recommendation for exceptional work',
    color: 'violet'
  }
]

const certifications = [
  {
    title: 'Supervised Machine Learning',
    issuer: 'Stanford University',
    link: '#'
  },
  {
    title: 'Python Basics',
    issuer: 'HackerRank',
    link: '#'
  },
  {
    title: 'Introduction to AI',
    issuer: 'IBM',
    link: '#'
  },
  {
    title: 'Data Analysis',
    issuer: 'Accenture',
    link: '#'
  },
  {
    title: 'Generative AI',
    issuer: 'Google Cloud',
    link: '#'
  }
]

const colorClasses = {
  yellow: 'from-yellow-500/20 to-yellow-500/5 text-yellow-500',
  cyan: 'from-cyan/20 to-cyan/5 text-cyan',
  violet: 'from-violet/20 to-violet/5 text-violet'
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan to-violet mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-cyan" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                const colors = colorClasses[achievement.color as keyof typeof colorClasses]

                return (
                  <motion.div
                    key={achievement.title}
                    className="glass-card rounded-xl p-5 group hover:border-cyan/30 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-violet" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-4 flex items-center justify-between group hover:border-violet/30 transition-all block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan to-violet" />
                    <div>
                      <h4 className="font-medium text-sm">{cert.title}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-violet transition-colors opacity-0 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
