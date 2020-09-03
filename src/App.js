import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/index'
import HomeHero from './views/HomeHero';

function App() {
  return (
    <Provider store = {store}>
        <div className="App">
          <HomeHero/>
        </div>
      </Provider>
  );
}

export default App;
