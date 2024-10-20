import React from "react";
import Tablet from "/Common Images/Tablet-logo.png";
import Desktop from "/Common Images/Desktop-logo.png";
import Mobile from "/Common Images/Mobile-logo.png";

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
