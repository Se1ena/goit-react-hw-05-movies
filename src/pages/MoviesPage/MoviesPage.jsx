import React, { useEffect, useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import FilmsList from '../../components/FilmsList/FilmsList';
import { fetchMovieBySearch } from '../.././components/api-services';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [filmsBySearch, setFilmsBySearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    (async function getFilmsBySearch() {
      const res = await fetchMovieBySearch(searchQuery);
      setFilmsBySearch(res.data.results);
    })();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    setSearchParams({ query: value });
    e.target.reset();
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {filmsBySearch.length > 0 ? (
        <FilmsList films={filmsBySearch} query={searchQuery} />
      ) : null}
    </div>
  );
};

export default Movies;
