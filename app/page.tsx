import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Achievements } from '@/components/achievements'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ParticleBackground } from '@/components/particle-background'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* AI Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
