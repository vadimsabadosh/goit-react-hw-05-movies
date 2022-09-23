import MovieList from 'components/elements/MovieList';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from '../../../api';
import styles from './Movies.module.css';

export default function Movies() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = e => setSearch(e.target.value);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      fetchMoviesBySearch(query).then(data => setData(data.results));
    }
  }, []);

  const onSubmit = () => {
    if (search) {
      fetchMoviesBySearch(search).then(data => setData(data.results));
      setSearchParams({ query: search });
    }
  };

  return (
    <div>
      <div className={styles.input_block}>
        <input
          type="text"
          value={search}
          onChange={onChange}
          placeholder="Enter the movie name...."
        />
        <button onClick={onSubmit} className={styles.btn}>
          Search
        </button>
      </div>
      <MovieList list={data} />
    </div>
  );
}
