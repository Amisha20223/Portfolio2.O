"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="w-full max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h1 className="text-6xl font-bold gradient-text">
            Creative UI
            <br />
            Developer Amisha
            <br />
            Singh Based in
            <br />
            India
          </h1>
          <div className="flex space-x-4">
            <Button variant="default" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full">
              Hire me
            </Button>
            <Button
              variant="outline"
              className="border-purple-400 text-white hover:bg-purple-600 px-8 py-2 rounded-full"
            >
              Download CV
            </Button>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="crystal w-full h-full rounded-full opacity-30" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/4 w-32 h-32"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="crystal w-full h-full rounded-full opacity-20" />
        </motion.div>
      </div>
    </div>
  )
}

