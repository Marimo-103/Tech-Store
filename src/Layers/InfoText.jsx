import React from "react";

const InfoText = ({className, text}) => {
  return (
    <p className={`lg:text-lg text-xs text-white font-light leading-[166.667%] lg:leading-[144.444%] ${className}`}>
      {text}
    </p>
  );
};

export default InfoText;
