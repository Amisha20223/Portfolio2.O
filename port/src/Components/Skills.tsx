"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "Python",
    "TypeScript",
    "HTML",
    "CSS",
    "VS Code",
    "Power BI",
    "GitHub",
    "Git",
    "ElectronJS",
    "React",
    "NextJS",
    "ReactJS",
    "React Native",
    "MySQL",
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Technical Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full cursor-pointer"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

