import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByMovie } from '../api-services';
import { AuthorName, ListItem } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState(null);

  useEffect(() => {
    (async function getReviewsByFilm() {
      const res = await fetchReviewsByMovie(movieId);
      setReviewsInfo(res.data.results);
    })();
  }, [movieId]);

  if (!reviewsInfo) {
    return null;
  }
  return (
    reviewsInfo.length > 0 ? (<ul>
      {reviewsInfo.map(({ author, content }, idx) => (
        <ListItem key={idx}>
          <AuthorName>{author}</AuthorName>
          <p>{content}</p>
        </ListItem>))}
    </ul>) : <p>There is no reviews for this Film:(</p>
  );
};

export default Reviews;