import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Domain from './components/Domain'
import Research from './components/Research'
import Features from './components/Features'
import Tools from './components/Tools' 
import Milestones from './components/Milestones'
import Team from './components/Team'
import Docs from './components/Docs'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main>
        {/* Hero / Home */}
         <Hero />

        {/* About */}
        <About />

        {/* Domain */}
        <Domain />

        {/* Research */}
       <Research />

        {/* Feature */}
        <Features />

        {/* Tool */}
        <Tools />

        {/* Milestones */}
        <Milestones />

        {/* Docs (matches #docs in Navbar) */}
       <Docs />

        {/* Team */}
        <Team />

      </main>

      <footer className="border-t py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} TravelMachan
      </footer>
    </div>
  )
}
