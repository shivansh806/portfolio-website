import React from 'react';

const About = () => {
  return (
    <section className="bg-[#0f172a] text-white py-16 px-6 md:px-20 border-t border-slate-700">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-purple-400 tracking-widest text-sm">GET TO KNOW ME</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">About me</h2>
      </div>

      {/* Main Container */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-6 text-gray-300">
          <p>
            I am a passionate Computer Science student, with a strong interest in full-stack development.
            I have hands-on experience working with technologies like Java, Spring Boot, Node.js, Express.js, React, and MySQL. I enjoy building real-world applications and have developed multiple projects including RESTful APIs and scalable backend systems.
          </p>

          <p>
            I am also skilled in Data Structures and Algorithms, solved <span className="text-white font-semibold">400+ problems on LeetCode</span>, Currently, I am focused on enhancing my backend development skills and building efficient, scalable applications.
            I am actively seeking opportunities where I can contribute, learn, and grow as a software developer.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Java Developer" },
              { name: "Backend Focused" },
              { name: "DSA Enthusiast" },
              { name: "Open to Work", highlight: true },
              { name: "Bhopal, India" },
            ].map((tag, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm border transition
                 ${tag.highlight ? "bg-green-500/10 text-green-400 border-green-500/30 shadow-md shadow-green-500/10"
                    : "bg-[#1e293b] text-gray-300 border-gray-600"}`}
              >
                {tag.name}
              </span>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Top Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1e293b] p-5 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-400">400+</h3>
              <p className="text-gray-400 text-sm">LeetCode problems</p>
            </div>

            <div className="bg-[#1e293b] p-5 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-400">5+</h3>
              <p className="text-gray-400 text-sm">Projects built</p>
            </div>
          </div>

          {/* CGPA */}
          {/* <div className="bg-[#1e293b] p-5 rounded-xl">
            <p className="text-gray-400 text-sm mb-2">CGPA</p>
            <h3 className="text-2xl font-bold text-green-400">7.95 / 10</h3> */}

          {/* Progress Bar */}
          {/* <div className="w-full bg-gray-700 h-2 rounded-full mt-3">
              <div className="bg-green-400 h-2 rounded-full w-[79%]"></div>
            </div>
          </div> */}

          {/* LeetCode Rank */}
          <div className="bg-[#1e293b] p-5 rounded-xl">
            <p className="text-gray-400 text-sm mb-2">LeetCode streak</p>
            <h3 className="text-xl font-bold text-yellow-400">Top 15%</h3>

            <div className="w-full bg-gray-700 h-2 rounded-full mt-3">
              <div className="bg-yellow-400 h-2 rounded-full w-[70%]"></div>
            </div>
          </div>

          {/* Bottom Box */}
          <div className="bg-[#1e293b] p-5 rounded-xl border border-purple-500/30">
            <p className="text-sm text-gray-300">
              <span className="text-purple-400">●</span> Currently learning System Design & Microservices — actively applying for SDE roles at MNCs
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;