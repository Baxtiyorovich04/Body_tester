import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img 
          src="/assets/icons/main_header_icon.svg" 
          alt="Header Icon" 
          className="header__icon"
        />
      </div>
    </header>
  );
};

export default Header;
