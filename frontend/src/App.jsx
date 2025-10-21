import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Domain from "./components/Domain";
import Research from "./components/Research";
import Features from "./components/Features";
import Tools from "./components/Tools";
import Milestones from "./components/Milestones";
import Team from "./components/Team";
import Docs from "./components/Docs";
import ProjectLinks from "./components/ProjectLinks";

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

        {/* Project Links */}
        <ProjectLinks />
      </main>

      <footer className="bg-gradient-to-b from-orange-100 to-orange-200 text-black py-8 text-center text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">TravelMachan</span>. Built with ❤️,
          Your trusted companion for smart travel planning.
        </p>
      </footer>
    </div>
  );
}
