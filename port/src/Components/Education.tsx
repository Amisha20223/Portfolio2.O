"use client"

import { motion } from "framer-motion"

export default function Education() {
  const educationItems = [
    {
      degree: "Bachelor in Technology (ECE)",
      institution: "KIET Group Of Institutions",
      period: "Nov 2021 - Present",
      score: "70%",
    },
    {
      degree: "Intermediate (ISC Board)",
      institution: "St John's School",
      period: "Apr 2019 - Jul 2020",
      score: "61.2%",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Education</h2>
      {educationItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="mb-4"
        >
          <h3 className="text-xl font-semibold">{item.degree}</h3>
          <p className="text-gray-600">{item.institution}</p>
          <p className="text-gray-500">{item.period}</p>
          <p className="text-gray-500">Score: {item.score}</p>
        </motion.div>
      ))}
    </motion.section>
  )
}

