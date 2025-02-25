"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Home from "@/components/Home"
import About from "@/components/About"
import Work from "@/components/Work"
import Contact from "@/components/Contact"
import Navigation from "@/components/Navigation"

export default function Page() {
  const [currentSection, setCurrentSection] = useState("home")

  return (
    <div className="min-h-screen overflow-hidden">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <motion.main
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {currentSection === "home" && <Home />}
        {currentSection === "about" && <About />}
        {currentSection === "work" && <Work />}
        {currentSection === "contact" && <Contact />}
      </motion.main>
    </div>
  )
}

