"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Design",
    image: "/placeholder.svg?height=300&width=300",
    description: "UI/UX Design Projects",
  },
  {
    title: "Mockup",
    image: "/placeholder.svg?height=300&width=300",
    description: "Project Mockups",
  },
  {
    title: "UI Design",
    image: "/placeholder.svg?height=300&width=300",
    description: "Interface Designs",
  },
]

export default function Work() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 gradient-text"
      >
        My Recent Work
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="crystal rounded-xl p-6 text-white"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

