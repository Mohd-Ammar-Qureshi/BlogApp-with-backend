import React from "react";

const Logo = ({ width = "100px" }) => {
  return (
    <div style={{ width }} className="flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={width}
        height={width}
      >
        <rect width="100" height="100" rx="15" fill="#4F46E5" />
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fontSize="48"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          fill="white"
        >
          B
        </text>
      </svg>
      <span
        style={{ fontSize: `calc(${width})` }}
        className="font-bold text-white tracking-wide"
      >
        BlogApp
      </span>
    </div>
  );
};

export default Logo;
