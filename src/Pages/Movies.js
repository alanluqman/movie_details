import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../Redux/movies';

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
    <ul>
      {movies.map((movie) => <li key={movie.id}><Link to={`/${movie.name}`}>{movie.name}</Link></li>)}
    </ul>
  );
}

export default Movies;
