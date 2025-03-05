"use client";

import { motion } from "framer-motion";

export default function Education() {
  const educationItems = [
    {
      degree: "Bachelor of Technology (ECE)",
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
    <motion.section initial="hidden" animate="visible" variants={containerVariants} className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Education</h2>
      {educationItems.map((item, index) => (
        <motion.div key={index} variants={itemVariants} className="mb-4">
          <h3 className="text-xl font-semibold">{item.degree}</h3>
          <address className="not-italic text-gray-600">{item.institution}</address>
          <p className="text-gray-500">{item.period}</p>
          <p className="text-gray-500">Percentage: {item.score}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
