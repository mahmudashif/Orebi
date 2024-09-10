import React from "react";

const Dropdown = ({ children, className, onClick, dropdownRef}) => {
  return (
    <div className={className} onClick={onClick} ref={dropdownRef}>
      {children}
    </div>
  );
};

export default Dropdown;
