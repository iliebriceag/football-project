import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './../css/Navbar.css';

function Navbar() {
    const navbarCollapseRef = useRef(null);

    const handleLinkClick = () => {
        if (navbarCollapseRef.current) {
            navbarCollapseRef.current.classList.remove('show');
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark mb-5">
            <div className="container">
                <img src="/icon.png" className="logo" alt="fotabl" />
                <Link className="navbar-brand fw-bold ms-1" to="/">Fotbal</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleLinkClick}>Acasă</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/favorite" onClick={handleLinkClick}>Favorite</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorii" onClick={handleLinkClick}>Categorii</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={handleLinkClick}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
