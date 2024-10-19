import React from "react";
import Tablet from "../../public/Common Images/Tablet-logo.png";
import Desktop from "../../public/Common Images/Desktop-logo.png";
import Mobile from "../../public/Common Images/Mobile-logo.png";

const Logo = ({ className }) => {
  return (
    <div className={`${className}`}>
      <picture>
        <source media="(min-width: 1024px)" srcset={Desktop} />
        <source media="(min-width: 768px)" srcset={Tablet} />
        <img src={Mobile} alt="" />
      </picture>
    </div>
  );
};

export default Logo;
