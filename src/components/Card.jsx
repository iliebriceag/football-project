import React from 'react';
import { Link } from 'react-router-dom';
import './../css/Card.css';

const PlayerCard = ({ item, isFavorite, onFavorite }) => {
  return (
    <div className="col animate fadeInUp one-six" key={item.id}>
      <div className="card">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <button
          className={`btn-favorite ${isFavorite ? 'favorited' : ''}`}
          onClick={onFavorite}
          aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}>
          {isFavorite ? <i className="bi bi-heart-fill full"></i> : <i className="bi bi-heart-fill naked"></i>}
        </button>
        <Link to={`/jucator/${item.id}`} className="text-decoration-none text-dark">
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <h5 className="card-title text-muted">{item.title}</h5>
            <p className="card-text">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
                <g fill="#000000">
                  <path d="M32 2L12 10v18c0 12 8 26 20 34 12-8 20-22 20-34V10L32 2z" stroke="#000" stroke-width="2" fill="none" />
                  <path d="M32 6L16 12v14c0 10 6.7 21.5 16 28 9.3-6.5 16-18 16-28V12L32 6z" fill="#000" />
                  <polygon points="32,20 34,28 42,28 36,32 38,40 32,36 26,40 28,32 22,28 30,28" fill="#FFF" />
                </g>
              </svg>
              Echipa actuală: 
              <span className='text-muted'> {item.current_team}</span> </p>
            <p className="card-text">{item.description}</p>
            <div className="card-footer">
              <i className="bi bi-calendar-event me-1"></i>{item.data}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PlayerCard;
