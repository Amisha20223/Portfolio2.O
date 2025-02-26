"use client"

import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      name: "FINIUS",
      technologies: "NextJs, React, TypeScript, Tailwind",
      period: "Dec 2023 - Jan 2024",
      description: [
        "Developed educational solutions aimed at enhancing financial literacy, resulting in a 25% improvement in user engagement within the first month of launch.",
        "Created interactive courses and resources covering budgeting, saving, investing, debt management, and retirement planning, leading to a 30% increase in course completion rates in future.",
        "Enhanced user engagement through interactive financial education tools and resources, increasing returning users by 20%.",
      ],
    },
    {
      name: "Billing System",
      technologies: "React, JavaScript",
      period: "Nov 2023 - Dec 2023",
      description: [
        "Designed and implemented user-friendly interfaces, which resulted in a 30% reduction in user errors during billing processes.",
        "Integrated real-time data updates and responsive design to enhance user experience by 15%",
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
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Projects</h2>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="mb-6"
        >
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-gray-600">{project.technologies}</p>
          <p className="text-gray-500">{project.period}</p>
          <ul className="list-disc list-inside mt-2">
            {project.description.map((desc, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + idx * 0.1 }}
                className="text-gray-700"
              >
                {desc}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  )
}

