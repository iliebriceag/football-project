import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api/CallApi.js';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import Notification from '../components/Banner';
import Header from '../components/Header';

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [notification, setNotification] = useState({ message: '', visible: false });
  const itemsPerPage = 8;

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  const handleFavorite = (item) => {
    let updatedFavorites;
    if (favorites.some(fav => fav.id === item.id)) {
      updatedFavorites = favorites.filter(fav => fav.id !== item.id);
      setNotification({ message: 'Șters de la favorite!', visible: true });
    } else {
      updatedFavorites = [...favorites, item];
      setNotification({ message: 'Adăugat la favorite!', visible: true });
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    setTimeout(() => {
      setNotification({ ...notification, visible: false });
    }, 3000);
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) return <p>Error: {error}</p>;

  const filteredNews = news.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  return (
    <div>
      <Header/>
      <div className="container" >


        <Notification message={notification.message} visible={notification.visible} />

        <div className="mb-4 text-center" style={{marginTop: '81vh'}}>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Caută după nume..."
              aria-label="Search"
              aria-describedby="basic-addon1"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          {currentItems.map((item) => (
            <Card
              key={item.id}
              item={item}
              isFavorite={favorites.some(fav => fav.id === item.id)}
              onFavorite={() => handleFavorite(item)}
            />
          ))}
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Home;
