"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden w-64 h-64">
            <Image 
              src="/placeholder.svg" 
              alt="Illustration representing a Frontend Developer" 
              width={400} 
              height={400} 
              priority 
              className="object-cover"
            />
          </div>
        </div>

        {/* About Content */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I am a passionate <strong>Frontend Developer</strong> with experience in <strong>React</strong>, <strong>Next.js</strong>, and modern web technologies.
            Currently pursuing a Bachelor's in Technology, I specialize in creating <strong>responsive</strong> and <strong>user-friendly</strong> interfaces.
          </p>
          
          {/* Skills Section */}
          <div className="flex flex-wrap gap-4">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((skill) => (
              <span 
                key={skill} 
                className="bg-purple-800 bg-opacity-50 px-4 py-2 rounded-full text-sm shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
