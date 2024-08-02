import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNews } from '../api/CallApi.js';

function Categories() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Toți');

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

  if (loading) return <div className="d-flex justify-content-center mt-5"><div class="spinner-border spinner" role="status">
    <span class="visually-hidden">Loading...</span>
  </div></div>;
  if (error) return <p>Eroare: {error}</p>;

  const filteredNews = selectedCategory === 'Toți'
    ? news
    : news.filter(item => item.category === selectedCategory);

  const categories = ['Toți', ...new Set(news.map(item => item.category))];

  return (
    <div className="container">
      <h1 className='text-center'>Categorii</h1>
      <p className='text-muted text-center mb-5'>În această secțiune găsiți detalii despre mai mulți jucători de nivel mare.</p>

      <div className="mb-2 text-center">
        {categories.map(category => (
          <button
            key={category}
            className={`me-2 ${selectedCategory === category ? 'my-btn-primary' : 'my-btn-secondary'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        {filteredNews.map((item) => (
          <div className="col" key={item.id}>
            <div className="card">
              <Link to={`/player/${item.id}`} className="text-decoration-none text-dark">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text text-muted">{item.category}</p>
                  <h5 className="card-title text-muted">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text text-muted"></p>
                  <div className="card-footer"><i className="bi bi-calendar-event me-1"></i>{item.data}</div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
