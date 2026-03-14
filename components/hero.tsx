"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowDown, Github, Linkedin, Mail, Code2, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const roles = [
  'Full-Stack Software Developer',
  'AI Systems Engineer',
  'LLM Specialist',
  'Distributed Systems Developer'
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const role = roles[currentRole]
    
    if (isTyping) {
      if (displayedText.length < role.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(role.slice(0, displayedText.length + 1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }
  }, [displayedText, isTyping, currentRole])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/paras-goyal', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/paras-goyal', label: 'GitHub' },
    { icon: Code2, href: 'https://hackerrank.com/paras_goyal', label: 'HackerRank' },
    { icon: Award, href: 'https://leetcode.com/paras_goyal', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:goyal.paras004@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-violet/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden glow-border">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan via-violet to-indigo rounded-full p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src="/profile.jpg"
                    alt="Paras Goyal"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/30 via-violet/30 to-indigo/30 rounded-full blur-xl -z-10" />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="gradient-text">Paras Goyal</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            className="h-8 md:h-10 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-lg md:text-2xl text-muted-foreground font-medium">
              {displayedText}
              <span className="animate-pulse text-cyan">|</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-sm md:text-base text-muted-foreground mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            AI Systems · LLMs · Distributed Systems
          </motion.p>

          {/* Location */}
          <motion.div
            className="flex items-center gap-2 text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Jaipur, India</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan to-violet hover:from-cyan/80 hover:to-violet/80 text-background font-semibold px-8 glow-cyan"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan/50 hover:bg-cyan/10 hover:border-cyan font-semibold px-8"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-cyan hover:border-cyan/50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { duration: 0.5, delay: 1 },
              y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-cyan transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
              <span className="sr-only">Scroll to About</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
