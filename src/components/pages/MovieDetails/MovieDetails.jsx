import { fetchMovieDetails } from 'api';
import Details from 'components/elements/Details/Details';
import MovieLinks from 'components/elements/MovieLinks';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const [state] = useState(location.state || '/');

  useEffect(() => {
    fetchMovieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);

  if (!movie) return null;

  return (
    <div>
      <div>
        <Link to={state} className="go-back">
          Go Back
        </Link>
        <Details
          poster_path={movie.poster_path}
          title={movie.title}
          vote_average={movie.vote_average}
          overview={movie.overview}
          genres={movie.genres}
        />
        <MovieLinks />
      </div>
      <Outlet />
    </div>
  );
}
