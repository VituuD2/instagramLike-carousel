import React from 'react';
import Carousel from './Carousel';

// Importa todas as imagens da pasta
const importAll = (req) => req.keys().map(req);
const imagesSrc = importAll(require.context('./assets', false, /\.(png)$/));

const App = () => {
  return (
    <div className="App">
      <h1>Instagram Carousel tester</h1>
      <Carousel imagesSrc={imagesSrc} />
    </div>
  );
};

export default App;
