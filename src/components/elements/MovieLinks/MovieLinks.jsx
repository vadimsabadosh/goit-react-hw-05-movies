import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieLinks.module.css';

function MovieLinks() {
  return (
    <ul className={styles.links}>
      <li>
        <Link to="cast" className={styles.link}>
          Cast
        </Link>
      </li>
      <li>
        <Link to="reviews" className={styles.link}>
          Reviews
        </Link>
      </li>
    </ul>
  );
}

export default MovieLinks;
