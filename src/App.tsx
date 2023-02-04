import React from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import HomePage from './components/home/homePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
