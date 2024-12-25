import React from "react";

const Header = () => {
    
  return (
    <header className="header">
      <div className="header_name">Mahan Soodbakhsh</div>
      <ul className="flex gap-6 max-md:hidden">
        <li className="cursor-pointer"> contact</li>
        <li className="cursor-pointer"> portfolio</li>
        <li className="cursor-pointer"> about</li>
        <li className="cursor-pointer"> services</li>
      </ul>
      <button title="comingSoon" className="header_cvButton">Download CV</button>
    </header>
  );
};

export default Header;
