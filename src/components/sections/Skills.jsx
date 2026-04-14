import React from "react";
import SkillCard from "../ui/Skillcard";
import ToolRow from "../ui/ToolRow";
import { FaJava, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman, SiDocker } from "react-icons/si";
import { MdApi } from "react-icons/md";


const Skills = () => {
  const skills = [
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "NodeJs", icon: <FaNodeJs className="text-green-400" /> },
  { name: "ExpressJs", icon: <SiExpress className="text-gray-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
];

const tools = [
  { name: "Git & GitHub", level: 80, tag: "Core", color: "purple", icon: <FaGitAlt /> },
  { name: "REST APIs", level: 75, tag: "Core", color: "purple", icon: <MdApi /> },
  { name: "System Design", level: 50, tag: "Learning", color: "green" },
  { name: "OOP principles", level: 70, tag: "Core", color: "purple" },
  { name: "Postman", level: 60, tag: "Tool", color: "gray", icon: <SiPostman /> },
  { name: "DSA", level: 75, tag: "Core", color: "purple" },
];

  return (
    <section className="bg-[#0f172a] border-t border-slate-700 text-white py-16 px-6 md:px-20">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
        <p className="text-gray-400 mt-2">
          Technologies I work with and concepts I’ve mastered
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT - TECH STACK */}
        <div>
          <h3 className="text-purple-400 mb-4 text-sm tracking-wider">
            TECHNICAL SKILLS
          </h3>

          <div className="grid grid-cols-3 gap-4 whitespace-nowrap">
            {skills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* RIGHT - TOOLS */}
        <div>
          <h3 className="text-purple-400 mb-4 text-sm tracking-wider">
            TOOLS & CONCEPTS
          </h3>

          <div className="space-y-4">
            {tools.map((tool, index) => (
              <ToolRow key={index} {...tool} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;