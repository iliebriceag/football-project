import React from 'react';
import './../css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="animate fadeInDown one">Scroll pentru a viziona jucătorii</h1>
        <div className="scroll-icon">
          <i className="bi bi-chevron-double-down animate fadeInUp two"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
