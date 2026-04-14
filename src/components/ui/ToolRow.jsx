import React from "react";

const ToolRow = ({ name, level, tag, color, icon }) => {

  const colorMap = {
    purple: "bg-purple-400",
    green: "bg-green-400",
    gray: "bg-gray-400",
  };

  const tagMap = {
    purple: "bg-purple-200 text-purple-700",
    green: "bg-green-200 text-green-700",
    gray: "bg-gray-200 text-gray-700",
  };

  return (
    <div className="bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 px-4 py-3 rounded-xl flex items-center justify-between shadow-md">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-3 w-[40%]">
        
        {/* Dot */}
        <div className={`w-2.5 h-2.5 rounded-full ${colorMap[color]}`} />

        {/* Optional Icon */}
        {icon && (
          <div className="text-gray-300 text-lg">
            {icon}
          </div>
        )}

        {/* Name */}
        <p className="text-sm text-gray-300">{name}</p>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-[40%] bg-[#0f172a] h-2 rounded-full overflow-hidden">
        <div
          className={`${colorMap[color]} h-full rounded-full transition-all duration-500`}
          style={{ width: `${level}%` }}
        ></div>
      </div>

      {/* TAG */}
      <div className={`text-xs px-3 py-1 rounded-full font-medium ${tagMap[color]}`}>
        {tag}
      </div>

    </div>
  );
};

export default ToolRow;