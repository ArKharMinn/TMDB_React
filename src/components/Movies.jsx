import React from "react";
import MovieCart from "./MovieCart";
import { useSelector } from "react-redux";

const Movies = () => {
  let movies = [];
  movies = useSelector((state) => state.movies.movies);

  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-2">
      {movies.length !== 0 ? (
        movies.map((movie) => <MovieCart key={movies.id} movie={movie} />)
      ) : (
        <h1 className="">Thre is no movies</h1>
      )}
    </div>
  );
};

export default Movies;
