import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNews } from '../api/CallApi.js';

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Toți'); // Default to 'Toți'

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

  if (loading) return <p className="d-flex justify-content-center mt-5">Se încarcă...</p>;
  if (error) return <p>Eroare: {error}</p>;

  const filteredNews = selectedCategory === 'Toți' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const categories = ['Toți', ...new Set(news.map(item => item.category))];

  return (
    <div className="container">
      <h1>Detalii jucatori</h1>
      
      <div className="mb-2 text-center">
        {categories.map(category => (
          <button
            key={category}
            className={`btn me-2 ${selectedCategory === category ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
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
                  <p className="card-text text-muted"><i className="bi bi-calendar-event me-1"></i>{item.data}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
