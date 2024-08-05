import React from 'react';
import './../css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Scroll pentru a viziona jucătorii</h1>
        <div className="scroll-icon">
          <i className="bi bi-arrow-down-circle"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
