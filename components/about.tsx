"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan to-violet mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden glass-card p-1">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Paras Goyal"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-cyan/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-violet/30 rounded-2xl" />
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-violet/20 rounded-2xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold font-[family-name:var(--font-heading)]">
              Building the Future with <span className="text-cyan">AI</span> & <span className="text-violet">Code</span>
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              Full-Stack Software Developer specializing in AI-driven systems with expertise in 
              <span className="text-cyan font-medium"> LLMs</span>, 
              <span className="text-violet font-medium"> RAG</span>, and 
              <span className="text-indigo font-medium"> Distributed Systems</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Strong foundation in Computer Science with hands-on experience in Golang, Python, 
              and Cloud DevOps (AWS/Docker). Passionate about solving high-stakes scalability 
              challenges and building innovative, mission-critical products.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div 
                className="glass-card p-4 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">9.44</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </motion.div>
              <motion.div 
                className="glass-card p-4 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </motion.div>
              <motion.div 
                className="glass-card p-4 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">2</div>
                <div className="text-sm text-muted-foreground">Internships</div>
              </motion.div>
              <motion.div 
                className="glass-card p-4 rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
