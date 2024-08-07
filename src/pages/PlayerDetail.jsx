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

    const { name, title, description, data, image, category, current_team, market_value, transfer_history, matches_played } = player;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img className="image-detail" src={image} alt={name} />
                </div>
                <div className="col-md-6 mt-5">
                    <h2>{name}</h2>
                    <p className="text-muted">{category}</p>
                    <h5 className="text-muted">{market_value}</h5>
                    <p className="text">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
                            <g fill="#000000">
                                <path d="M32 2L12 10v18c0 12 8 26 20 34 12-8 20-22 20-34V10L32 2z" stroke="#000" stroke-width="2" fill="none" />
                                <path d="M32 6L16 12v14c0 10 6.7 21.5 16 28 9.3-6.5 16-18 16-28V12L32 6z" fill="#000" />
                                <polygon points="32,20 34,28 42,28 36,32 38,40 32,36 26,40 28,32 22,28 30,28" fill="#FFF" />
                            </g>
                        </svg>
                        Echipa actuală:
                        <span className='text-muted'> {current_team}</span> 
                    </p>
                    <p>{title}</p>
                    <p className="text-muted">{data}</p>
                    <p>{description}</p>
                    
                    <h4>Istoric transferuri</h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Echipa</th>
                                <th>An</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transfer_history.map((transfer, index) => (
                                <tr key={index}>
                                    <td>{transfer.team}</td>
                                    <td>{transfer.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                    <h4>Meciuri jucate</h4>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Echipa</th>
                                <th>Meciuri jucate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(matches_played).map(([team, matches], index) => (
                                <tr key={index}>
                                    <td>{team}</td>
                                    <td>{matches} meciuri</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PlayerDetail;
