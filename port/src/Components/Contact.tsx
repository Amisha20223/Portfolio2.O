"use client"

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Send me Message
          </h2>
          <p className="text-gray-300 mb-4">
            I'm always excited to hear about new projects and opportunities. Let's create something amazing together!
          </p>
          <div className="space-y-2 text-gray-300">
            <p>Email: maheaa077@gmail.com</p>
            <p>Phone: +91 7388977687</p>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 bg-purple-800 bg-opacity-20 rounded-md text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-purple-800 bg-opacity-20 rounded-md text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 bg-purple-800 bg-opacity-20 rounded-md text-white placeholder-gray-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 bg-purple-800 bg-opacity-20 rounded-md text-white placeholder-gray-400 h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

