import React from 'react';
import './style/App.css';
import './awesome6/css/all.css'
import Carousel from './Carousel';

// Importa todas as imagens da pasta
const importAll = (req) => req.keys().map(req);
const imagesSrc = importAll(require.context('./assets', false, /\.(png)$/));

const App = () => {
  return (
    <div className="App">
      <h1> <i class="fab fa-instagram"></i> Carousel tester </h1>
      <Carousel imagesSrc={imagesSrc} />
    </div>
  );
};

export default App;
