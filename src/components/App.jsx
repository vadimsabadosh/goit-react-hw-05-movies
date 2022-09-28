import { Navigate, Route, Routes } from 'react-router-dom';
import NavMenu from './elements/NavMenu/NavMenu';
import { lazy } from 'react';

const Movies = lazy(() => import('./pages/Movies'));
const Home = lazy(() => import('./pages/Home'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavMenu />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
