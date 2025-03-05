"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-indigo-600"
        >
          Amisha Singh
        </motion.h1>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center space-x-2 md:space-x-4 text-indigo-600 text-center mt-4 md:mt-0"
        >
          <a
            href="mailto:amisharajput977@gmail.com"
            className="hover:text-indigo-800 transition-colors duration-200"
            aria-label="Send an email to Amisha Singh"
          >
            amisharajput977@gmail.com
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="tel:+917388977687"
            className="hover:text-indigo-800 transition-colors duration-200"
            aria-label="Call Amisha Singh"
          >
            +91 73889 77687
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
}
