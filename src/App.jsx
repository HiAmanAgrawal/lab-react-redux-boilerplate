import React from 'react';
import { useState } from 'react';
import LikeCounter from '../redux/LikeCounter';
import './App.css'; 

function App() {

  return (
    <div className="App">
      <LikeCounter />
    </div>
  );
}

export default App;
