import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const MovieCart = ({ movie }) => {
  return (
    <div>
      <div>
        <Link to={`movie/detail/${movie.id}`}>
          <div className="">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {movie.overview}
              </p>
              <div>
                <span className="bg-black text-white p-2 rounded">
                  <i className="fa-solid fa-star text-warning me-2"></i>
                  {movie.vote_average}
                </span>
                <span className="mx-3 bg-black text-white p-2 rounded">
                  <i className="fa-regular fa-calendar-days me-2"></i>
                  {movie.release_date}
                </span>
              </div>
            </Card>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieCart;
