import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import News from './pages/News';
import Page404 from './pages/Page404';
import Home from './pages/Home';
import PlayerDetail from './pages/PlayerDetail';


function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <img src="/icon.png" class="logo"></img><a class="navbar-brand fw-bold ms-1" href="#">Fotbal</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/"><i class="bi bi-house-door-fill me-1"></i></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/news">Jucători</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">Contact</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/player/:id" element={<PlayerDetail />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
