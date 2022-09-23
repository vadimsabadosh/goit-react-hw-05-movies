import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './MovieList.module.css';
import { useLocation } from 'react-router-dom';
import PropsTypes from 'prop-types';

function MovieList({ list }) {
  const location = useLocation();
  return (
    <ListGroup>
      {list.map(({ id, title }) => (
        <ListGroup.Item key={id}>
          <Link to={`/movies/${id}`} className={styles.link} state={location}>
            {title}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default MovieList;

MovieList.propTypes = {
  list: PropsTypes.arrayOf(
    PropsTypes.shape({
      id: PropsTypes.number,
      title: PropsTypes.string,
    })
  ).isRequired,
};
