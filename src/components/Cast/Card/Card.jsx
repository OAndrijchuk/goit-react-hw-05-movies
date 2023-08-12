import React from 'react';

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
      <h4>{person.original_name}</h4>
      <h4>{person.character}</h4>
    </li>
  );
};
