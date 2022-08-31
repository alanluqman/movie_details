import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navigation from './navigation';

function Movie() {
  const { id } = useParams();
  const allMovies = useSelector((state) => state.movies);
  const movie = allMovies.find((element) => element.name === id);
  return (
    <div>
      <Navigation />
      <img src={movie.image.medium} alt="movie poster" />
      <h2>{movie.name}</h2>
      <h3>
        Language :
        {movie.language}
      </h3>
      <h3>
        Rating :
        {movie.rating.average}
      </h3>
      <h3>
        Genres :
        {(movie.genres).join(' , ')}
      </h3>
      <div>
        <h3>Summary :</h3>
        {movie.summary}
      </div>
    </div>
  );
}

Movie.prototype = {
  name: PropTypes.string.isRequired,
};

export default Movie;
