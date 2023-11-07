import React, { useState } from 'react';
import chevron from "../images/down-chevron.png";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  return ( 
    <div className="dropdown">
      <div className="dropdown-title" onClick={toggleDropdown}>
        {title}
        <img className={isRotated ? 'chevron rotate' : 'chevron'} src={chevron} alt="Chevron" />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {content}
        </div>
      )}
    </div>
  );
};

export default Dropdown;



  



