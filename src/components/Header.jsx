import React, { useRef } from "react";
import { Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { api, api_key } from "../api/api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";

const Header = () => {
  const movieName = useRef();
  const dispatch = useDispatch();

  const searchMovie = async () => {
    if (movieName.current.value !== "") {
      const res = await api.get(
        `search/movie?query=${movieName.current.value}&api_key=${api_key}`
      );
      dispatch(fetchMovies(res.data.results));
    } else {
      const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
  };
  return (
    <div className="sticky top-0">
      <Navbar fluid roun ded>
        <Navbar.Brand href="/">
          <Link to="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Code-Lab Movie Channel
            </span>
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <form>
            <div className="d-flex">
              <TextInput placeholder="Search......" ref={movieName} />
              <button
                type="button"
                onClick={() => searchMovie()}
                className="btn bg-dark text-white ms-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
