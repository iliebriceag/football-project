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
