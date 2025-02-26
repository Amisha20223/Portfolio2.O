"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Jobsphere",
      period: "Jun 2024 - Aug 2024",
      responsibilities: [
        "Built and optimized responsive, user-friendly interfaces, reducing page load time by 30% and increasing user retention by 15%.",
        "Developed interactive career, personality, and skill tests with animation using Framer Motion.",
      ],
    },
    {
      title: "JavaScript Developer Intern",
      company: "SoftCode",
      period: "Ongoing",
      responsibilities: [
        "Develop the complete Billing software with the help of ReactJS, ElectronJS.",
        "Redesign the frontend and database schemas to increase the efficiency of software up to 80%.",
        "Optimized responsive, intuitive interfaces using Electron.js, achieving a 25% reduction in page load time and a 20% improvement in user retention.",
      ],
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Work Experience</h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="text-gray-600">{exp.company}</p>
          <p className="text-gray-500">{exp.period}</p>
          <ul className="list-disc list-inside mt-2">
            {exp.responsibilities.map((resp, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + idx * 0.1 }}
                className="text-gray-700"
              >
                {resp}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  )
}

