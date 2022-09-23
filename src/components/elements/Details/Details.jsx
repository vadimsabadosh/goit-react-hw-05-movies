import React from 'react';
import styles from './Details.module.css';
import PropsTypes from 'prop-types';

function Details({ poster_path, title, vote_average, overview, genres }) {
  return (
    <div className={styles.container}>
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          title={title}
          className={styles.image}
        />
      )}
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>
          User Score: {Math.round(vote_average * 10)}%
        </p>
        <h5 className={styles.overview}>Overview</h5>
        <p className={styles.text}>{overview}</p>
        <h6 className={styles.genres}>Genres</h6>
        <ul className={styles.genres_list}>
          {genres?.map(({ id, name }) => (
            <li key={id} className={styles.genres_item}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
Details.propTypes = {
  poster_path: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  vote_average: PropsTypes.number.isRequired,
  overview: PropsTypes.string.isRequired,
  genres: PropsTypes.arrayOf(
    PropsTypes.shape({
      id: PropsTypes.number.isRequired,
      name: PropsTypes.string.isRequired,
    })
  ).isRequired,
};
