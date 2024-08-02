import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <img src="/icon.png" class="logo"></img><a class="navbar-brand fw-bold ms-1" href="#">Fotbal</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/"><i class="bi bi-house-door-fill me-1"></i>Acasa</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/news">News</Link>
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
