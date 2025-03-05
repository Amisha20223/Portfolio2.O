"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      title: "KICCS-D-HACK",
      description: "Secured 1st Runner-Up position, showcasing outstanding coding abilities.",
    },
    {
      title: "Graph-Ethon 2024",
      description: "Awarded 1st Runner-Up in the National Level Hackathon.",
    },
    {
      title: "DTU Avahaan'23",
      description: "Achieved 1st Runner-Up title in the Inter-College Women's Football tournament.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Achievements</h2>
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-gray-700 flex flex-col"
          >
            <strong className="text-lg text-indigo-800">{achievement.title}</strong>
            <span className="text-sm">{achievement.description}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
