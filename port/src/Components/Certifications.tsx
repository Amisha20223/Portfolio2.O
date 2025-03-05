"use client";

import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    "Data Structures – Explored fundamental data organization techniques and algorithms.",
    "SQL Essentials – Gained practical knowledge in querying databases, managing data, and performing essential database operations.",
    "CISCO Switching, Routing, and Wireless – Focused on configuring and managing network switches, routers, and wireless networks for secure and efficient communication."
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Certifications</h2>
      <ul className="list-disc list-inside">
        {certifications.map((cert, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-2 text-gray-700"
          >
            {cert}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
