import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { List, ListItem } from './FilmsList.styled';

const FilmsList = ({ films, query }) => {
  return (
    <List>
      {films.map(film => (
        <ListItem key={film.id}>
          <Link to={`${film.id}`} state={{ from: `/movies?query=${query}` }}>
            {film.title ?? film.name}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  query: PropTypes.string.isRequired,
};

export default FilmsList;
