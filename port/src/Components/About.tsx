"use client"

import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <div className="rounded-full overflow-hidden">
            <Image src="/placeholder.svg" alt="About Me Illustration" width={400} height={400} />
          </div>
        </div>
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            I am a passionate Frontend Developer with experience in React, Next.js, and modern web technologies.
            Currently pursuing a Bachelor's in Technology, I specialize in creating responsive and user-friendly
            interfaces.
          </p>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill) => (
              <span key={skill} className="bg-purple-800 bg-opacity-50 px-4 py-2 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

