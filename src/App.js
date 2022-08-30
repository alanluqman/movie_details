import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './Redux/configStore';
import './style/App.css';
import Movies from './Pages/Movies';
import Navigation from './components/navigation';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Movies />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
