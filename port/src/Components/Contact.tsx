"use client";

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Send me a Message
          </h2>
          <p className="text-gray-300 mb-4">
            I'm always excited to hear about new projects and opportunities. Let's create something amazing together!
          </p>
          <div className="space-y-2 text-gray-300">
            <p>
              Email:{" "}
              <a href="mailto:maheaa077@gmail.com" className="text-purple-400 hover:underline">
                maheaa077@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+917388977687" className="text-purple-400 hover:underline">
                +91 7388977687
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-2 bg-purple-800 bg-opacity-20 rounded-md text-white placeholder-gray-400 shadow-md focus:outline-none"
            aria-label="Name"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 bg-purple-800 bg-opacity-20 rounded-md text-white placeholder-gray-400 shadow-md focus:outline-none"
            aria-label="Email"
          />
          <input
            type="text"
            placeholder="Subject"
            required
            className="w-full p-2 bg-purple-800 bg-opacity-20 rounded-md text-white placeholder-gray-400 shadow-md focus:outline-none"
            aria-label="Subject"
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full p-2 bg-purple-800 bg-opacity-20 rounded-md text-white placeholder-gray-400 h-32 shadow-md focus:outline-none"
            aria-label="Your Message"
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
  );
}
