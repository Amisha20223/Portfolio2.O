"use client"

import { useState } from "react"
import Home from "../Components/Home"
import About from "../Components/About"
import Work from "../Components/Work"
import Contact from "../Components/Contact"
import Navigation from "../Components/Navigation"

export default function Page() {
  const [currentSection, setCurrentSection] = useState("home")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="container mx-auto px-4 py-8">
        {currentSection === "home" && <Home />}
        {currentSection === "about" && <About />}
        {currentSection === "work" && <Work />}
        {currentSection === "contact" && <Contact />}
      </main>
    </div>
  )
}

