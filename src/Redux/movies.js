const GET_MOVIES = 'moviesdetails/movies/getMovies';

export default function getMovies(state = [], action) {
  switch (action.type) {
    case GET_MOVIES: return action.payload;
    default: return state;
  }
}

export const fetchMovies = (movies) => ({
  type: GET_MOVIES,
  payload: movies,
});
