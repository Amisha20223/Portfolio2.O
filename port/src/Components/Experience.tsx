"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Jopsphere",
      period: "Jun 2024 - Aug 2024",
      responsibilities: [
        "Designed and optimized responsive, user-friendly interfaces, reducing page load time by 30% and improving user retention by 15%.",
        "Developed interactive career, personality, and skill assessment tests with animations using Framer Motion.",
      ],
    },
    {
      title: "JavaScript Developer Intern",
      company: "SoftCode",
      period: "Ongoing",
      responsibilities: [
        "Developing a comprehensive billing software using ReactJS and ElectronJS.",
        "Redesigned the frontend and database schema, increasing software efficiency by 80%.",
        "Optimized the interface with Electron.js, reducing page load time by 25% and improving user retention by 20%.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Work Experience</h2>
      {experiences.map((exp, index) => (
        <motion.div key={index} variants={itemVariants} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <address className="not-italic text-gray-600">{exp.company}</address>
          <p className="text-gray-500">{exp.period}</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {exp.responsibilities.map((resp, idx) => (
              <motion.li key={idx} variants={itemVariants} className="text-gray-700">
                {resp}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
  );
}
