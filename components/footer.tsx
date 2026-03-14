"use client"

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, Code2, Award } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/paras-goyal', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/paras-goyal', label: 'GitHub' },
  { icon: Code2, href: 'https://hackerrank.com/paras_goyal', label: 'HackerRank' },
  { icon: Award, href: 'https://leetcode.com/paras_goyal', label: 'LeetCode' },
  { icon: Mail, href: 'mailto:goyal.paras004@gmail.com', label: 'Email' },
]

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="py-12 relative border-t border-border">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="text-2xl font-bold font-[family-name:var(--font-heading)]"
            whileHover={{ scale: 1.05 }}
          >
            <span className="gradient-text">Paras Goyal</span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-cyan hover:border-cyan/50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              Built with <Heart className="w-4 h-4 text-pink inline" /> by Paras Goyal
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
