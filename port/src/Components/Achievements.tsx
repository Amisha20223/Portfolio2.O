"use client"

import { motion } from "framer-motion"

export default function Achievements() {
  const achievements = [
    "KICCS-D-HACK: Secured 1st Runner-Up position, showcasing outstanding coding abilities.",
    "Graph-Ethon 2024: Awarded 1st Runner-Up in National Level Hackathon.",
    "DTU Avahaan'23: Achieved 1st Runner-Up title in Inter-College Women's Football tournament.",
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Achievements</h2>
      <ul className="list-disc list-inside">
        {achievements.map((achievement, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-2 text-gray-700"
          >
            {achievement}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}

