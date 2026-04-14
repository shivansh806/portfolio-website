import React from "react";

const SkillCard = ({ name, icon }) => {
  return (
    <div className="bg-[#1e293b] p-4 rounded-xl flex flex-col items-center justify-center hover:bg-[#334155] transition duration-300">
      
      {/* Icon */}
      <div className="text-3xl text-purple-400 mb-2">
        {icon}
      </div>

      {/* Name */}
      <p className="text-sm text-gray-300">{name}</p>
    </div>
  );
};

export default SkillCard;