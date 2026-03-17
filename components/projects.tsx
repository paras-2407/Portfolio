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
    award: 'Winner, HackCrux 2025, GDG LNMIIT'
  },
  {
    title: 'Smart Parking System',
    date: 'Oct 2024',
    shortDescription: 'IoT + AI automated parking system with license plate recognition, real-time slot tracking, and online booking.',
    fullDescription: 'An IoT and AI-based smart parking system designed to solve urban parking challenges through end-to-end automation. A Raspberry Pi with camera handles license plate recognition at entry/exit gates, while NodeMCU manages IR sensors, LEDs, and servo motors for gate control. Users can view live slot availability, book a slot, and pay via a web app. The Flask server orchestrates real-time communication between all IoT devices and the database, while a React.js interface keeps users informed at every step.',
    techStack: ['Python', 'Flask', 'React.js', 'OpenCV', 'EasyOCR', 'Raspberry Pi', 'NodeMCU', 'SQL'],
    features: [
      'License plate recognition at entry/exit using OpenCV + EasyOCR on Raspberry Pi for automated gate control',
      'Real-time slot availability tracking via IR sensors, with LED indicators (green = free, red = occupied)',
      'Online booking with QR-code-based payment (base charge ₹10) and database reservation',
      'Dynamic fare calculation based on parking duration, processed at exit before gate release',
      'Full-capacity handling: web app displays "No Slots Available" and restricts gate entry to prevent overloading',
      'Flask server APIs bridging IoT hardware (Raspberry Pi, NodeMCU) with the SQL database and React frontend'
    ],
    award: 'Best Paper Award, CCPIS IEEE Conference 2025 — Intelligent Systems & Applications (ISA) Track'
  },
  {
    title: 'VulnAI: Vulnerability Scanning in AI Systems',
    date: 'Jan 2025',
    shortDescription: 'Security auditing tool to identify adversarial vulnerabilities in ML models and LLMs, with human-readable risk reports.',
    fullDescription: 'A comprehensive security auditing platform designed to identify vulnerabilities in machine learning models and Large Language Models (LLMs). The pipeline provides a robust environment to test for adversarial attacks and security bypasses, generating detailed human-readable reports on model safety with actionable prevention guidance.',
    techStack: ['Python', 'FastAPI', 'PyTorch', 'ART', 'Next.js', 'React', 'Tailwind CSS', 'Google OAuth 2.0'],
    features: [
      'ML model scanning: FGSM, PGD, C&W, and DeepFool adversarial attack simulations on PyTorch .pth models',
      'LLM security testing: jailbreak scanning, prompt injection, and toxicity detection using hardcoded adversarial prompts',
      'Collaborative human-readable vulnerability reports with severity breakdown and prevention strategies',
      'Persistent audit history to track security progress across all previously scanned models',
      'Google OAuth 2.0 authentication for secure, personalized dashboard access',
      'Decoupled FastAPI backend and Next.js frontend for high-concurrency AI security computations'
    ],
    github: 'https://github.com/paras-2407/VulnAI-Vulnerability-Detection-in-AI-Models'
  },
  {
    title: 'Demystify Legal Documents with Generative AI',
    date: 'Aug 2025',
    shortDescription: 'GCP-powered platform that simplifies complex legal documents via instant AI summarization and a grounded RAG Q&A chatbot.',
    fullDescription: 'Legal documents are often a labyrinth of complex jargon, creating information asymmetry that leads to unforeseen financial and legal risks. This platform acts as a reliable first point of contact — uploading a PDF, DOCX, or TXT file triggers intelligent parsing via Vertex AI Document AI, while Gemini 1.5 Pro powers both instant summarization and a RAG-based Q&A system grounded in the document content and relevant constitutional laws. Chat history is persisted in Firestore, and the entire stack runs on GCP for scalability and security.',
    techStack: ['Angular', 'FastAPI', 'Gemini 1.5 Pro', 'Vertex AI', 'LangChain', 'Firestore', 'Google Cloud Storage', 'Google OAuth'],
    features: [
      'Multi-format document ingestion (PDF, DOCX, TXT) with intelligent OCR and extraction via Vertex AI Document AI',
      'Instant contextual summarization of complex legal texts powered by Gemini 1.5 Pro',
      'RAG-based Q&A chat grounded in uploaded document content and relevant constitutional laws using LangChain + text-embedding-004',
      'Semantic vector search via Vertex AI Vector Search (formerly Matching Engine) for accurate document retrieval',
      'Persistent chat history stored in Firestore for continuity across sessions',
      'Secure Google OAuth authentication with Cloud IAM for granular access control across all GCP services'
    ],
    github: 'https://github.com/varunpareek690/demystifyDocs'
  },
  {
    title: 'AI-Based Medical Prescription Validator',
    date: 'Feb – May 2025',
    shortDescription: 'End-to-end NLP pipeline that OCR-parses scanned prescriptions, validates medication safety via clinical APIs, and generates patient-friendly reports using fine-tuned Flan-T5.',
    fullDescription: 'An end-to-end NLP-based system that analyzes scanned medical prescriptions using Tesseract OCR to extract structured data (medication name, strength, form, frequency), validates medication safety against trusted clinical datasets (RxNorm, openFDA, DailyMed), and generates fluent patient-friendly summaries using a fine-tuned Flan-T5-small transformer model. The system is served through a FastAPI backend and an interactive Streamlit frontend for uploading images or JSON data and visualizing results.',
    techStack: ['Python', 'Flan-T5-small', 'Tesseract OCR', 'Streamlit', 'FastAPI', 'RxNorm', 'openFDA', 'DailyMed'],
    features: [
      'OCR parsing with Tesseract (pytesseract) to extract structured fields — medication name, strength, form, and frequency — from scanned prescription images',
      'Medication validation against RxNorm API, openFDA API, and DailyMed drug labels for dosage, form suitability, and indication checks',
      'Patient-friendly report generation using a fine-tuned flan-t5-small HuggingFace transformer model',
      'Interactive Streamlit frontend for uploading prescription images or JSON data and visualizing validation results',
      'FastAPI backend for modular, high-performance integration between OCR, validation, and report generation layers'
    ],
    github: 'https://github.com/paras-2407/AI-based-Medical-Prescription-Validator'
  },
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
