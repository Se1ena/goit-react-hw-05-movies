import React, {useEffect, useState} from "react";
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from '../api-services';
import {
  NavigationLink,
  InformationLink,
  GenreElement,
  Genres,
  Score,
  Overview,
  Poster,
  Title,
  Wrapper,
  WrapperInfo,
  WrapperDescription,
} from './FilmsDetails.styled';

const FilmsDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setFilmInfo] = useState(null);
  const location = useLocation();

  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    (async function getFilmById() {
      try {
        const res = await fetchMovieById(movieId);
        setFilmInfo(res.data);
      } catch {
      }
    })();
  }, [movieId]);

  if (!movieInfo) {
    return null;
  }

  const { poster_path, title, vote_average, overview, genres } = movieInfo;

  return (
    <div>
      <NavigationLink to={backLink}>&larr; Go back</NavigationLink>
      <Wrapper>
        <Poster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='' />
        <WrapperDescription>
          <Title>{title}</Title>
          <Score>User Score: {parseInt(vote_average * 10)}%</Score>
          <Overview>Overview</Overview>
          <p>{overview}</p>
          <Genres>Genres</Genres>
          <p>{genres.map(item => <GenreElement key={item.id}>{item.name}</GenreElement>)}</p>
        </WrapperDescription>
      </Wrapper>
      <WrapperInfo>
        <InformationLink to='cast' state={{ from: backLink }}>Cast</InformationLink>
        <InformationLink to='reviews' state={{ from: backLink }}>Reviews</InformationLink>
      </WrapperInfo>
      <Outlet />
    </div>
  );
};

export default FilmsDetails;