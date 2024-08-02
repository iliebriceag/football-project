import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api/CallApi.js';
import Spinner from '../components/Spinner';
import Card from '../components/Card';

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

  if (loading) {
    return <Spinner />;
  }
  
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
            className={`me-2 mt-2 ${selectedCategory === category ? 'my-btn-primary' : 'my-btn-secondary'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        {filteredNews.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
