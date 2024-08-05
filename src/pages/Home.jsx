import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api/CallApi.js';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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

  if (loading) {
    return <Spinner />;
  }

  if (error) return <p>Eroare: {error}</p>;

  const filteredNews = news.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  return (
    <div className="container">
      <div className="mb-4 text-center">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Căutați după nume..."
            aria-label="Search"
            aria-describedby="basic-addon1"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        {currentItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
}

export default Home;
