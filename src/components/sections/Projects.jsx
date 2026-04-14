import React from "react";
import ProjectCard from "../ui/ProjectCard.jsx";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "EchoVerse",
      desc: "Full-stack music sharing platform with cloud-based media storage and scalable REST API. Built with MERN stack, featuring a responsive SPA and efficient handling of user data and audio content.",
      tech: ["React", "Node.js", "Express", "MongoDB", "ImageKit"],
      github: "https://github.com/shivansh806/MusicStreamingApp",
      live: "",
      featured: true,
      highlight: true
    },
    {
      id: "02",
      title: "QuickPost",
      desc: "Full-stack social posting platform to create and share posts with a responsive UI and scalable REST API. Built using MERN stack with seamless frontend-backend integration for smooth user experience.",
      tech: ["React", "Vite", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/shivansh806/QuickPost",
      live: "",
      featured: false,
      highlight:true
    }
  ];

  const handleProjects = () => {
    window.open("https://github.com/shivansh806", "_blank");
  };

  return (
    <section className="bg-[#0f172a] text-white py-16 px-6 md:px-20 border-t border-slate-700">

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-purple-400 text-sm tracking-widest">
            WHAT I'VE BUILT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>

        <button
          onClick={handleProjects}
          className="border border-gray-600 cursor-pointer px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
          View all on GitHub →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>

    </section>
  );
};

export default Projects;