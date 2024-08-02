import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNews } from '../api/CallApi.js';

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredNews = news.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        {filteredNews.map((item) => (
          <div className="col" key={item.id}>
            <div className="card">
              <Link to={`/jucator/${item.id}`} className="text-decoration-none text-dark">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
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

export default Home;
