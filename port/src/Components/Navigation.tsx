"use client";

import { motion } from "framer-motion";

interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export default function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
  const navItems = ["home", "about", "work", "contact"];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-8 py-4">
          {navItems.map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => setCurrentSection(item)}
                className={`capitalize text-lg transition-colors duration-300 focus:outline-none ${
                  currentSection === item ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                aria-current={currentSection === item ? "page" : undefined}
              >
                {item}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
