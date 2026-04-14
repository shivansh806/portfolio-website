import React from "react";

const ProjectCard = ({ title, desc, tech, github, live, featured, index, highlight }) => {

  const handleP = () => {
    window.open(github, "_blank");
  }

  return (
    <div className="bg-[#1e293b] p-5 rounded-xl hover:scale-[1.02] transition-all duration-300">

      {/* Top */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-gray-500 text-sm">
          {String(index + 1).padStart(2, "0")}
        </p>

        <div className="flex gap-2">
          {github && (
            <button
              onClick={handleP}
              className="text-xs cursor-pointer hover:bg-gray-600 active:scale-95 transition-all duration-150 bg-gray-700 px-2 py-1 rounded">
              GitHub
            </button>
          )}
          {live && (
            <button className="text-xs cursor-pointer bg-green-600/20 text-green-400 px-2 py-1 rounded">
              Live
            </button>
          )}
        </div>
      </div>

      {/* Featured Tag */}
      {featured && (
        <span className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full mb-2 inline-block">
          Featured
        </span>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">{desc}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className={`text-xs bg-gray-700 px-3 py-1 rounded-full 
              ${highlight ? "bg-green-500/10 text-green-400 border-green-500/30 shadow-md shadow-green-500/10"
                : "bg-[#1e293b] text-gray-300 border-gray-600"}`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;