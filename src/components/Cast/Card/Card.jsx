import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ person }) => {
  return (
    <li>
      <img
        width="185"
        src={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
            : `https://ufolabs.net/data/attachments/0/261-ed89b82f7ab98db17d82ee9e15195971.jpg`
        }
        alt={person.original_name}
      />
      <h3>{person.original_name}</h3>
      <h5>{person.character}</h5>
    </li>
  );
};
Card.propTypes = {
  person: PropTypes.shape({
    profile_path: PropTypes.string,
    original_name: PropTypes.string,
    character: PropTypes.string,
  }),
};
