"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-indigo-600"
        >
          Amisha Singh
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="space-x-4">
          <a href="mailto:maheaa077@gmail.com" className="text-indigo-600 hover:text-indigo-800">
            maheaa077@gmail.com
          </a>
          <span className="text-indigo-600">|</span>
          <a href="tel:7388977687" className="text-indigo-600 hover:text-indigo-800">
            7388977687
          </a>
        </motion.div>
      </div>
    </motion.header>
  )
}

