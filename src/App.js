import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import Page404 from './pages/Page404';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import PlayerDetail from './pages/PlayerDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className='background-light'>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categorii" element={<Categories />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/jucator/:id" element={<PlayerDetail />} />
          <Route path="*" element={<Page404 />} />

        </Routes>

        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
