import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNews } from '../api/CallApi.js';

function PlayerDetail() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlayer = async () => {
      try {
        const data = await fetchNews();
        const playerData = data.find(item => item.id === id);
        if (playerData) {
          setPlayer(playerData);
        } else {
          setError('Jucătorul nu a fost găsit');
        }
      } catch (error) {
        setError('Eroare la încărcarea datelor');
      } finally {
        setLoading(false);
      }
    };

    getPlayer();
  }, [id]);

  if (loading) return <div className="d-flex justify-content-center mt-5"><div class="spinner-border spinner" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>;
  if (error) return <p className="text-danger text-center">{error}</p>;

  if (!player) return <p className="text-center">Jucătorul nu a fost găsit</p>;

  return (
    <div className="container">
      <h1>{player.name}</h1>
      <div className="card">
        <img src={player.image} className="card-img-top" alt={player.name} />
        <div className="card-body">
          <h4 className="card-title">{player.name}</h4>
          <p className="card-text text-muted">{player.category}</p>
          <h5 className="card-title text-muted">{player.title}</h5>
          <p className="card-text">{player.description}</p>
          <p className="card-text text-muted"><i className="bi bi-calendar-event me-1"></i>{player.data}</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetail;
