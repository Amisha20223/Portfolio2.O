"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="w-full max-w-4xl mx-auto relative">
        <div className="text-white space-y-6 text-center">
          <h1 
            className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Creative UI
            <br />
            Developer Amisha
            <br />
            Singh Based in
            <br />
            India
          </h1>

          <div className="flex justify-center space-x-4">
            <Link href="/contact" passHref>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="Hire Amisha Singh"
              >
                Hire me
              </button>
            </Link>

            <Link href="/cv" target="_blank" rel="noopener noreferrer">
              <button
                className="border border-purple-400 text-white hover:bg-purple-600 px-8 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label="View Amisha Singh's CV"
              >
                View CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
