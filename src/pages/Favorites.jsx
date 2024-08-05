import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <p className='text-center mt-5 mb-5'>Nu s-au găsit favorite</p>;
  }

  return (
    <div className="container">
      <h1 className='text-center'>Favorite</h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        {favorites.map((item) => (
          <Card key={item.id} item={item} isFavorite={true} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
