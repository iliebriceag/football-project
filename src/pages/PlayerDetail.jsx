import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayerDetail } from '../api/CallPlayerDetail';
import Spinner from '../components/Spinner';
import './../css/PlayerDetail.css';

function PlayerDetail() {
    const { id: paramId } = useParams();
    const [player, setPlayer] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPlayerDetails = async () => {
            try {
                const data = await fetchPlayerDetail(paramId);
                setPlayer(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getPlayerDetails();
    }, [paramId]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <p className="text-danger text-center">Error: {error}</p>;
    }

    if (!player) {
        return <p className="text-center">Jucătorul nu a fost găsit</p>;
    }

    const { name, title, description, data, image, category } = player;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img className="image-detail" src={image} alt={name} />
                </div>
                <div className="col-md-6 mt-5">
                    <h2>{name}</h2>
                    <p className="text-muted">{category}</p>
                    <p>{title}</p>
                    <p className="text-muted">{data}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default PlayerDetail;
