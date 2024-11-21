import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, className, to }) => {
  return (
    <button
      className={`py-2 bg-[#0156FF] border-2 border-[#0156FF] text-white font-semibold rounded-full duration-300 hover:bg-transparent hover:text-[#0156FF] ${className}`}
    >
      <Link to={to}>{children}</Link>
    </button>
  );
};

export default Button;
