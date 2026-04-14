import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-12 px-6 md:px-20 border-t border-slate-700">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

        {/* LEFT - INTRO */}
        <div>
          <h2 className="text-lg font-semibold text-purple-400">
            Shivansh_Kumar <span className="text-gray-400">/ Portfolio</span>
          </h2>

          <p className="text-gray-400 text-sm mt-4">
            Final year CS student building scalable backend systems with Node.js & Express.js.
          </p>

          {/* Social Icons */}
          {/* <div className="flex gap-3 mt-4">
            <div className="bg-gray-800 p-2 rounded hover:bg-gray-700 cursor-pointer">🐙</div>
            <div className="bg-gray-800 p-2 rounded hover:bg-gray-700 cursor-pointer">💼</div>
            <div className="bg-gray-800 p-2 rounded hover:bg-gray-700 cursor-pointer">✏️</div>
            <div className="bg-gray-800 p-2 rounded hover:bg-gray-700 cursor-pointer">✉️</div>
          </div> */}

          {/* Status */}
          <div className="mt-4 inline-flex items-center gap-2 bg-green-900/20 text-green-400 px-3 py-1 rounded-full text-sm">
            <span>●</span> Open to work · 2026
          </div>
        </div>

        {/* NAVIGATE */}
        <div className="flex flex-col gap-1 text-gray-400">
          <h3 className="text-gray-300 font-semibold mb-3">NAVIGATE</h3>
          <Link
            to="/" className="inline-block hover:text-white transition w-fit">Home</Link>
          <Link
            to="/about" className="inline-block hover:text-white transition w-fit">About</Link>
          <Link
            to="/skills" className="inline-block hover:text-white transition w-fit">Skills</Link>
          <Link
            to="/projects" className="inline-block hover:text-white transition w-fit">Projects</Link>
          <Link
            to="/contact" className="inline-block hover:text-white transition w-fit">Contact</Link>
        </div>

        {/* PROJECTS */}
        <div>
          <h3 className="text-gray-300 font-semibold mb-3">PROJECTS</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>EchoVerse</li>
            <li>QuickPost</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-gray-300 font-semibold mb-3">CONTACT</h3>
          <p className="text-gray-400 text-sm">shivanshsingh806@email.com</p>
          <p className="text-gray-400 text-sm mt-2">Bhopal, India</p>

          {/* <h3 className="text-gray-300 font-semibold mt-4 mb-2">RESUME</h3>
          <p className="text-purple-400 text-sm cursor-pointer">Download PDF</p>
          <p className="text-purple-400 text-sm cursor-pointer">View online</p> */}
        </div>
      </div>

      {/* BUILT WITH */}
      {/* <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex flex-wrap gap-3 text-xs">
          {["React", "Tailwind CSS", "Vite", "EmailJS", "Vercel"].map(
            (item, index) => (
              <span
                key={index}
                className="bg-gray-800 px-3 py-1 rounded-full text-gray-300"
              >
                {item}
              </span>
            )
          )}
        </div> */}

      {/* <p className="text-gray-500 text-sm">
          Deployed on Vercel · Free tier
        </p> */}
      {/* </div> */}

      {/* BOTTOM */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p className="text-center sm:text-left">
            © 2026 Shivansh Kumar · All rights reserved · Bhopal, India
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="sm:ml-auto cursor-pointer text-white bg-[#1e293b] px-4 py-2 rounded-md hover:bg-[#334155] transition whitespace-nowrap"
          >
            Back to top
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;