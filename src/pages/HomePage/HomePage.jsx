import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from '../../components/FilmsList/FilmsList.styled';
import { fetchPopularMovies } from '../.././components/api-services';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

   //useEffect(() => {
     //fetch('https://api.themoviedb.org/3/trending/all/day?api_key=6f17361e35711c6d99e819ce4497326d').then(res => res.json().then(res => setTrendingFilms(res.results)));
   //}, []);
  useEffect(() => {
    (async function getPopularMovies() {
      const res = await fetchPopularMovies();
      setTrendingFilms(res.data.results);
    })();
  }, []);


  return (
    <div>
    <h1>Trending today</h1>
    <List>
      {trendingFilms.map(film => <ListItem key={film.id}><Link to={`movies/${film.id}`}
                                                               state={{ from: '/' }}>{film.title ?? film.name}</Link>
      </ListItem>)}
    </List>
    </div>
  );
};

export default Home;