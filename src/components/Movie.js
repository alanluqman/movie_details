import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navigation from './navigation';
import '../style/Movie.css';

function Movie() {
  const { id } = useParams();
  const allMovies = useSelector((state) => state.movies);
  const movie = allMovies.find((element) => element.name === id);
  return (
    <div className="movie-holder">
      <Navigation />
      <div className="detail-holder">
        <div>
          <img className="poster" src={movie.image.original} alt="movie poster" />
        </div>
        <div>
          <h1 className="movie-name-detail">{movie.name}</h1>
          <div className="detailItems">
            <h2>Language :</h2>
            <p>{movie.language}</p>
            <h2>Rating :</h2>
            <p>{movie.rating.average}</p>
            <h2>Genres :</h2>
            <p>{(movie.genres).join(' , ')}</p>
            <h2>Summary :</h2>
            <p>{movie.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Movie.prototype = {
  name: PropTypes.string.isRequired,
};

export default Movie;
