import { fetchMovieCredits } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(data => setMovie(data));
  }, [movieId]);

  return (
    <div>
      <ul className={styles.list}>
        {movie?.cast?.map(({ id, profile_path, name, character }) => (
          <li key={id} className={styles.list_item}>
            <img
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt=""
            />
            <h6>{name}</h6>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
