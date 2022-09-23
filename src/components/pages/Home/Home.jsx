import { fetchTrendingList } from 'api';
import MovieList from 'components/elements/MovieList';
import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const data = await fetchTrendingList();
    setData(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      <MovieList list={data} />
    </div>
  );
}
