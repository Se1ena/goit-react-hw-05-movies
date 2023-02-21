import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';
import Home from '../pages/HomePage/HomePage';
// import Movies from '../pages/Movies/Movies';
// import FilmsDetails from './FilmsDetails/FilmsDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

const Movies = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const FilmsDetails = lazy(() => import('./FilmsDetails/FilmsDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<FilmsDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};
