import React from 'react'
import './App.css';

import Landing from './pages/Landing'
import Home from './pages/Home'

function App() {
  const name = localStorage.getItem('name');

  return (
    name ? <Home/> : <Landing/>
  );
}

export default App;
