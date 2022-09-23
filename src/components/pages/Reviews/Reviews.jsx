import { fetchMovieReviews } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);
  return (
    <ul className={styles.ul}>
      {!reviews.length && <h3>There is no review for this movie</h3>}
      {reviews?.map(({ id, author, content, created_at }) => {
        const date = new Date(created_at);
        return (
          <li key={id} className={styles.li}>
            <h6>{author}</h6>
            <p>{content}</p>
            <span>{date.toLocaleDateString()}</span>
          </li>
        );
      })}
    </ul>
  );
}
