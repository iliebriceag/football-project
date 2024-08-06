import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [notification, setNotification] = useState({ message: '', visible: false });
  
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
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

  if (favorites.length === 0) {
    return <p className='text-center mt-5 mb-5'>Nu s-au găsit favorite!</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className='text-center'>Favorite</h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        {favorites.map((item) => (
          <Card key={item.id} item={item} isFavorite={favorites.some(fav => fav.id === item.id)}
            onFavorite={() => handleFavorite(item)} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
