/* eslint-disable react/jsx-one-expression-per-line */
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../Redux/movies';
import '../style/Movies.css';

function Movies() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const api = 'https://api.tvmaze.com/shows';
  useEffect(() => async () => {
    if (movies.length === 0) {
      const movieList = await axios.get(api).then((Response) => Response.data);
      dispatch(fetchMovies(movieList));
    }
  }, []);

  return (
    <div className="movieListHolder">
      <div className="header">
        <h1>Movie List</h1>
        <input type={Text} className="search-box" placeholder="Search..." />
      </div>
      <ul className="moviesDisplay">
        {
        movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/${movie.name}`}>
              <img className="poster" src={movie.image.medium} alt="poster" />
              <p className="movie-name">{movie.name}</p>
            </Link>
          </li>
        ))
        }
      </ul>
      {/* <Link to={`/${movie.name}`}>{movie.name}</Link> */}
    </div>
  );
}

export default Movies;
