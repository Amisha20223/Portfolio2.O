"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">Send me Message</h2>
          <p className="text-gray-300 mb-4">
            I'm always excited to hear about new projects and opportunities. Let's create something amazing together!
          </p>
          <div className="space-y-2 text-gray-300">
            <p>Email: maheaa077@gmail.com</p>
            <p>Phone: +91 7388977687</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <Input type="text" placeholder="Name" className="glass-effect text-white" />
          <Input type="email" placeholder="Email" className="glass-effect text-white" />
          <Input type="text" placeholder="Subject" className="glass-effect text-white" />
          <Textarea placeholder="Your Message" className="glass-effect text-white h-32" />
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Send Message
          </Button>
        </motion.form>
      </div>
    </div>
  )
}

