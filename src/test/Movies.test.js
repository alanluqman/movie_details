import {
  render, screen, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Redux/configStore';
import Movies from '../Pages/Movies';

describe('Movies page component', () => {
  afterEach(() => {
    act(() => store.dispatch({
      type: 'moviesdetails/movies/getMovies',
      payload: [],
    }));
  });
  // check for Movie List title render
  it('check for Movie List title render', async () => {
    render(
      <Provider store={store}>
        <Movies />
      </Provider>,
    );
    expect(screen.getByText('Movie List')).toMatchSnapshot();
  });
  // check for search box render
  it('check for search box render', async () => {
    render(
      <Provider store={store}>
        <Movies />
      </Provider>,
    );
    expect(screen.getByPlaceholderText('Search...')).toMatchSnapshot();
  });
});
