import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { api, api_key } from "../api/api";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [movie, getMovie] = useState("");

  const detail = async () => {
    const res = await api.get(`/movie/${id}?api_key=${api_key}`);
    getMovie(res.data);
  };
  useEffect(() => {
    detail();
  }, []);
  return (
    <div>
      <div className="container-lg">
        <Link to="/">
          <span className="bg-black p-2 rounded text-white">
            <i className="fa-solid fa-arrow-left me-2"></i>Back
          </span>
        </Link>

        <div className=" my-3">
          <Card
            className=""
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
              <span className=" bg-black text-white p-2 rounded">
                <i className="fa-solid fa-users me-2"></i>
                {movie.vote_count}
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Detail;
