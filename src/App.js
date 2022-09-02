import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './Redux/configStore';
import './style/App.css';
import Movies from './Pages/Movies';
import Movie from './components/Movie';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path=":id" element={<Movie />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
