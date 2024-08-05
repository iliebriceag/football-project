import React from 'react';
import { Link } from 'react-router-dom';
import './../css/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark mb-5">
            <div class="container">
                <img src="/icon.png" class="logo" alt="fotabl"></img><Link class="navbar-brand fw-bold ms-1" to="/">Fotbal</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Acasă</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/categorii">Categorii</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
