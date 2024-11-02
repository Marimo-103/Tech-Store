import React from "react";

const Title = ({className, text}) => {
  return (
    <h3 className={`lg:text-[32px] text-lg text-black font-semibold ${className}`}>
      {text}
    </h3>
  );
};

export default Title;
