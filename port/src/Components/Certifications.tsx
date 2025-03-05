"use client";

import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      name: "Data Structures",
      description: "Explored fundamental data organization techniques and algorithms.",
      provider: "Self-Learning / Online Courses",
    },
    {
      name: "SQL Essentials",
      description: "Gained practical knowledge in querying databases, managing data, and performing essential database operations.",
      provider: "Coursera / Udemy",
    },
    {
      name: "CISCO Switching, Routing, and Wireless",
      description: "Focused on configuring and managing network switches, routers, and wireless networks for secure and efficient communication.",
      provider: "Cisco Networking Academy",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Certifications</h2>
      <ul className="space-y-4">
        {certifications.map((cert, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-gray-700 flex flex-col"
          >
            <strong className="text-lg text-indigo-800">{cert.name}</strong>
            <span className="text-sm">{cert.description}</span>
            <span className="text-gray-500 text-sm">Provider: {cert.provider}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
