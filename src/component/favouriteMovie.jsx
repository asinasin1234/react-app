import React from 'react';
import List from './List';

const FavouriteMovie = ({ movies }) => {
  return (
    <div>
      <h1>My Favourite Movies</h1>
      <List movies={movies} />
    </div>
  );
};
export default FavouriteMovie;