"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, Trophy, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Project {
  title: string
  date: string
  shortDescription: string
  fullDescription: string
  techStack: string[]
  features: string[]
  github?: string
  live?: string
  award?: string
  image?: string
}

const projects: Project[] = [
  {
    title: 'AI-Powered Digital Twin',
    date: 'Mar 2025',
    shortDescription: 'RL-based assistant that mimics user behavior and automates email replies & meeting scheduling.',
    fullDescription: 'An innovative AI system that creates a digital representation of the user, capable of learning their communication patterns and preferences. The digital twin can autonomously handle routine tasks like email responses and calendar management, freeing up valuable time for more important work.',
    techStack: ['Python', 'Reinforcement Learning', 'NLP', 'FastAPI', 'React', 'PostgreSQL'],
    features: [
      'Behavior learning through reinforcement learning algorithms',
      'Automated email response generation',
      'Smart meeting scheduling optimization',
      'User preference adaptation over time',
      'Privacy-focused local processing'
    ],
    github: 'https://github.com/paras-goyal/digital-twin',
    award: 'Winner, HackCrux 2025, GDG LNMIIT'
  },
  {
    title: 'AI-Powered Legal Document Analyzer',
    date: 'Aug 2025',
    shortDescription: 'Advanced RAG pipeline for legal document analysis using Gemini 1.5 Pro and Vertex AI.',
    fullDescription: 'A comprehensive legal document analysis platform that leverages state-of-the-art AI models to extract, analyze, and summarize legal documents. The system uses a sophisticated RAG pipeline to provide accurate answers to legal queries based on uploaded documents.',
    techStack: ['Angular', 'FastAPI', 'RAG Pipeline', 'Gemini 1.5 Pro', 'Vertex AI', 'ChromaDB'],
    features: [
      'Multi-document upload and processing',
      'Semantic search across legal documents',
      'AI-powered legal clause extraction',
      'Risk assessment and flagging',
      'Export to multiple formats'
    ],
    github: 'https://github.com/paras-goyal/legal-analyzer'
  },
  {
    title: 'AI-Based Medical Prescription Validator',
    date: 'Feb – May 2025',
    shortDescription: 'NLP-powered system for validating medical prescriptions using OCR and medical APIs.',
    fullDescription: 'An intelligent system designed to digitize and validate medical prescriptions. Using OCR technology combined with NLP models, it extracts prescription information and cross-references it with medical databases to ensure accuracy and flag potential drug interactions.',
    techStack: ['Python', 'Flan-T5-small', 'NLP', 'OCR', 'Medical APIs', 'Flask'],
    features: [
      'Prescription OCR and digitization',
      'Drug interaction checking',
      'Dosage validation against guidelines',
      'Patient history integration',
      'Pharmacy notification system'
    ],
    github: 'https://github.com/paras-goyal/prescription-validator'
  },
  {
    title: 'Real-Time Collaboration Platform',
    date: 'Jan 2025',
    shortDescription: 'WebSocket-based collaborative workspace with real-time document editing and video conferencing.',
    fullDescription: 'A full-featured collaboration platform enabling teams to work together in real-time. Features include synchronized document editing, video conferencing, chat, and project management tools, all built on a scalable WebSocket architecture.',
    techStack: ['React', 'Node.js', 'WebSockets', 'Redis', 'PostgreSQL', 'WebRTC'],
    features: [
      'Real-time document collaboration',
      'Integrated video conferencing',
      'Project management dashboard',
      'File sharing and version control',
      'Team chat and notifications'
    ],
    github: 'https://github.com/paras-goyal/collab-platform'
  },
  {
    title: 'Distributed Task Scheduler',
    date: 'Nov 2024',
    shortDescription: 'Fault-tolerant distributed task scheduling system built with Go and Kafka.',
    fullDescription: 'A highly available distributed task scheduling system designed for reliability and scalability. Built using Go for performance and Kafka for message queuing, it ensures tasks are executed reliably even in the face of node failures.',
    techStack: ['Go', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    features: [
      'Distributed task execution',
      'Automatic failure recovery',
      'Priority-based scheduling',
      'Real-time monitoring dashboard',
      'Horizontal scaling support'
    ],
    github: 'https://github.com/paras-goyal/task-scheduler'
  }
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan to-violet mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my recent work in AI, distributed systems, and full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden transition-all duration-300 hover:border-cyan/50 hover:shadow-lg hover:shadow-cyan/10">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-violet/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Award badge */}
                  {project.award && (
                    <div className="flex items-center gap-1 text-xs font-medium text-yellow-500 mb-3">
                      <Trophy className="w-4 h-4" />
                      <span>{project.award}</span>
                    </div>
                  )}

                  {/* Title & Date */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] group-hover:text-cyan transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{project.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-cyan/10 text-cyan border border-cyan/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-mono rounded bg-violet/10 text-violet border border-violet/20">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-cyan transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-violet transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <span className="ml-auto text-xs text-muted-foreground group-hover:text-cyan transition-colors">
                      Click for details →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card rounded-2xl p-6 md:p-8 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Award */}
              {selectedProject.award && (
                <div className="flex items-center gap-2 text-sm font-medium text-yellow-500 mb-4">
                  <Trophy className="w-5 h-5" />
                  <span>{selectedProject.award}</span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)] mb-2 pr-8">
                {selectedProject.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Calendar className="w-4 h-4" />
                <span>{selectedProject.date}</span>
              </div>

              {/* Full Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-mono rounded-full bg-gradient-to-r from-cyan/10 to-violet/10 border border-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {selectedProject.github && (
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={() => window.open(selectedProject.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </Button>
                )}
                {selectedProject.live && (
                  <Button
                    className="gap-2 bg-gradient-to-r from-cyan to-violet hover:from-cyan/80 hover:to-violet/80"
                    onClick={() => window.open(selectedProject.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
