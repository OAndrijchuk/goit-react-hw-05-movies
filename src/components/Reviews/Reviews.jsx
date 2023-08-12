import { fethReviews } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams('movieId');
  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await fethReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error.masseg);
      }
    };
    getReviews();
  }, [movieId]);
  return reviews.length ? (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h2>
            Author:
            {` "${review.author}"`}
          </h2>
          <p>{review.content}</p>
          {}
        </li>
      ))}
    </ul>
  ) : (
    <h1>This movie do not have reviews yet!</h1>
  );
};
export default Reviews;
