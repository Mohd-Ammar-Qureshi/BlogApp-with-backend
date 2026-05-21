import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-indigo-600",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 m-1 hover:bg-indigo-700 font-semibold active:scale-95 rounded-lg shadow transition-all duration-150 text-sm" ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
