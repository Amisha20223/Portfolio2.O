"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        <div className="md:w-1/2">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="About Me Illustration"
              width={400}
              height={400}
              className="rounded-full"
            />
          </motion.div>
        </div>
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 mb-4"
          >
            I am a passionate Frontend Developer with experience in React, Next.js, and modern web technologies.
            Currently pursuing a Bachelor's in Technology, I specialize in creating responsive and user-friendly
            interfaces.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill, index) => (
              <span key={skill} className="crystal px-4 py-2 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

